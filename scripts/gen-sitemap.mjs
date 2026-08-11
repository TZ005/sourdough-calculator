// Standalone sitemap generator for local dev / prebuild.
// Source of truth: app/_lib/posts.ts (shared with app/sitemap.ts)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_TS = path.join(ROOT, "app", "_lib", "posts.ts");
const OUT_PATH = path.join(ROOT, "public", "sitemap.xml");
const BASE = "https://sourdough-hydrationcalculator.com";

const NEW_ARTICLE_DATES = {
  "best-sourdough-banneton": "2026-08-04",
  "best-sourdough-proofing-box": "2026-08-04",
  "how-to-score-sourdough-bread": "2026-08-04",
  "best-sourdough-starter-kit": "2026-08-08",
  "best-sourdough-tortillas": "2026-08-11",
};
const DEFAULT_LASTMOD = "2026-08-01";

const postsTs = fs.readFileSync(POSTS_TS, "utf-8");
const slugMatches = [...postsTs.matchAll(/slug:\s*"([^"]+)"/g)];
const slugs = slugMatches.map((m) => m[1]);
console.log(`Found ${slugs.length} article slugs`);

const TODAY = "2026-08-11";
const staticPages = [
  { slug: "",       freq: "weekly",  priority: "1.0", lastmod: TODAY },
  { slug: "blog",   freq: "weekly",  priority: "0.8", lastmod: TODAY },
  { slug: "about",  freq: "monthly", priority: "0.5", lastmod: "2026-07-21" },
  { slug: "contact",freq:"monthly", priority: "0.5", lastmod: "2026-07-21" },
  { slug: "privacy",freq: "yearly",  priority: "0.3", lastmod: "2026-07-21" },
  { slug: "terms",  freq: "yearly",  priority: "0.3", lastmod: "2026-07-21" },
  { slug: "embed",  freq: "monthly", priority: "0.5", lastmod: "2026-07-21" },
];

const lines = ["<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
                "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">"];

for (const sp of staticPages) {
  const url = sp.slug ? `${BASE}/${sp.slug}/` : `${BASE}/`;
  lines.push("  <url>");
  lines.push(`    <loc>${url}</loc>`);
  lines.push(`    <lastmod>${sp.lastmod}</lastmod>`);
  lines.push(`    <changefreq>${sp.freq}</changefreq>`);
  lines.push(`    <priority>${sp.priority}</priority>`);
  lines.push("  </url>");
}

for (const slug of slugs) {
  const url = `${BASE}/blog/${slug}/`;
  const lastmod = NEW_ARTICLE_DATES[slug] || DEFAULT_LASTMOD;
  lines.push("  <url>");
  lines.push(`    <loc>${url}</loc>`);
  lines.push(`    <lastmod>${lastmod}</lastmod>`);
  lines.push("    <changefreq>monthly</changefreq>");
  lines.push("    <priority>0.7</priority>");
  lines.push("  </url>");
}

lines.push("</urlset>");

const xml = lines.join("\n") + "\n";
const xmlCRLF = xml.replace(/\n/g, "\r\n");
fs.writeFileSync(OUT_PATH, xmlCRLF, "utf-8");
console.log(`Wrote ${OUT_PATH}: ${(xmlCRLF.length / 1024).toFixed(1)} KB, ${slugs.length + staticPages.length} URLs`);
