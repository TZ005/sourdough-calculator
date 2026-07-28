import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";




export const metadata: Metadata = {
  title: "Sourdough Not Rising After 12 Hours? 8 Reasons and What to Do (2026)",
  description: "Dough sitting 12 hours with no rise? Here are the 8 most common causes (cold kitchen, weak starter, bad flour) and exactly how to fix each one.",
  keywords: ["sourdough not rising","sourdough starter not rising","sourdough not doubling","12 hour sourdough","sourdough bulk fermentation","weak starter"],
};

export default function BlogPost() {


  return (


    <>

      <ArticleSchema
        slug="sourdough-not-rising-after-12-hours"
        title="Sourdough Not Rising After 12 Hours? 8 Reasons and What to Do (2026)"
        description="Dough sitting 12 hours with no rise? Here are the 8 most common causes (cold kitchen, weak starter, bad flour) and exactly how to fix each one."
        image="/images/blog/sourdough-not-rising-after-12-hours.png"
        datePublished="2026-07-28"
        dateModified="2026-07-28T08:00:00Z"
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

      <picture>

        <source srcSet="/images/blog/sourdough-not-rising-after-12-hours.webp" type="image/webp" />

        <img

          src="/images/blog/sourdough-not-rising-after-12-hours.png"

          alt="Hand-drawn watercolor illustration of a glass jar of sourdough starter that did not rise with a small wooden spoon"

          width="1200"

          height="630"

          className="w-full rounded-xl my-8"

          loading="eager"

          fetchPriority="high"

        />

      </picture>
      <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Sourdough Not Rising After 12 Hours? 8 Reasons and What to Do</h1>
      <p className="text-brand-muted text-sm mb-8">📖 9 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        You mixed your dough last night, expecting it to be doubled and bubbly by morning. Twelve hours later, it looks exactly the same. The starter is fine, the dough smells fine, but it is not rising. This is one of the most common sourdough problems, and it almost always has a simple explanation.
      </p>
      <p className="mb-8">
        Before troubleshooting, make sure you are giving the dough enough time. <strong>12 hours is the low end for cold bulk fermentation, not the high end.</strong> If your kitchen is below 68°F, dough can take 14-18 hours to fully ferment. If you are worried, give it 24 hours before giving up.
      </p>

      <h2 className="mt-10 mb-3">8 Reasons Your Dough Is Not Rising</h2>

      <h3 className="mt-6 mb-2">1. Your Starter Is Inactive</h3>
      <p className="mb-4">
        The most common cause. If your starter is not doubling within 6-8 hours of feeding, it is too weak to leaven bread. <Link href="/blog/sourdough-starter/" className="text-brand-brown font-medium">Our starter guide</Link> covers how to test and revive a sluggish starter. For now: feed it with equal weights of flour and water (1:1:1 ratio), wait 6 hours, and see if it doubles. If not, repeat with fresh flour.
      </p>

      <h3 className="mt-6 mb-2">2. Your Kitchen Is Too Cold</h3>
      <p className="mb-4">
        Yeast activity roughly doubles for every 10°F increase in temperature. A dough that takes 6 hours to rise at 75°F will take 12 hours at 65°F and 24 hours at 55°F. If your kitchen is cool (most are, in winter), your dough is just fermenting slowly. It is not broken, it is just cold.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong> find a warmer spot for the dough. On top of the fridge, inside the oven with just the light on, or on a heating pad set to low. The dough should rise 50-75% in volume, not double, before shaping.
      </p>

      <h3 className="mt-6 mb-2">3. Not Enough Starter</h3>
      <p className="mb-4">
        A standard sourdough recipe uses 20% starter by flour weight. If you used 10% or less (common in cold-ferment recipes), the dough takes much longer to rise. Some bakers use as little as 5% starter for a 24-hour cold ferment. Check your recipe and timing.
      </p>

      <h3 className="mt-6 mb-2">4. Too Much Salt</h3>
      <p className="mb-4">
        Salt slows yeast activity significantly. A standard recipe uses 2% salt by flour weight. If you accidentally doubled the salt (easy to do if you measure by weight, not volume), the dough will barely rise. Unfortunately, the only fix is to start over.
      </p>

      <h3 className="mt-6 mb-2">5. Chlorinated Water</h3>
      <p className="mb-4">
        Chlorine in tap water can inhibit yeast. Most municipal water has low enough chlorine that it does not matter, but some cities use heavy chlorination. If you suspect this, switch to filtered or bottled water for both your starter and your dough.
      </p>

      <h3 className="mt-6 mb-2">6. Cold Starter</h3>
      <p className="mb-4">
        If you mixed your dough with cold starter straight from the fridge, the dough will take an extra 1-2 hours to start rising. Let your starter come to room temperature before mixing, or build it into your timing.
      </p>

      <h3 className="mt-6 mb-2">7. Bad Flour</h3>
      <p className="mb-4">
        Some flours have natural anti-fungal or anti-yeast compounds. Whole wheat, rye, and ancient grains like spelt sometimes have higher levels. Most modern bread flour is fine. If your dough consistently fails with one brand, try another.
      </p>

      <h3 className="mt-6 mb-2">8. Contamination</h3>
      <p className="mb-4">
        If you mixed your dough in a bowl that was not properly cleaned (residual soap, oil, or other contaminants), the yeast may be inhibited. Wash bowls with hot water and a tiny amount of unscented soap, then rinse thoroughly. Avoid plastic containers that have absorbed oils.
      </p>

      <h2 className="mt-10 mb-3">How to Test Which One Is the Problem</h2>
      <p className="mb-4">
        If you cannot tell which issue is affecting you, do a small test bake:
      </p>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li>Take 100g of your existing dough and put it in a small jar</li>
        <li>Mark the level on the jar with a rubber band</li>
        <li>Place in a warm spot (oven with light on) and wait 4 hours</li>
        <li>If it doubles: the issue was time, temperature, or starter amount (not salt or contamination)</li>
        <li>If it does not double: the issue is starter health, salt, or contamination</li>
      </ol>

      <h2 className="mt-10 mb-3">When to Give Up and Start Over</h2>
      <p className="mb-4">
        If your dough has been sitting for 24 hours at warm temperature and still has not risen, the yeast is dead. The dough is not lost: bake it anyway. It will be dense, but it will still make edible bread (think dense rye). Then revive your starter and try again.
      </p>

      <h2 className="mt-10 mb-3">The Takeaway</h2>
      <p className="mb-4">
        Sourdough not rising after 12 hours is almost always one of three things: the kitchen is too cold, the starter is too weak, or the dough is under-fermented. All three have simple fixes. Check your starter first, then your kitchen temperature, then give it more time. For more detail, our <Link href="/blog/sourdough-starter/" className="text-brand-brown font-medium">sourdough starter guide</Link> walks through diagnosing a sluggish starter.
      </p>

      <h2 className="mt-10 mb-3">Frequently Asked Questions</h2>

      <h3 className="mt-6 mb-2">How long should sourdough take to rise?</h3>
      <p className="mb-4">
        It depends on temperature. At 75°F, bulk fermentation takes 4-6 hours with 20% starter. At 65°F, it takes 8-12 hours. At 55°F, it takes 14-18 hours. Many bakers use the fridge (38°F) for a 12-24 hour cold ferment, which produces more sour flavor.
      </p>

      <h3 className="mt-6 mb-2">Can I save sourdough that has not risen after 12 hours?</h3>
      <p className="mb-4">
        Yes, in most cases. Just give it more time. If the kitchen is below 70°F, your dough may simply be fermenting slowly. Move it somewhere warmer and check again in 4-6 hours. If it has not risen after 24 hours at warm temperature, the yeast is dead and you should bake it as a dense loaf or compost it.
      </p>

      <h3 className="mt-6 mb-2">How do I know if my starter is the problem?</h3>
      <p className="mb-4">
        Drop a spoonful of starter into a cup of water. If it floats, it is ready. If it sinks, it needs more time or more frequent feedings. You can also just look at it: a healthy starter doubles in 4-8 hours, has bubbles on top, and smells yogurty or tangy (not vinegary or like acetone).
      </p>

      <h3 className="mt-6 mb-2">Is 12 hours too long for bulk fermentation?</h3>
      <p className="mb-4">
        It depends. In a warm kitchen (75°F+), 12 hours is too long. The dough will be over-fermented. In a cool kitchen (under 65°F), 12 hours is normal. The dough should rise 50-75% in volume, not necessarily double. Use visual cues, not the clock.
      </p>

      <h3 className="mt-6 mb-2">Why did my dough rise yesterday but not today?</h3>
      <p className="mb-4">
        The most common cause is a change in kitchen temperature. A cold front, AC kicking on, or simply baking at a different time of day can all change the temperature by 5-10°F, which doubles or halves fermentation time. If you can, place your dough in a consistent temperature spot.
      </p>

      <NextPostNav slug="sourdough-not-rising-after-12-hours" />
    </article>
    </>
  );
}