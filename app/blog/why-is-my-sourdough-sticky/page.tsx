import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Why Is My Sourdough Sticky? 7 Causes and Fixes",
  description: "Sticky dough is normal at first, but it can also signal too much water, weak gluten, or over-fermentation. Here is how to tell and what to do.",
  keywords: ["sourdough sticky dough", "why is my sourdough sticky", "sticky sourdough"],
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/why-is-my-sourdough-sticky/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Why Is My Sourdough Sticky? 7 Causes and Fixes",
    description: "Sticky dough is normal at first, but it can also signal too much water, weak gluten, or over-fermentation. Here is how to tell and what to do.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/why-is-my-sourdough-sticky/",
    publishedTime: "2026-08-02",
    modifiedTime: "2026-08-02",
    images: [
      {
        url: "/images/blog/common-mistakes.webp",
        alt: "Wet sourdough dough sticking to the hands during shaping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Is My Sourdough Sticky? 7 Causes and Fixes",
    description: "Sticky dough is normal at first, but it can also signal too much water, weak gluten, or over-fermentation. Here is how to tell and what to do.",
    images: ["/images/blog/common-mistakes.webp"],
  },
};

export default function StickyDough() {
  return (
    <>
      <ArticleSchema
        slug="why-is-my-sourdough-sticky"
        title="Why Is My Sourdough Sticky? 7 Causes and Fixes"
        description="Sticky dough is normal at first, but it can also signal too much water, weak gluten, or over-fermentation. Here is how to tell and what to do."
        image="/images/blog/common-mistakes.webp"
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
                "name": "Is sourdough dough supposed to be sticky?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A little stickiness is normal, especially above 75% hydration. If the dough is unmanageable, reduce hydration by 5% or strengthen the gluten with more stretch and folds."
                }
              },
              {
                "@type": "Question",
                "name": "Why is my sourdough sticky after bulk fermentation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The dough may be over-fermented or too wet. Shorten the bulk by 30-60 minutes, or lower hydration slightly."
                }
              },
              {
                "@type": "Question",
                "name": "How do I shape sticky sourdough dough?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keep your hands and bench lightly wet or floured, use a bench scraper, and build tension quickly without overworking the dough."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/common-mistakes.webp" type="image/webp" />
          <img
            src="/images/blog/common-mistakes.webp"
            alt="Wet sourdough dough sticking to the hands during shaping"
            width="1200"
            height="800"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Why Is My Sourdough Sticky? 7 Causes and Fixes</h1>
        <p className="text-brand-muted text-sm mb-8">📖 8 min read · Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          Some stickiness is normal, especially at 75% hydration and above. If the dough is genuinely
          unmanageable, the usual causes are too much water, weak flour, under-developed gluten, or
          over-fermentation. Fix the cause, not the symptom.
        </p>

        <h2 className="mt-10 mb-3">Why Is Sticky Dough Normal?</h2>
        <p className="mb-4">
          Wet dough contains a lot of free water on its surface. That is expected. A tacky dough that still
          holds together after stretch and folds is fine; a dough that spreads into a puddle and refuses to
          form any tension has a problem.
        </p>

        <h2 className="mt-10 mb-3">What Causes Sticky Sourdough Dough?</h2>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong>Hydration too high for your flour.</strong> Reduce by 5%.</li>
          <li><strong>Weak flour.</strong> Use bread flour with 12-14% protein.</li>
          <li><strong>Under-developed gluten.</strong> Add another set of stretch and folds.</li>
          <li><strong>Over-fermentation.</strong> Shorten bulk fermentation by 30-60 minutes.</li>
          <li><strong>Starter too acidic.</strong> Use the starter closer to its peak.</li>
          <li><strong>Cold dough.</strong> Let it warm up before shaping.</li>
          <li><strong>Too much flour added during shaping.</strong> This creates raw flour streaks and a gummy crumb.</li>
        </ol>

        <h2 className="mt-10 mb-3">How Do You Fix Sticky Dough Right Now?</h2>
        <p className="mb-4">
          Wet your hands lightly and use a bench scraper instead of adding flour. Work quickly, build tension
          in a few movements, and let the dough rest between steps. If it still will not shape, put it in the
          fridge for 20-30 minutes to firm up.
        </p>

        <h2 className="mt-10 mb-3">What Hydration Is Best for Beginners?</h2>
        <p className="mb-4">
          70-72% is a comfortable starting point. It is wet enough for a good crumb but dry enough to shape
          without a fight. See our{" "}
          <Link href="/blog/sourdough-hydration-chart/" className="text-brand-brown font-medium">sourdough hydration chart</Link>{" "}
          for the full range.
        </p>

        <h2 className="mt-10 mb-3">Sticky Dough FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Is sourdough dough supposed to be sticky?</h3>
          <p>A little stickiness is normal, especially above 75% hydration. If the dough is unmanageable, reduce hydration by 5% or strengthen the gluten with more stretch and folds.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Why is my sourdough sticky after bulk fermentation?</h3>
          <p>The dough may be over-fermented or too wet. Shorten the bulk by 30-60 minutes, or lower hydration slightly.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">How do I shape sticky sourdough dough?</h3>
          <p>Keep your hands and bench lightly wet or floured, use a bench scraper, and build tension quickly without overworking the dough.</p>
        </div>

        <h2 className="mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><a href="https://www.kingarthurbaking.com/learn/guides/sourdough" target="_blank" rel="nofollow noopener">King Arthur Baking: Sourdough Guide</a></li>
          <li><a href="https://www.theperfectloaf.com/beginners-sourdough-bread/" target="_blank" rel="nofollow noopener">The Perfect Loaf: Beginner Sourdough Bread</a></li>
        </ul>

        <NextPostNav slug="why-is-my-sourdough-sticky" />
      </article>
    </>
  );
}
