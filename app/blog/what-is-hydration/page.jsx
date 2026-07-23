import Link from "next/link";
import Comments from "@/components/Comments";

export const metadata = {
  title: "What is Sourdough Hydration? A Complete Guide (2026)",
  description: "Hydration is the most important number in sourdough baking. Learn what it means, how to calculate it, and how to choose the right level for your bread.",
};

export default function WhatIsHydration() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">What is Sourdough Hydration?</h1>
      <p className="text-brand-muted text-sm mb-8">📖 8 min read · Updated 2026</p>

      <p className="text-lg mb-6">
        If you have ever wondered why some sourdough breads are dense and chewy while others are light and full
        of big holes, the answer is almost always <strong>hydration</strong>. It is the single most important
        variable in your dough, and understanding it will transform your baking.
      </p>

      <h2 className="mt-10 mb-3">Hydration, Simply</h2>
      <p className="mb-4">
        Hydration is the ratio of water to flour in your dough, expressed as a percentage. The formula is:
      </p>
      <p className="bg-brand-tan p-4 rounded-lg font-mono mb-6">
        Hydration % = (Water Weight ÷ Flour Weight) × 100
      </p>
      <p className="mb-4">
        So if you have 500g of flour and 375g of water, your hydration is (375 ÷ 500) × 100 = 75%.
      </p>

      <h2 className="mt-10 mb-3">How Hydration Affects Your Bread</h2>
      <p className="mb-4">Different hydration levels produce dramatically different results:</p>

      <h3 className="mt-6 mb-2">Low Hydration (50–65%)</h3>
      <p className="mb-4">
        Dense, tight crumb. Easy to shape and handle. Perfect for bagels, pretzels, and pizza where you want
        a chewy bite.
      </p>

      <h3 className="mt-6 mb-2">Medium Hydration (70–80%)</h3>
      <p className="mb-4">
        The classic sourdough range. Balanced texture, easier to handle than high hydration, but produces a
        more open crumb than stiff doughs.
      </p>

      <h3 className="mt-6 mb-2">High Hydration (80–100%)</h3>
      <p className="mb-4">
        Very open crumb with large, irregular holes. Challenging to shape but produces the artisan look
        associated with the best bakeries. Requires longer fermentation and stronger flour.
      </p>

      <h2 className="mt-10 mb-3">How to Choose Your Hydration</h2>
      <p className="mb-4">
        If you are a beginner, start at 70–75%. As you gain confidence, push toward 80% for more open crumb.
        Professional bakers often go to 85–100% for showstopping loaves.
      </p>

      <p className="mb-4">
        Use our <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link> to
        find the exact water, salt, and starter amounts for any recipe.
      </p>

      <h2 className="mt-10 mb-3">The Bottom Line</h2>
      <p className="mb-4">
        Hydration is not a number to memorize — it is a dial you turn to get the bread you want. Lower for
        structure, higher for openness. The rest is practice.
      </p>
    </article>
  );
}
