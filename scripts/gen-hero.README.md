# gen-hero.py

Auto-generate article hero image via Agnes AI, follow established sourdough-calculator
image standard, and update page.tsx.

## Image Standard (matches existing 6 AI images)

| Property       | Value                                          |
|----------------|------------------------------------------------|
| Dimensions     | 1312 x 736 webp (16:9)                          |
| File size      | 80-150 KB                                       |
| Filename       | `sourdough-{topic-slug}-2026.webp`              |
| Page.tsx       | `width="1200" height="800" loading="eager"`    |
| API model      | `agnes-image-2.1-flash`, `size=1K, ratio=16:9`|
| Style          | Hand-drawn watercolor, sourdough baking aesthetic|

## Usage

```bash
# 1. Auto-detect scene from topic (recommended)
python scripts/gen-hero.py "convert-recipe-to-grams"

# 2. Override with custom prompt
python scripts/gen-hero.py "convert-recipe-to-grams" "A custom prompt for Agnes AI..."

# 3. Skip page.tsx update (just generate the file)
python scripts/gen-hero.py "new-topic" --no-update

# 4. Provide alt text
python scripts/gen-hero.py "new-topic" --alt "A descriptive alt text for SEO and accessibility"
```

## Auto Scene Detection

The script picks a scene hint based on keywords in the topic slug:

| Keyword    | Scene                                                    |
|------------|----------------------------------------------------------|
| `convert`  | Kitchen scale, flour, water, salt, recipe notebook       |
| `hydration`| Three doughs at 65/75/85% hydration                     |
| `banneton` | Sourdough in rattan proofing basket                     |
| `proofing` | Sourdough in temperature-controlled box                  |
| `scoring`  | Freshly scored sourdough with lame tool                  |
| `tortillas` | Stack of soft sourdough tortillas                      |
| `starter`  | Glass jar of active bubbly starter                       |
| `flour`    | Different flour types in small bowls                     |
| `bagel`    | Boiled bagels ready for oven                             |
| `focaccia` | Sourdough focaccia with rosemary and oil                |
| `pizza`    | Pizza base being stretched by hand                       |
| `rye`      | Dark sourdough rye loaf with caraway seeds               |
| `crumb`    | Sliced loaf showing open crumb structure                |
| `crust`    | Loaf with crackling golden-brown crust                  |
| `whole-wheat` | Whole wheat sourdough with flour bowl               |

Add new keywords to `SCENE_HINTS` in the script as needed.

## Requirements

- `AGNES_API_KEY` env var set (already in your user env)
- `Pillow` Python library (PIL)

## Files Modified

- `public/images/blog/sourdough-{topic}-2026.webp` (new or overwritten)
- `app/blog/{topic}/page.tsx` (updates `<img src>` and width/height)

## Examples

```bash
# Generate hydration for beginners hero
python scripts/gen-hero.py "sourdough-hydration-for-beginners"

# Generate rye sourdough article hero
python scripts/gen-hero.py "rye-sourdough"

# Generate with custom prompt + alt
python scripts/gen-hero.py "bagels" `
$content += "--alt \"A tray of freshly boiled sourdough bagels ready for the oven\""
