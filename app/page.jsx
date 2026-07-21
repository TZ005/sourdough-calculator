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
            Calculate water, salt, and starter ratios for any sourdough recipe — instantly, accurately, and free.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Calculator />
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
          <li><strong>Lower hydration (50–65%)</strong> produces a denser, tighter crumb — perfect for bagels and pretzels.</li>
          <li><strong>Medium hydration (70–80%)</strong> gives the classic sourdough texture most home bakers aim for.</li>
          <li><strong>Higher hydration (80–100%)</strong> creates an open, airy crumb with large irregular holes — the hallmark of artisan sourdough.</li>
        </ul>
        <p>
          Use the calculator above to find the exact water, salt, and starter amounts for your recipe. Want to learn more?{" "}
          <Link href="/blog/what-is-hydration/" className="text-brand-brown font-medium">
            Read our complete guide →
          </Link>
        </p>
      </section>

      <section className="py-16 bg-brand-tan text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="mb-2">📚 Learn Sourdough Baking</h2>
          <p className="text-[#5C4033] mb-6">Master hydration, ratios, and techniques with our free guides.</p>
          <Link
            href="/blog/"
            className="inline-block px-7 py-3 bg-brand-wheat text-brand-dark rounded-lg font-semibold hover:bg-brand-wheat-dark transition-colors"
          >
            Browse All Articles →
          </Link>
        </div>
      </section>
    </>
  );
}
