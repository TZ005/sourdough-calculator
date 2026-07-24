import Link from "next/link";

export const metadata = {
  title: "How to Make Sourdough Starter from Scratch: A 7-Day Complete Guide (2026)",
  description: "Day-by-day instructions for creating a healthy sourdough starter from just flour and water. Includes troubleshooting, feeding schedules, and signs of readiness.",
  keywords: ["sourdough starter", "sourdough starter from scratch", "make sourdough starter", "how to feed sourdough starter", "wild yeast starter"],
};

export default function StarterGuide() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">How to Make Sourdough Starter from Scratch: A 7-Day Complete Guide</h1>
      <p className="text-brand-muted text-sm mb-8">📖 10 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        A sourdough starter is a living culture of wild yeast and lactobacilli bacteria, captured
        from the air around you and fed daily with flour and water. Once alive and active, it will
        leaven bread for the rest of your life. This guide walks you through the first seven days
        from flour + water to a vigorous, reliable starter.
      </p>

      <h2 className="mt-10 mb-3">What You Need (Day 0)</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong>Flour:</strong> 100g whole wheat or rye flour (organic if possible). Whole-grain flours have more wild yeast and bacteria on the grain surface, so they catch a culture faster than white flour.</li>
        <li><strong>Water:</strong> 100g filtered or dechlorinated water. Chlorine inhibits microbial growth, so let tap water sit out for 24 hours if you have no filter.</li>
        <li><strong>Jar:</strong> A clean glass jar (about 500ml) with a loose lid or cloth cover.</li>
        <li><strong>Scale:</strong> A kitchen scale that measures in grams. Eyeballing flour and water will not give you consistent results.</li>
      </ul>

      <h2 className="mt-10 mb-3">Day 1: Mix and Wait</h2>
      <p className="mb-4">
        Combine 50g whole wheat flour with 50g water in your jar. Stir until no dry clumps remain.
        The consistency should be similar to thick pancake batter, roughly 100% hydration. Mark the
        level on the jar with a rubber band or tape. Cover loosely and leave at room temperature (70-78°F
        is ideal).
      </p>

      <h2 className="mt-10 mb-3">Day 2: First Feeding</h2>
      <p className="mb-4">
        You will likely see no activity yet. The flour is just hydrating. After 24 hours, discard half
        of the starter (about 50g) and feed it with 50g flour and 50g water. Stir, mark the level
        again, and wait. The wild yeasts are just beginning to wake up.
      </p>

      <h2 className="mt-10 mb-3">Days 3-5: The Boring Middle</h2>
      <p className="mb-4">
        Repeat the discard-and-feed process every 12 hours. Around day 3 or 4 you will start to see
        small bubbles and a slightly sour, almost yogurt-like smell. The starter may rise slightly
        between feedings. This is normal. Do not panic if you see no activity yet, wild yeasts take
        time to establish.
      </p>

      <h2 className="mt-10 mb-3">Day 6: The Explosion</h2>
      <p className="mb-4">
        By day 6 or 7 the starter should be reliably doubling in volume 4-8 hours after feeding. It will
        smell tangy and pleasantly sour, with a domed or pillowy top. If you drop a spoonful into
        water, it should float. A floating starter is the traditional sign of readiness.
      </p>

      <h2 className="mt-10 mb-3">Day 7: Ready to Bake</h2>
      <p className="mb-4">
        Your starter is alive. From here on, store it in the fridge and feed it once a week. Pull it
        out the night before you want to bake, give it 2-3 feedings at room temperature, and it will
        be ready to leaven bread. If you bake daily, leave it on the counter and feed twice a day.
      </p>

      <h2 className="mt-10 mb-3">Troubleshooting</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong>No bubbles at all by day 4:</strong> Your water may have too much chlorine, or your kitchen may be too cold. Move to a warmer spot (75-80°F, like on top of the fridge).</li>
        <li><strong>Starter smells like acetone (nail polish):</strong> It is hungry. Feed it twice in a row, 4 hours apart.</li>
        <li><strong>Starter smells bad (rotten, chemical):</strong> It has contamination. Discard most of it, keep just a tablespoon, and restart from day 1.</li>
        <li><strong>Starter rises and falls too fast (less than 3 hours):</strong> It is too warm or you are over-feeding. Move to a cooler spot and reduce the feeding amount.</li>
      </ul>

      <h2 className="mt-10 mb-3">Why Whole Grain Works Best</h2>
      <p className="mb-4">
        Whole wheat and rye flours carry more wild yeast and bacteria on the surface of the grain
        than refined white flour. This makes them a far better medium for capturing a starter in
        the first 5 days. Once your starter is active and reliable, you can switch to white flour
        for feeding, but many bakers keep at least some whole grain in the mix for flavor.
      </p>

      <h2 className="mt-10 mb-3">From Here On</h2>
      <p className="mb-4">
        You now have a living starter that will leaven bread for years. To convert any bread recipe
        to work with your new starter, you need to know the baker's percentage of hydration, salt,
        and starter. Our{" "}
        <Link href="/" className="text-brand-brown font-medium">
          free hydration calculator
        </Link>{" "}
        handles this for you. Feed your starter, weigh it, plug in the numbers, and you can bake
        any sourdough recipe you find.
      </p>
      <p className="mb-4">
        Want a day-by-day timeline for actually using the starter to bake? Read our{" "}
        <Link href="/blog/sourdough-schedule/" className="text-brand-brown font-medium">
          24-hour sourdough schedule
        </Link>{" "}
        next.
      </p>
    </article>
  );
}
