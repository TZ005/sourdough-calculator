import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Sourdough for Beginners: Week-by-Week Timeline",
  description: "What to do in week one, two, and three when you are new to sourdough: starter, first loaves, and the skills that matter most.",
  keywords: ["sourdough for beginners", "sourdough beginner timeline", "sourdough week by week"],
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/sourdough-beginners-timeline/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Sourdough for Beginners: Week-by-Week Timeline",
    description: "What to do in week one, two, and three when you are new to sourdough: starter, first loaves, and the skills that matter most.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/sourdough-beginners-timeline/",
    publishedTime: "2026-08-02",
    modifiedTime: "2026-08-02",
    images: [
      {
        url: "/images/blog/sourdough-schedule.webp",
        alt: "Sourdough baking schedule laid out week by week for beginners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough for Beginners: Week-by-Week Timeline",
    description: "What to do in week one, two, and three when you are new to sourdough: starter, first loaves, and the skills that matter most.",
    images: ["/images/blog/sourdough-schedule.webp"],
  },
};

export default function BeginnersTimeline() {
  return (
    <>
      <ArticleSchema
        slug="sourdough-beginners-timeline"
        title="Sourdough for Beginners: Week-by-Week Timeline"
        description="What to do in week one, two, and three when you are new to sourdough: starter, first loaves, and the skills that matter most."
        image="/images/blog/sourdough-schedule.webp"
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
                "name": "How long does it take to learn sourdough baking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most beginners make a good first loaf in 2-3 weeks. The first week is starter building, then two or three practice loaves teach shaping, fermentation, and baking."
                }
              },
              {
                "@type": "Question",
                "name": "When is a sourdough starter ready to bake with?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A starter is ready when it reliably doubles in 4-6 hours after feeding, smells pleasantly tangy, and is at least 7-10 days old."
                }
              },
              {
                "@type": "Question",
                "name": "How many loaves should a beginner bake?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bake at least 2-3 loaves before changing the recipe. Each loaf teaches something different: fermentation timing, shaping, and oven spring."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/sourdough-schedule.webp" type="image/webp" />
          <img
            src="/images/blog/sourdough-schedule.webp"
            alt="Sourdough baking schedule laid out week by week for beginners"
            width="1200"
            height="800"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Sourdough for Beginners: Week-by-Week Timeline</h1>
        <p className="text-brand-muted text-sm mb-8">📖 9 min read · Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          Most beginners can bake a real sourdough loaf within three weeks. Week one is starter building,
          week two is your first loaf, and week three is repetition with small improvements.
        </p>

        <h2 className="mt-10 mb-3">What Happens in Week One?</h2>
        <p className="mb-4">
          Build your starter from flour and water. Feed it daily, watch it bubble, and do not judge your
          future bread by its first three days. A starter is usually ready after 7-10 days of consistent
          feeding.
        </p>

        <h2 className="mt-10 mb-3">What Happens in Week Two?</h2>
        <p className="mb-4">
          Bake your first loaf at 70-75% hydration. Expect it to be heavier or flatter than the photos.
          That is normal. Write down the bulk fermentation time and the result so the next loaf is better.
        </p>

        <h2 className="mt-10 mb-3">What Happens in Week Three?</h2>
        <p className="mb-4">
          Bake two more loaves using the same recipe. Change only one variable each time, such as bulk
          fermentation length, shaping tightness, or oven temperature. Consistency teaches more than variety.
        </p>

        <h2 className="mt-10 mb-3">What Skills Should You Practice First?</h2>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Feeding the starter on a schedule</li>
          <li>Reading the dough: rise, bubbles, and jiggle</li>
          <li>Stretch and folds</li>
          <li>Shaping with light tension</li>
          <li>Scoring one confident cut</li>
        </ol>

        <h2 className="mt-10 mb-3">How Do You Know You Are Ready for More?</h2>
        <p className="mb-4">
          When two loaves in a row bake with a similar result and you can explain what changed, you are ready
          to raise hydration, try whole wheat, or move to a longer cold proof.
        </p>

        <h2 className="mt-10 mb-3">Beginner Timeline FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">How long does it take to learn sourdough baking?</h3>
          <p>Most beginners make a good first loaf in 2-3 weeks. The first week is starter building, then two or three practice loaves teach shaping, fermentation, and baking.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">When is a sourdough starter ready to bake with?</h3>
          <p>A starter is ready when it reliably doubles in 4-6 hours after feeding, smells pleasantly tangy, and is at least 7-10 days old.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">How many loaves should a beginner bake?</h3>
          <p>Bake at least 2-3 loaves before changing the recipe. Each loaf teaches something different: fermentation timing, shaping, and oven spring.</p>
        </div>

        <h2 className="mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><a href="https://www.kingarthurbaking.com/recipes/sourdough-starter-recipe" target="_blank" rel="nofollow noopener">King Arthur Baking: Sourdough Starter Recipe</a></li>
          <li><a href="https://www.theperfectloaf.com/sourdough-starter/" target="_blank" rel="nofollow noopener">The Perfect Loaf: Sourdough Starter Guide</a></li>
        </ul>

        <NextPostNav slug="sourdough-beginners-timeline" />
      </article>
    </>
  );
}
