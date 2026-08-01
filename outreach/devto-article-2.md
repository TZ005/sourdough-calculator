---
title: "What an SEO Audit Taught Me About Shipping a Next.js Static Site"
description: "I ran an SEO audit on my Next.js 14 static site and found 20+ issues. Here is exactly what I fixed, what broke, and what actually mattered."
tags: [nextjs, seo, static, cloudflarepages]
cover_image: https://sourdough-hydrationcalculator.com/sourdough-baking-tools.png
published: false
---

Last month I shipped a free tool called [Sourdough Hydration Calculator](https://sourdough-hydrationcalculator.com/). It is a Next.js 14 static export hosted on Cloudflare Pages. No database, no signup, no server. Just a calculator, a chart, and a bunch of blog posts.

Then I ran an SEO audit on it. The score was not terrible, but the report was full of small warnings: missing favicon, descriptions too long, keywords too long, no canonical on blog listing pages, no author markup, headings that jumped levels, and a few citations that did not exist yet.

None of these issues were going to kill the site. Together, though, they made the whole thing feel unfinished. So I fixed them one by one. This post is what I learned, including the mistakes I made along the way.

## Start with the boring metadata

The first round of fixes was pure housekeeping:

- Meta descriptions under 160 characters
- Titles under 60 characters
- Keywords meta under 100 characters (yes, Google ignores it, but Bing still reads it)
- A real favicon in SVG, 32px PNG, and 180px PNG
- Canonical tags on every page, including paginated blog pages
- Open Graph and Twitter cards with a consistent site name

The pattern that worked for every blog post was simple:

```js
export const metadata = {
  title: "Sourdough Bulk Fermentation: Timing and Temperature",
  description: "When to end sourdough bulk fermentation: 5 visual cues, temperature timing, and common mistakes.",
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/bulk-fermentation/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/bulk-fermentation/",
  },
};
```

Nothing clever. The audit score moved from warnings to clean because the page finally said the same thing everywhere: this is one page, this is its name, this is what it is about.

## Remove fake trust signals

My first version of the homepage included structured data with a rating:

```json
{
  "@type": "SoftwareApplication",
  "name": "SourdoughCalc",
  "aggregateRating": {
    "ratingValue": "4.8",
    "ratingCount": "127"
  }
}
```

I had no real reviews behind those numbers. That is the kind of thing Google can penalize as deceptive, and it is not worth the risk. I deleted the aggregate rating and kept the rest of the schema. If we ever collect real reviews, we can add them back honestly.

## Broken images hide in plain sight

The audit did not find this, but a simple script did: 19 blog posts referenced PNG hero images that did not exist. The `<picture>` element pointed to a WebP source, so modern browsers never requested the PNG. The page looked fine.

The problem was structured data. Article schema pointed to the missing PNG, which meant search engines and AI crawlers were told to look at an image that returned 404.

The fix was mechanical:

```js
image: "/images/blog/bulk-fermentation.webp"
```

Lesson: test the URLs that only machines read, not just the ones humans see.

## My sitemap broke in a boring way

I wanted to update every `<lastmod>` in the sitemap to today's date. I wrote a regex replacement in PowerShell and pushed it without looking at the output carefully enough.

The replacement produced this:

```xml
<loc>https://sourdough-hydrationcalculator.com/blog/...</loc>
$12026-08-01</lastmod>
```

Every single lastmod lost its opening tag and gained a literal `$1`. The file was still deployed. Nothing crashed. It just became invalid, quietly.

The lesson is obvious in hindsight: after any batch edit, parse the file, count the records, and print a sample. I now validate the sitemap with an XML parser before every deploy.

## Structured data is not just for articles

Blog posts already had Article schema. The blog listing page had none. So I added a Blog entity with author, publisher, dateModified, and a list of the posts on that page:

```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Sourdough Baking Blog",
  "url": "https://sourdough-hydrationcalculator.com/blog/",
  "author": {
    "@type": "Organization",
    "name": "SourdoughCalc",
    "url": "https://sourdough-hydrationcalculator.com/"
  },
  "dateModified": "2026-08-01"
}
```

The same page also needed a byline. Anonymous content is cited less, and the fix was one line: `By SourdoughCalc Team`. We did not invent a fake person; an honest team attribution is enough.

## Headings should not jump levels

The audit complained about a heading jump from H2 to H4. The culprit was the footer: it used `<h4>` for column titles. On article pages that was fine, but on listing pages with only H1 and H2, the footer created a skipped level.

Changing four footer headings from `h4` to `h3` fixed the whole site:

```html
<h3 class="text-brand-wheat mb-3">Quick Links</h3>
```

Small change, site-wide effect.

## Citations helped more than I expected

The audit kept saying "No citations or quotations". I did not want to link to competitors at the top of articles, so I added a small Sources section at the bottom of the posts that made scientific or technical claims.

For nutrition and digestion posts, I used real PubMed studies published in 2026. For baking technique posts, I linked to established sources like King Arthur Baking and The Perfect Loaf.

Two rules:

- Verify every URL returns 200 before adding it
- Add `rel="nofollow noopener"` so citations do not leak link equity

The result: the citations are visible to readers and AI tools, but Google does not treat them as endorsements.

## Headings that read like questions get cited more

This one is not about rankings, it is about AI visibility. Sections titled `What Temperature Should You Bake Sourdough?` are easier for AI answers to pull from than sections titled `Bake Day (Evening)`.

I reframed key H2s across the blog:

- `Why Is Focaccia Perfect for Beginners?`
- `How Do You Fix Sourdough Pizza Problems?`
- `Does Hydration Affect the Crust?`

It is a small content change, but it makes every post more extractable.

## Add a file for AI crawlers

`robots.txt` tells search engines what they may crawl. `llms.txt` is a younger idea: a plain text file that tells AI tools what your site is and which pages matter.

```text
# SourdoughCalc

> Free sourdough hydration calculator for home bakers.

https://sourdough-hydrationcalculator.com/
https://sourdough-hydrationcalculator.com/blog/
```

Adoption is still low, but the file costs nothing and gives AI crawlers a clean starting point.

## Verify the deployed page, not just the build

My biggest mistake was trusting my own verification too early.

After one deploy, I fetched the homepage and wrote a quick regex to check the affiliate links. The regex returned the URL but not the anchor tag around it, so I concluded that the live site was missing `rel` attributes and that the deployment was stale.

It was not. The site had been updated; my check was wrong.

Now I wait 15 seconds after a deployment reaches success, fetch the real HTML, and compare exact strings before reporting anything.

## What actually mattered

If I ranked the fixes by impact:

1. Fixing broken image URLs in structured data
2. Removing fake aggregate ratings
3. Adding canonical tags everywhere
4. Making the sitemap valid again
5. Adding honest author and Blog schema
6. Adding real, nofollow citations
7. Reframing headings as questions

None of these were dramatic. Most were boring. Together they turned a site that looked finished into one that was actually finished.

The tool itself is still free and still does one thing: [Sourdough Hydration Calculator](https://sourdough-hydrationcalculator.com/). If you are shipping a static site, I hope this list saves you a few audits.
