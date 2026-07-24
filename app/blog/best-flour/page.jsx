import Link from "next/link";

export const metadata = {
  title: "Best Flour for Sourdough: A Complete Guide for Home Bakers (2026)",
  description: "Bread flour, all-purpose, whole wheat, rye: which flour makes the best sourdough? A practical guide to choosing flour based on your skill level and bread style.",
  keywords: ["best flour for sourdough", "bread flour vs all purpose", "sourdough flour guide", "what flour for sourdough", "rye sourdough flour"],
};

export default function BestFlour() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">Best Flour for Sourdough: A Complete Guide for Home Bakers</h1>
      <p className="text-brand-muted text-sm mb-8">📖 9 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        Walk into a flour aisle and you face 30+ bags of flour. Which one is right for
        sourdough? The answer depends on what you are baking, your experience level, and what
        flavor you want. Here is the practical guide.
      </p>

      <h2 className="mt-10 mb-3">The Short Answer</h2>
      <p className="mb-4">
        For 90% of home sourdough bakers, a good quality <strong>bread flour with at least 12% protein</strong>
        is the right choice. Brands like King Arthur Bread Flour, Bob's Red Mill Artisan Bread
        Flour, or a local bakery's stone-milled bread flour will all make excellent sourdough. Start
        with one of these and only deviate when you have a specific goal in mind.
      </p>

      <h2 className="mt-10 mb-3">The Four Main Flour Categories</h2>

      <h3 className="mt-6 mb-2">1. Bread Flour (Strong Flour)</h3>
      <p className="mb-4">
        <strong>Protein: 12-14%.</strong> This is the workhorse of sourdough. Higher protein means more
        gluten, which means better structure, better oven spring, and an open crumb. The flavor is
        clean and neutral, which lets the wild yeast flavor of the starter shine through. Most
        artisan bakers exclusively use bread flour. Recommended brands: King Arthur Bread Flour,
        Bob's Red Mill Artisan Bread Flour, Pillsbury Bread Flour, or any local stone-milled bread
        flour.
      </p>

      <h3 className="mt-6 mb-2">2. All-Purpose Flour</h3>
      <p className="mb-4">
        <strong>Protein: 10-12%.</strong> Lower protein means less gluten, which means denser
        crumb. All-purpose works for sourdough but produces a tighter, more sandwich-loaf-style
        result. The texture is softer. It is what most home bakers have in their pantry. If you
        only have AP, it will work but bread flour is better. For sandwiches, AP is fine. For open
        crumb boules, bread flour is better.
      </p>

      <h3 className="mt-6 mb-2">3. Whole Wheat Flour</h3>
      <p className="mb-4">
        <strong>Protein: 13-14%, but with bran and germ.</strong> Whole wheat adds significant flavor
        and nutrition. It also absorbs more water than white flour. The standard advice: substitute
        10-30% of your bread flour with whole wheat for a flavor boost without losing structure. Going
        above 50% whole wheat makes the dough harder to work with. King Arthur Whole Wheat Flour and
        Bob's Red Mill Whole Wheat are reliable.
      </p>

      <h3 className="mt-6 mb-2">4. Rye Flour</h3>
      <p className="mb-4">
        <strong>Protein: 10-12%, but with pentosans.</strong> Rye contains pentosans, which absorb huge
        amounts of water and make the dough sticky. Use 5-20% rye in your sourdough for a deep,
        complex flavor. Pure rye sourdough is traditional in some European countries but very
        different from wheat sourdough. Light rye is milder; medium rye is more intense; pumpernickel
        is intense. Start with 10% if you are new to rye.
      </p>

      <h2 className="mt-10 mb-3">Common Blends and Why They Work</h2>
      <p className="mb-4">
        Most artisan sourdough uses a blend, not a single flour. The classic blend is 80% bread flour
        + 20% whole wheat or rye. The bread flour provides gluten structure. The whole wheat or
        rye provides flavor and nutrition. The result is a balanced loaf with good crumb and complex
        flavor.
      </p>
      <p className="mb-4">
        For a more interesting flavor: 70% bread flour + 20% whole wheat + 10% rye. For a softer
        sandwich loaf: 100% bread flour. For whole grain: 60% bread flour + 30% whole wheat + 10% rye.
        Experiment to find what you like.
      </p>

      <h2 className="mt-10 mb-3">Flour Brand Recommendations by Budget</h2>
      <p className="mb-4">
        <strong>Budget:</strong> Pillsbury Bread Flour or store brand bread flour (around $3-4 for 5
        lbs). Works fine for basic sourdough.
      </p>
      <p className="mb-4">
        <strong>Mid-range:</strong> King Arthur Bread Flour or Bob's Red Mill Artisan Bread Flour
        (around $5-7 for 5 lbs). Better quality, more consistent.
      </p>
      <p className="mb-4">
        <strong>Premium:</strong> Local stone-milled bread flour from a regional mill (around $8-12
        for 5 lbs). Best flavor, supports local businesses, often organic.
      </p>
      <p className="mb-4">
        <strong>Specialty:</strong> Italian 00 flour (for pizza-style breads), French Type 55, German
        spelt. These add character but are not necessary for basic sourdough.
      </p>

      <h2 className="mt-10 mb-3">Common Mistakes to Avoid</h2>
      <p className="mb-4">
        <strong>Using cake flour.</strong> Too low protein (7-8%). The dough will not hold its
        shape and the crumb will be dense. Never use cake flour for sourdough.
      </p>
      <p className="mb-4">
        <strong>Using only whole wheat.</strong> Too much bran and germ inhibit gluten development.
        The dough will be heavy and dense. Always blend whole wheat with bread flour.
      </p>
      <p className="mb-4">
        <strong>Mixing brands without testing.</strong> Different brands have different protein
        levels. When switching, expect a 10% difference in dough hydration. Adjust your water
        accordingly. Our <Link href="/" className="text-brand-brown font-medium">free calculator</Link>{" "}
        handles any flour blend.
      </p>

      <h2 className="mt-10 mb-3">The Bottom Line</h2>
      <p className="mb-4">
        Buy a good bread flour. Use it. Make great bread. After you have baked 5-10 loaves, experiment
        with adding 10-20% whole wheat or rye for more complex flavor. The flour aisle at the
        grocery store is a beginning, not a constraint.
      </p>
    </article>
  );
}
