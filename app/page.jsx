import Calculator from "@/components/Calculator";
import HydrationChart from "@/components/HydrationChart";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-brand-cream to-brand-tan">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl mb-4">Sourdough Hydration Calculator</h1>
          <p className="text-lg text-[#5C4033] max-w-2xl mx-auto">
            Calculate water, salt, and starter ratios for any sourdough recipe ‚Ä?instantly, accurately, and free.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Calculator />
        </div>
      </section>

<section className="py-12 bg-brand-tan">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center mb-3">üõí Recommended Sourdough Tools</h2>
          <p className="text-center text-[#5C4033] mb-8 max-w-2xl mx-auto">
            The exact tools and ingredients I recommend for baking perfect sourdough bread at home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <a href="https://www.amazon.com/dp/B0FBZ64DVL?tag=sourdoughca0a-20" target="_blank" rel="sponsored nofollow" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">üåæ</div>
              <h3 className="font-semibold mb-1">King Arthur Bread Flour</h3>
              <p className="text-sm text-brand-muted mb-2">100% Organic, Unbleached, 5 lb ‚Ä?Best Seller</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon ‚Ü?/span>
            </a>
            <a href="https://www.amazon.com/dp/B00U1OCPWQ?tag=sourdoughca0a-20" target="_blank" rel="sponsored nofollow" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">üçû</div>
              <h3 className="font-semibold mb-1">Lodge Dutch Oven</h3>
              <p className="text-sm text-brand-muted mb-2">6 Quart Enameled Cast Iron ‚Ä?Perfect for bread baking</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon ‚Ü?/span>
            </a>
            <a href="https://www.amazon.com/dp/B07XXSYLL8?tag=sourdoughca0a-20" target="_blank" rel="sponsored nofollow" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">üå°Ô∏?/div>
              <h3 className="font-semibold mb-1">ThermoPro TP19 Thermometer</h3>
              <p className="text-sm text-brand-muted mb-2">Instant read, waterproof ‚Ä?For perfect dough temperature</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon ‚Ü?/span>
            </a>
            <a href="https://www.amazon.com/dp/B01LY7NDQ9?tag=sourdoughca0a-20" target="_blank" rel="sponsored nofollow" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">ü™í</div>
              <h3 className="font-semibold mb-1">Sourdough Bread Lame</h3>
              <p className="text-sm text-brand-muted mb-2">Scoring tool with replacement blades ‚Ä?Authentic patterns</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon ‚Ü?/span>
            </a>
            <a href="https://www.amazon.com/dp/B0113UZJE2?tag=sourdoughca0a-20" target="_blank" rel="sponsored nofollow" className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">‚öñÔ∏è</div>
              <h3 className="font-semibold mb-1">Etekcity Kitchen Scale</h3>
              <p className="text-sm text-brand-muted mb-2">Multifunction, stainless steel ‚Ä?For precise baking</p>
              <span className="text-sm text-brand-brown font-medium">View on Amazon ‚Ü?/span>
            </a>
            <div className="bg-brand-cream p-5 rounded-lg border-2 border-dashed border-brand-wheat flex flex-col items-center justify-center text-center">
              <div className="text-2xl mb-2">üí°</div>
              <p className="text-sm text-brand-muted">
                As an Amazon Associate, we earn from qualifying purchases.
              </p>
            </div>
          </div>
        </div>
      </section>


      <HydrationChart />

      <section className="py-16 max-w-3xl mx-auto px-6">
        <h2 className="text-center mb-6">What is Sourdough Hydration?</h2>
        <p>
          <strong>Sourdough hydration</strong> is the ratio of water to flour in your dough, expressed as a percentage.
          For example, a 75% hydration dough has 75g of water for every 100g of flour.
        </p>
        <p>Hydration dramatically affects the final bread:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Lower hydration (50‚Ä?5%)</strong> produces a denser, tighter crumb ‚Ä?perfect for bagels and pretzels.</li>
          <li><strong>Medium hydration (70‚Ä?0%)</strong> gives the classic sourdough texture most home bakers aim for.</li>
          <li><strong>Higher hydration (80‚Ä?00%)</strong> creates an open, airy crumb with large irregular holes ‚Ä?the hallmark of artisan sourdough.</li>
        </ul>
        <p>
          Use the calculator above to find the exact water, salt, and starter amounts for your recipe. Want to learn more?{" "}
          <Link href="/blog/what-is-hydration/" className="text-brand-brown font-medium">
            Read our complete guide ‚Ü?          </Link>
        </p>
      </section>

      <section className="py-16 bg-brand-tan text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="mb-2">üìö Learn Sourdough Baking</h2>
          <p className="text-[#5C4033] mb-6">Master hydration, ratios, and techniques with our free guides.</p>
          <Link
            href="/blog/"
            className="inline-block px-7 py-3 bg-brand-wheat text-brand-dark rounded-lg font-semibold hover:bg-brand-wheat-dark transition-colors"
          >
            Browse All Articles ‚Ü?          </Link>
        </div>
      </section>    </>
  );
}
