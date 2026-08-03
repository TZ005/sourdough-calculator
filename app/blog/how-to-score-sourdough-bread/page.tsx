import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "How to Score Sourdough Bread: Patterns, Tools, and When to Cut",
  description: "Scoring is the final artistic step in sourdough. Here is when to cut, what tools you need, the classic patterns, and the common mistakes that ruin a good loaf.",
  keywords: ["how to score sourdough", "sourdough scoring", "lame bread", "bread scoring patterns", "bread lame"],
  alternates: { canonical: "https://sourdough-hydrationcalculator.com/blog/how-to-score-sourdough-bread/" },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "How to Score Sourdough Bread: Patterns, Tools, and When to Cut",
    description: "Scoring is the final artistic step in sourdough. Here is when to cut, what tools you need, the classic patterns, and the common mistakes that ruin a good loaf.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/how-to-score-sourdough-bread/",
    publishedTime: "2026-08-04",
    modifiedTime: "2026-08-04",
    images: [{ url: "/images/blog/shaping-boule.webp", alt: "Sourdough boule with decorative scoring pattern on its surface" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Score Sourdough Bread: Patterns, Tools, and When to Cut",
    description: "Scoring is the final artistic step in sourdough. Here is when to cut, what tools you need, the classic patterns, and the common mistakes that ruin a good loaf.",
    images: ["/images/blog/shaping-boule.webp"],
  },
};

