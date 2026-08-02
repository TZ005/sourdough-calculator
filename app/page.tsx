import Calculator from "@/components/Calculator";
import type { Metadata } from "next";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import HydrationChart from "@/components/HydrationChart";
import Link from "next/link";
import AffiliateLink from "@/components/AffiliateLink";

export const metadata: Metadata = {
  title: "Sourdough Hydration Calculator - Free Instant Recipe Tool",
  description: "Free sourdough hydration calculator. Enter flour weight to get exact water, salt and starter ratios, plus a 50%-100% hydration chart. No signup.",
  keywords: ["sourdough hydration calculator", "sourdough calculator", "bakers percentage calculator"],
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Sourdough Hydration Calculator - Free Instant Recipe Tool",
    description: "Enter flour weight, instantly get exact water, salt and starter ratios for any sourdough recipe. Free, no signup.",
    type: "website",
    url: "https://sourdough-hydrationcalculator.com/",
    images: [
      {
        url: "/sourdough-baking-tools.png",
        width: 1200,
        height: 630,
        alt: "SourdoughCalc - Free Hydration Calculator for Bakers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough Hydration Calculator - Free Instant Recipe Tool",
    description: "Enter flour weight, instantly get exact water, salt and starter ratios. Free, no signup.",
    images: ["/sourdough-baking-tools.png"],
  },
};


export default function Home() {
  return (
    <>
      
      {/* Schema.org: SoftwareApplication (Calculator) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SourdoughCalc",
            "url": "https://sourdough-hydrationcalculator.com/",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "browserRequirements": "Requires JavaScript",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Free sourdough hydration calculator. Enter flour weight, instantly get exact water, salt and starter ratios. Includes baker percentage chart for 50% to 100% hydration."
          })
        }}
      />

      <section className="print:hidden py-16 md:py-20 text-center bg-gradient-to-b from-brand-cream to-brand-tan">
        <div className="max-w-6xl mx-auto px-6">
          <picture>
            <source srcSet="/sourdough-baking-tools.avif" type="image/avif" />
            <source srcSet="/sourdough-baking-tools.webp" type="image/webp" />
            <img
              src="/sourdough-baking-tools.png"
              alt="Sourdough loaf with measuring cups and a kitchen scale"
              width="1200"
              height="630"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg mb-10"
              loading="eager"
            />
          </picture>
          <h1 className="text-3xl md:text-5xl mb-4">Sourdough Hydration Calculator</h1>
          <p className="text-lg text-[#5C4033] max-w-2xl mx-auto">
            Calculate water, salt, and starter ratios for any sourdough recipe — instantly, accurately, and free.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 print:py-4">
        <div className="max-w-6xl mx-auto px-6">
          <Calculator />
        </div>
      </section>

      <div className="print:hidden"><HydrationChart /></div>

      <section className="print:hidden py-16 max-w-3xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-6 text-brand-dark">What is Sourdough Hydration?</h2>
        <p>
          <strong>Sourdough hydration</strong> is the ratio of water to flour in your dough, expressed as a percentage.
          For example, a 75% hydration dough has 75g of water for every 100g of flour.
        </p>
        <p>Hydration dramatically affects the final bread:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Lower hydration (50–75%)</strong> produces a denser, tighter crumb — perfect for bagels and pretzels.</li>
          <li><strong>Medium hydration (70–80%)</strong> gives the classic sourdough texture most home bakers aim for.</li>
          <li><strong>Higher hydration (80–100%)</strong> creates an open, airy crumb with large irregular holes — the hallmark of artisan sourdough.</li>
        </ul>
        <p>
          Use the calculator above to find the exact water, salt, and starter amounts for your recipe. Want to learn more?{" "}
          <Link href="/blog/what-is-hydration/" className="text-brand-brown font-medium">
            Read our complete guide →          </Link>
        </p>
      </section>

      {/* Schema.org: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is 75% hydration sourdough?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 75% hydration dough uses 75g of water for every 100g of flour. It is a popular middle ground for home bakers: wet enough for an open crumb, dry enough to handle without excessive sticking."
                }
              },
              {
                "@type": "Question",
                "name": "How do I calculate hydration percentage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Divide the water weight by the flour weight and multiply by 100. For example, 350g of water with 500g of flour is 70% hydration."
                }
              },
              {
                "@type": "Question",
                "name": "Is 70% or 75% hydration better for beginners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "70% is easier to shape and less sticky, while 75% is still manageable and gives a more open crumb. Start at 70% and work up as your dough handling improves."
                }
              },
              {
                "@type": "Question",
                "name": "What does 100% hydration mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It means equal weights of water and flour, such as 500g of water with 500g of flour. This creates a very wet dough suited to ciabatta, focaccia, and experienced bakers."
                }
              },
              {
                "@type": "Question",
                "name": "How much starter should I use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "20% of the flour weight is a common default. Use less starter for a longer, slower fermentation and more starter for a faster rise."
                }
              }
            ]
          })
        }}
      />

      <section className="print:hidden py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-2 text-brand-dark">Sourdough Hydration FAQ</h2>
          <p className="text-center text-[#5C4033] mb-10">Quick answers to the questions home bakers ask most.</p>
          <div className="divide-y divide-[#E8DDC8] border-y border-[#E8DDC8]">
            <div className="py-5">
              <h3 className="font-semibold text-lg text-brand-brown mb-1.5">What is 75% hydration sourdough?</h3>
              <p>A 75% hydration dough uses 75g of water for every 100g of flour. It is a popular middle ground: wet enough for an open crumb, dry enough to handle without excessive sticking.</p>
            </div>
            <div className="py-5">
              <h3 className="font-semibold text-lg text-brand-brown mb-1.5">How do I calculate hydration percentage?</h3>
              <p>Divide the water weight by the flour weight and multiply by 100. For example, 350g of water with 500g of flour is 70% hydration.</p>
            </div>
            <div className="py-5">
              <h3 className="font-semibold text-lg text-brand-brown mb-1.5">Is 70% or 75% hydration better for beginners?</h3>
              <p>70% is easier to shape and less sticky, while 75% is still manageable and gives a more open crumb. Start at 70% and work up as your dough handling improves.</p>
            </div>
            <div className="py-5">
              <h3 className="font-semibold text-lg text-brand-brown mb-1.5">What does 100% hydration mean?</h3>
              <p>It means equal weights of water and flour, such as 500g of water with 500g of flour. This creates a very wet dough suited to ciabatta, focaccia, and experienced bakers.</p>
            </div>
            <div className="py-5">
              <h3 className="font-semibold text-lg text-brand-brown mb-1.5">How much starter should I use?</h3>
              <p>20% of the flour weight is a common default. Use less starter for a longer, slower fermentation and more starter for a faster rise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="print:hidden py-12 bg-brand-tan">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-3 text-brand-dark">🛒 Recommended Sourdough Tools</h2>
          <AffiliateDisclosure />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <AffiliateLink href="https://www.amazon.com/s?k=king+arthur+bread+flour&tag=sourdoughca0a-20" productName="King Arthur Bread Flour" source="homepage" aria-label="Buy King Arthur Bread Flour on Amazon - 100% Organic, Unbleached, 5 lb" title="King Arthur Bread Flour on Amazon" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <picture><source srcSet="/images/product-flour.webp" type="image/webp" /><img src="/images/product-flour.png" alt="Hand-drawn watercolor illustration of a bag of bread flour" width="600" height="600" className="w-28 h-28 mx-auto mb-3 object-contain" loading="lazy" /></picture>
              <h3 className="font-semibold mb-1">King Arthur Bread Flour</h3>
              <p className="text-sm text-brand-muted mb-2">100% Organic, Unbleached, 5 lb — Best Seller</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon →</span>
            </AffiliateLink>
            <AffiliateLink href="https://www.amazon.com/s?k=lodge+dutch+oven&tag=sourdoughca0a-20" productName="Lodge Dutch Oven" source="homepage" aria-label="Buy Lodge Dutch Oven on Amazon - 6 Quart Enameled Cast Iron" title="Lodge Dutch Oven on Amazon" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <picture><source srcSet="/images/product-dutch-oven.webp" type="image/webp" /><img src="/images/product-dutch-oven.png" alt="Hand-drawn watercolor illustration of a cast iron Dutch oven" width="600" height="600" className="w-28 h-28 mx-auto mb-3 object-contain" loading="lazy" /></picture>
              <h3 className="font-semibold mb-1">Lodge Dutch Oven</h3>
              <p className="text-sm text-brand-muted mb-2">6 Quart Enameled Cast Iron — Perfect for bread baking</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon →</span>
            </AffiliateLink>
            <AffiliateLink href="https://www.amazon.com/s?k=thermopro+tp19+thermometer&tag=sourdoughca0a-20" productName="ThermoPro TP19 Thermometer" source="homepage" aria-label="Buy ThermoPro TP19 Thermometer on Amazon - Instant read, waterproof" title="ThermoPro TP19 Thermometer on Amazon" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <picture><source srcSet="/images/product-thermometer.webp" type="image/webp" /><img src="/images/product-thermometer.png" alt="Hand-drawn watercolor illustration of a kitchen thermometer" width="600" height="600" className="w-28 h-28 mx-auto mb-3 object-contain" loading="lazy" /></picture>
              <h3 className="font-semibold mb-1">ThermoPro TP19 Thermometer</h3>
              <p className="text-sm text-brand-muted mb-2">Instant read, waterproof — For perfect dough temperature</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon →</span>
            </AffiliateLink>
            <AffiliateLink href="https://www.amazon.com/s?k=sourdough+bread+lame&tag=sourdoughca0a-20" productName="Sourdough Bread Lame" source="homepage" aria-label="Buy Sourdough Bread Lame on Amazon - Scoring tool with replacement blades" title="Sourdough Bread Lame on Amazon" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <picture><source srcSet="/images/product-lame.webp" type="image/webp" /><img src="/images/product-lame.png" alt="Hand-drawn watercolor illustration of a sourdough bread lame" width="600" height="600" className="w-28 h-28 mx-auto mb-3 object-contain" loading="lazy" /></picture>
              <h3 className="font-semibold mb-1">Sourdough Bread Lame</h3>
              <p className="text-sm text-brand-muted mb-2">Scoring tool with replacement blades — Authentic patterns</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon →</span>
            </AffiliateLink>
            <AffiliateLink href="https://www.amazon.com/s?k=etekcity+kitchen+scale&tag=sourdoughca0a-20" productName="Etekcity Kitchen Scale" source="homepage" aria-label="Buy Etekcity Kitchen Scale on Amazon - Multifunction, stainless steel" title="Etekcity Kitchen Scale on Amazon" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <picture><source srcSet="/images/product-scale.webp" type="image/webp" /><img src="/images/product-scale.png" alt="Hand-drawn watercolor illustration of a digital kitchen scale" width="600" height="600" className="w-28 h-28 mx-auto mb-3 object-contain" loading="lazy" /></picture>
              <h3 className="font-semibold mb-1">Etekcity Kitchen Scale</h3>
              <p className="text-sm text-brand-muted mb-2">Multifunction, stainless steel — For precise baking</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon →</span>
            </AffiliateLink>
            <AffiliateLink href="https://www.amazon.com/s?k=banneton+proofing+basket&tag=sourdoughca0a-20" productName="Banneton Proofing Basket" source="homepage" aria-label="Buy Banneton Proofing Basket on Amazon - Handcrafted rattan basket" title="Banneton Proofing Basket on Amazon" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <picture><source srcSet="/images/product-banneton.webp" type="image/webp" /><img src="/images/product-banneton.png" alt="Hand-drawn watercolor illustration of a round banneton proofing basket, woven cane with spiral lines" width="600" height="600" className="w-28 h-28 mx-auto mb-3 object-contain" loading="lazy" /></picture>
              <h3 className="font-semibold mb-1">Banneton Proofing Basket</h3>
              <p className="text-sm text-brand-muted mb-2">Handcrafted rattan — For 75-85% hydration</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon →</span>
            </AffiliateLink>

          </div>
        </div>

        {/* Wide-search CTA: any Amazon purchase within 24h counts as commission */}
        <div className="text-center mt-8">
          <AffiliateLink
            href="https://www.amazon.com/s?k=sourdough+baking+tools&tag=sourdoughca0a-20"
            productName="All Sourdough Baking Tools"
            source="homepage_wide_search"
            aria-label="Browse all sourdough baking tools on Amazon"
            title="Browse all sourdough baking tools on Amazon"
            className="inline-block px-6 py-3 bg-brand-brown text-white rounded-lg font-semibold hover:bg-brand-brown-dark transition-colors"
          >
            View all sourdough tools on Amazon →
          </AffiliateLink>
          <p className="text-sm text-brand-muted mt-2">
            From $5 starter kits to $200 ovens - see all my picks
          </p>
        </div>
      </section>

      <section className="print:hidden py-20 bg-brand-tan">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl mb-3">📚 Learn Sourdough Baking</h2>
          <p className="text-center text-lg text-[#5C4033] mb-12 max-w-2xl mx-auto">Master hydration, ratios, and techniques with our free guides.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Link href="/blog/sourdough-pizza-dough/" className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
              <picture>
                <source srcSet="/images/blog/sourdough-pizza-dough.webp" type="image/webp" />
                <img src="/images/blog/sourdough-pizza-dough.png" alt="Sourdough Pizza Dough Guide" width="800" height="600" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </picture>
              <div className="p-7">
                <h3 className="font-semibold text-2xl mb-3 leading-tight">Sourdough Pizza Dough: Crispy &amp; Chewy</h3>
                <p className="text-base text-brand-muted mb-5 leading-relaxed">Better flavor than commercial yeast, with the tang and texture of real sourdough.</p>
                <span className="text-base text-brand-brown font-semibold">Read the Recipe →</span>
              </div>
            </Link>
            <Link href="/blog/sourdough-discard/" className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
              <picture>
                <source srcSet="/images/blog/sourdough-discard.webp" type="image/webp" />
                <img src="/images/blog/sourdough-discard.png" alt="Sourdough Discard Recipes" width="800" height="600" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </picture>
              <div className="p-7">
                <h3 className="font-semibold text-2xl mb-3 leading-tight">10 Sourdough Discard Recipes</h3>
                <p className="text-base text-brand-muted mb-5 leading-relaxed">Pancakes, crackers, waffles, pizza. Zero waste, full flavor.</p>
                <span className="text-base text-brand-brown font-semibold">Browse Recipes →</span>
              </div>
            </Link>
            <Link href="/blog/sourdough-for-beginners/" className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
              <picture>
                <source srcSet="/images/blog/sourdough-for-beginners.webp" type="image/webp" />
                <img src="/images/blog/sourdough-for-beginners.png" alt="Sourdough for Beginners Guide" width="800" height="600" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </picture>
              <div className="p-7">
                <h3 className="font-semibold text-2xl mb-3 leading-tight">Sourdough for Beginners</h3>
                <p className="text-base text-brand-muted mb-5 leading-relaxed">The complete first-time guide. From starter to your first crusty boule.</p>
                <span className="text-base text-brand-brown font-semibold">Start Baking →</span>
              </div>
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/blog/"
              className="inline-block px-8 py-4 bg-brand-wheat text-brand-dark rounded-lg font-semibold text-lg hover:bg-brand-wheat-dark transition-colors"
            >
              Browse All Articles →            </Link>
          </div>
          <p className="text-center text-sm text-brand-muted mt-10">Last updated: August 1, 2026</p>
        </div>
      </section>
    </>
  );
}
