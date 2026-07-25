const fs = require('fs');
const pathMod = require('path');

const contentFile = process.argv[2];
const slug = process.argv[3];

const dir = pathMod.dirname(contentFile);
const metaPath = pathMod.join(dir, slug + '-meta.json');
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const articleBody = fs.readFileSync(contentFile, 'utf8').trim();

const url = 'https://sourdough-hydrationcalculator.com/blog/' + slug + '/';
const schemaObj = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": meta.title,
  "description": meta.description,
  "image": "https://sourdough-hydrationcalculator.com/images/blog/" + slug + ".png",
  "author": { "@type": "Organization", "name": "SourdoughCalc", "url": "https://sourdough-hydrationcalculator.com/" },
  "publisher": {
    "@type": "Organization",
    "name": "SourdoughCalc",
    "logo": { "@type": "ImageObject", "url": "https://sourdough-hydrationcalculator.com/og-image.png", "width": 1200, "height": 630 }
  },
  "url": url,
  "mainEntityOfPage": { "@type": "WebPage", "@id": url },
  "datePublished": "2026-07-25",
  "dateModified": "2026-07-25"
};
const schemaJson = JSON.stringify(schemaObj);

const fileLines = [
  'import Link from "next/link";',
  '',
  '',
  '',
  'export const metadata = {',
  '  title: ' + JSON.stringify(meta.title) + ',',
  '  description: ' + JSON.stringify(meta.description) + ',',
  '  keywords: ' + JSON.stringify(meta.keywords) + ',',
  '};',
  '',
  'export default function BlogPost() {',
  '  ',
  '',
  '  return (',
  '    ',
  '      ',
  '    <>',
  '      {/* Schema.org: Article */}',
  '      ',
  '      ',
  '      <script',
  '        type="application/ld+json"',
  '        dangerouslySetInnerHTML={{',
  '          __html: ' + schemaJson,
  '        }}',
  '      />',
  '',
  '      ' + articleBody,
  '',
  '      <section className="mt-12 pt-8 border-t border-brand-tan">',
  '        <h2 className="text-2xl mb-4">Related Articles</h2>',
  '        <ul className="space-y-2">',
  '            <li><Link href="/blog/sourdough-starter/" className="text-brand-brown font-medium">How to Make Sourdough Starter →</Link></li>',
  '            <li><Link href="/blog/best-flour/" className="text-brand-brown font-medium">Best Flour for Sourdough →</Link></li>',
  '            <li><Link href="/blog/what-is-hydration/" className="text-brand-brown font-medium">What is Sourdough Hydration? →</Link></li>',
  '        </ul>',
  '      </section>',
  '    </>',
  '  );',
  '}'
];
const content = fileLines.join('\n') + '\n';

const baseDir = process.env.BASE_DIR || process.cwd();
const outPath = pathMod.join(baseDir, 'app', 'blog', slug, 'page.jsx');
fs.mkdirSync(pathMod.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, content);
console.log('Written:', outPath, 'size:', content.length);