export default function HowToScoreSourdoughBread() {
  return (
    <>
      <ArticleSchema
        slug="how-to-score-sourdough-bread"
        title="How to Score Sourdough Bread: Patterns, Tools, and When to Cut"
        description="Scoring is the final artistic step in sourdough. Here is when to cut, what tools you need, the classic patterns, and the common mistakes that ruin a good loaf."
        image="/images/blog/shaping-boule.webp"
        datePublished="2026-08-04"
        dateModified="2026-08-04"
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">How to Score Sourdough Bread: Patterns, Tools, and When to Cut</h1>
        <p className="text-brand-muted text-sm mb-8">📖 7 min read · Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          Scoring is the final artistic step in sourdough baking. The slashes you cut before loading
          the loaf into the oven are not decorative — they control where the bread expands. A loaf
          scored correctly will open up dramatically at the cut during oven spring. A loaf scored
          wrong (or not at all) will tear randomly at weak spots in the surface.
        </p>

        <p className="mb-6">
          The good news: scoring is a learnable skill that takes 10 minutes to grasp and a lifetime
          to perfect. The single most important thing is not the pattern you choose. It is timing.
        </p>

        <h2 className="mt-10 mb-3">What Scoring Actually Does</h2>
        <p className="mb-4">
          When the dough goes into a hot oven, the gas inside expands rapidly. That expansion has to go
          somewhere. A loaf that is not scored expands at the weakest point of its surface, which is
          almost never where you want it. A scored loaf expands along the cut, because the cut is now
          the weakest point.
        </p>
        <p className="mb-4">
          This is why bakers say "scoring controls the bloom." A clean, deliberate cut produces a
          dramatic ear (the section that lifts up). A shallow or hesitant cut produces a partial
          opening. A cut that is too deep tears wide and deflates. A cut that comes too late (after
          the dough has already set) only cracks the surface without opening.
        </p>

        <h2 className="mt-10 mb-3">When to Score: Timing Is Everything</h2>
        <p className="mb-4">
          Score right before loading the dough into the oven. Not 5 minutes before. Not 30 minutes
          before. Right before.
        </p>
        <p className="mb-4">
          If the dough has had a final proof at room temperature (60 to 90 minutes), it is ready to
          score when:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>It has grown about 50 to 75 percent from its post-shape size</li>
          <li>It jiggles slightly when you shake the banneton</li>
          <li>Your finger pressed gently into the surface leaves an indent that springs back slowly</li>
        </ul>
        <p className="mb-4">
          If the dough has had a long cold retard (12 to 48 hours in the fridge), it can be scored
          straight from the fridge. Cold dough is firmer and the cuts will be sharper. Let it sit at
          room temperature for 10 to 15 minutes after scoring to take the chill off before loading
          into the oven.
        </p>
        <p className="mb-4">
          If the dough is over-proofed (very jiggly, indent does not spring back), it will deflate
          under the lame no matter how good your cut is. The fix is not better scoring. The fix is
          shorter proof next time.
        </p>

        <h2 className="mt-10 mb-3">The Tools You Need</h2>
        <p className="mb-4">
          <strong>1. A lame.</strong> A lame is a razor-blade holder designed for scoring. Standard
          double-edged razor blades work for most loaves. Curved blades give a wider ear; straight
          blades give a tighter cut. The lame is the only specialized tool you absolutely need.
        </p>
        <p className="mb-4">
          <strong>2. A sharp blade.</strong> Replace the blade every 5 to 10 bakes. A dull blade drags
          rather than cuts, leaving ragged edges. The bread will still expand, but the cut will look
          torn rather than clean.
        </p>
        <p className="mb-4">
          <strong>3. Rice flour or all-purpose flour for dusting.</strong> A light dusting on the dough
          surface before scoring gives the blade something to grip and prevents sticking. Skip this
          if you are doing a hydration above 80 percent, where the surface is already wet.
        </p>
        <p className="mb-4">
          You do not need a special cutter for home baking. A sharp paring knife works, though a
          lame gives better control. What you do not want: scissors, dull knives, or serrated
          bread knives. All of these drag.
        </p>

        <h2 className="mt-10 mb-3">Five Classic Scoring Patterns</h2>
        <p className="mb-4">
          The pattern itself matters less than the depth, angle, and timing. Pick one that fits the
          shape of your loaf.
        </p>

        <h3 className="mt-6 mb-2">1. Single Slash (Boule or Batard)</h3>
        <p className="mb-4">
          One cut, 30 to 45 degrees off vertical, about 1/4 inch deep, slightly curved. The most
          common pattern. Produces a dramatic ear on a round loaf. Length should be about 70 percent
          of the loaf diameter.
        </p>

        <h3 className="mt-6 mb-2">2. Cross (Boule)</h3>
        <p className="mb-4">
          Two cuts, perpendicular, each 1/4 inch deep, intersecting at the center. Produces four
          quadrants that each open up. The classic French country loaf look.
        </p>

        <h3 className="mt-6 mb-2">3. Wheat Stalk (Boule or Batard)</h3>
        <p className="mb-4">
          A long central cut, with shorter diagonal cuts on each side, like a stalk of wheat. Visual
          impact, but the side cuts can collapse if too shallow. Best for confident scoremakers.
        </p>

        <h3 className="mt-6 mb-2">4. Spiral (Round)</h3>
        <p className="mb-4">
          A continuous spiral from the center outward, about 1/4 inch deep. Used for round loaves where
          you want the bloom to fan out evenly. Easier than it looks; takes one continuous motion.
        </p>

        <h3 className="mt-6 mb-2">5. Three-Cut Leaf (Batard)</h3>
        <p className="mb-4">
          Three parallel diagonal cuts, like a leaf shape. Good for batards (oval loaves) where a
          single slash would be too short. Each cut opens independently.
        </p>

        <h2 className="mt-10 mb-3">Common Mistakes</h2>
        <p className="mb-4">
          <strong>1. Too shallow.</strong> The cut should be 1/4 inch deep. A 1/8 inch cut barely opens
          during oven spring. Err on the side of deeper rather than shallower.
        </p>
        <p className="mb-4">
          <strong>2. Too late.</strong> If the dough has set (over-proofed, or just sat too long after
          coming out of the fridge), the cut will crack without opening. Cut earlier next time.
        </p>
        <p className="mb-4">
          <strong>3. Dragging the blade.</strong> Use one quick confident motion. A hesitant cut
          leaves ragged edges. If you hesitate, you are probably cutting too slowly.
        </p>
        <p className="mb-4">
          <strong>4. Cutting into the seam.</strong> If you shape the dough with a seam (most batards
          do), make sure your cut does not run along the seam. The seam is already the weakest
          point; scoring it will not add anything.
        </p>

        <h2 className="mt-10 mb-3">Top Picks</h2>
        <p className="mb-4">
          <strong>Best Lame: </strong>
          <AffiliateLink href="https://www.amazon.com/s?k=bread+lame&tag=sourdoughca0a-20" productName="bread lame" source="how-to-score-sourdough-bread">
            Bread Lame with Replacement Blades on Amazon
          </AffiliateLink>
          <br />
          Price: $10 to $20. Comes with 5 to 10 spare blades, fits comfortably in hand. The standard
          for home bakers.
        </p>

        <p className="mb-4">
          <strong>Best Curved Blade Upgrade: </strong>
          <AffiliateLink href="https://www.amazon.com/s?k=curved+bread+lame&tag=sourdoughca0a-20" productName="curved bread lame blade" source="how-to-score-sourdough-bread">
            Curved Blade Lame on Amazon
          </AffiliateLink>
          <br />
          Price: $12 to $25. Curved blade gives a wider ear, the classic bakery look. Worth upgrading
          after you are comfortable with the standard straight lame.
        </p>

        <AffiliateDisclosure />

        <h2 className="mt-10 mb-3">Sourdough Scoring FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">How deep should I score sourdough?</h3>
          <p>About 1/4 inch deep, or roughly 5 millimeters. Shallow cuts do not open dramatically.
          Deeper cuts open wide and can deflate. Err slightly deeper than you think is right.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Can I score without a lame?</h3>
          <p>Yes. A sharp paring knife or a fresh razor blade held in pliers works. The lame just makes
          the handle safer and the angle easier to control.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Should I score before or after putting the dough in the oven?</h3>
          <p>Always score before. The scoring opens the dough at the weakest point, which is exactly
          what you want during the rapid expansion of oven spring. Scoring after the bread is in
          the oven does nothing.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">What is a "bloomer cut" vs. "ear cut"?</h3>
          <p>Both terms describe how a slash cut opens during baking. An "ear" is a single dramatic
          lift; a "bloomer" or "wheat" cut produces multiple smaller lifts. The two are mostly
          interchangeable; bakers use different terms to describe the visual effect of their chosen
          pattern.</p>
        </div>

        <h2 className="mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><a href="https://www.kingarthurbaking.com/learn/resources/sourdough-shaping-and-scoring" target="_blank" rel="nofollow noopener">King Arthur: Shaping and Scoring Sourdough</a></li>
          <li><a href="https://www.theperfectloaf.com/the-ultimate-guide-to-shaping-and-scoring-bread/" target="_blank" rel="nofollow noopener">The Perfect Loaf: Shaping and Scoring</a></li>
          <li>Tartine Bread by Chad Robertson — scoring chapter</li>
        </ul>

        <NextPostNav slug="how-to-score-sourdough-bread" />
      </article>
    </>
  );
}
