import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";




export const metadata: Metadata = {
  title: "Sourdough Bulk Fermentation: Timing and Temperature",
  description: "When to end sourdough bulk fermentation: 5 visual cues, temperature timing from 65-80°F, and common mistakes that make bread dense, flat, or sour.",
  keywords: ["sourdough bulk fermentation", "bulk fermentation time", "sourdough bulk fermentation temperature"],

  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/bulk-fermentation/",
  },
  openGraph: {
    title: "Sourdough Bulk Fermentation: Timing and Temperature",
    description: "When to end sourdough bulk fermentation: 5 visual cues, temperature timing from 65-80°F, and common mistakes that make bread dense, flat, or sour.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/bulk-fermentation/",
    publishedTime: "2026-07-15",
    modifiedTime: "2026-07-25T08:00:00Z",
    images: [
      {
        url: "/images/blog/bulk-fermentation.webp",
        alt: "Sourdough dough rising in a bowl with bubbles during bulk fermentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough Bulk Fermentation: Timing and Temperature",
    description: "When to end sourdough bulk fermentation: 5 visual cues, temperature timing from 65-80°F, and common mistakes that make bread dense, flat, or sour.",
    images: ["/images/blog/bulk-fermentation.webp"],
  },
};

export default function BulkFermentation() {
  

  return (
    
      
    <>

      <ArticleSchema
        slug="bulk-fermentation"
        title="Sourdough Bulk Fermentation: Timing and Temperature"
        description="When to end sourdough bulk fermentation: 5 visual cues, temperature timing from 65-80°F, and common mistakes that make bread dense, flat, or sour."
        image="/images/blog/bulk-fermentation.webp"
        datePublished="2026-07-15"
        dateModified="2026-07-25T08:00:00Z"
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
                "name": "How long should sourdough bulk fermentation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At 70-74°F expect 3-4 hours, at 65-68°F allow 4-6 hours, and at 75-80°F plan for 2-3 hours. Judge readiness by visual cues rather than the clock."
                }
              },
              {
                "@type": "Question",
                "name": "What temperature is best for bulk fermentation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "70-74°F is the sweet spot for most home bakers: flavorful but predictable. Warmer dough ferments faster, while cooler dough develops more acidity."
                }
              },
              {
                "@type": "Question",
                "name": "Should bulk fermentation happen in the fridge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cold bulk fermentation, also called cold retard, slows the dough dramatically so the same step can take 12-16 hours at 38°F. It is a great scheduling tool and builds flavor."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

      <picture>
        <source srcSet="/images/blog/bulk-fermentation.webp" type="image/webp" />
        <img
          src="/images/blog/bulk-fermentation.webp"
          alt="Sourdough dough rising in a bowl with bubbles during bulk fermentation"
          width="1200"
          height="800"
          className="w-full rounded-xl my-8"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      

      <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Sourdough Bulk Fermentation: A Complete Guide to Timing and Temperature</h1>
      <p className="text-brand-muted text-sm mb-8">📖 9 min read · Updated July 2026</p>
      <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

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
        ferments slower. A dough at 75°F might bulk for 3-4 hours, while the same dough at
        65°F might need 5-7 hours.
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

      <h2 className="mt-10 mb-3">Bulk Fermentation at a Glance</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse border border-[#E8DDC8]">
          <thead>
            <tr className="bg-brand-tan">
              <th className="border border-[#E8DDC8] px-3 py-2">Temperature</th>
              <th className="border border-[#E8DDC8] px-3 py-2">Expected bulk time</th>
              <th className="border border-[#E8DDC8] px-3 py-2">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">65-68°F / 18-20°C</td>
              <td className="border border-[#E8DDC8] px-3 py-2">4-6 hours</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Complex flavor and winter kitchens</td>
            </tr>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">70-74°F / 21-23°C</td>
              <td className="border border-[#E8DDC8] px-3 py-2">3-4 hours</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Standard sourdough schedules</td>
            </tr>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">75-80°F / 24-27°C</td>
              <td className="border border-[#E8DDC8] px-3 py-2">2-3 hours</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Fast bakes with careful watching</td>
            </tr>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">38°F / 3°C fridge</td>
              <td className="border border-[#E8DDC8] px-3 py-2">12-16 hours</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Overnight cold retard and scheduling</td>
            </tr>
          </tbody>
        </table>
      </div>

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

      <h2 className="mt-10 mb-3">Bulk Fermentation FAQ</h2>
      <div className="mb-4">
        <h3 className="font-semibold text-brand-brown mb-1">How long should sourdough bulk fermentation take?</h3>
        <p>At 70-74°F expect 3-4 hours, at 65-68°F allow 4-6 hours, and at 75-80°F plan for 2-3 hours. Judge readiness by visual cues rather than the clock.</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-brand-brown mb-1">What temperature is best for bulk fermentation?</h3>
        <p>70-74°F is the sweet spot for most home bakers: flavorful but predictable. Warmer dough ferments faster, while cooler dough develops more acidity.</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-brand-brown mb-1">Should bulk fermentation happen in the fridge?</h3>
        <p>Cold bulk fermentation, also called cold retard, slows the dough dramatically so the same step can take 12-16 hours at 38°F. It is a great scheduling tool and builds flavor.</p>
      </div>

      <h2 className="mt-10 mb-3">Related Reading</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><Link href="/blog/hydration-guide/">Sourdough Hydration: The Complete Beginner's Guide</Link></li>
        <li><Link href="/blog/sourdough-schedule/">Sourdough Schedule: A 24-Hour Timeline</Link></li>
        <li><Link href="/blog/shaping-boule/">How to Shape a Sourdough Boule</Link></li>
        <li><Link href="/blog/common-mistakes/">5 Common Sourdough Mistakes and How to Fix Them</Link></li>
      </ul>
      
      
      <aside className="mt-12 p-6 bg-brand-cream rounded-2xl border-2 border-brand-wheat">
        <h3 className="text-xl font-bold mb-2 text-brand-dark">Tools for Tracking Bulk Fermentation</h3>
        <p className="text-sm text-brand-muted mb-4">Bulk fermentation is all about temperature control. A good thermometer and scale make the difference between guessing and knowing.</p>
        <AffiliateDisclosure variant="inline" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <AffiliateLink
            href="https://www.amazon.com/s?k=thermopro+tp19+thermometer&tag=sourdoughca0a-20"
            productName="ThermoPro TP19 Thermometer"
            source="blog_bulk-fermentation"
            aria-label="View ThermoPro TP19 Thermometer on Amazon"
            className="block p-3 bg-white rounded-lg text-center hover:shadow transition-shadow"
          >
            <div className="text-2xl mb-1">🌡</div>
            <div className="font-semibold text-sm text-brand-dark">Thermometer</div>
            <div className="text-xs text-brand-brown">View on Amazon →</div>
          </AffiliateLink>
          <AffiliateLink
            href="https://www.amazon.com/s?k=etekcity+kitchen+scale&tag=sourdoughca0a-20"
            productName="Etekcity Kitchen Scale"
            source="blog_bulk-fermentation"
            aria-label="View Etekcity Kitchen Scale on Amazon"
            className="block p-3 bg-white rounded-lg text-center hover:shadow transition-shadow"
          >
            <div className="text-2xl mb-1">⚖️</div>
            <div className="font-semibold text-sm text-brand-dark">Kitchen Scale</div>
            <div className="text-xs text-brand-brown">View on Amazon →</div>
          </AffiliateLink>
          <AffiliateLink
            href="https://www.amazon.com/s?k=lodge+dutch+oven&tag=sourdoughca0a-20"
            productName="Lodge Dutch Oven"
            source="blog_bulk-fermentation"
            aria-label="View Lodge Dutch Oven on Amazon"
            className="block p-3 bg-white rounded-lg text-center hover:shadow transition-shadow"
          >
            <div className="text-2xl mb-1">🥘</div>
            <div className="font-semibold text-sm text-brand-dark">Dutch Oven</div>
            <div className="text-xs text-brand-brown">View on Amazon →</div>
          </AffiliateLink>
        </div>
      </aside>
      

      <h2 className="mt-10 mb-3">Sources</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><a href="https://www.theperfectloaf.com/guides/the-ultimate-guide-to-bread-dough-bulk-fermentation/" target="_blank" rel="noopener">The Perfect Loaf: The Ultimate Guide to Bread Dough Bulk Fermentation</a></li>
        <li><a href="https://www.kingarthurbaking.com/learn/guides/sourdough" target="_blank" rel="noopener">King Arthur Baking: Sourdough Guide</a></li>
      </ul>
<NextPostNav slug="bulk-fermentation" />
    </article>
    </>
  );
}


