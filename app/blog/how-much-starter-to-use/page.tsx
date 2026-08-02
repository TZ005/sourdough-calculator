import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "How Much Sourdough Starter Should You Use?",
  description: "The starter amount changes rise speed, flavor, and structure. Learn what 10%, 15%, 20%, and 25% look like and how to choose.",
  keywords: ["sourdough starter amount", "how much starter to use", "sourdough starter percentage"],
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/how-much-starter-to-use/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "How Much Sourdough Starter Should You Use?",
    description: "The starter amount changes rise speed, flavor, and structure. Learn what 10%, 15%, 20%, and 25% look like and how to choose.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/how-much-starter-to-use/",
    publishedTime: "2026-08-02",
    modifiedTime: "2026-08-02",
    images: [
      {
        url: "/images/blog/sourdough-starter.webp",
        alt: "Glass jar of active sourdough starter ready for measuring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Sourdough Starter Should You Use?",
    description: "The starter amount changes rise speed, flavor, and structure. Learn what 10%, 15%, 20%, and 25% look like and how to choose.",
    images: ["/images/blog/sourdough-starter.webp"],
  },
};

export default function HowMuchStarter() {
  return (
    <>
      <ArticleSchema
        slug="how-much-starter-to-use"
        title="How Much Sourdough Starter Should You Use?"
        description="The starter amount changes rise speed, flavor, and structure. Learn what 10%, 15%, 20%, and 25% look like and how to choose."
        image="/images/blog/sourdough-starter.webp"
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
                "name": "What is the standard sourdough starter percentage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "20% of the flour weight is the most common default. For 500g of flour, that means 100g of ripe starter."
                }
              },
              {
                "@type": "Question",
                "name": "Does more starter make sourdough more sour?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not by itself. A higher starter percentage ferments faster, which usually makes bread less sour. Sourness comes more from a long, cool fermentation."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use 10% starter for sourdough?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but the bulk fermentation will take longer. 10% starter is a good choice for an overnight or cooler fermentation."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/sourdough-starter.webp" type="image/webp" />
          <img
            src="/images/blog/sourdough-starter.webp"
            alt="Glass jar of active sourdough starter ready for measuring"
            width="1200"
            height="800"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">How Much Sourdough Starter Should You Use?</h1>
        <p className="text-brand-muted text-sm mb-8">📖 7 min read · Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          Use 20% ripe starter as your default, measured against the flour weight. For 500g of flour,
          that is 100g of starter. Lower the percentage for a longer, slower rise and raise it for a
          faster one.
        </p>

        <h2 className="mt-10 mb-3">Why Starter Percentage Matters</h2>
        <p className="mb-4">
          The starter percentage controls how fast your dough ferments. More starter means more yeast and
          bacteria at the start, so the dough rises faster. Less starter slows everything down, which gives
          you more scheduling flexibility and often more flavor.
        </p>

        <h2 className="mt-10 mb-3">What Does Each Percentage Look Like?</h2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>10%</strong> (50g per 500g flour): slow rise, best for overnight bakes at room temperature.</li>
          <li><strong>15%</strong> (75g per 500g flour): gentle rise, good for cooler kitchens.</li>
          <li><strong>20%</strong> (100g per 500g flour): the standard, balanced choice.</li>
          <li><strong>25%</strong> (125g per 500g flour): fast rise, use when you are short on time.</li>
          <li><strong>30%+</strong>: very fast, easier to over-ferment, harder to control.</li>
        </ul>

        <h2 className="mt-10 mb-3">What Starter Percentage Should Beginners Use?</h2>
        <p className="mb-4">
          Beginners should stick to 20%. It is forgiving, gives a predictable bulk fermentation, and matches
          most recipes. Once you learn how the dough feels at 20%, you can experiment with 10% for overnight
          schedules or 25% for same-day bakes.
        </p>

        <h2 className="mt-10 mb-3">How Do You Measure Starter by Percentage?</h2>
        <p className="mb-4">
          Weigh your flour first, then multiply by the percentage. For a 500g flour recipe at 20%, use 100g
          of ripe starter. Our{" "}
          <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link>{" "}
          includes the starter field so you never have to do this by hand.
        </p>

        <h2 className="mt-10 mb-3">Does More Starter Make Bread More Sour?</h2>
        <p className="mb-4">
          Usually the opposite. A high starter percentage ferments quickly, producing a milder loaf. Deep
          sour flavor develops during a long, cool fermentation, which is why 10-15% starter with a cold
          proof is the more common route to tangy bread.
        </p>

        <h2 className="mt-10 mb-3">Starter Amount FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">What is the standard sourdough starter percentage?</h3>
          <p>20% of the flour weight is the most common default. For 500g of flour, that means 100g of ripe starter.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Does more starter make sourdough more sour?</h3>
          <p>Not by itself. A higher starter percentage ferments faster, which usually makes bread less sour. Sourness comes more from a long, cool fermentation.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Can I use 10% starter for sourdough?</h3>
          <p>Yes, but the bulk fermentation will take longer. 10% starter is a good choice for an overnight or cooler fermentation.</p>
        </div>

        <h2 className="mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><a href="https://www.kingarthurbaking.com/recipes/sourdough-starter-recipe" target="_blank" rel="nofollow noopener">King Arthur Baking: Sourdough Starter Recipe</a></li>
          <li><a href="https://www.theperfectloaf.com/sourdough-starter/" target="_blank" rel="nofollow noopener">The Perfect Loaf: Sourdough Starter Guide</a></li>
        </ul>

        <NextPostNav slug="how-much-starter-to-use" />
      </article>
    </>
  );
}
