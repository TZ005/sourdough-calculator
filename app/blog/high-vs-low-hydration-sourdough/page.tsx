import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "How to Choose Sourdough Hydration: 65%, 75%, or 85%?",
  description: "Compare 65% vs 75% vs 85% sourdough hydration. See how each affects crumb, crust, and handling, plus a quick decision guide to pick the right one.",
  keywords: ["how to choose sourdough hydration","high hydration sourdough","low hydration sourdough","65 vs 75 hydration","sourdough hydration comparison","85% hydration sourdough"],
  alternates: { canonical: "https://sourdough-hydrationcalculator.com/blog/high-vs-low-hydration-sourdough/" },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "How to Choose Sourdough Hydration: 65%, 75%, or 85%?",
    description: "Compare 65% vs 75% vs 85% sourdough hydration. See how each affects crumb, crust, and handling, plus a quick decision guide to pick the right one.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/high-vs-low-hydration-sourdough/",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [{ url: "/images/blog/hydration-guide.webp", alt: "Three sourdough doughs at different hydration levels showing texture differences" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose Sourdough Hydration: 65%, 75%, or 85%?",
    description: "Compare 65% vs 75% vs 85% sourdough hydration. See how each affects crumb, crust, and handling, plus a quick decision guide to pick the right one.",
    images: ["/images/blog/hydration-guide.webp"],
  },
};

