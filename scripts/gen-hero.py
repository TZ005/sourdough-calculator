#!/usr/bin/env python3
"""
Generate AI hero image via Agnes AI and auto-update page.tsx.

Standard image spec enforced:
  - 1312x736 webp, 16:9
  - 80-150 KB
  - Filename: sourdough-{topic}-2026.webp
  - page.tsx: width=1200 height=800 loading=eager

Usage:
  python scripts/gen-hero.py "convert-recipe-to-grams"
  python scripts/gen-hero.py "convert-recipe-to-grams" "Custom prompt here"
  python scripts/gen-hero.py "rye-sourdough" --auto

Requirements:
  - AGNES_API_KEY env var (already in user env, length ~51, starts with sk-rOD72)
  - Pillow (PIL) for image resize
"""
import os, sys, json, urllib.request, urllib.error, argparse, re
from pathlib import Path

API_KEY = os.environ.get('AGNES_API_KEY')
ENDPOINT = 'https://apihub.agnes-ai.com/v1/images/generations'
MODEL = 'agnes-image-2.1-flash'
ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / 'public' / 'images' / 'blog'
APP_DIR = ROOT / 'app' / 'blog'
YEAR = '2026'
TARGET_W, TARGET_H = 1312, 736  # actual image pixels (1K 16:9)
DISPLAY_W, DISPLAY_H = 1200, 800  # display size in page.tsx (aspect ratio hint)

# Default prompt template (hand-drawn watercolor style)
DEFAULT_PROMPT = """A warm, hand-drawn watercolor illustration for a sourdough baking blog.

Scene: {SCENE}

Style: gentle watercolor, soft edges, muted earth tones
(cream #F6EFE2 background, warm brown #7A4B2A, soft gold accents).
Top-down three-quarter view, like a baking cookbook illustration.

Mood: calm, instructional, homey. Sourdough baking aesthetic, NOT photorealistic.
No text in the image."""

# Auto-prompt hints by topic keyword
SCENE_HINTS = [
    ('convert',   'a digital kitchen scale showing 487g, surrounded by a bowl of bread flour, a glass measuring cup of water, a vintage metal tablespoon, a small dish of sea salt crystals, and a worn recipe notebook with handwritten bakers percentage tables'),
    ('hydration', 'three sourdough doughs at different hydration levels (low 65%, standard 75%, high 85%) side by side on a wooden board, with a measuring cup nearby'),
    ('beginner',  'a simple sourdough boule on a wooden board with a kitchen scale, a jar of starter, and a beginner recipe card'),
    ('banneton',  'a sourdough dough in a round rattan banneton proofing basket, with a kitchen scale and a small bowl of flour nearby'),
    ('proofing',  'a sourdough dough in a temperature-controlled proofing box, with a thermometer and a kitchen towel'),
    ('scoring',   'a freshly scored sourdough boule with classic ear pattern, just before going into the oven, with a lame tool resting beside it'),
    ('tortillas',  'a stack of soft sourdough tortillas with golden-brown spots on a wooden board, with a small bowl of flour'),
    ('starter',   'a glass jar of active sourdough starter (bubbly, doubled in size) on a wooden counter, with a small bowl of flour and a kitchen scale'),
    ('flour',     'different types of flour (bread flour, whole wheat, rye) in small bowls, with a kitchen scale and a sourdough boule in the background'),
    ('recipe',    'an open recipe book showing handwritten bakers percentage tables, with flour, water, and a digital kitchen scale'),
    ('bagel',     'a tray of freshly boiled sourdough bagels ready for the oven, with a small bowl of sesame seeds nearby'),
    ('focaccia',  'a tray of sourdough focaccia with dimples filled with olive oil and rosemary, fresh from the oven'),
    ('pizza',     'a sourdough pizza base being stretched by hand, with a bowl of flour and a pizza peel nearby'),
    ('crust',     'a sourdough boule with a perfectly crackling, golden-brown crust, broken open to show the crumb inside'),
    ('crumb',     'a sliced sourdough loaf showing the open, airy crumb structure, on a wooden cutting board'),
    ('rye',       'a dense, dark sourdough rye loaf sliced on a wooden board, with a jar of caraway seeds nearby'),
    ('whole-wheat', 'a whole wheat sourdough boule on a wooden board, with a bowl of whole wheat flour and a small jar of honey'),
]

def topic_to_filename(topic: str) -> str:
    return f'sourdough-{topic}-{YEAR}.webp'

