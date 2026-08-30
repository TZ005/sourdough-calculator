import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Crusty Sourdough Bread Recipe: Crackling Crust, Step by Step",
  description: "Make a bakery-style crusty sourdough loaf at home. Full recipe plus how to get that crackling, shattering crust with steam, scoring, and the right bake.",
  keywords: ["crusty sourdough bread recipe", "crusty sourdough recipe", "crispy sourdough crust", "sourdough bread with crackling crust"],
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/crusty-sourdough-bread-recipe/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Crusty Sourdough Bread Recipe: Crackling Crust, Step by Step",
    description: "Make a bakery-style crusty sourdough loaf at home. Full recipe plus how to get that crackling crust with steam, scoring, and the right bake.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/crusty-sourdough-bread-recipe/",
    publishedTime: "2026-08-30",
    modifiedTime: "2026-08-30",
    images: [
      {
        url: "/images/blog/crusty-sourdough-bread-recipe.webp",
        alt: "Golden, crackling crusty sourdough loaf sliced on a wooden board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crusty Sourdough Bread Recipe: Crackling Crust, Step by Step",
    description: "Make a bakery-style crusty sourdough loaf at home. Full recipe plus how to get that crackling crust with steam, scoring, and the right bake.",
    images: ["/images/blog/crusty-sourdough-bread-recipe.webp"],
  },
};

