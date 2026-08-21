---
title: "How I built a sourdough hydration calculator with Next.js 14 and Cloudflare Pages"
published: true
description: "Six months ago I got tired of doing hydration math on a napkin. So I built SourdoughCalc - a free calculator with 34 SEO-friendly articles."
canonical_url: https://sourdough-hydrationcalculator.com/
tags: nextjs, cloudflare, seo, showdev, webdev
cover_image: https://sourdough-hydrationcalculator.com/sourdough-baking-tools.png
---

Six months ago I got tired of doing hydration math on a napkin every time I baked sourdough at home. So I built [SourdoughCalc](https://sourdough-hydrationcalculator.com) - a free hydration calculator with 34 SEO-friendly articles. Here is what I learned shipping a zero-cost indie project.

## The Stack

- **Next.js 14** App Router (TypeScript + Tailwind)
- **Cloudflare Pages** for hosting ($0/mo, global CDN, sub-second TTFB)
- **Playwright** for e2e tests
- **34 hand-written articles** targeting sourdough keywords

Total monthly cost: **$0**.

## The SEO Strategy That Worked

I did not try to rank for "sourdough" (impossible for a new site). Instead I targeted long-tail:

| Keyword | Monthly Volume | Position |
|---|---|---|
| "65% hydration sourdough" | ~7,200 | Top 5 |
| "sourdough hydration calculator" | ~4,500 | Top 3 |
| "high vs low hydration sourdough" | ~2,000 | Top 10 |

Every article follows the same template:

1. Answer the question in the first 100 words
2. Add a FAQ schema block (FAQPage JSON-LD)
3. Link to 3-5 other articles in the cluster

## What I Would Do Differently

- **GSC indexing speed**: Do not batch-submit. Submit URL individually for faster pickup.
- **FAQ schema**: Mandatory. Google shows FAQ rich snippets, which doubles CTR.
- **Comparison tables**: I added 3-column comparison tables in 6 articles. They get featured snippets.

## The Real Win

The calculator is the hook. **34 articles are the asset.** SEO compounds. Six months in, I am getting 5x more organic traffic than the launch day spike ever was.

## Try It

Free, no signup: [sourdough-hydrationcalculator.com](https://sourdough-hydrationcalculator.com)

If you have questions about the SEO or the build, drop a comment. I will answer.
