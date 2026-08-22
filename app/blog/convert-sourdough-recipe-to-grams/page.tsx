import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "How to Convert Any Sourdough Recipe to Grams (the Easy Way)",
  description: "Convert any sourdough recipe to grams in 3 minutes. Includes a free printable conversion chart for the 12 most common sourdough ingredients (flour, water, salt, starter, etc.).",
  keywords: ["convert sourdough recipe to grams", "sourdough recipe conversion", "cups to grams sourdough", "ounces to grams sourdough", "bakers percentage conversion"],
  alternates: { canonical: "https://sourdough-hydrationcalculator.com/blog/convert-sourdough-recipe-to-grams/" },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "How to Convert Any Sourdough Recipe to Grams (the Easy Way)",
    description: "Convert any sourdough recipe to grams in 3 minutes. Includes a free printable conversion chart for the 12 most common sourdough ingredients.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/convert-sourdough-recipe-to-grams/",
    publishedTime: "2026-08-22",
    modifiedTime: "2026-08-22",
    images: [{ url: "/images/blog/hydration-guide.webp", alt: "Sourdough ingredients on a digital kitchen scale" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Convert Any Sourdough Recipe to Grams (the Easy Way)",
    description: "Convert any sourdough recipe to grams in 3 minutes. Includes a free printable conversion chart for 12 common sourdough ingredients.",
    images: ["/images/blog/hydration-guide.webp"],
  },
};

