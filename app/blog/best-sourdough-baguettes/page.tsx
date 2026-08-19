import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Sourdough Baguettes: How to Shape and Score at Home (2026)",
  description: "Make bakery-quality sourdough baguettes at home. Includes the 65% hydration rule, three shaping methods (epis, fendu, traditional), and the 4-cut scoring pattern.",
  keywords: ["sourdough baguettes", "homemade baguettes", "baguette shaping", "sourdough baguette recipe", "baguette scoring"],
  alternates: { canonical: "https://sourdough-hydrationcalculator.com/blog/best-sourdough-baguettes/" },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Sourdough Baguettes: How to Shape and Score at Home (2026)",
    description: "Make bakery-quality sourdough baguettes at home. Includes the 65% hydration rule, three shaping methods (epis, fendu, traditional), and the 4-cut scoring pattern.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/best-sourdough-baguettes/",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [{ url: "/images/blog/sourdough-pizza-dough.webp", alt: "A freshly baked sourdough baguette with golden crust on a wooden board" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough Baguettes: How to Shape and Score at Home (2026)",
    description: "Make bakery-quality sourdough baguettes at home. Includes the 65% hydration rule, three shaping methods (epis, fendu, traditional), and the 4-cut scoring pattern.",
    images: ["/images/blog/sourdough-pizza-dough.webp"],
  },
};