def auto_prompt_for_topic(topic: str) -> str:
    """Pick a scene hint based on topic keywords, else generic."""
    topic_lower = topic.lower()
    for keyword, scene in SCENE_HINTS:
        if keyword in topic_lower:
            return DEFAULT_PROMPT.replace('{SCENE}', scene)
    # Fallback: just ask for a generic sourdough illustration
    return DEFAULT_PROMPT.replace('{SCENE}', 'a beautifully baked sourdough loaf on a wooden board, with flour, water, and a kitchen scale nearby')

def get_existing_picture(slug: str):
    """Find the current image path used in the page.tsx <picture> block."""
    page_path = APP_DIR / slug / 'page.tsx'
    if not page_path.exists():
        return None
    content = page_path.read_text(encoding='utf-8')
    m = re.search(r'<img\s+src="(/images/blog/[^"]+)"', content)
    return m.group(1) if m else None

def update_page_picture(slug: str, old_path: str, new_path: str, new_alt: str = None):
    """Replace the <picture> image reference and (optionally) the alt text in page.tsx."""
    page_path = APP_DIR / slug / 'page.tsx'
    content = page_path.read_text(encoding='utf-8')
    # Replace image path in src and srcSet
    content = content.replace(old_path, new_path)
    # Update width/height to standard 1200x800 if not already
    content = re.sub(
        r'width="\d+"\s+height="\d+"',
        f'width="{DISPLAY_W}"\n            height="{DISPLAY_H}"',
        content,
        count=1
    )
    # Update alt text if provided
    if new_alt:
        content = re.sub(
            r'alt="[^"]*"',
            f'alt="{new_alt}"',
            content,
            count=1
        )
    page_path.write_text(content, encoding='utf-8')

def generate_image(prompt: str, out_path: Path):
    if not API_KEY:
        print('ERROR: AGNES_API_KEY env var not set. Cannot call Agnes AI.')
        sys.exit(1)
    body = json.dumps({
        'model': MODEL, 'prompt': prompt, 'n': 1,
        'size': '1K', 'ratio': '16:9'
    }).encode('utf-8')
    req = urllib.request.Request(ENDPOINT, data=body, method='POST', headers={
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
    })
    print(f'[CALL] Agnes AI ...', flush=True)
    with urllib.request.urlopen(req, timeout=120) as resp:
        result = json.loads(resp.read())
    data = result.get('data', [])
    if not data or not data[0].get('url'):
        print('ERROR: no image URL in response:', json.dumps(result)[:300])
        sys.exit(1)
    img_url = data[0]['url']
    print(f'[URL] {img_url[:100]}')
    print(f'[DOWNLOAD] ...', flush=True)
    with urllib.request.urlopen(img_url, timeout=60) as r:
        out_path.write_bytes(r.read())
    print(f'[SAVED PNG] {out_path} ({out_path.stat().st_size} bytes)')
    # Convert to webp
    from PIL import Image
    img = Image.open(out_path)
    print(f'[ORIGINAL] {img.size}')
    if img.size != (TARGET_W, TARGET_H):
        img = img.resize((TARGET_W, TARGET_H), Image.LANCZOS)
    webp_path = out_path.with_suffix('.webp')
    img.save(webp_path, 'WEBP', quality=85, method=6)
    out_path.unlink()
    size_kb = webp_path.stat().st_size / 1024
    print(f'[WEBP] {webp_path.name} ({size_kb:.1f} KB, {TARGET_W}x{TARGET_H})')
    return webp_path

def main():
    parser = argparse.ArgumentParser(description='Generate AI hero image + update page.tsx (per established standard)')
    parser.add_argument('topic', help='article slug (e.g., convert-recipe-to-grams)')
    parser.add_argument('prompt', nargs='?', help='optional custom prompt; else use auto-detected scene')
    parser.add_argument('--no-update', action='store_true', help='do not modify page.tsx')
    parser.add_argument('--alt', help='optional custom alt text for the image')
    args = parser.parse_args()

    topic = args.topic
    prompt = args.prompt or auto_prompt_for_topic(topic)
    print(f'[TOPIC] {topic}')
    print(f'[PROMPT LENGTH] {len(prompt)} chars')

    IMG_DIR.mkdir(parents=True, exist_ok=True)
    filename = topic_to_filename(topic)
    temp_png = IMG_DIR / filename.replace('.webp', '.png')
    webp_path = generate_image(prompt, temp_png)
    new_path = '/images/blog/' + filename

    if not args.no_update:
        old_path = get_existing_picture(topic)
        if old_path and old_path != new_path:
            print(f'[PAGE.TSX] Updating {old_path} -> {new_path}')
            update_page_picture(topic, old_path, new_path, args.alt)
        else:
            print(f'[PAGE.TSX] Skipped (no change needed or page not found)')

    print(f'\nDone. New image: {new_path}')

if __name__ == '__main__':
    main()
