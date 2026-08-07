# 14-Day SEO Monitoring Checklist (post-CTR-fix)

> **Generated**: 2026-08-08
> **Covers**: 4 page-1 articles with title/description rewrite (commit `944f9f4`)
> **Purpose**: track if the meta change actually lifted CTR

---

## TL;DR

The change touched **only title + meta description** of 4 page-1 articles. Slug / canonical / content / structure untouched.

| Article | Position (before) | Expected position (after) | Expected CTR (before / after) |
|---|---|---|---|
| `/blog/sourdough-for-beginners/` | 6.27 | 5-8 (stable) | 0% / 5-12% |
| `/blog/bakers-percentage/` | 8.64 | 7-10 (stable) | 0% / 4-10% |
| `/blog/common-mistakes/` | 9.75 | 8-11 (stable) | 0% / 4-10% |
| `/blog/crispy-crust/` | 14.19 | 12-16 (stable) | 0% / 3-8% |

If position drops > 3 places on any article, the title change hurt CTR but did not break ranking. If CTR goes from 0% to >3%, the fix is working.

---

## Day 0 (today, 2026-08-08)

**Right after deploying commit `944f9f4`:**

- [ ] Open GSC → URL Inspection → paste each of the 4 URLs → click "Request Indexing"
  - This forces Google to re-fetch with the new title/description
  - Cost: 4 of your daily 10-12 URL inspection quota
  - 5 minutes

---

## Day 3 (2026-08-11, Friday)

**Goal**: confirm Google picked up the new titles.

- [ ] GSC → Performance → filter by Page:
  - `/blog/sourdough-for-beginners/`
  - `/blog/bakers-percentage/`
  - `/blog/common-mistakes/`
  - `/blog/crispy-crust/`
- [ ] For each: check that "Last updated" is recent (within 3 days). If still old, Google hasn’t re-crawled.
- [ ] Compare impressions vs. baseline (8-04 to 8-07 avg ~3-4 imp/article/day). Drop is bad; flat is OK; up is great.

**Healthy signal**: impressions are flat or up. Titles haven't been re-evaluated yet.

**Bad signal**: impressions drop to 0 on all 4. Possibly a manual action or a Cloudflare block.

---

## Day 7 (2026-08-15, Tuesday)

**Goal**: first CTR signal.

- [ ] GSC → Performance → filter by Page → compare **last 7 days** vs **prior 7 days** for the 4 URLs:
  - **Impressions** (should be similar or higher)
  - **Clicks** (target: at least 1-3 clicks per article in 7 days, vs 0 before)
  - **CTR** (target: 2-8%; was 0%)
  - **Average position** (target: stable or improved)
- [ ] If clicks are still 0: check GSC → URL Inspection → "Test Live URL". Google may be showing the OLD title still. If so, manual request index from URL Inspection.

**Decision tree**:
- CTR > 2% AND clicks > 0 → **fix is working** → repeat pattern for next 4-5 articles (positions 11-25)
- CTR = 0% AND impressions same → **Google hasn’t picked up the new snippet** → re-request indexing
- CTR = 0% AND impressions dropped > 50% → **possible ranking hit** → revert title immediately, reapply with different wording

---

## Day 14 (2026-08-22, Tuesday)

**Goal**: stable CTR, identify next batch.

- [ ] GSC → Performance → filter by Page → 14-day view:
  - **Total clicks across the 4 articles** (target: 20-80)
  - **Average CTR** (target: 4-12%)
  - **Average position** (target: stable within ±1)
- [ ] GSC → Performance → Queries:
  - **Top queries bringing the new clicks** (likely: long-tail variations of "sourdough for beginners 2026", "baker's percentage calculator", "common sourdough mistakes 2026", "crispy sourdough crust 2026")
  - **Are these queries new or were they already in the top 100?** (new queries = real win)
- [ ] GA4 → Real-time → check which of the 4 articles is getting sessions
- [ ] If CTR > 5%, do the SAME title treatment for the next 4-5 articles ranking positions 10-25:
  - From GSC: Pages sorted by impressions, take the 4-5 next entries after these 4

---

## What to do with the data

| Result | Action |
|---|---|
| CTR went from 0% to 5%+ on all 4 | Win. Replicate for next 5 articles. |
| CTR went up on 1-2, flat on others | Title test was partial win. Compare which titles worked vs which didn't. Iterate. |
| CTR still 0% on all 4 | Re-request indexing. If still 0% after another week, the title might be ok but the snippet needs different marketing (e.g., schema.org FAQ markup to win rich snippets). |
| Position dropped on any article | Title change hurt ranking. **Revert the title only**, keep the new description. |

---

## What I am NOT going to check

- **Time on page / bounce rate** (not directly affected by title/meta change)
- **Conversion to Amazon** (depends on traffic, which depends on CTR; check separately once CTR is > 3%)
- **Backlink profile** (didn't change; nothing to recheck)

---

## Related context

- **Original CTR change commit**: `944f9f4` (4 files modified)
- **Earlier GSC URL submissions** (commit `9c4e0d6` era): 6 old articles requested for re-indexing
- **3 new articles in commit `d4247f7`**: still in fresh-impression phase, separate monitoring
- **Growth plan**: `/docs/GROWTH-PLAN.md`

The next 4 articles that would benefit from the same CTR treatment (when ready):
1. `/blog/sourdough-without-dutch-oven/` (66 imp, pos 46.71)
2. `/blog/why-is-sourdough-gummy/` (49 imp, pos 33.24)
3. `/blog/didnt-rise/` (46 imp, pos 51.00)
4. `/blog/shaping-boule/` (36 imp, pos 43.42)