export default function BestSourdoughBaguettes() {
  return (
    <>
      <ArticleSchema
        slug="best-sourdough-baguettes"
        title="Sourdough Baguettes: How to Shape and Score at Home (2026)"
        description="Make bakery-quality sourdough baguettes at home. Includes the 65% hydration rule, three shaping methods (epis, fendu, traditional), and the 4-cut scoring pattern."
        image="/images/blog/sourdough-pizza-dough.webp"
        datePublished="2026-08-19"
        dateModified="2026-08-19"
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">-</span> Back to Blog</Link>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Sourdough Baguettes: How to Shape and Score at Home (2026)</h1>
        <p className="text-brand-muted text-sm mb-8">7 min read - Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          A good sourdough baguette is a contradiction in the best way: a thin, crackling crust, a tender open crumb, and the unmistakable tang of long fermentation - all from a dough that is mostly just flour, water, salt, and starter. The trick is in the shaping, the lower hydration, and the slashing. This guide covers all three.
        </p>

        <h2 className="mt-10 mb-3">Why Baguettes Are Different from Boules</h2>
        <p className="mb-4">
          Most sourdough loaves use hydration in the 70-80% range. Baguettes sit lower - around 60-65% - for a specific reason: the dough has to hold its long, narrow shape during proofing and oven spring. A wetter dough spreads sideways; a drier one keeps its scored ridges and bakes up tall with a defined crust.
        </p>
        <p className="mb-4">
          This means a baguette requires a different shaping approach than a boule or batard. The dough is stiffer. The folds are tighter. The final shape is longer and narrower. Use our <Link href="/" className="text-brand-brown font-medium">hydration calculator</Link> to dial in the right flour-to-water ratio for a 65% dough before you start.
        </p>

        <h2 className="mt-10 mb-3">The 65% Hydration Rule</h2>
        <p className="mb-4">
          For 500g of flour, you want about 325g of water. That is 65% hydration - a workable, shapeable dough. Going lower (60%) makes the crumb too tight; going higher (70% or above) makes the dough spread and lose its score definition during proofing.
        </p>
        <p className="mb-4">
          One exception: if you are making a "poolish" or pre-ferment with a high-hydration component, you can mix a final dough at 65% with a high-hydration pre-ferment. See the <Link href="/blog/sourdough-starter/" className="text-brand-brown font-medium">7-day sourdough starter guide</Link> for pre-ferment options.
        </p>

        <h2 className="mt-10 mb-3">Three Ways to Shape a Baguette</h2>

        <h3 className="mt-6 mb-2">1. Traditional (the Classic Pli)</h3>
        <p className="mb-4">
          Fold the dough in thirds, letter-style, three times at 30-minute intervals. After the final fold, let the dough rest 20 minutes, then shape. Flip the dough seam-side up. Fold the top third down to the middle, then the bottom third up to the middle. Roll the seam toward yourself, then gently elongate to 14-16 inches by rolling your hands outward from the center.
        </p>

        <h3 className="mt-6 mb-2">2. Epis (for a Tighter Crumb)</h3>
        <p className="mb-4">
          This is the "ears" shape. Roll the shaped baguette seam-side up. Using a bench scraper or your hand, fold the two ends toward the center, then flip so seam is down. The result has more open crumb at the ends than the traditional pli.
        </p>

        <h3 className="mt-6 mb-2">3. Fendu (the Split, for Open Crumb)</h3>
        <p className="mb-4">
          Best for capturing lots of oven spring. After shaping, use a lame to make a single long cut down the center, slightly off-center. The two halves split dramatically in the oven.
        </p>

        <h2 className="mt-10 mb-3">The 4-Cut Scoring Pattern</h2>
        <p className="mb-4">
          The classic baguette score is one long cut, slightly off-center, about 1/4 inch deep. A 4-cut variant - one main cut plus 3-4 short diagonal cuts across the top - gives more visual appeal and even more oven spring.
        </p>
        <p className="mb-4">
          If you are using a lame, see our <Link href="/blog/how-to-score-sourdough-bread/" className="text-brand-brown font-medium">scoring guide</Link> for technique. For baguettes specifically, use a single razor blade or a curved lame - a kitchen knife is too thick.
        </p>

        <h2 className="mt-10 mb-3">Baking: Stone, Steam, Oven</h2>
        <p className="mb-4">
          A baguette needs a hot surface and lots of steam for the first 10-15 minutes. Preheat your baking stone (or inverted sheet pan) at 250 C / 480 F for at least 45 minutes. Add steam by:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Pouring 1 cup of boiling water into a preheated sheet pan on the rack below</li>
          <li>Placing a metal loaf pan filled with water in the oven during preheat</li>
          <li>Using a covered Dutch oven or La Cloche dome</li>
        </ul>
        <p className="mb-4">
          After 15 minutes, remove the steam source and lower the oven to 230 C / 450 F. Bake another 15-20 minutes until the crust is deep golden brown. Cool completely on a wire rack - 30+ minutes - before slicing.
        </p>

        <h2 className="mt-10 mb-3">4 Common Mistakes</h2>
        <p className="mb-4">
          <strong>1. Too wet a dough.</strong> Anything above 67% hydration will spread. Stay in the 60-65% range unless you specifically want an open crumb.
        </p>
        <p className="mb-4">
          <strong>2. Insufficient shaping tension.</strong> If the baguette relaxes during proofing, the score will not hold. Tighten the final shape by rolling firmly and let it rest seam-side down on a floured couche.
        </p>
        <p className="mb-4">
          <strong>3. Cutting too early.</strong> The crumb is still cooking when the baguette comes out. Cutting immediately results in a gummy interior. Wait 30+ minutes.
        </p>
        <p className="mb-4">
          <strong>4. Not enough steam.</strong> Without steam, the crust will not develop that signature crackle. A dry oven produces a baguette that looks right but tastes flat.
        </p>

        <h2 className="mt-10 mb-3">FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Can I use any flour for sourdough baguettes?</h3>
          <p>Yes, but high-protein bread flour (12-14% protein) gives the strongest structure. Whole wheat works but produces a denser crumb. See our <Link href="/blog/best-flour/" className="text-brand-brown font-medium">flour comparison guide</Link>.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">How long should a baguette proof before baking?</h3>
          <p>At room temperature, 2-3 hours. In the fridge (38 F), 12-18 hours. The dough should be puffy but not doubled in size. Over-proofed baguettes will collapse in the oven.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Can I bake baguettes without a baking stone?</h3>
          <p>Yes. An inverted cast iron skillet or a heavy-duty sheet pan works. The key is preheating the surface for 45+ minutes at high temperature for oven spring.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Do I need a couche to shape baguettes?</h3>
          <p>Not strictly, but a couche (floured linen cloth between folds) prevents the shaped loaves from spreading during the final proof. A couche is the standard tool. A clean, floured dish towel works in a pinch.</p>
        </div>

        <h2 className="mt-10 mb-3">What to Buy</h2>
        <p className="mb-4">
          <AffiliateLink
            href="https://www.amazon.com/s?k=baguette+couche+linen&tag=sourdoughca0a-20"
            productName="baguette couche linen"
            source="best-sourdough-baguettes"
          >
            Baguette Couche Linen on Amazon
          </AffiliateLink>
          <br />
          Price: $15-25. A floured couche is the standard tool for proofing baguettes without spreading. Get one with a fold divider so you can proof 2-3 baguettes side by side.
        </p>

        <AffiliateDisclosure />

        <h2 className="mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><a href="https://www.kingarthurbaking.com/learn/resources/baguette" target="_blank" rel="nofollow noopener">King Arthur: Sourdough Baguette Guide</a></li>
          <li><a href="https://www.theperfectloaf.com/sourdough-baguette-recipe/" target="_blank" rel="nofollow noopener">The Perfect Loaf: Sourdough Baguette</a></li>
          <li>Tartine Bread by Chad Robertson - baguette shaping chapter</li>
        </ul>

        <NextPostNav slug="best-sourdough-baguettes" />
      </article>
    </>
  );
}
