import Link from "next/link";

export const metadata = {
  title: "Rye Sourdough: A Beginner's Guide to Dark, Flavorful, Traditional Bread",
  description: "Rye sourdough is a different beast from wheat. Here's how to work with rye's unique properties for dark, moist, intensely flavored bread.",
  keywords: ["rye sourdough", "rye sourdough recipe", "rye bread recipe", "rye flour sourdough", "traditional rye bread"],
};

export default function RyeSourdough() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">Rye Sourdough: A Beginner's Guide to Dark, Flavorful, Traditional Bread</h1>
      <p className="text-brand-muted text-sm mb-8">📖 8 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        Rye sourdough is the original. Before wheat bread was common in Northern Europe, rye was
        the staple. It is denser, darker, and more intensely flavored than wheat sourdough. It is
        also more forgiving in some ways and less in others. Here is what to know.
      </p>

      <h2 className="mt-10 mb-3">Why Rye is Different</h2>
      <p className="mb-4">
        Rye flour contains <strong>pentosans</strong>, complex carbohydrates that absorb 5-10x
        their weight in water. This is why rye dough feels sticky and dense. It is also why rye
        bread stays moist for days (the pentosans hold the water). But these same pentosans
        <strong>inhibit gluten development</strong>. Rye has very little of its own gluten. So a
        pure-rye bread does not have the same structure as wheat.
      </p>

      <h2 className="mt-10 mb-3">Three Types of Rye Bread</h2>

      <h3 className="mt-6 mb-2">1. Light Rye (20-30% rye, 70-80% wheat)</h3>
      <p className="mb-4">
        Easiest to make. Looks like wheat sourdough but with a slight rye flavor. Good for first
        attempts at rye. The wheat provides the structure, the rye provides the flavor.
      </p>

      <h3 className="mt-6 mb-2">2. Medium Rye (50% rye, 50% wheat)</h3>
      <p className="mb-4">
        More distinctly rye. Denser crumb, more complex flavor. The wheat still provides some
        structure. This is the most popular ratio for home bakers.
      </p>

      <h3 className="mt-6 mb-2">3. Pure Rye (100% rye)</h3>
      <p className="mb-4">
        Traditional German, Polish, and Russian rye bread. Dense, dark, intensely flavored. Very
        different from wheat. Not for beginners but worth working toward.
      </p>

      <h2 className="mt-10 mb-3">A Beginner-Friendly Recipe (50/50 Blend)</h2>
      <p className="mb-4">
        <strong>Levain:</strong> 30g active rye starter, 60g light rye flour, 60g water. Mix,
        cover, ferment 6-8 hours at room temperature.
      </p>
      <p className="mb-4">
        <strong>Dough:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>250g bread flour</li>
        <li>250g light rye flour</li>
        <li>325g water (65% hydration; rye absorbs more so go lower than wheat)</li>
        <li>150g levain (above)</li>
        <li>10g salt (2%)</li>
      </ul>
      <p className="mb-4">
        Mix flour and water, rest 30 minutes (autolyse). Add levain and salt. Mix by hand or stand
        mixer until incorporated. The dough will be sticky. This is normal.
      </p>

      <h2 className="mt-10 mb-3">Working with Sticky Rye</h2>
      <p className="mb-4">
        Rye is <strong>sticky</strong>. Way stickier than wheat. Do not try to make it smooth like
        wheat dough. Use a wet bench scraper. Use wet hands. Resist the urge to add more flour.
        Stickiness is the nature of rye. Embrace it.
      </p>

      <h2 className="mt-10 mb-3">Bulk Fermentation</h2>
      <p className="mb-4">
        3-4 hours at 75-78°F. The dough will not rise dramatically the way wheat does. A 50%
        rise is the maximum. Look for: bubbles on the surface, a slight jiggle, and a tangy
        aroma. The visual cues are subtler than wheat.
      </p>

      <h2 className="mt-10 mb-3">Shaping</h2>
      <p className="mb-4">
        Shape into a tight boule or batard. Wet hands are essential. The dough will be slack.
        Pre-shape, rest 20 minutes, then final shape. The tension in the final shape is what
        holds the bread in the oven.
      </p>

      <h2 className="mt-10 mb-3">Baking</h2>
      <p className="mb-4">
        Score with a single deep cut. Bake at 450°F in a Dutch oven, 20 minutes covered, 25
        minutes uncovered. The internal temperature should reach 205-210°F. Rye is done at a
        slightly lower internal temperature than wheat.
      </p>

      <h2 className="mt-10 mb-3">The Result</h2>
      <p className="mb-4">
        A dark, moist, dense crumb with deep tangy flavor. The crust is typically darker than
        wheat (rye sugars caramelize more). It keeps for 5-7 days at room temperature due to the
        high moisture retention. The flavor deepens with age.
      </p>
      <p className="mb-4">
        For the ratios in this recipe, use our{" "}
        <Link href="/" className="text-brand-brown font-medium">hydration calculator</Link>{" "}
        (set 50/50 blend in the calculator).
      </p>
    </article>
  );
}
