---
title: "How I shipped a free Next.js calculator with Amazon affiliate links — and what 180 days of tracking taught me"
description: "Twelve days into a free sourdough hydration calculator monetized through Amazon Associates, the data shows 0 clicks and an average position of 43.3. Here is what is actually working, what I should have done on day one, and what surprised me most about Cloudflare's defaults in 2026."
tags: [nextjs, seo, amazon, indie]
cover_image: https://sourdough-hydrationcalculator.com/sourdough-baking-tools.png
canonical_url: https://sourdough-hydrationcalculator.com/blog/how-much-starter-to-use/
published: false
---

Twelve days ago, I shipped a free tool at [sourdough-hydrationcalculator.com](https://sourdough-hydrationcalculator.com/). The plan in theory was simple: a useful calculator for home bakers, monetized through Amazon affiliate links. No signup, no database, no server.

What I did not plan for was the clock. Amazon Associates closes new accounts if they do not hit three qualifying sales within 180 days of sign-up. So somewhere between curiosity and a deploy script, my hobby project became a small business with a deadline.

This is not a "I made money" post. The honest number is zero sales so far. What I can share is everything I learned about building a Next.js calculator, wiring affiliate links correctly, and instrumenting the early data so I can see what is actually working.

## The Next.js choice

The calculator does exactly one thing: take a flour weight and return water, salt, and starter amounts. It also shows a hydration chart from 50% to 100%.

I considered three stacks:

- A React SPA with a backend
- Hugo or Astro, content-first
- Next.js with static export

Static export won because the SEO value of content lives with the marketing, and content marketing for niche calculators is mostly blog posts, FAQs, and comparison tables. Static export lets every blog post be server-rendered HTML, which is what Google prefers and what AI search tools can read reliably.

The build is `next build` with `output: export`, deployed to Cloudflare Pages on every commit to `main`. There is no server, no runtime cost, no auth flow to maintain. That choice reflects a bet: most of my real work over the next 180 days will not be writing code, it will be writing articles and watching what ranks.

## The 180-day Amazon clock

This is the part I did not appreciate when I started.

Amazon's Associates Terms require three qualifying sales within 180 days of sign-up. If you do not hit that threshold, the account is closed. There is no extension, and re-applying is harder than the first time.

Two practical implications.

First, the clock starts the moment you sign up, not when traffic arrives. If you spend 90 days building before launching, you have 90 days of runway left, not 180.

Second, the model is not "monetize after you have an audience." It is "monetize from page one." Your first six months are paid existence, with traffic as the cost of admission.

If you want optionality, you can build the site without affiliate links for the first month, do real SEO work, then add Amazon once you have a page-one ranking to point at. That gives you the freedom to launch earlier.

I shipped the calculator with affiliate links already in place. I would not do that again.

## How I structured affiliate links

Because Amazon is strict about disclosure and Google penalizes schemes, I did four things that I think are non-negotiable.

First, a single disclosure prominently visible on every page that has an affiliate link. The exact sentence, "As an Amazon Associate, we earn from qualifying purchases," is required and cannot be edited. Add a small note that lowers anxiety, such as "Prices stay the same for you." Most readers who see Amazon links wonder whether they will pay more if they use yours. They will not. That sentence is worth more than it sounds.

Second, every Amazon link carries `rel="sponsored nofollow noopener noreferrer"`. The `sponsored` value is the Google-required attribute for paid placements. `nofollow` keeps link equity inside the site. `noopener noreferrer` is basic security.

Third, no more than two affiliate links per blog post. A page that recommends six kitchen tools reads like a shopping list. A page that recommends the two tools relevant to the article reads like advice. Google's "thin affiliate" filter targets the first pattern, and so do readers.

Fourth, links go only on pages where the product genuinely fits the article. Recipes and explainers that never benefited from a product do not get a link.

## What twelve days of data actually shows

From Google Search Console, twelve days after launch:

- 24 pages are tracked
- 10 are indexed
- 14 are not yet indexed
- Average position across all impressions: 43.3
- Clicks: 0

The 0 clicks and 43.3 average are not failures. They mean the site is on page four or five of Google for whatever queries it ranks. No human clicks through page four.

The reason for the slow start turned out to be infrastructure, not content. Cloudflare's Bot Fight Mode was quietly serving Googlebot an HTML 403 page where browsers saw a sitemap. One toggle in Cloudflare's Security → Bots fixed it.

This is the part I want to flag for anyone shipping a free site in 2026. Cloudflare's default protections now actively block verified search engine crawlers, even ones that have been verified for years. If your new site has 0 clicks and a low impression count, check this before you spend hours on content audits.

## Three things I would do differently

**Add `llms.txt` on day one, not day thirty.** ChatGPT, Perplexity, and Google's AI Overviews crawl the web looking for citation candidates. `llms.txt` is a small plain-text file at the root that says, "Here is what this site is, here are its most citable pages." It costs about twenty minutes to write. If you have any hope of being cited by an AI answer in the next six months, the file is a cheap edge.

**Use GSC's URL Inspection to request indexing, rather than wait for the sitemap.** Google Search Console has a "Request Indexing" button when you paste a URL into the URL Inspection tool. It is faster than waiting for the sitemap to be processed, which can take one to three days. There is a daily limit of about ten requests per site, so for a new site with thirty pages, request the five most important pages on day one, then the next five the next day, and so on.

**Do not change settings you do not understand.** This one is mostly a self-note. I once changed emoji icons to text badges because the emoji looked broken in some browsers. The user (me, in this case) wanted emoji back. The change wasted two deploys and added no value. The lesson for shipping early is to leave visuals alone once they work. Optimize when there is a real signal that they need to change.

## What comes next

The next four weeks:

- Request indexing for the six articles that were crawled on the old version of the site
- Wait for Google to re-evaluate with the new schema, FAQ, and citation changes in place
- Publish five to ten long-tail articles that match specific home-baking queries
- Measure clicks, not impressions

If the calculator ever does its job, the result will be a small number of Amazon sales, a steady stream of home bakers finding the hydration ratio they actually need, and a real-time lesson on what AI-era SEO looks like in 2026.

For now, the project is in its quiet phase. The tool is at [sourdough-hydrationcalculator.com](https://sourdough-hydrationcalculator.com/), and the only thing I am working on is making sure Google can see it.

If you're shipping a similar small site, the early moves that mattered most were the boring ones: real schema on real pages, real citations on real articles, a sitemap that does not lie. The flashy stuff is optional. The plumbing is not.