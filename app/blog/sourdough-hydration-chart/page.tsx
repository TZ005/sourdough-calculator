import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Sourdough Hydration Chart: 50% to 100% Explained",
  description: "What 50%, 70%, 80%, and 100% hydration look like in the bowl and in the crumb, with a full chart and beginner guidance.",
  keywords: ["sourdough hydration chart", "sourdough hydration levels", "baker's percentage chart"],
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/sourdough-hydration-chart/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Sourdough Hydration Chart: 50% to 100% Explained",
    description: "What 50%, 70%, 80%, and 100% hydration look like in the bowl and in the crumb, with a full chart and beginner guidance.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/sourdough-hydration-chart/",
    publishedTime: "2026-08-02",
    modifiedTime: "2026-08-02",
    images: [
      {
        url: "/images/blog/hydration-guide.webp",
        alt: "Sourdough hydration chart showing water to flour ratios from 50% to 100%",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough Hydration Chart: 50% to 100% Explained",
    description: "What 50%, 70%, 80%, and 100% hydration look like in the bowl and in the crumb, with a full chart and beginner guidance.",
    images: ["/images/blog/hydration-guide.webp"],
  },
};

export default function HydrationChart() {
  return (
    <>
      <ArticleSchema
        slug="sourdough-hydration-chart"
        title="Sourdough Hydration Chart: 50% to 100% Explained"
        description="What 50%, 70%, 80%, and 100% hydration look like in the bowl and in the crumb, with a full chart and beginner guidance."
        image="/images/blog/hydration-guide.webp"
        datePublished="2026-08-02"
        dateModified="2026-08-02"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What hydration is best for a beginner sourdough loaf?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "70-75% is the sweet spot for most beginners: wet enough for an open crumb, dry enough to shape without excessive sticking."
                }
              },
              {
                "@type": "Question",
                "name": "What does 100% hydration mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It means equal weights of water and flour, such as 500g of water with 500g of flour. The dough is very wet and is usually used for ciabatta or focaccia."
                }
              },
              {
                "@type": "Question",
                "name": "How do I calculate sourdough hydration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Divide the water weight by the flour weight and multiply by 100. For example, 375g of water with 500g of flour is 75% hydration."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/hydration-guide.webp" type="image/webp" />
          <img
            src="/images/blog/hydration-guide.webp"
            alt="Sourdough hydration chart showing water to flour ratios from 50% to 100%"
            width="1200"
            height="800"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Sourdough Hydration Chart: 50% to 100% Explained</h1>
        <p className="text-brand-muted text-sm mb-8">📖 8 min read · Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          Sourdough hydration is the ratio of water to flour in your dough. In the chart below, 50% means
          a stiff, easy dough and 100% means a wet, slack dough. Most home bakers should start at 70-75%
          and move up only as their shaping skills improve.
        </p>

        <h2 className="mt-10 mb-3">What Is Sourdough Hydration?</h2>
        <p className="mb-4">
          Hydration is the water weight divided by the flour weight, expressed as a percentage. A 75%
          hydration dough uses 375g of water for every 500g of flour. It is the single most important
          number in a sourdough recipe because it controls dough strength, crumb openness, and how the
          dough feels in your hands.
        </p>

        <h2 className="mt-10 mb-3">What Does Each Hydration Level Look Like?</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-[#E8DDC8]">
            <thead>
              <tr className="bg-brand-tan">
                <th className="border border-[#E8DDC8] px-3 py-2">Hydration</th>
                <th className="border border-[#E8DDC8] px-3 py-2">Dough feel</th>
                <th className="border border-[#E8DDC8] px-3 py-2">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#E8DDC8] px-3 py-2">50-60%</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Stiff, dry, easy to shape</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Bagels, pretzels, pizza</td>
              </tr>
              <tr>
                <td className="border border-[#E8DDC8] px-3 py-2">65-70%</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Firm but pliable</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Sandwich loaves, beginners</td>
              </tr>
              <tr>
                <td className="border border-[#E8DDC8] px-3 py-2">75%</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Tacky, soft, holds shape</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Classic sourdough loaf</td>
              </tr>
              <tr>
                <td className="border border-[#E8DDC8] px-3 py-2">80-85%</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Wet, needs strong gluten</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Artisan open crumb</td>
              </tr>
              <tr>
                <td className="border border-[#E8DDC8] px-3 py-2">90-100%</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Very wet, spreads in the pan</td>
                <td className="border border-[#E8DDC8] px-3 py-2">Ciabatta, focaccia</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 mb-3">What Hydration Should Beginners Use?</h2>
        <p className="mb-4">
          Start at 70-75%. This range gives you a crumb that still looks like artisan bread, but the dough
          is firm enough to shape with basic technique. If the dough is too sticky, drop to 68% for a few
          bakes before working back up.
        </p>

        <h2 className="mt-10 mb-3">How Do You Calculate Hydration?</h2>
        <p className="mb-4">
          Use the formula: water weight divided by flour weight, multiplied by 100. For example, 375g of
          water with 500g of flour is 75%. Our{" "}
          <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link>{" "}
          does the math for any flour weight.
        </p>

        <h2 className="mt-10 mb-3">Why Does High Hydration Make an Open Crumb?</h2>
        <p className="mb-4">
          More water makes the dough more extensible and the gas pockets larger during fermentation. It
          also requires stronger gluten, so high hydration only works well with bread flour and careful
          stretch and folds.
        </p>

        <h2 className="mt-10 mb-3">Sourdough Hydration FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">What hydration is best for a beginner sourdough loaf?</h3>
          <p>70-75% is the sweet spot for most beginners: wet enough for an open crumb, dry enough to shape without excessive sticking.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">What does 100% hydration mean?</h3>
          <p>It means equal weights of water and flour, such as 500g of water with 500g of flour. The dough is very wet and is usually used for ciabatta or focaccia.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">How do I calculate sourdough hydration?</h3>
          <p>Divide the water weight by the flour weight and multiply by 100. For example, 375g of water with 500g of flour is 75% hydration.</p>
        </div>

        <h2 className="mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><a href="https://www.kingarthurbaking.com/learn/guides/sourdough" target="_blank" rel="nofollow noopener">King Arthur Baking: Sourdough Guide</a></li>
          <li><a href="https://www.theperfectloaf.com/guides/the-ultimate-guide-to-bread-dough-bulk-fermentation/" target="_blank" rel="nofollow noopener">The Perfect Loaf: The Ultimate Guide to Bread Dough Bulk Fermentation</a></li>
        </ul>

        <NextPostNav slug="sourdough-hydration-chart" />
      </article>
    </>
  );
}