export default function HighVsLowHydration() {
  return (
    <>
      <ArticleSchema
        slug="high-vs-low-hydration-sourdough"
        title="How to Choose Sourdough Hydration: 65%, 75%, or 85%?"
        description="Compare 65% vs 75% vs 85% sourdough hydration. See how each affects crumb, crust, and handling, plus a quick decision guide to pick the right one."
        image="/images/blog/hydration-guide.webp"
        datePublished="2026-08-19"
        dateModified="2026-08-19"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best hydration for a beginner sourdough baker?","acceptedAnswer":{"@type":"Answer","text":"70-75% hydration is the best starting point for beginners. It is wet enough to produce an open, artisan-style crumb but dry enough to shape without excessive sticking. Move to 80%+ only after you can consistently shape 75% dough without it spreading on the counter."}},{"@type":"Question","name":"What is the difference between 65% and 75% hydration?","acceptedAnswer":{"@type":"Answer","text":"65% hydration means 65g of water for every 100g of flour (for example, 325g water with 500g flour). 75% means 375g water with 500g flour. The extra 50g of water makes the dough noticeably softer, the crumb more open, and shaping harder. For most home bakers the 10% jump from 65 to 75 is the single biggest leap in difficulty."}},{"@type":"Question","name":"Can I just add more water to my existing recipe to increase hydration?","acceptedAnswer":{"@type":"Answer","text":"Yes, but you need to also extend bulk fermentation by 30-60 minutes, add 1-2 extra stretch-and-folds, and consider using a stronger flour (12.5-13% protein). Adding water without these adjustments causes a slack, sticky dough that collapses during shaping. The standard rule: every +5% hydration requires +30 minutes bulk fermentation and one extra fold."}},{"@type":"Question","name":"Why does my high hydration dough collapse when shaping?","acceptedAnswer":{"@type":"Answer","text":"Three common causes: (1) under-developed gluten - do more stretch-and-folds before shaping, (2) over-fermented dough - shorten bulk by 30 minutes if it collapses, (3) insufficient flour strength - switch to bread flour with 12%+ protein. High hydration doughs need stronger gluten networks to hold their shape."}},{"@type":"Question","name":"Is higher hydration always better for sourdough?","acceptedAnswer":{"@type":"Answer","text":"No. Higher hydration gives a more open crumb and more flavor, but only up to a point. Above 85% the dough becomes harder to handle without a meaningful jump in quality for most home bakers. Stiff doughs (60-65%) are actually correct for bagels, pretzels, and baguettes because they need to hold their shape during proofing. Choose hydration based on the bread you want, not on the assumption that wetter is always better."}},{"@type":"Question","name":"What is the easiest hydration to shape?","acceptedAnswer":{"@type":"Answer","text":"65% hydration is the easiest to shape because the dough is firm and holds its structure with minimal effort. As hydration climbs past 75%, shaping requires a confident hand, a bench scraper, and often a floured surface or banneton to prevent sticking. Above 80%, even experienced bakers use the stretch-and-fold technique to build tension rather than traditional shaping."}}]} }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">-</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/hydration-guide.webp" type="image/webp" />
          <img
            src="/images/blog/hydration-guide.webp"
            alt="Three sourdough doughs at different hydration levels showing texture differences"
            width="1200"
            height="630"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">How to Choose Sourdough Hydration: 65%, 75%, or 85%?</h1>
        <p className="text-brand-muted text-sm mb-8">10 min read - Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          Hydration is the single dial that controls your sourdough. Turn it to 65% and you get a tight, chewy crumb that holds its shape. Turn it to 85% and you get an open, holey crumb that tastes brighter but fights you at every step. Most recipes pick one number and stop there - this guide picks three and tells you exactly when each one is the right choice.
        </p>

        <p className="mb-8">
          Already know what hydration is? Skip ahead to our <Link href="#decision-guide" className="text-brand-brown font-medium">quick decision guide</Link>. New to the concept? Start with our <Link href="/blog/hydration-guide/" className="text-brand-brown font-medium">complete hydration guide</Link>, then come back. For the full 50% to 100% range, see our <Link href="/blog/sourdough-hydration-chart/" className="text-brand-brown font-medium">hydration chart</Link>.
        </p>

        <h2 className="mt-10 mb-3" id="short-answer">The Short Answer</h2>
        <p className="mb-4">
          If you do not want to read the whole article, here is the rule: <strong>match hydration to the bread you want, not to the technique you prefer.</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Want a baguette, bagel, or pretzel?</strong> Use <strong>60-65%</strong>.</li>
          <li><strong>Want everyday sandwich or boule?</strong> Use <strong>70-78%</strong>.</li>
          <li><strong>Want ciabatta, focaccia, or open-crumb artisan?</strong> Use <strong>80-90%</strong>.</li>
        </ul>
        <p className="mb-4">
          That is the entire decision in three lines. The rest of this article explains <em>why</em> those numbers matter and <em>how</em> to switch between them.
        </p>

        <h2 className="mt-10 mb-3">The Three Hydration Tiers</h2>
        <p className="mb-4">
          Every sourdough recipe falls into one of three tiers. Each tier trades off against the others in four dimensions: crust, crumb, handling, and best use case.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-brand-tan">
                <th className="border border-brand-tan/40 px-4 py-2 text-left">Tier</th>
                <th className="border border-brand-tan/40 px-4 py-2 text-left">Hydration</th>
                <th className="border border-brand-tan/40 px-4 py-2 text-left">Crumb</th>
                <th className="border border-brand-tan/40 px-4 py-2 text-left">Crust</th>
                <th className="border border-brand-tan/40 px-4 py-2 text-left">Handling</th>
                <th className="border border-brand-tan/40 px-4 py-2 text-left">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Low</td>
                <td className="border border-brand-tan/40 px-4 py-2">60-70%</td>
                <td className="border border-brand-tan/40 px-4 py-2">Tight, chewy</td>
                <td className="border border-brand-tan/40 px-4 py-2">Thin, crisp</td>
                <td className="border border-brand-tan/40 px-4 py-2">Easy</td>
                <td className="border border-brand-tan/40 px-4 py-2">Baguettes, bagels, pretzels, stiff breads</td>
              </tr>
              <tr className="bg-brand-tan/20">
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Standard</td>
                <td className="border border-brand-tan/40 px-4 py-2">70-78%</td>
                <td className="border border-brand-tan/40 px-4 py-2">Semi-open</td>
                <td className="border border-brand-tan/40 px-4 py-2">Medium, crackling</td>
                <td className="border border-brand-tan/40 px-4 py-2">Moderate</td>
                <td className="border border-brand-tan/40 px-4 py-2">Everyday sourdough, boules, sandwich loaves</td>
              </tr>
              <tr>
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">High</td>
                <td className="border border-brand-tan/40 px-4 py-2">80-90%</td>
                <td className="border border-brand-tan/40 px-4 py-2">Open, irregular</td>
                <td className="border border-brand-tan/40 px-4 py-2">Thick, caramelized</td>
                <td className="border border-brand-tan/40 px-4 py-2">Hard</td>
                <td className="border border-brand-tan/40 px-4 py-2">Ciabatta, focaccia, open-crumb artisan</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 mb-3">Low Hydration (60-70%): When and Why</h2>
        <p className="mb-4">
          Low-hydration doughs sit in the 60-70% range, with <strong>65%</strong> being the most common value. A 65% dough means 325g of water for every 500g of flour - firm, shapeable, and forgiving.
        </p>
        <p className="mb-4">
          The lower water content serves three purposes. First, the dough holds its shape during long proofing - critical for elongated breads like <Link href="/blog/best-sourdough-baguettes/" className="text-brand-brown font-medium">baguettes</Link> that need to keep their scored ridges. Second, the crumb comes out tighter and chewier, which is what you want for bagels, pretzels, and rustic Italian breads. Third, the dough is dramatically easier to handle, which is why beginners often start here.
        </p>
        <p className="mb-4">
          <strong>When to use low hydration:</strong> any bread that needs to hold a shape (baguettes, batards, rolls, stuffed breads) or that benefits from a tight, chewy crumb (bagels, pretzels, English muffins).
        </p>
        <p className="mb-4">
          <strong>Trade-off:</strong> less open crumb, less surface area for flavor development, and a shorter window of peak fermentation. The flavor will still be excellent but will lean toward nutty and mild rather than bright and tangy.
        </p>

        <h2 className="mt-10 mb-3">Standard Hydration (70-78%): The Default</h2>
        <p className="mb-4">
          The 70-78% range is where most published sourdough recipes live, and for good reason. <strong>75%</strong> is the sweet spot: wet enough to produce an open, artisan-style crumb, dry enough that a confident beginner can shape it without it spreading across the counter.
        </p>
        <p className="mb-4">
          Standard hydration gives you the best of both worlds. The crumb is open enough to be visually impressive but tight enough to slice cleanly for sandwiches. The crust develops that signature crackle. The dough is sticky at first but releases with proper technique (wet hands, bench scraper, light dusting of flour). And the long bulk fermentation produces the complex, tangy flavor that sourdough is famous for.
        </p>
        <p className="mb-4">
          <strong>When to use standard hydration:</strong> everyday sourdough loaves, boule and batard shapes, sandwich bread, pain de campagne, and most "first sourdough loaf" recipes.
        </p>
        <p className="mb-4">
          <strong>Trade-off:</strong> nothing dramatic. This is the safe, reliable choice for almost any sourdough application. If you are unsure which hydration to use, start here.
        </p>

        <h2 className="mt-10 mb-3">High Hydration (80-90%): When It Shines</h2>
        <p className="mb-4">
          High-hydration doughs - <strong>85%</strong> is the common target - produce the most striking sourdough you can bake. The crumb is open and irregular, with large holes that look straight out of an artisan bakery window. The crust caramelizes deeper, and the flavor is brighter because the longer bulk fermentation gives wild yeast more time to work.
        </p>
        <p className="mb-4">
          The catch: every step is harder. The dough sticks to everything - your hands, the counter, the bench scraper, the banneton. Shaping requires a confident hand and often the stretch-and-fold technique instead of traditional rounding. Bulk fermentation takes 30-60% longer. And you need stronger flour (12%+ protein) to give the gluten network enough structure to hold all that water.
        </p>
        <p className="mb-4">
          <strong>When to use high hydration:</strong> Italian breads like <Link href="/blog/sourdough-focaccia/" className="text-brand-brown font-medium">focaccia</Link> and ciabatta, open-crumb artisan boules, and any bread where dramatic visual crumb matters more than ease of handling.
        </p>
        <p className="mb-4">
          <strong>Trade-off:</strong> longer time investment, higher skill floor, and more variables that can go wrong. New bakers often try 85% as a "stretch goal" before they have a solid 75% technique, and end up frustrated.
        </p>

        <h2 className="mt-10 mb-3">How to Switch Between Hydrations</h2>
        <p className="mb-4">
          Adjusting hydration is not as simple as just adding water. Every change in hydration cascades through your whole process. Here is the rule that makes it work:
        </p>
        <p className="bg-brand-tan p-4 rounded-lg font-mono mb-6">
          Every +5% hydration = +30 min bulk fermentation + 1 extra stretch-and-fold
        </p>
        <p className="mb-4">
          Going from 75% to 85%? Plan on adding 60 minutes to your bulk and doing 2 extra folds during the first 90 minutes. Going down from 75% to 65%? Reduce bulk by 30 minutes and skip a fold.
        </p>
        <p className="mb-4">
          Other adjustments that travel with hydration:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Flour strength:</strong> higher hydration needs stronger flour. 12-13% protein minimum for 80%+.</li>
          <li><strong>Salt:</strong> 1.8-2.0% for standard, lean toward 2.0-2.2% for very wet doughs to tighten the structure.</li>
          <li><strong>Shaping technique:</strong> wet doughs need stretch-and-fold tension, not rounding. See our <Link href="/blog/shaping-boule/" className="text-brand-brown font-medium">shaping guide</Link>.</li>
          <li><strong>Banneton prep:</strong> rice flour + a light dust is not optional for high hydration - it prevents sticking.</li>
        </ul>

        <h2 className="mt-10 mb-3">Common Mistakes at Each Hydration</h2>
        <p className="mb-4">
          Hydration-specific mistakes are predictable. Once you know what each tier is most likely to do wrong, you can prevent it.
        </p>

        <h3 className="mt-6 mb-2">Low Hydration (60-65%) Pitfalls</h3>
        <p className="mb-4">
          <strong>1. Too dry, ends up like a brick.</strong> If your dough feels like clay and tears when you try to shape it, you went below 60% or your flour is absorbing more than expected. Add water 10g at a time until the dough comes together smoothly.
        </p>
        <p className="mb-4">
          <strong>2. Insufficient gluten development.</strong> Low hydration masks weak gluten. Even a 65% dough needs proper stretch-and-folds - skipping them produces a tight, dense crumb that tastes under-fermented.
        </p>
        <p className="mb-4">
          <strong>3. Over-baking to compensate.</strong> Dense crumb does not mean it needs more time in the oven. Pull it at 210F internal for a tender, not tough, finish.
        </p>

        <h3 className="mt-6 mb-2">Standard Hydration (75%) Pitfalls</h3>
        <p className="mb-4">
          <strong>1. Treating 75% as "high hydration."</strong> It is not. 75% is moderate. If you are struggling with shaping at 75%, the issue is technique or flour strength, not the water content.
        </p>
        <p className="mb-4">
          <strong>2. Under-fermenting the bulk.</strong> 75% doughs need a fully developed bulk - look for 50-75% rise, domed top, and bubbles along the sides before shaping.
        </p>
        <p className="mb-4">
          <strong>3. Skipping the autolyse.</strong> A 30-minute autolyse (flour + water only, no salt or starter) makes 75% doughs dramatically easier to shape. It is the single highest-leverage step for standard hydration.
        </p>

        <h3 className="mt-6 mb-2">High Hydration (85%+) Pitfalls</h3>
        <p className="mb-4">
          <strong>1. Shaping too early.</strong> High-hydration dough needs full gluten development before shaping - usually 4+ stretch-and-folds over 2 hours. Rush it and the dough collapses.
        </p>
        <p className="mb-4">
          <strong>2. Using all-purpose flour.</strong> AP flour at 85% hydration is a guaranteed disaster. Use bread flour with at least 12% protein, or even better, a blend with 10-20% whole wheat or rye for extra structure.
        </p>
        <p className="mb-4">
          <strong>3. Cold proof too long.</strong> High-hydration doughs over-ferment faster in the fridge because the extra water accelerates yeast activity. Reduce cold proof by 2-4 hours compared to a 75% recipe.
        </p>

        <h2 className="mt-10 mb-3" id="decision-guide">Quick Decision Guide</h2>
        <p className="mb-4">
          Stop guessing. Answer these four questions and the right hydration falls out.
        </p>
        <div className="bg-brand-tan p-6 rounded-lg mb-6">
          <p className="font-semibold mb-2">1. What bread are you making?</p>
          <p className="mb-2">- Baguette, bagel, or pretzel - go to <strong>60-65%</strong></p>
          <p className="mb-2">- Boule, batard, or sandwich loaf - go to <strong>70-78%</strong></p>
          <p>- Ciabatta, focaccia, or open-crumb artisan - go to <strong>80-90%</strong></p>

          <p className="font-semibold mt-4 mb-2">2. How much experience do you have?</p>
          <p className="mb-2">- Under 5 loaves - subtract 5% from whatever the bread asks for</p>
          <p className="mb-2">- 5-50 loaves - use the bread's recommended hydration</p>
          <p>- 50+ loaves - you can probably push 5% higher than the recipe says</p>

          <p className="font-semibold mt-4 mb-2">3. What flour are you using?</p>
          <p className="mb-2">- AP flour (10-11% protein) - cap at 70%</p>
          <p className="mb-2">- Bread flour (12-13% protein) - comfortable up to 85%</p>
          <p>- Strong bread flour or blend (13%+) - safe to 90%+</p>

          <p className="font-semibold mt-4 mb-2">4. How open do you want the crumb?</p>
          <p>- Tight and chewy - subtract 5%</p>
          <p>- Semi-open - use recipe as-is</p>
          <p>- Open and holey - add 5%</p>
        </div>
        <p className="mb-8">
          That is it. Four questions, one number. Once you have a target, dial it in with our <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link> and you are ready to mix.
        </p>

        <h2 className="mt-10 mb-3">FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">What is the best hydration for a beginner sourdough baker?</h3>
          <p>70-75% hydration is the best starting point for beginners. It is wet enough to produce an open, artisan-style crumb but dry enough to shape without excessive sticking. Move to 80%+ only after you can consistently shape 75% dough without it spreading on the counter.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">What is the difference between 65% and 75% hydration?</h3>
          <p>65% hydration means 65g of water for every 100g of flour (for example, 325g water with 500g flour). 75% means 375g water with 500g flour. The extra 50g of water makes the dough noticeably softer, the crumb more open, and shaping harder. For most home bakers the 10% jump from 65 to 75 is the single biggest leap in difficulty.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Can I just add more water to my existing recipe to increase hydration?</h3>
          <p>Yes, but you need to also extend bulk fermentation by 30-60 minutes, add 1-2 extra stretch-and-folds, and consider using a stronger flour (12.5-13% protein). Adding water without these adjustments causes a slack, sticky dough that collapses during shaping. The standard rule: every +5% hydration requires +30 minutes bulk fermentation and one extra fold.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Why does my high hydration dough collapse when shaping?</h3>
          <p>Three common causes: (1) under-developed gluten - do more stretch-and-folds before shaping, (2) over-fermented dough - shorten bulk by 30 minutes if it collapses, (3) insufficient flour strength - switch to bread flour with 12%+ protein. High hydration doughs need stronger gluten networks to hold their shape.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Is higher hydration always better for sourdough?</h3>
          <p>No. Higher hydration gives a more open crumb and more flavor, but only up to a point. Above 85% the dough becomes harder to handle without a meaningful jump in quality for most home bakers. Stiff doughs (60-65%) are actually correct for bagels, pretzels, and baguettes because they need to hold their shape during proofing. Choose hydration based on the bread you want, not on the assumption that wetter is always better.</p>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold text-brand-brown mb-1">What is the easiest hydration to shape?</h3>
          <p>65% hydration is the easiest to shape because the dough is firm and holds its structure with minimal effort. As hydration climbs past 75%, shaping requires a confident hand, a bench scraper, and often a floured surface or banneton to prevent sticking. Above 80%, even experienced bakers use the stretch-and-fold technique to build tension rather than traditional shaping.</p>
        </div>

        <div className="bg-brand-tan p-6 rounded-lg my-8">
          <p className="font-bold text-lg mb-2">Calculate Your Hydration in Seconds</p>
          <p className="mb-3">Enter your flour and water weights and our free calculator tells you the exact hydration percentage, plus baker's percentages for salt and starter. No math, no guessing.</p>
          <Link href="/" className="inline-block bg-brand-brown text-white px-5 py-2 rounded-lg font-medium hover:bg-brand-brown/90">Open Hydration Calculator -</Link>
        </div>

        <NextPostNav currentSlug="high-vs-low-hydration-sourdough" />
      </article>
    </>
  );
}
