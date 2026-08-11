import type { MetadataRoute } from "next";
import { getPostsForPage, TOTAL_PAGES, PAGE_SIZE } from "./_lib/posts";

const BASE = "https://sourdough-hydrationcalculator.com";

// Newer articles get their actual creation date; rest get the original lastmod
const NEW_ARTICLE_DATES: Record<string, string> = {
  "best-sourdough-banneton": "2026-08-04",
  "best-sourdough-proofing-box": "2026-08-04",
  "how-to-score-sourdough-bread": "2026-08-04",
  "best-sourdough-starter-kit": "2026-08-08",
  "best-sourdough-tortillas": "2026-08-11",
};

const DEFAULT_LASTMOD = "2026-08-01";

function getAllPosts() {
  const all: Array<{ slug: string; title: string; readTime: string }> = [];
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    all.push(...getPostsForPage(i));
  }
  return all;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,            lastModified: "2026-08-11", changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/blog`,        lastModified: "2026-08-11", changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/about`,      lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`,    lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`,    lastModified: "2026-07-21", changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,      lastModified: "2026-07-21", changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/embed`,      lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.5 },
  ];

  // Article pages (deduplicated by slug since pagination is 10/page)
  const articlePages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: NEW_ARTICLE_DATES[p.slug] || DEFAULT_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
