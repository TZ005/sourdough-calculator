# Sourdough-calculator 30-Day Growth Plan

> **Generated**: 2026-08-03
> **Current state**: 12 days since launch. 0 sales. 10 indexed / 14 not. Average position 43.3. 0 clicks.
> **Hard deadline**: Amazon Associates needs 3 sales by **2027-01-18** (138 days from now)
> **Strategy**: Articles + backlinks + AdSense in parallel. Defer auth, D1, OAuth, newsletter, multi-language — none of these matter with current traffic.

---

## Status snapshot (2026-08-03)

| Metric | Current | Goal in 30 days |
|---|---|---|
| GSC indexed | 10 / 36 | 25 / 36 |
| Total impressions / 30d | ~ 7,900 (316 in 12d) | 3,000 / 30d |
| Total clicks / 30d | 0 | 100 / 30d |
| Avg position | 43.3 | < 35 |
| Amazon sales | 0 | 1+ (any) |
| Backlinks (DR > 50) | 3 (dev.to articles) | 8 (mix dev.to + niche) |
| Articles | 28 | 36+ |

---

## Two revenue streams (run in parallel)

1. **Amazon Associates** (`tag=sourdoughca0a-20`) — primary
   - 1.5%–3% commission on baking tools, flour, equipment
   - Needs: traffic → click → buy (3 steps, slow feedback)
   - 180-day clock started 2026-07-22

2. **Google AdSense** — secondary (apply now)
   - Apply at adsense.google.com (free)
   - Pays per 1,000 impressions (RPM $5–15 for niche baking)
   - Needs: traffic → impressions (1 step, faster)
   - Approval usually 1–3 weeks

**Not doing yet (right call, defer until traffic justifies):**
- ❌ User login (OAuth / D1 / Pages Functions) — needs ~50 lines of code, 0 users
- ❌ Save recipe feature — same
- ❌ Newsletter (ConvertKit / MailerLite) — premature
- ❌ Multi-language — protein-payment has no proven case
- ❌ Custom design / redesign

---

## Weekly cadence (the only thing that matters)

### Every week, no exceptions

| Day | Action | Time |
|---|---|---|
| Mon | Write 1 new article (long-tail keyword, FAQ schema, Amazon links) | 60 min |
| Tue | Submit article to GSC URL inspection (request indexing) | 5 min |
| Wed | Outreach: 1 real email to a baking blog (guest post or backlink pitch) | 30 min |
| Thu | Check GSC: which queries have impressions, which pages have 0 views? | 15 min |
| Fri | Apply AdSense or adjust existing content based on GSC findings | 30 min |
| Sat/Sun | REST (avoid burnout) | - |

**Output per week**: 1 new article + 1 backlink + GSC review = real compounding SEO work.

### Per-article checklist (before publish)

- [ ] `npm run build` clean
- [ ] 1000+ words
- [ ] FAQ schema (3+ Q&A pairs)
- [ ] 1-3 Amazon links with `?tag=sourdoughca0a-20`
- [ ] Calculator link in body
- [ ] 1 internal link to existing article
- [ ] `posts.ts` registered with `slug`, `title`, `excerpt`, `readTime`
- [ ] `datePublished` set to today
- [ ] Commit + push

---

## First 4 weeks (concrete plan)

### Week 1 (2026-08-04 → 2026-08-10)
- [x] Article: best-sourdough-banneton (this commit, bfbeb31)
- [ ] **AdSense application** — 5 min at adsense.google.com
- [ ] Outreach: identify 5 real baking blogs (e.g. King Arthur blog authors, The Perfect Loaf collaborators, smaller sourdough Substack writers)
- [ ] Send 1 cold email pitch
- [ ] GSC: monitor best-sourdough-banneton indexing (URL inspection after 24-48h)

### Week 2 (2026-08-11 → 2026-08-17)
- [ ] Article: Sourdough Proofing Box (long-tail, high commercial intent)
- [ ] Article: Sourdough Scoring (searchable problem: "how to score sourdough")
- [ ] Outreach: 1-2 more pitches
- [ ] GSC: review which of the 14 not-indexed pages now show up

### Week 3 (2026-08-18 → 2026-08-24)
- [ ] Article: First Loaf of Sourdough Day One (cover beginner pain)
- [ ] Article: How to Read Sourdough Crumb (visual guide, search-intent match)
- [ ] Backlink follow-up: respond to anyone who replied
- [ ] If AdSense approved: add ad slot to all pages (or do it as one config change)

### Week 4 (2026-08-25 → 2026-08-31)
- [ ] Article: When to Cut Sourdough (timing-based, high search volume)
- [ ] Article: Sourdough for High Altitude (very low competition, captures niche)
- [ ] Mid-month review: count indexed, count impressions, count Amazon clicks via GA4
- [ ] Decision point: 4 weeks of data → is site growing? If no impressions trending up, redirect to different niche or update existing 5 lowest-impression pages with new keywords

---

## What "growing" looks like at each milestone

| Milestone | Healthy signal | Action if not met |
|---|---|---|
| 7 days | GSC shows 2-3 new pages indexed | Submit URL inspection manually; check for 404s |
| 14 days | 1,000+ total impressions | Re-evaluate keyword targeting, swap article topic |
| 30 days | 3,000+ impressions, 50+ clicks | Audit top 5 pages for content depth; rewrite worst performer |
| 60 days | 10,000+ impressions, 200+ clicks | Double article frequency |
| 90 days | 1 Amazon sale or 5,000+ pageviews/month | Either celebrate or pivot |

**Pivot criteria** (when to give up or change direction):
- 60 days: zero impressions growth = wrong niche
- 90 days: zero clicks, zero Amazon sales = revisit content strategy
- 120 days: still 0 indexed for the new articles = technical SEO issue

---

## Anti-patterns to avoid

- ❌ "I'll just add one more feature before promoting" → defer all features, focus on output
- ❌ "This article needs to be perfect" → ship, iterate later based on GSC data
- ❌ "Let me do a redesign first" → never redesign before traffic
- ❌ Comparing to protein-payment — different niche, different timeline
- ❌ Checking stats hourly — weekly review is enough

---

## What I will NOT touch in this plan

These are deferred indefinitely until ROI is provable:

| Feature | Why deferred | When to revisit |
|---|---|---|
| User login (OAuth / Google) | No users want to log in yet | When 50+ unique signups wanted |
| Save recipe | No users yet | When 20+ requests for it |
| Newsletter | No traffic yet | When 1,000+ UV/month |
| Multi-language | protein-payment hasn't proven case | When 1 EN-language article in Top 3 |
| Custom design | Brand identity already clear | Only after $1,000/month revenue |
| D1 / Pages Functions | Only for auth needs | See user login above |

---

## Tracking (weekly review on Thursday)

Open GSC → Performance → compare week-over-week:
- Total clicks
- Total impressions
- Average CTR
- Top 10 queries (any in top 20 = good)
- Top 5 pages by impressions

Open GA4 → check:
- Amazon affiliate click events (custom event "affiliate_click" already wired via AffiliateLink component)
- Pages per session
- Avg session duration

If anything is flat for 2 consecutive weeks: change something (topic, distribution, or angle).