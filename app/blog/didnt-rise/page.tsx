import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";




export const metadata: Metadata = {
  title: "Why Your Sourdough Did Not Rise: 12 Causes and Fixes",
  description: "Troubleshooting guide for flat, dense, or sunken sourdough. 12 common causes with specific fixes, from weak starter to oven temperature mistakes.",
  keywords: ["sourdough did not rise", "sourdough flat", "dense sourdough", "sourdough not rising", "sourdough troubleshooting"],

  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/didnt-rise/",
  },
  openGraph: {
    title: "Why Your Sourdough Did Not Rise: 12 Causes and Fixes",
    description: "Troubleshooting guide for flat, dense, or sunken sourdough. 12 common causes with specific fixes, from weak starter to oven temperature mistakes.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/didnt-rise/",
    publishedTime: "2026-07-15",
    modifiedTime: "2026-07-25T08:00:00Z",
    images: [
      {
        url: "/images/blog/didnt-rise.webp",
        alt: "Why Your Sourdough Did Not Rise: 12 Causes and Fixes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Your Sourdough Did Not Rise: 12 Causes and Fixes",
    description: "Troubleshooting guide for flat, dense, or sunken sourdough. 12 common causes with specific fixes, from weak starter to oven temperature mistakes.",
    images: ["/images/blog/didnt-rise.webp"],
  },
};

export default function DidntRise() {
  

  return (
    
      
    <>

      <ArticleSchema
        slug="didnt-rise"
        title="Why Your Sourdough Did Not Rise: 12 Causes and Fixes"
        description="Troubleshooting guide for flat, dense, or sunken sourdough. 12 common causes with specific fixes, from weak starter to oven temperature mistakes."
        image="/images/blog/didnt-rise.webp"
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
                "name": "Why is my sourdough flat but not dense?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A flat, wide loaf usually means the dough lost structure before baking: too much water, weak shaping, or over-fermentation. Lower the hydration slightly and build more surface tension during shaping."
                }
              },
              {
                "@type": "Question",
                "name": "Can I save a dough that did not rise?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sometimes. If the dough is under-fermented, move it somewhere warmer and wait for a 50-75% rise. If it is over-fermented, reshape it quickly and proof it in the fridge before baking."
                }
              },
              {
                "@type": "Question",
                "name": "How long should sourdough take to rise?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At 70-75°F, expect 4-6 hours of bulk fermentation and a final proof of 1-4 hours at room temperature or 8-16 hours in the fridge. Time depends on starter strength and dough temperature."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

      <picture>
        <source srcSet="/images/blog/didnt-rise.webp" type="image/webp" />
        <img
          src="/images/blog/didnt-rise.webp"
          alt="Dense sourdough loaf with a flat top that did not rise properly"
          width="1200"
          height="800"
          className="w-full rounded-xl my-8"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      

      <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Why Your Sourdough Did Not Rise: 12 Causes and Fixes</h1>
      <p className="text-brand-muted text-sm mb-8">📖 10 min read · Updated July 2026</p>
      <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

      <p className="text-lg mb-6">
        Sourdough is supposed to rise. When it does not, there is always a reason. Here are the
        12 most common causes, organized by when they happen in the bake, with specific fixes
        for each.
      </p>

      <h2 className="mt-10 mb-3">How to Diagnose a Loaf That Did Not Rise</h2>
      <p className="mb-4">
        Match your loaf to the symptom below. The fastest fix is usually the one that matches
        what you actually see, not what the recipe says.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse border border-[#E8DDC8]">
          <thead>
            <tr className="bg-brand-tan">
              <th className="border border-[#E8DDC8] px-3 py-2">Symptom</th>
              <th className="border border-[#E8DDC8] px-3 py-2">Most likely cause</th>
              <th className="border border-[#E8DDC8] px-3 py-2">Fastest fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">Flat and wide</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Too much water or weak shaping</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Lower hydration to 70-72% and build more tension</td>
            </tr>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">Dense and heavy</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Under-bulk or weak flour</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Extend bulk until the dough rises 50-75%</td>
            </tr>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">Gummy crumb</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Cut too early or under-baked</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Bake until the center reaches 205-210°F</td>
            </tr>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">Vinegar smell</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Over-fermented or too much starter</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Shorten bulk and use 15-20% ripe starter</td>
            </tr>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">Pale crust</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Oven too cool or no steam</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Preheat to 500°F and add steam</td>
            </tr>
            <tr>
              <td className="border border-[#E8DDC8] px-3 py-2">Explosive oven spring</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Under-proofed final proof</td>
              <td className="border border-[#E8DDC8] px-3 py-2">Wait until the poke test leaves a slow indent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 mb-3">1. The Starter is Young or Weak</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough barely rises at all. The starter itself takes 12+ hours to peak.
        <strong>Fix:</strong> Use a starter that is at least 2 weeks old and reliably doubles in
        4-6 hours after feeding. If your starter is slow, give it more time. Or feed it more
        often (every 4-6 hours) for a few days to strengthen it.
      </p>
      <p className="mb-4">Building your first starter? Follow our <Link href="/blog/sourdough-starter/">7-day sourdough starter guide</Link>.</p>

      <h2 className="mt-10 mb-3">2. Cold Kitchen</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough barely rises even with a strong starter. Bulk takes 8+ hours.
        <strong>Fix:</strong> Find a warmer spot. On top of the fridge, inside the oven with just the
        light on, in a cooler bag with a warm water bottle. Target 75-80°F for bulk.
      </p>

      <h2 className="mt-10 mb-3">3. Too Much Salt</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Slow rise, dense crumb. Salt inhibits yeast.
        <strong>Fix:</strong> Use 1.8-2% salt by baker's percentage. Re-measure with a scale. Salt
        volumes vary wildly by type.
      </p>

      <h2 className="mt-10 mb-3">4. Too Much Starter Inhibits</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough rises fast initially but collapses. Too much starter over-acidifies.
        <strong>Fix:</strong> Use 15-20% ripe starter. More than 25% and the dough becomes acidic and
        unstable.
      </p>

      <h2 className="mt-10 mb-3">5. Not Enough Starter</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Slow rise, weak oven spring.
        <strong>Fix:</strong> Use at least 15% ripe starter. Below 10% and fermentation is too slow.
      </p>

      <h2 className="mt-10 mb-3">6. Flour is Too Weak</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough spreads flat. Crumb is tight. Oven spring is weak.
        <strong>Fix:</strong> Use bread flour (12-14% protein) or blend with vital wheat gluten. Cake
        flour and pastry flour do not have enough gluten.
      </p>
      <p className="mb-4">Need help choosing? Read our <Link href="/blog/best-flour/">complete flour guide</Link>.</p>

      <h2 className="mt-10 mb-3">7. Too Much Water</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough collapses, spreads during proof.
        <strong>Fix:</strong> Lower hydration by 5%. Most beginners do better at 70-72% hydration
        than 75%+. Use our <Link href="/" className="text-brand-brown font-medium">calculator</Link>{" "}
        to track accurately.
      </p>
      <p className="mb-4">The full <Link href="/blog/hydration-guide/">sourdough hydration guide</Link> explains why water level matters so much.</p>

      <h2 className="mt-10 mb-3">8. Bulk Fermentation Too Short</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dense crumb, pale crust, bland flavor.
        <strong>Fix:</strong> Bulk for 4-6 hours at 70-75°F, or until 50-75% rise with domed top. Time
        alone is unreliable; watch the dough.
      </p>
      <p className="mb-4">Our <Link href="/blog/bulk-fermentation/">bulk fermentation guide</Link> covers timing, temperature, and visual cues in detail.</p>

      <h2 className="mt-10 mb-3">9. Over-Fermented</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough collapses when shaped. Strong vinegar smell. Flat loaf.
        <strong>Fix:</strong> Cut bulk time by 30-60 minutes. Aim for 50% rise, not 100% doubled.
      </p>

      <h2 className="mt-10 mb-3">10. Weak Shaping</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Spreads flat in oven. No oven spring.
        <strong>Fix:</strong> Build more surface tension. Use a bench scraper. Drag the dough
        rather than folding. See our <Link href="/blog/shaping-boule/">boule shaping guide</Link> for three methods.
      </p>

      <h2 className="mt-10 mb-3">11. Under-Proofed Final Proof</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dense crumb, explosive oven spring, tears in the crust.
        <strong>Fix:</strong> Let the final proof go longer. The poke test: poke the dough with a
        floured finger. If it springs back slowly and leaves a slight indent, it is ready. If it
        springs back quickly, it is under-proofed.
      </p>

      <h2 className="mt-10 mb-3">12. Oven Too Cool</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Pale, soft crust. No oven spring.
        <strong>Fix:</strong> Preheat to 500°F for at least 45 minutes. Use an oven thermometer. Most
        home ovens are 25-50°F off. A Dutch oven or pizza steel helps a lot.
      </p>

      <h2 className="mt-10 mb-3">The Quick Diagnostic</h2>
      <p className="mb-4">
        Flat loaf: under-proofed final proof OR over-bulk OR too much water.
      </p>
      <p className="mb-4">
        Dense crumb: under-bulk OR weak flour.
      </p>
      <p className="mb-4">
        Vinegar taste: over-bulk OR too much starter.
      </p>
      <p className="mb-4">
        Pale crust: oven too cool OR not enough steam.
      </p>
      <p className="mb-4">
        Use our <Link href="/" className="text-brand-brown font-medium">hydration calculator</Link>{" "}
        to dial in the right hydration for your flour and conditions. The most common cause of
        flat/dense bread is a hydration that is too high for your flour strength.
      </p>

      <h2 className="mt-10 mb-3">Sourdough Did Not Rise FAQ</h2>
      <div className="mb-4">
        <h3 className="font-semibold text-brand-brown mb-1">Why is my sourdough flat but not dense?</h3>
        <p>A flat, wide loaf usually means the dough lost structure before baking: too much water, weak shaping, or over-fermentation. Lower the hydration slightly and build more surface tension during shaping.</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-brand-brown mb-1">Can I save a dough that did not rise?</h3>
        <p>Sometimes. If the dough is under-fermented, move it somewhere warmer and wait for a 50-75% rise. If it is over-fermented, reshape it quickly and proof it in the fridge before baking.</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-brand-brown mb-1">How long should sourdough take to rise?</h3>
        <p>At 70-75°F, expect 4-6 hours of bulk fermentation and a final proof of 1-4 hours at room temperature or 8-16 hours in the fridge. Time depends on starter strength and dough temperature.</p>
      </div>

      <h2 className="mt-10 mb-3">Related Reading</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><Link href="/blog/sourdough-starter/">How to Make a Sourdough Starter from Scratch</Link></li>
        <li><Link href="/blog/bulk-fermentation/">Sourdough Bulk Fermentation: Timing and Temperature</Link></li>
        <li><Link href="/blog/hydration-guide/">Sourdough Hydration: The Complete Beginner's Guide</Link></li>
        <li><Link href="/blog/shaping-boule/">How to Shape a Sourdough Boule</Link></li>
      </ul>
      
      <NextPostNav slug="didnt-rise" />
    </article>
    </>
  );
}