export default function CrustySourdoughBreadRecipe() {
  return (
    <>
      <ArticleSchema
        slug="crusty-sourdough-bread-recipe"
        title="Crusty Sourdough Bread Recipe: Crackling Crust, Step by Step"
        description="Make a bakery-style crusty sourdough loaf at home. Full recipe plus how to get that crackling crust with steam, scoring, and the right bake."
        image="/images/blog/crusty-sourdough-bread-recipe.webp"
        datePublished="2026-08-30"
        dateModified="2026-08-30"
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
                "name": "What makes sourdough crust crackly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Steam during the first 15 minutes of baking plus a hot oven. The steam keeps the surface flexible while the loaf expands, then the crust dries and shatters as it cools."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best hydration for a crusty sourdough loaf?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "75-80% hydration gives a thin, crackly crust and an open crumb. Higher hydration also means a harder dough to shape, so 75% is a good starting point."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a Dutch oven for a crusty crust?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Dutch oven is the easiest way to trap steam and get oven spring, but you can also use a covered cast iron skillet, a baking stone with a steam pan, or even an inverted roasting pan."
                }
              },
              {
                "@type": "Question",
                "name": "How do I score sourdough for the best crust?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Score a single swift cut about 1/4 inch deep just before baking. A sharp lame or razor blade makes a clean cut that opens into a big ear, which is a big part of the crackle."
                }
              },
              {
                "@type": "Question",
                "name": "Why is my sourdough crust soft instead of crispy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Usually not enough steam, an oven that is too cool, or slicing the bread while it is still warm. Bake hotter with steam and let the loaf cool fully before cutting."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/crusty-sourdough-bread-recipe.webp" type="image/webp" />
          <img
            src="/images/blog/crusty-sourdough-bread-recipe.webp"
            alt="Golden, crackling crusty sourdough loaf sliced on a wooden board"
            width="1200"
            height="800"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Crusty Sourdough Bread Recipe: Crackling Crust, Step by Step</h1>
        <p className="text-brand-muted text-sm mb-8">📖 10 min read · Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          A great sourdough loaf is equal parts open crumb and loud, shattering crust. This recipe does both:
          a 75% hydration dough that is easy to shape, baked hot with steam so the crust crackles as it cools.
          Mix in the morning, cold proof overnight, and bake the next day.
        </p>

        <h2 className="mt-10 mb-3">What You Need</h2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Bread flour: 500g</li>
          <li>Water: 375g (75% hydration)</li>
          <li>Ripe sourdough starter: 100g (20%)</li>
          <li>Sea salt: 10g (2%)</li>
        </ul>
        <p className="mb-4">
          A <Link href="/blog/best-flour/" className="text-brand-brown font-medium">high-protein bread flour</Link> gives the
          strongest crust and the tallest oven spring. If you want to experiment with the ratio, our{" "}
          <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link> does the math for you.
        </p>

        <h2 className="mt-10 mb-3">The Schedule</h2>
        <p className="mb-4">
          8:00 AM mix → 8:45 AM add starter and salt → 9:00-10:30 AM stretch and folds → 10:30 AM-3:00 PM bulk
          ferment → 3:30 PM shape → overnight cold proof → next morning bake. Adjust to your kitchen: cooler
          kitchens need a longer bulk, warmer ones a shorter one.
        </p>

        <h2 className="mt-10 mb-3">How to Mix</h2>
        <p className="mb-4">
          Combine the flour and water, cover, and rest for 45 minutes (the autolyse). Then add the starter and
          salt and squeeze everything together until no dry bits remain. The dough will look shaggy and sticky —
          that is normal.
        </p>

        <h2 className="mt-10 mb-3">How to Build Strength</h2>
        <p className="mb-4">
          Do four sets of stretch and folds about 30 minutes apart. Wet your hand, grab one side of the dough,
          stretch it up and over, and rotate the bowl. Each set makes the dough smoother and more elastic.
          Want a deeper guide? See our{" "}
          <Link href="/blog/bulk-fermentation/" className="text-brand-brown font-medium">bulk fermentation guide</Link>.
        </p>

        <h2 className="mt-10 mb-3">How to Shape and Cold Proof</h2>
        <p className="mb-4">
          Turn the dough onto a lightly floured surface, form a tight round or bâtard, and place it seam-side up
          in a floured banneton. Refrigerate for 8-16 hours. The long cold proof deepens the flavor and makes the
          crust bake up crispier.
        </p>

        <h2 className="mt-10 mb-3">How to Get the Crackling Crust</h2>
        <p className="mb-4">
          The crust is all about steam and heat. Preheat a Dutch oven at 500°F for 45 minutes. Score the dough with
          one swift cut, lower it in, and bake covered for 20 minutes so the steam keeps the crust pliable while
          the loaf rises. Remove the lid, drop to 450°F, and bake 20-25 minutes more until deeply browned.
        </p>
        <p className="mb-4">
          The real magic happens when it cools: the hot, dry crust contracts and cracks into that shattering
          texture. Let it cool completely on a wire rack for at least 1 hour before slicing. For more on this, read
          our <Link href="/blog/crispy-crust/" className="text-brand-brown font-medium">7 tips for a crispy crust</Link>.
        </p>

        <h2 className="mt-10 mb-3">Tools Worth Having for a Crusty Loaf</h2>
        <p className="mb-4">
          A few things make the crust dramatically better. We link to the equipment we actually use.
        </p>
        <p className="mb-4">
          <AffiliateLink
            href="https://www.amazon.com/s?k=cast+iron+dutch+oven+5+quart&tag=sourdoughca0a-20"
            productName="cast iron dutch oven"
            source="crusty-sourdough-bread-recipe"
          >
            Cast Iron Dutch Oven on Amazon
          </AffiliateLink>
          {" "}— the easiest way to trap steam and get oven spring. A 5-quart lidded one fits a standard 500g loaf.
        </p>
        <p className="mb-4">
          <AffiliateLink
            href="https://www.amazon.com/s?k=bakers+lame+scoring+tool&tag=sourdoughca0a-20"
            productName="baker's lame"
            source="crusty-sourdough-bread-recipe"
          >
            Baker's Lame (Scoring Tool) on Amazon
          </AffiliateLink>
          {" "}— a sharp blade makes a clean 1/4 inch cut that opens into a big ear.
        </p>
        <p className="mb-4">
          <AffiliateLink
            href="https://www.amazon.com/s?k=round+banneton+proofing+basket&tag=sourdoughca0a-20"
            productName="round banneton"
            source="crusty-sourdough-bread-recipe"
          >
            Round Banneton on Amazon
          </AffiliateLink>
          {" "}— holds the shaped loaf and adds those classic ridges.
        </p>
        <p className="mb-4">
          <AffiliateLink
            href="https://www.amazon.com/s?k=bread+flour+high+protein&tag=sourdoughca0a-20"
            productName="high protein bread flour"
            source="crusty-sourdough-bread-recipe"
          >
            High-Protein Bread Flour on Amazon
          </AffiliateLink>
          {" "}— more protein means a stronger crust and taller rise.
        </p>
        <AffiliateDisclosure />

        <h2 className="mt-10 mb-3">Crusty Sourdough FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">What makes sourdough crust crackly?</h3>
          <p>Steam during the first 15 minutes of baking plus a hot oven. The steam keeps the surface flexible while the loaf expands, then the crust dries and shatters as it cools.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">What is the best hydration for a crusty sourdough loaf?</h3>
          <p>75-80% hydration gives a thin, crackly crust and an open crumb. Higher hydration also means a harder dough to shape, so 75% is a good starting point.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Do I need a Dutch oven for a crusty crust?</h3>
          <p>A Dutch oven is the easiest way to trap steam and get oven spring, but you can also use a covered cast iron skillet, a baking stone with a steam pan, or even an inverted roasting pan.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Why is my sourdough crust soft instead of crispy?</h3>
          <p>Usually not enough steam, an oven that is too cool, or slicing the bread while it is still warm. Bake hotter with steam and let the loaf cool fully before cutting.</p>
        </div>

        <h2 className="mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><a href="https://www.kingarthurbaking.com/learn/guides/sourdough" target="_blank" rel="nofollow noopener">King Arthur Baking: Sourdough Guide</a></li>
          <li><a href="https://www.theperfectloaf.com/beginners-sourdough-bread/" target="_blank" rel="nofollow noopener">The Perfect Loaf: Beginner Sourdough Bread</a></li>
        </ul>

        <NextPostNav slug="crusty-sourdough-bread-recipe" />
      </article>
    </>
  );
}