export default function ConvertSourdoughRecipeToGrams() {
  return (
    <>
      <ArticleSchema
        slug="convert-sourdough-recipe-to-grams"
        title="How to Convert Any Sourdough Recipe to Grams (the Easy Way)"
        description="Convert any sourdough recipe to grams in 3 minutes. Includes a free printable conversion chart for the 12 most common sourdough ingredients (flour, water, salt, starter, etc.)."
        image="/images/blog/hydration-guide.webp"
        datePublished="2026-08-22"
        dateModified="2026-08-22"
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">-</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/best-flour.webp" type="image/webp" />
          <img
            src="/images/blog/best-flour.webp"
            alt="Sourdough ingredients on a digital kitchen scale, showing flour, water, salt and starter measured in grams"
            width="1200"
            height="630"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">How to Convert Any Sourdough Recipe to Grams (the Easy Way)</h1>
        <p className="text-brand-muted text-sm mb-8">7 min read - Published August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          If you have ever tried a sourdough recipe that lists flour in cups and water in ounces, you know how frustrating it is to scale. A "cup of flour" can weigh anywhere from 110g to 160g depending on how tightly you pack it, and an "ounce of water" requires a conversion you do not want to do in your head at 7am. This guide shows you how to convert any sourdough recipe to grams in about three minutes, and why you should always bake by weight, not volume.
        </p>

        <h2 className="mt-10 mb-3">Why Bake by Weight, Not Volume</h2>
        <p className="mb-4">
          Three reasons bakers measure by grams:
        </p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong>Accuracy.</strong> A "cup" of flour varies by 30% depending on how you scoop. A digital scale is consistent to within 1 gram.</li>
          <li><strong>Hydration math only works in grams.</strong> Hydration is a ratio of water weight to flour weight. You cannot compute it from cups.</li>
          <li><strong>Easy scaling.</strong> Want to halve a 1000g recipe? Just halve every number. With cups and ounces, scaling gets messy fast.</li>
        </ol>

        <h2 className="mt-10 mb-3">The Quick Conversion Method (3 minutes)</h2>
        <p className="mb-4">
          Follow these three steps for any recipe.
        </p>
        <h3 className="mt-6 mb-2">Step 1: Convert the flour to grams</h3>
        <p className="mb-4">
          Take the flour amount (in cups) and multiply by <strong>120g per cup</strong>. This is the standard for all-purpose and bread flour. Whole wheat and rye are similar (118-125g/cup). If the recipe lists flour in ounces, multiply ounces by <strong>28.35</strong>.
        </p>
        <p className="mb-4">
          Example: 4 cups flour = 4 x 120 = <strong>480g flour</strong>.
        </p>

        <h3 className="mt-6 mb-2">Step 2: Convert the hydration percentage to water weight</h3>
        <p className="mb-4">
          Most recipes list hydration as a percentage (75%, 80%, etc.). Once you have the flour in grams, the water weight is just flour times hydration.
        </p>
        <p className="mb-4">
          Example: 480g flour at 75% hydration = 480 x 0.75 = <strong>360g water</strong>.
        </p>
        <p className="mb-4">
          If the recipe gives water directly (in cups, ounces, or milliliters), use the table below or our <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link> to handle the math.
        </p>

        <h3 className="mt-6 mb-2">Step 3: Convert salt and starter to grams</h3>
        <p className="mb-4">
          Salt is always given as a percentage of flour weight. Starter is given as a percentage of flour weight. Both convert the same way: flour times percentage.
        </p>
        <p className="mb-4">
          Example with our 480g flour base: 2% salt = 480 x 0.02 = <strong>9.6g salt</strong>. 20% starter = 480 x 0.20 = <strong>96g starter</strong>.
        </p>

        <h2 className="mt-10 mb-3">Sourdough Ingredient Conversion Chart</h2>
        <p className="mb-4">
          Save this table. Print it. Tape it inside your flour bin.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-brand-tan">
                <th className="border border-brand-tan/40 px-4 py-2 text-left">Ingredient</th>
                <th className="border border-brand-tan/40 px-4 py-2 text-left">1 cup (US)</th>
                <th className="border border-brand-tan/40 px-4 py-2 text-left">1 oz (US)</th>
                <th className="border border-brand-tan/40 px-4 py-2 text-left">1 tbsp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">All-purpose flour</td>
                <td className="border border-brand-tan/40 px-4 py-2">120 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">7.5 g</td>
              </tr>
              <tr className="bg-brand-tan/20">
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Bread flour</td>
                <td className="border border-brand-tan/40 px-4 py-2">120 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">7.5 g</td>
              </tr>
              <tr>
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Whole wheat flour</td>
                <td className="border border-brand-tan/40 px-4 py-2">120 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">7.5 g</td>
              </tr>
              <tr className="bg-brand-tan/20">
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Rye flour</td>
                <td className="border border-brand-tan/40 px-4 py-2">102 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">6.4 g</td>
              </tr>
              <tr>
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Water</td>
                <td className="border border-brand-tan/40 px-4 py-2">240 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">15 g</td>
              </tr>
              <tr className="bg-brand-tan/20">
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Whole milk</td>
                <td className="border border-brand-tan/40 px-4 py-2">240 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">15 g</td>
              </tr>
              <tr>
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Active sourdough starter</td>
                <td className="border border-brand-tan/40 px-4 py-2">240 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">15 g</td>
              </tr>
              <tr className="bg-brand-tan/20">
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Sea salt / fine salt</td>
                <td className="border border-brand-tan/40 px-4 py-2">273 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">17 g</td>
              </tr>
              <tr>
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Kosher salt (Diamond Crystal)</td>
                <td className="border border-brand-tan/40 px-4 py-2">240 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">15 g</td>
              </tr>
              <tr className="bg-brand-tan/20">
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Honey / molasses</td>
                <td className="border border-brand-tan/40 px-4 py-2">340 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">21 g</td>
              </tr>
              <tr>
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Olive oil</td>
                <td className="border border-brand-tan/40 px-4 py-2">216 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">13.5 g</td>
              </tr>
              <tr className="bg-brand-tan/20">
                <td className="border border-brand-tan/40 px-4 py-2 font-semibold">Butter (melted)</td>
                <td className="border border-brand-tan/40 px-4 py-2">227 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">28.3 g</td>
                <td className="border border-brand-tan/40 px-4 py-2">14 g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-sm text-brand-muted">
          Note: Salt weights vary dramatically by brand and crystal size. Diamond Crystal kosher salt is about half as salty by weight as Morton kosher or fine sea salt. Always weigh, never measure by volume.
        </p>

        <h2 className="mt-10 mb-3">A Real Conversion: Classic Tartine Recipe</h2>
        <p className="mb-4">
          The famous Tartine country loaf recipe (per their book) calls for:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>1000g bread flour</li>
          <li>700g water (70%)</li>
          <li>200g active starter (20%)</li>
          <li>20g fine sea salt (2%)</li>
        </ul>
        <p className="mb-4">
          Already in grams - no conversion needed. That is why every serious sourdough recipe online now uses grams. <Link href="/blog/best-sourdough-baguettes/" className="text-brand-brown font-medium">Our baguette recipe</Link> is the same way.
        </p>
        <p className="mb-4">
          If you find a recipe in cups, here is the conversion for a 4-cup loaf:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>4 cups bread flour = <strong>480g</strong></li>
          <li>Hydration 75% = <strong>360g water</strong></li>
          <li>20% starter = <strong>96g</strong></li>
          <li>2% salt = <strong>9.6g</strong></li>
        </ul>
        <p className="mb-4">
          Total dough: <strong>945.6g</strong> - one medium loaf. Scale up or down with our <Link href="/" className="text-brand-brown font-medium">hydration calculator</Link>.
        </p>

        <h2 className="mt-10 mb-3">Common Conversion Mistakes</h2>
        <p className="mb-4">
          Three traps beginners fall into:
        </p>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li><strong>Measuring flour by volume.</strong> A "cup" can be off by 50g. Always weigh flour for sourdough - the difference between a great loaf and a brick is often 30g of flour.</li>
          <li><strong>Converting salt by volume.</strong> Different salt brands have wildly different crystal densities. A teaspoon of Diamond Crystal is about 5g; a teaspoon of fine sea salt is about 6g. Always weigh salt.</li>
          <li><strong>Forgetting to subtract starter flour.</strong> When a recipe says "20% starter," that 20% already contains flour and water in roughly equal parts. Most home recipes ignore this, but if you want precise baker's percentage accounting, see our <Link href="/blog/bakers-percentage/" className="text-brand-brown font-medium">baker's percentage guide</Link>.</li>
        </ol>

        <h2 className="mt-10 mb-3">Use the Free Calculator</h2>
        <p className="mb-6">
          Skip the math. Our <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link> does the conversion for you: type in cups, ounces, or grams of any ingredient and get the exact gram weights plus baker's percentage.
        </p>

        <div className="bg-brand-tan p-6 rounded-lg my-8">
          <p className="font-bold text-lg mb-2">Quick conversion shortcut</p>
          <p className="mb-3">Type 4 cups flour into the calculator, pick grams in the unit selector, and you get 480g flour + 360g water at 75% hydration. Done.</p>
          <Link href="/" className="inline-block bg-brand-brown text-white px-5 py-2 rounded-lg font-medium hover:bg-brand-brown/90">Open Hydration Calculator -</Link>
        </div>

        <NextPostNav slug="convert-sourdough-recipe-to-grams" />
      </article>
    </>
  );
}
