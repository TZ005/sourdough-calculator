import Link from "next/link";

export const metadata = {
  title: "Sourdough Bulk Fermentation: A Complete Guide to Timing and Temperature (2026)",
  description: "When to end bulk fermentation: visual cues, temperature effects, and timing guidelines. Stop guessing and start baking by feel.",
  keywords: ["sourdough bulk fermentation", "bulk fermentation time", "sourdough rise time", "when to end bulk", "sourdough bulk fermentation temperature"],
};

export default function BulkFermentation() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">Sourdough Bulk Fermentation: A Complete Guide to Timing and Temperature</h1>
      <p className="text-brand-muted text-sm mb-8">📖 9 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        Bulk fermentation is the most critical and most misunderstood step in sourdough. Get it
        right and your bread is light, open, and tangy. Get it wrong and your bread is dense,
        sour, or deflated. Here is how to know when to end bulk and shape.
      </p>

      <h2 className="mt-10 mb-3">What Bulk Fermentation Does</h2>
      <p className="mb-4">
        During bulk fermentation, the wild yeast and bacteria in your starter consume the flour's
        sugars, producing carbon dioxide (which inflates the dough) and organic acids (which give
        the bread its flavor). Enzymes also break down some of the gluten and starches, which
        creates the bread's open crumb and tender texture.
      </p>

      <h2 className="mt-10 mb-3">The Two Variables That Matter</h2>

      <h3 className="mt-6 mb-2">1. Temperature</h3>
      <p className="mb-4">
        Temperature is the most important factor. Warmer dough ferments faster, cooler dough
        ferments slower. Warmer dough ferments faster, cooler dough slower. A dough at 75°F might bulk for 3-4 hours, while the same dough at 65°F might need 5-7 hours.
      </p>

      <h3 className="mt-6 mb-2">2. Time</h3>
      <p className="mb-4">
        Time alone is not the right way to judge readiness. Dough at different temperatures
        ferments at different rates. Instead of a clock, watch for visual cues.
      </p>

      <h2 className="mt-10 mb-3">Visual Cues for Readiness</h2>
      <p className="mb-4">
        Look for these 5 signs that bulk fermentation is done:
      </p>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong>50-75% rise</strong>: The dough has grown to about 1.5-1.75x its original volume. Not 100% doubled. Bulk is done at the first signs of significant rise, not when the dough has fully doubled.</li>
        <li><strong>Domed top</strong>: The top of the dough has rounded upward, not flat. A flat or concave surface means the dough is deflated or over-proofed.</li>
        <li><strong>Bubbles on sides and surface</strong>: You will see irregular bubbles, especially on the sides of the bowl. These are the CO2 pockets produced by the yeast.</li>
        <li><strong>Jiggle test</strong>: Gently shake the bowl. The dough should jiggle like jelly. If it holds its shape, it is under-proofed. If it collapses, it is over-proofed.</li>
        <li><strong>Aromatic</strong>: The dough smells yeasty and slightly tangy, but not sharp vinegar. If it smells like alcohol, it is over-proofed.</li>
      </ol>

      <h2 className="mt-10 mb-3">Temperature Reference</h2>

      <h3 className="mt-6 mb-2">Cool Environment (65-68°F / 18-20°C)</h3>
      <p className="mb-4">
        Bulk time: 4-6 hours. Use for slow, complex flavor development. Best in winter or in homes
        without heating.
      </p>

      <h3 className="mt-6 mb-2">Room Temperature (70-74°F / 21-23°C)</h3>
      <p className="mb-4">
        Bulk time: 3-4 hours. Standard timing for most sourdough. Most home bakers fall in this
        range.
      </p>

      <h3 className="mt-6 mb-2">Warm Environment (75-80°F / 24-27°C)</h3>
      <p className="mb-4">
        Bulk time: 2-3 hours. Watch carefully. The dough ferments fast at this temperature and can
        easily over-proof. Summer baking in warm homes.
      </p>

      <h2 className="mt-10 mb-3">Adjusting Your Schedule</h2>
      <p className="mb-4">
        To make bulk end at a specific time, work backward:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Want to bake at 7 PM? End bulk at 4 PM. Mix at noon. Aim for 4-5 hours bulk at 70-74°F.</li>
        <li>Want to bake in the morning? Mix the night before, bulk overnight in the fridge at 38°F for 12-16 hours. This is the cold retard method.</li>
        <li>Want flexibility? Mix in the morning, bulk during the day at room temp, shape in the evening, retard overnight, bake next morning.</li>
      </ul>

      <h2 className="mt-10 mb-3">Common Mistakes</h2>
      <p className="mb-4">
        <strong>Cutting bulk too short:</strong> The dough is dense and the crumb is tight. The
        flavor is flat because fermentation is incomplete.
      </p>
      <p className="mb-4">
        <strong>Cutting bulk too long:</strong> The dough collapses when shaped. The flavor is
        sharp and vinegar-like. The crust forms poorly. Total loss.
      </p>
      <p className="mb-4">
        <strong>Ignoring temperature:</strong> The dough behaves differently in summer than in
        winter. Use the visual cues, not the clock.
      </p>

      <h2 className="mt-10 mb-3">Tracking Bulk with a Notes App</h2>
      <p className="mb-4">
        After 10 bakes, you will start to know your dough. But before that, keep a simple log:
        room temp, hydration, bulk start time, bulk end time, rise percentage, final result.
        Within 10 bakes, you will have a dataset that helps you predict. Our{" "}
        <Link href="/" className="text-brand-brown font-medium">hydration calculator</Link>{" "}
        helps with the hydration part of the equation.
      </p>
    </article>
  );
}
