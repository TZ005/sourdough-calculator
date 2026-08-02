import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Best Sourdough Bread Recipe for Beginners",
  description: "A simple 75% hydration loaf with clear timing, shaping, and baking steps. No fancy equipment required beyond a Dutch oven and a scale.",
  keywords: ["best sourdough bread recipe", "sourdough recipe for beginners", "simple sourdough loaf"],
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/best-sourdough-bread-recipe/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Best Sourdough Bread Recipe for Beginners",
    description: "A simple 75% hydration loaf with clear timing, shaping, and baking steps. No fancy equipment required beyond a Dutch oven and a scale.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/best-sourdough-bread-recipe/",
    publishedTime: "2026-08-02",
    modifiedTime: "2026-08-02",
    images: [
      {
        url: "/images/blog/sourdough-for-beginners.webp",
        alt: "Rustic sourdough loaf with a golden crust ready to slice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sourdough Bread Recipe for Beginners",
    description: "A simple 75% hydration loaf with clear timing, shaping, and baking steps. No fancy equipment required beyond a Dutch oven and a scale.",
    images: ["/images/blog/sourdough-for-beginners.webp"],
  },
};

export default function BestSourdoughRecipe() {
  return (
    <>
      <ArticleSchema
        slug="best-sourdough-bread-recipe"
        title="Best Sourdough Bread Recipe for Beginners"
        description="A simple 75% hydration loaf with clear timing, shaping, and baking steps. No fancy equipment required beyond a Dutch oven and a scale."
        image="/images/blog/sourdough-for-beginners.webp"
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
                "name": "What is the best beginner sourdough hydration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "75% is a good balance for a first loaf: open enough crumb to feel like real sourdough, firm enough to shape without too much trouble."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a Dutch oven for sourdough?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, but it is the easiest way to trap steam and get oven spring. A heavy lidded pot works just as well."
                }
              },
              {
                "@type": "Question",
                "name": "How long should a beginner sourdough bulk ferment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At 70-75°F, expect 4-6 hours, or until the dough has risen 50-75% and jiggles in the bowl."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/sourdough-for-beginners.webp" type="image/webp" />
          <img
            src="/images/blog/sourdough-for-beginners.webp"
            alt="Rustic sourdough loaf with a golden crust ready to slice"
            width="1200"
            height="800"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Best Sourdough Bread Recipe for Beginners</h1>
        <p className="text-brand-muted text-sm mb-8">📖 10 min read · Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          This is a 75% hydration loaf with a simple, forgiving schedule: mix in the morning, shape in the
          afternoon, bake the next morning. You need ripe starter, bread flour, water, salt, and a Dutch oven.
        </p>

        <h2 className="mt-10 mb-3">What Ingredients Do You Need?</h2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Bread flour: 500g</li>
          <li>Water: 375g (75%)</li>
          <li>Ripe sourdough starter: 100g (20%)</li>
          <li>Sea salt: 10g (2%)</li>
        </ul>

        <h2 className="mt-10 mb-3">What Is the Schedule?</h2>
        <p className="mb-4">
          8:00 AM mix, 9:00-11:30 AM stretch and folds, 11:30 AM to 4:00 PM bulk fermentation, 4:30 PM
          shape, overnight cold proof, next morning bake. Adjust the times to your kitchen temperature.
        </p>

        <h2 className="mt-10 mb-3">How Do You Mix the Dough?</h2>
        <p className="mb-4">
          Mix the flour and water, cover, and rest for 45 minutes. Add the starter and salt, then squeeze the
          dough until everything is incorporated. It will be shaggy and sticky at this stage.
        </p>

        <h2 className="mt-10 mb-3">How Do You Build Strength?</h2>
        <p className="mb-4">
          Do four sets of stretch and folds every 30 minutes. Wet your hand, stretch one side up, and fold it
          over. Rotate the bowl and repeat. After four sets, the dough should be smoother and hold its shape.
        </p>

        <h2 className="mt-10 mb-3">How Do You Shape and Proof?</h2>
        <p className="mb-4">
          Turn the dough onto a lightly floured surface, form a tight round, and place it seam-side up in a
          floured banneton. Refrigerate for 8-16 hours. A longer cold proof means more flavor and easier scoring.
        </p>

        <h2 className="mt-10 mb-3">How Do You Bake the Loaf?</h2>
        <p className="mb-4">
          Preheat a Dutch oven at 500°F for 45 minutes. Score the dough, lower it in, and bake covered for 20
          minutes. Remove the lid, reduce to 450°F, and bake for another 20-25 minutes until deeply browned.
          Cool for at least 1 hour before slicing.
        </p>

        <h2 className="mt-10 mb-3">Beginner Recipe FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">What is the best beginner sourdough hydration?</h3>
          <p>75% is a good balance for a first loaf: open enough crumb to feel like real sourdough, firm enough to shape without too much trouble.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Do I need a Dutch oven for sourdough?</h3>
          <p>No, but it is the easiest way to trap steam and get oven spring. A heavy lidded pot works just as well.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">How long should a beginner sourdough bulk ferment?</h3>
          <p>At 70-75°F, expect 4-6 hours, or until the dough has risen 50-75% and jiggles in the bowl.</p>
        </div>

        <h2 className="mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><a href="https://www.kingarthurbaking.com/learn/guides/sourdough" target="_blank" rel="nofollow noopener">King Arthur Baking: Sourdough Guide</a></li>
          <li><a href="https://www.theperfectloaf.com/beginners-sourdough-bread/" target="_blank" rel="nofollow noopener">The Perfect Loaf: Beginner Sourdough Bread</a></li>
        </ul>

        <NextPostNav slug="best-sourdough-bread-recipe" />
      </article>
    </>
  );
}
