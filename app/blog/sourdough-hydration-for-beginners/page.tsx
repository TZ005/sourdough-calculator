import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Sourdough Hydration for Beginners: Start with 75% (and Why)",
  description: "If you are new to sourdough, start with 75% hydration. Here is why it works, what changes when you go higher or lower, and three simple rules to nail your first loaf.",
  keywords: ["sourdough hydration for beginners", "sourdough for beginners", "beginner sourdough hydration", "75% hydration sourdough", "first sourdough loaf"],
  alternates: { canonical: "https://sourdough-hydrationcalculator.com/blog/sourdough-hydration-for-beginners/" },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Sourdough Hydration for Beginners: Start with 75% (and Why)",
    description: "If you are new to sourdough, start with 75% hydration. Here is why it works, what changes when you go higher or lower, and three simple rules to nail your first loaf.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/sourdough-hydration-for-beginners/",
    publishedTime: "2026-08-21",
    modifiedTime: "2026-08-21",
    images: [{ url: "/images/blog/hydration-guide.webp", alt: "Sourdough dough in a bowl showing 75% hydration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough Hydration for Beginners: Start with 75% (and Why)",
    description: "If you are new to sourdough, start with 75% hydration. Here is why it works, what changes when you go higher or lower, and three simple rules to nail your first loaf.",
    images: ["/images/blog/hydration-guide.webp"],
  },
};

export default function SourdoughHydrationForBeginners() {
  return (
    <>
      <ArticleSchema
        slug="sourdough-hydration-for-beginners"
        title="Sourdough Hydration for Beginners: Start with 75% (and Why)"
        description="If you are new to sourdough, start with 75% hydration. Here is why it works, what changes when you go higher or lower, and three simple rules to nail your first loaf."
        image="/images/blog/hydration-guide.webp"
        datePublished="2026-08-21"
        dateModified="2026-08-21"
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">-</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/hydration-guide.webp" type="image/webp" />
          <img
            src="/images/blog/hydration-guide.webp"
            alt="Hands stretching and folding sourdough dough in a bowl, demonstrating the technique at 75% hydration"
            width="1200"
            height="630"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Sourdough Hydration for Beginners: Start with 75% (and Why)</h1>
        <p className="text-brand-muted text-sm mb-8">6 min read - Published August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          If you have just started baking sourdough, the single most important number to learn is hydration. Get it right and your bread has an open, chewy crumb with a crackling crust. Get it wrong and you end up with a dense brick or a sticky mess that sticks to everything. This guide explains why 75% is the safest starting point and what to change once you are comfortable.
        </p>

        <h2 className="mt-10 mb-3">What is Hydration, in One Sentence?</h2>
        <p className="mb-4">
          Hydration is the ratio of water to flour in your dough, written as a percentage. If you have 500g of flour and 375g of water, your hydration is 75%. That single number controls the final texture of your bread more than any other variable.
        </p>

        <h2 className="mt-10 mb-3">Why 75% is the Best Starting Point</h2>
        <p className="mb-4">
          Three reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong>It shapes reliably.</strong> 75% dough is firm enough to hold its shape during proofing without spreading on the counter. Beginners almost never lose a loaf to over-spreading at this hydration.</li>
          <li><strong>It develops flavor well.</strong> 75% is the lower end of the artisan range, so your bulk fermentation is long enough (4 to 6 hours at 24°C) to develop the classic sourdough tang without going vinegary.</li>
          <li><strong>It is forgiving.</strong> Slight over-proofing or under-proofing is much more forgiving at 75% than at 80%+. Your first 10 loaves will be more consistent at 75% than at any other hydration.</li>
        </ol>

        <h2 className="mt-10 mb-3">A Real 75% Recipe (500g flour)</h2>
        <p className="mb-4">
          Open our <Link href="/" className="text-brand-brown font-medium">hydration calculator</Link> to scale this to any flour weight, or use the defaults below for a small test batch:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Flour: <strong>500 g</strong></li>
          <li>Water: <strong>375 g</strong> (75% of flour weight)</li>
          <li>Starter (20%): <strong>100 g</strong></li>
          <li>Salt (2%): <strong>10 g</strong></li>
        </ul>
        <p className="mb-4">
          Total dough weight: <strong>985 g</strong> - enough for one large loaf or two small ones.
        </p>

        <h2 className="mt-10 mb-3">The Three Beginner Rules</h2>
        <p className="mb-4">
          Once you have made 5 to 10 loaves at 75% and feel comfortable, you can experiment. Keep these three rules in mind:
        </p>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li><strong>Lower hydration (60 to 70%):</strong> Easier to shape, denser crumb. Use for bagels, pretzels, and baguettes. <Link href="/blog/best-sourdough-baguettes/" className="text-brand-brown font-medium">Read our baguette guide for the 65% recipe.</Link></li>
          <li><strong>Standard hydration (70 to 78%):</strong> The everyday sweet spot. 75% is the most-published sourdough hydration for a reason: it works.</li>
          <li><strong>Higher hydration (80%+):</strong> Open, holey crumb. Looks impressive on Instagram but is much harder to handle. Wait until you have made at least 20 successful loaves before trying this. <Link href="/blog/high-vs-low-hydration-sourdough/" className="text-brand-brown font-medium">See the 65% vs 75% vs 85% comparison.</Link></li>
        </ol>

        <h2 className="mt-10 mb-3">What Can Go Wrong at 75%</h2>
        <p className="mb-4">
          Even at the safest hydration, three things can still go wrong on a beginner's first loaf:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Sticky dough that spreads:</strong> Almost always means under-proofed bulk. Let the dough bulk-ferment longer (look for 50% volume increase, domed top, and bubbles along the sides).</li>
          <li><strong>Dense, gummy crumb:</strong> Almost always means under-proofed final proof. The poke test should leave an indent that slowly springs back. If it springs back fast, proof longer.</li>
          <li><strong>Very sour taste:</strong> Bulk or final proof was too long or too warm. Try cooler temperatures (22 to 24°C) and shorter times.</li>
        </ul>

        <h2 className="mt-10 mb-3">When to Move Beyond 75%</h2>
        <p className="mb-4">
          Move to 78% or 80% when you can reliably:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Shape a tight boule without it spreading on the counter</li>
          <li>Time your bulk fermentation consistently within 30 minutes</li>
          <li>Read the poke test accurately (not guessing)</li>
        </ul>
        <p className="mb-4">
          Most home bakers spend 3 to 6 months at 75% before moving higher. There is no rush. The best sourdough is the one you make consistently well, not the most photogenic one.
        </p>

        <h2 className="mt-10 mb-3">Try the Calculator</h2>
        <p className="mb-6">
          Use the <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link> to dial in your exact recipe. It works in grams, ounces, or cups and includes baker's percentages for salt and starter.
        </p>

        <div className="bg-brand-tan p-6 rounded-lg my-8">
          <p className="font-bold text-lg mb-2">Quick start</p>
          <p className="mb-3">Enter 500g flour, set hydration to 75%, salt to 2%, starter to 20%. The calculator gives you exact water, salt, and starter grams - no math.</p>
          <Link href="/" className="inline-block bg-brand-brown text-white px-5 py-2 rounded-lg font-medium hover:bg-brand-brown/90">Open Calculator -</Link>
        </div>

        <NextPostNav slug="sourdough-hydration-for-beginners" />
      </article>
    </>
  );
}
