import Link from "next/link";

export const metadata = {
  title: "Sourdough Schedule: A 24-Hour Timeline for Your First Loaf",
  description: "A day-by-day, hour-by-hour timeline for your first sourdough loaf. From starter feed to slicing, every step timed and explained.",
  keywords: ["sourdough schedule", "sourdough timeline", "sourdough day before", "when to bulk ferment", "sourdough overnight"],
};

export default function SourdoughSchedule() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">Sourdough Schedule: A 24-Hour Timeline for Your First Loaf</h1>
      <p className="text-brand-muted text-sm mb-8">📖 9 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        Most sourdough recipes give you ingredients but not a timeline. Here is the same recipe
        in a 24-hour clock: when to feed your starter, when to mix, when to stretch and fold, when
        to shape, when to bake. Follow this and you will have a loaf on the counter by tomorrow
        afternoon.
      </p>

      <h2 className="mt-10 mb-3">Assumptions</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Kitchen at 70-74°F (21-23°C). Warmer kitchens shorten all times by 20-30%. Cooler kitchens extend them.</li>
        <li>Active, ripe starter (peaked in the last 4-8 hours).</li>
        <li>500g flour total, 75% hydration, 20% ripe starter, 2% salt.</li>
        <li>Single 1kg loaf (about 800g baked weight).</li>
      </ul>

      <h2 className="mt-10 mb-3">Day Before (Night Before, ~9:00 PM)</h2>
      <p className="mb-4"><strong>9:00 PM — Feed your starter</strong></p>
      <p className="mb-4">
        Take 10g of ripe starter, add 20g flour and 20g water. Stir, cover loosely, leave on the
        counter. By morning it should be doubled and domed, ready to bake with.
      </p>

      <h2 className="mt-10 mb-3">Bake Day (Morning)</h2>
      <p className="mb-4"><strong>8:00 AM — Autolyse (mix flour + water)</strong></p>
      <p className="mb-4">
        In a large bowl, mix 500g bread flour with 375g water (75%). Stir until no dry flour
        remains. The dough will be shaggy and stiff. Cover and let it rest for 30-45 minutes.
        During this autolyse, the flour fully hydrates and gluten begins to develop on its own.
      </p>
      <p className="mb-4"><strong>8:45 AM — Add starter and salt</strong></p>
      <p className="mb-4">
        Add 100g of ripe starter and 10g salt. Pinch and squeeze to incorporate. The dough will
        loosen and become stickier. Cover and let rest.
      </p>
      <p className="mb-4"><strong>9:15 AM, 9:45 AM, 10:15 AM, 10:45 AM — Stretch and folds</strong></p>
      <p className="mb-4">
        Every 30 minutes, do a stretch and fold. Wet your hand, grab one side of the dough, stretch
        it up until it resists, and fold it over itself. Rotate the bowl a quarter turn and repeat
        four times. After 4 sets, the dough will be noticeably smoother and more elastic.
      </p>

      <h2 className="mt-10 mb-3">Bake Day (Midday)</h2>
      <p className="mb-4"><strong>11:00 AM - 2:00 PM — Bulk fermentation</strong></p>
      <p className="mb-4">
        Cover the dough and let it bulk for 3-5 hours at room temperature. Look for these signs of
        readiness, not just the clock:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Dough is 50-75% larger than at the start</li>
        <li>Edges are domed and puffy, not flat</li>
        <li>Bubbles visible on the surface and sides</li>
        <li>Jiggles when you shake the bowl</li>
      </ul>
      <p className="mb-4">
        Warmer kitchens (75°F+) finish in 3 hours. Cooler kitchens (68°F) take 5-6 hours. Don't go
        by time alone, go by feel.
      </p>

      <h2 className="mt-10 mb-3">Bake Day (Afternoon)</h2>
      <p className="mb-4"><strong>2:00 PM — Pre-shape</strong></p>
      <p className="mb-4">
        Tip the dough onto an unfloured counter. Using a bench scraper (or a large spatula), shape
        into a loose round. Let it rest 20-30 minutes, uncovered. This relaxes the gluten before
        final shaping.
      </p>
      <p className="mb-4"><strong>2:30 PM — Final shape</strong></p>
      <p className="mb-4">
        Flip the dough, gently tighten into a boule (round) or batard (oval). Place seam-side up
        in a floured banneton or a bowl lined with a floured tea towel. Cover with a shower cap
        or beeswax wrap.
      </p>
      <p className="mb-4"><strong>2:45 PM — Cold retard (optional but recommended)</strong></p>
      <p className="mb-4">
        Place the shaped dough in the fridge (35-40°F). Cold retarding for 8-16 hours develops
        deeper flavor, easier scoring, and a more open crumb. Most bakers start the cold retard
        at this time and bake the next morning.
      </p>

      <h2 className="mt-10 mb-3">Bake Day (Evening) OR Next Morning</h2>
      <p className="mb-4"><strong>6:00 PM (same day) OR 6:00 AM (next day) — Preheat</strong></p>
      <p className="mb-4">
        Place a Dutch oven (or any heavy oven-safe pot with lid) on the middle rack. Preheat at
        500°F (260°C) for at least 45 minutes. A screaming hot Dutch oven is the single biggest
        upgrade you can make to your bread.
      </p>
      <p className="mb-4"><strong>6:45 PM / 6:45 AM — Score and load</strong></p>
      <p className="mb-4">
        Take the dough out of the fridge. Flip onto a piece of parchment paper. Score with a
        single confident cut at 30-45 degrees, about 1/2 inch deep. Lower the dough (on the
        parchment) into the hot pot using the paper as a sling. Cover with the lid.
      </p>
      <p className="mb-4"><strong>Bake</strong></p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>20 minutes covered at 500°F (steam trapped, oven spring)</li>
        <li>20 minutes uncovered at 450°F (browning and crust)</li>
      </ul>
      <p className="mb-4">
        Internal temperature should reach 205-210°F (96-99°C) for a fully baked loaf.
      </p>

      <h2 className="mt-10 mb-3">Cool and Eat</h2>
      <p className="mb-4">
        <strong>Cool on a wire rack for at least 1 hour before cutting.</strong> Cutting too early
        leaves the crumb gummy because the crumb is still setting. The hardest part of sourdough
        is the wait, but it is worth it.
      </p>

      <h2 className="mt-10 mb-3">The Two Variables That Matter Most</h2>
      <p className="mb-4">
        1. <strong>Bulk fermentation time</strong> (temperature-driven). Too short and the crumb
        is dense. Too long and it collapses. Aim for 50-75% rise and jiggly edges.
      </p>
      <p className="mb-4">
        2. <strong>Bulk temperature</strong>. Warmer dough ferments faster; cooler dough ferments
        slower. The recipe above assumes 72°F. Adjust timing up or down by 30 minutes per 2°F
        from that baseline.
      </p>

      <h2 className="mt-10 mb-3">If You Skip the Cold Retard</h2>
      <p className="mb-4">
        You can bake the same day at around 6:00 PM. Skip the fridge step and let the shaped loaf
        proof at room temperature for 2-3 hours instead, until it passes the poke test (a floured
        finger pressed gently leaves an indent that slowly springs back). Bake straight from room
        temp. The crumb will be slightly less complex than the cold-retard version but still
        excellent.
      </p>

      <h2 className="mt-10 mb-3">The Day After</h2>
      <p className="mb-4">
        Store leftover bread cut-side down on a wooden board, or in a paper bag. Sourdough stays
        fresh for 2-3 days at room temperature because of its natural acidity. For longer
        storage, slice and freeze in a zip bag; toast directly from frozen.
      </p>

      <h2 className="mt-10 mb-3">Your Turn</h2>
      <p className="mb-4">
        Print this page, set alarms on your phone, and bake. After 2-3 rounds you will not need
        the timeline anymore. Your hands will know. For hydration, ratios, and baker's percentage
        math, our{" "}
        <Link href="/" className="text-brand-brown font-medium">
          free calculator
        </Link>{" "}
        keeps every bake consistent.
      </p>
    </article>
  );
}
