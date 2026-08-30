import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Sourdough Naan: Soft, Puffy, Skillet-Cooked Flatbread",
  description: "Make pillowy, blistered sourdough naan at home with active starter or discard. The recipe, the timing, and how to get those bubbly charred spots in a hot skillet.",
  keywords: ["sourdough naan", "sourdough naan recipe", "naan with sourdough starter", "sourdough flatbread"],
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/sourdough-naan/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Sourdough Naan: Soft, Puffy, Skillet-Cooked Flatbread",
    description: "Make pillowy, blistered sourdough naan at home with active starter or discard. The recipe, the timing, and how to get those bubbly charred spots in a hot skillet.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/sourdough-naan/",
    publishedTime: "2026-08-30",
    modifiedTime: "2026-08-30",
    images: [
      {
        url: "/images/blog/sourdough-naan.webp",
        alt: "Soft, puffy sourdough naan with blistered golden spots on a wooden board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough Naan: Soft, Puffy, Skillet-Cooked Flatbread",
    description: "Make pillowy, blistered sourdough naan at home with active starter or discard. The recipe, the timing, and how to get those bubbly charred spots in a hot skillet.",
    images: ["/images/blog/sourdough-naan.webp"],
  },
};

export default function SourdoughNaan() {
  return (
    <>
      <ArticleSchema
        slug="sourdough-naan"
        title="Sourdough Naan: Soft, Puffy, Skillet-Cooked Flatbread"
        description="Make pillowy, blistered sourdough naan at home with active starter or discard. The recipe, the timing, and how to get those bubbly charred spots in a hot skillet."
        image="/images/blog/sourdough-naan.webp"
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
                "name": "Can I use sourdough discard for naan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Past-their-peak starter still adds tang and lift. You may need a touch more baking time since discard is less active, and the naan will be slightly less puffed but still delicious."
                }
              },
              {
                "@type": "Question",
                "name": "What hydration is best for sourdough naan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Around 70% with a little yogurt works well. It is wet enough to puff in the pan but dry enough to roll out without sticking using plenty of flour."
                }
              },
              {
                "@type": "Question",
                "name": "Why is my naan not puffing up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The pan is not hot enough, or the dough is too flat. Use a screaming-hot cast iron skillet and a lid to trap steam, which is what makes naan balloon. Roll to about 1/4 inch thick."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a tandoor or a skillet?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A heavy cast iron skillet or a pizza stone works great at home. The key is high, even heat and a cover to trap steam so the naan puffs up and blisters."
                }
              },
              {
                "@type": "Question",
                "name": "How long does sourdough naan need to rise?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A same-day batch needs about 6-8 hours total (mix to cook). For more flavor, do a shorter room rise then an overnight cold ferment, and let the dough warm up before rolling."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

        <picture>
          <source srcSet="/images/blog/sourdough-naan.webp" type="image/webp" />
          <img
            src="/images/blog/sourdough-naan.webp"
            alt="Soft, puffy sourdough naan with blistered golden spots on a wooden board"
            width="1200"
            height="800"
            className="w-full rounded-xl my-8"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Sourdough Naan: Soft, Puffy, Skillet-Cooked Flatbread</h1>
        <p className="text-brand-muted text-sm mb-8">📖 8 min read · Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          Naan is the flatbread that actually uses your sourdough starter. The tang from the starter, the yogurt for
          softness, and a screaming-hot skillet that makes it puff up and blister. It is faster than a loaf, needs no
          shaping or scoring, and is nearly impossible to get wrong.
        </p>

        <h2 className="mt-10 mb-3">Why You Should Make Sourdough Naan</h2>
        <p className="mb-4">
          Naan is a great use for a ripe starter, and it is also one of the best ways to use <Link href="/blog/sourdough-discard/" className="text-brand-brown font-medium">sourdough discard</Link>. It takes about the same time as a pizza dough but cooks in minutes instead of a long dutch-oven bake. The reward is a soft, chewy bread with those signature charred bubbles, ready for curry, hummus, or a simple garlic butter.
        </p>

        <h2 className="mt-10 mb-3">Sourdough Naan Recipe</h2>
        <p className="mb-4">
          This is around a 70% hydration dough. The yogurt adds tenderness and the little bit of sugar helps browning.
        </p>
        <p className="mb-4"><strong>Bakers percentages:</strong></p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Bread or all-purpose flour: 100%</li>
          <li>Water: 70%</li>
          <li>Active sourdough starter: 20%</li>
          <li>Plain yogurt: 6%</li>
          <li>Salt: 2%</li>
          <li>Sugar or honey: 2% (optional)</li>
        </ul>
        <p className="mb-4"><strong>For 500g flour (about 8 naan):</strong></p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Bread or all-purpose flour: 500g</li>
          <li>Lukewarm water: 350g</li>
          <li>Active sourdough starter: 100g</li>
          <li>Plain yogurt: 30g</li>
          <li>Sea salt: 10g</li>
          <li>Sugar: 10g (optional)</li>
        </ul>

        <h2 className="mt-10 mb-3">How to Make Sourdough Naan</h2>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Step 1: Mix (5 minutes)</h3>
        <p className="mb-4">
          Stir the starter and yogurt into the water. Add the flour, salt, and sugar, and mix until no dry flour remains.
          It will be a soft, slightly sticky dough. Cover and rest for 30 minutes.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Step 2: Build Strength</h3>
        <p className="mb-4">
          Do two or three sets of stretch and folds, 20-30 minutes apart, until the dough is smooth and supple. Naan
          does not need the same strength as a boule; you just want it to hold together when rolled.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Step 3: Bulk Ferment (6-8 hours, or overnight)</h3>
        <p className="mb-4">
          Leave the dough covered at room temperature until it is puffy and has almost doubled, about 6-8 hours depending
          on your kitchen. For deeper flavor, let it rise for 3-4 hours, then refrigerate overnight and warm it up the
          next day before shaping.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Step 4: Divide and Rest</h3>
        <p className="mb-4">
          Turn the dough onto a floured surface and divide into 8 equal balls. Cover and rest for 20 minutes. This lets
          the gluten relax so the naan rolls out easily and puffs up in the pan.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Step 5: Roll Out</h3>
        <p className="mb-4">
          Flatten each ball into a teardrop or oval about 1/4 inch thick, using plenty of flour so it does not stick.
          Roll from the center out, leaving it a little thicker in the middle for a soft chew.
        </p>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Step 6: Cook in a Hot Skillet</h3>
        <p className="mb-4">
          Preheat a heavy cast iron skillet over high heat until it is smoking hot. Lay the naan in and cover with a lid
          for the first 45-60 seconds so steam makes it puff. Uncover, let the underside blister and char, then flip and
          cook another 30-45 seconds. Brush with melted butter or garlic butter as soon as it comes out.
        </p>

        <h2 className="mt-10 mb-3">Tools That Make It Easier</h2>
        <p className="mb-4">
          A cast iron skillet and good flour are the two things that matter most here.
        </p>
        <p className="mb-4">
          <AffiliateLink
            href="https://www.amazon.com/s?k=cast+iron+skillet+12+inch&tag=sourdoughca0a-20"
            productName="cast iron skillet"
            source="sourdough-naan"
          >
            Cast Iron Skillet on Amazon
          </AffiliateLink>
          {" "}— high, even heat is the secret to those blistered, bubbly spots.
        </p>
        <p className="mb-4">
          <AffiliateLink
            href="https://www.amazon.com/s?k=bread+flour+high+protein&tag=sourdoughca0a-20"
            productName="high protein bread flour"
            source="sourdough-naan"
          >
            High-Protein Flour on Amazon
          </AffiliateLink>
          {" "}— adds chew and helps the dough puff without tearing.
        </p>
        <AffiliateDisclosure />

        <h2 className="mt-10 mb-3">Sourdough Naan FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Can I use sourdough discard for naan?</h3>
          <p>Yes. Past-their-peak starter still adds tang and lift. You may need a touch more baking time since discard is less active, and the naan will be slightly less puffed but still delicious.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Why is my naan not puffing up?</h3>
          <p>The pan is not hot enough, or the dough is too flat. Use a screaming-hot cast iron skillet and a lid to trap steam, which is what makes naan balloon. Roll to about 1/4 inch thick.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">How long does sourdough naan need to rise?</h3>
          <p>A same-day batch needs about 6-8 hours total (mix to cook). For more flavor, do a shorter room rise then an overnight cold ferment, and let the dough warm up before rolling.</p>
        </div>

        <h2 className="mt-10 mb-3">More Sourdough Recipes</h2>
        <p className="mb-4">
          If you have a starter going, see our <Link href="/blog/sourdough-pizza-dough/" className="text-brand-brown font-medium">sourdough pizza dough</Link> and
          the best <Link href="/blog/best-flour/" className="text-brand-brown font-medium">flour for sourdough</Link>. Need the math for a different pan or batch size? Use our{" "}
          <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link>.
        </p>

        <h2 className="mt-10 mb-3">References</h2>
        <ol className="list-decimal pl-6 space-y-2 mb-8">
          <li>King Arthur Baking. <a href="https://www.kingarthurbaking.com/learn/guides/sourdough" target="_blank" rel="nofollow noopener">Sourdough Guide</a>. Accessed August 2026.</li>
          <li>Forkish, K. (2012). <em>Flour Water Salt Yeast</em>. Chronicle Books.</li>
        </ol>

        <NextPostNav slug="sourdough-naan" />
      </article>
    </>
  );
}
