import Link from "next/link";

export const metadata = {
  title: "Baker's Percentage: How to Convert Any Recipe (With Calculator)",
  description: "Master baker's percentage in 5 minutes. Convert any bread recipe, scale to your loaf size, and never guess hydration again.",
  keywords: ["bakers percentage", "bakers percentage calculator", "convert to bakers percentage", "bread formula", "sourdough ratio"],
};

export default function BakersPercentage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">Baker's Percentage: How to Convert Any Recipe (With Calculator)</h1>
      <p className="text-brand-muted text-sm mb-8">📖 8 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        Baker's percentage is the universal language of bread. Every professional bakery in the world
        uses it. Once you understand it, you can read any bread recipe from any country, scale it to
        any loaf size, and adjust hydration to your exact flour. This guide gives you everything
        you need in 8 minutes.
      </p>

      <h2 className="mt-10 mb-3">The Basic Concept</h2>
      <p className="mb-4">
        Every ingredient in bread is expressed as a percentage of the flour weight, which is always
        100%. Water at 70% means 70g of water for every 100g of flour. Salt at 2% means 2g of salt for
        every 100g of flour. This makes recipes infinitely scalable. To make a 500g loaf or a 5kg
        loaf, you change the flour and the math does the rest.
      </p>

      <h2 className="mt-10 mb-3">A Real Example</h2>
      <p className="mb-4">
        A standard sourdough boule uses 100% flour, 75% water, 20% starter, 2% salt. For a 500g flour
        batch, that translates to:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Flour: 500g</li>
        <li>Water: 375g (75% of 500)</li>
        <li>Starter: 100g (20% of 500)</li>
        <li>Salt: 10g (2% of 500)</li>
        <li>Total dough: 985g</li>
      </ul>
      <p className="mb-4">
        For a 1000g flour batch, just double everything. For a 300g flour batch, halve it. The
        ratios stay identical.
      </p>

      <h2 className="mt-10 mb-3">How to Convert Any Recipe</h2>
      <p className="mb-4">
        Most home recipes give ingredients in grams or cups. To convert to baker's percentage, follow
        these 3 steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li>Convert all ingredients to grams. 1 cup of flour is roughly 120g, water is 240g, salt is 5g per teaspoon.</li>
        <li>Pick the flour weight as your baseline (100% = flour grams).</li>
        <li>Divide every other ingredient's weight by the flour weight, then multiply by 100.</li>
      </ol>
      <p className="mb-4">
        Example: a recipe has 400g flour, 300g water, 8g salt. Water is 300/400 = 75%. Salt is 8/400 = 2%.
        That is a 75% hydration recipe with 2% salt. Clean and unambiguous.
      </p>

      <h2 className="mt-10 mb-3">Why This Matters</h2>
      <p className="mb-4">
        When you read a recipe as percentages, the recipe reveals its character. A 65% hydration is a
        tight, chewy dough. 80% is slack and open-crumbed. 1.8% salt is mild. 2.2% is pronounced.
        Volume, hydration, crumb, color, and shelf life all follow from these numbers. You stop
        following recipes blindly and start understanding them.
      </p>

      <h2 className="mt-10 mb-3">Common Conversions (home baker ranges)</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong>Hydration:</strong> 60% (bagels, pretzels) → 75% (standard sourdough) → 85% (open crumb ciabatta)</li>
        <li><strong>Salt:</strong> 1.8% (mild) → 2.0% (standard) → 2.5% (pronounced, longer fermentation)</li>
        <li><strong>Starter:</strong> 10% (younger, faster) → 20% (standard sourdough) → 30% (longer fermentation, more sour)</li>
        <li><strong>Hydration (whole grain):</strong> Add 5% to your base. Whole wheat absorbs more water.</li>
      </ul>

      <h2 className="mt-10 mb-3">Scale Any Recipe</h2>
      <p className="mb-4">
        Once you have the percentages, scaling is free. Want 1.5kg of dough for a large family loaf?
        Find your desired total, subtract the salt and starter, and the rest is flour + water in
        your preferred ratio. Or use our{" "}
        <Link href="/" className="text-brand-brown font-medium">
          hydration calculator
        </Link>
        : enter the flour weight, your hydration percentage, and starter percentage, and the
        calculator gives you the exact gram amounts in one click.
      </p>

      <h2 className="mt-10 mb-3">Why Bakers Use Percentages</h2>
      <p className="mb-4">
        Percentages make recipes portable, comparable, and easy to adjust. A European rye recipe
        and an American sourdough recipe can be compared side by side in percentages even if the
        original gram amounts are wildly different. Once you read in percentages, you can adapt
        any recipe to your flour, your climate, and your schedule. Professional bakers don't even
        think in grams; they think in baker's percentage and only convert to grams when they
        actually mix.
      </p>

      <h2 className="mt-10 mb-3">A Quick Reference Cheat Sheet</h2>
      <p className="mb-4">
        Most home sourdough recipes live in a small range:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Flour 100% (your baseline)</li>
        <li>Water 70-78% (hydration)</li>
        <li>Starter (active, ripe) 20%</li>
        <li>Salt 2%</li>
        <li>Optional: 5-10% whole grain for flavor</li>
      </ul>
      <p className="mb-4">
        Total hydration (water + flour-water in starter) typically lands 72-80%. Start at 75% and
        adjust up or down by 2-3% per bake until you find what you love.
      </p>

      <h2 className="mt-10 mb-3">Put It Into Practice</h2>
      <p className="mb-4">
        Open any sourdough recipe online, convert it to baker's percentage in your head, and
        you'll quickly see what makes it tick. A 70% hydration sandwich loaf and an 80% ciabatta
        will look totally different to you than they did yesterday. Once percentages become
        intuitive, you can design your own breads from scratch.
      </p>
      <p className="mb-4">
        Want to actually bake something with your new percentages? See our 24-hour{" "}
        <Link href="/blog/sourdough-schedule/" className="text-brand-brown font-medium">
          sourdough schedule
        </Link>{" "}
        for a guided day-by-day plan.
      </p>
    </article>
  );
}
