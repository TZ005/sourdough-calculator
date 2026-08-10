import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Sourdough Tortillas: Soft, Chewy, and Naturally Leavened (2026)",
  description: "Learn how to make soft sourdough tortillas from active starter or discard. Includes hydration ratios, rolling technique, and 3 tested recipes (wheat, spelt, corn blend).",
  keywords: ["sourdough tortillas", "how to make sourdough tortillas", "sourdough tortilla recipe", "sourdough discard tortillas"],
  alternates: { canonical: "https://sourdough-hydrationcalculator.com/blog/best-sourdough-tortillas/" },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Sourdough Tortillas: Soft, Chewy, and Naturally Leavened (2026)",
    description: "Learn how to make soft sourdough tortillas from active starter or discard. Includes hydration ratios, rolling technique, and 3 tested recipes (wheat, spelt, corn blend).",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/best-sourdough-tortillas/",
    publishedTime: "2026-08-11",
    modifiedTime: "2026-08-11",
    images: [{ url: "/images/blog/sourdough-focaccia.webp", alt: "Fresh sourdough tortillas stacked on a wooden board with cast iron comal in background" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough Tortillas: Soft, Chewy, and Naturally Leavened (2026)",
    description: "Learn how to make soft sourdough tortillas from active starter or discard. Includes hydration ratios, rolling technique, and 3 tested recipes (wheat, spelt, corn blend).",
    images: ["/images/blog/sourdough-focaccia.webp"],
  },
};

export default function BestSourdoughTortillas() {
  return (
    <>
      <ArticleSchema
        slug="best-sourdough-tortillas"
        title="Sourdough Tortillas: Soft, Chewy, and Naturally Leavened (2026)"
        description="Learn how to make soft sourdough tortillas from active starter or discard. Includes hydration ratios, rolling technique, and 3 tested recipes (wheat, spelt, corn blend)."
        image="/images/blog/sourdough-focaccia.webp"
        datePublished="2026-08-11"
        dateModified="2026-08-11"
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

        <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Sourdough Tortillas: Soft, Chewy, and Naturally Leavened (2026)</h1>
        <p className="text-brand-muted text-sm mb-8">📖 6 min read · Updated August 2026</p>
        <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

        <p className="text-lg mb-6">
          A sourdough tortilla is what happens when you treat a flatbread the way you treat
          a loaf. The wild yeast and lactobacilli in your starter do the same long, slow work
          on masa or wheat flour that they do on bread dough. The result is more digestible,
          more flavorful, and keeps longer than a standard flour tortilla, with a slightly
          tangy edge that is unmistakably sourdough.
        </p>

        <p className="mb-6">
          This guide covers both the active-starter version (which takes 8 to 12 hours) and
          the discard version (which uses up your leftover starter while you are at it). Pick
          whichever fits your schedule.
        </p>

        <h2 className="mt-10 mb-3">Active Starter vs Discard: Pick Your Path</h2>
        <p className="mb-4">
          <strong>Active starter version</strong>: 1 cup of recently fed, bubbly starter gives
          the tortillas the most flavor and the best rise. Requires 4 to 6 hours of
          fermentation after mixing. Best flavor, softest texture. Worth the wait if you have
          the time.
        </p>
        <p className="mb-4">
          <strong>Discard version</strong>: Use unfed starter straight from the fridge. The
          wild yeast and bacteria are less active, so you get a denser, more cracker-like
          tortilla with milder flavor. No extra time beyond the mixing. Great way to use
          up{" "}
          <Link href="/blog/sourdough-discard/" className="text-brand-brown font-medium">discard</Link>{" "}
          instead of throwing it out.
        </p>

        <h2 className="mt-10 mb-3">The Basic Recipe (Makes 8 Tortillas)</h2>
        <p className="mb-4">
          The recipe scales easily. Use the calculator on the homepage to convert to your
          exact flour weight, then divide by 8 to size each tortilla.
        </p>
        <p className="mb-4">
          <strong>Ingredients:</strong>
        </p>
        <p className="mb-4">
          250 g all-purpose or bread flour<br />
          150 g water (60% hydration — stiffer than bread, good for rolling thin)<br />
          50 g active sourdough starter (or 50 g discard)<br />
          5 g salt<br />
          15 g olive oil or melted lard
        </p>
        <p className="mb-4">
          <strong>Method:</strong>
        </p>
        <p className="mb-4">
          1. Mix everything in a bowl until no dry flour remains. Cover and rest 30 minutes.
        </p>
        <p className="mb-4">
          2. Knead briefly (2 to 3 minutes) until smooth. Cover and{" "}
          <strong>ferment 4 to 6 hours at room temperature</strong> (active starter version)
          or <strong>1 hour</strong> (discard version).
        </p>
        <p className="mb-4">
          3. Divide into 8 equal pieces (~58 g each). Roll each into a ball.
        </p>
        <p className="mb-4">
          4. Heat a cast iron pan or comal to medium-high heat (around 400 degrees F). No oil.
        </p>
        <p className="mb-4">
          5. Roll each ball into a thin disc, about 6 to 8 inches wide. The thinner you roll,
          the more bubbly the finished tortilla.
        </p>
        <p className="mb-4">
          6. Cook on the dry hot pan for 45 to 60 seconds per side. The tortilla should puff
          up in places. Don’t overcook; you want a few small brown spots, not a uniform
          brown.
        </p>
        <p className="mb-4">
          7. Stack and cover with a clean kitchen towel to keep them soft.
        </p>

        <h2 className="mt-10 mb-3">Three Variations Worth Trying</h2>

        <h3 className="mt-6 mb-2">1. Whole Wheat Sourdough Tortillas</h3>
        <p className="mb-4">
          Replace 100 g of the all-purpose flour with whole wheat. Add 10 g extra water
          (whole wheat absorbs more). Same procedure, slightly more fiber and a more rustic
          flavor. Slightly less elastic; roll gently.
        </p>

        <h3 className="mt-6 mb-2">2. Spelt Sourdough Tortillas</h3>
        <p className="mb-4">
          Spelt hydrates faster than modern wheat. Use 30 percent less starter (35 g instead of
          50 g) and a 15 minute shorter fermentation. The result is nuttier and more tender.
          Great with grilled vegetables.
        </p>

        <h3 className="mt-6 mb-2">3. Sourdough-Corn Tortillas (Hybrid)</h3>
        <p className="mb-4">
          Mix 50/50 masa harina and all-purpose flour. Masa has been nixtamalized (treated
          with lime) so it does not need the long ferment. Use 50 g active starter or 50 g
          discard. These are not traditional Mexican tortillas (those use 100 percent masa
          and no leavening), but they are delicious, pliable, and a good intro to corn-
          forward sourdough cooking.
        </p>

        <h2 className="mt-10 mb-3">Common Mistakes (and Fixes)</h2>
        <p className="mb-4">
          <strong>1. Tortillas crack when rolled.</strong> Hydration is too low or the dough
          is over-fermented. Add 10 g more water next time, or reduce fermentation by an
          hour.
        </p>
        <p className="mb-4">
          <strong>2. Tortillas are tough or bready.</strong> Too much gluten developed. Roll
          sooner after fermentation, handle less, and use a longer rest between mixing and
          rolling.
        </p>
        <p className="mb-4">
          <strong>3. Tortillas stick to the pan.</strong> Pan is not hot enough. Wait until a
          drop of water flicked onto the pan sizzles and evaporates within 2 seconds.
        </p>
        <p className="mb-4">
          <strong>4. Tortillas are dry and crumbly.</strong> Over-baked or not enough oil. Each
          tortilla should be on the pan for under 90 seconds per side. Brushing the just-cooked
          tortilla with a thin layer of oil keeps it soft.
        </p>

        <h2 className="mt-10 mb-3">Top Picks (2026)</h2>
        <p className="mb-4">
          <strong>Best Pan: A Comal (or Cast Iron Skillet)</strong><br />
          <AffiliateLink href="https://www.amazon.com/s?k=cast+iron+comal+9+inch&tag=sourdoughca0a-20" productName="cast iron comal 9 inch" source="best-sourdough-tortillas">
            Cast Iron Comal 9 inch on Amazon
          </AffiliateLink>
          <br />
          Price: $30 to $50. A comal is a flat cast iron griddle, the traditional Mexican tool
          for tortillas. Heats evenly, no hot spots. A 9 or 10 inch round fits the standard
          tortilla size. If you do not have one, a 10 inch cast iron skillet works.
        </p>

        <p className="mb-4">
          <strong>Best Tortilla Press (for consistent thickness)</strong><br />
          <AffiliateLink href="https://www.amazon.com/s?k=cast+iron+tortilla+press&tag=sourdoughca0a-20" productName="cast iron tortilla press" source="best-sourdough-tortillas">
            Cast Iron Tortilla Press on Amazon
          </AffiliateLink>
          <br />
          Price: $20 to $35. Optional but the most consistent thickness for thin, even
          tortillas. A rolling pin works but the press is faster. Cast iron is heavy; the
          aluminum ones are lighter and cheaper.
        </p>

        <p className="mb-4">
          <strong>Best Flour</strong><br />
          <AffiliateLink href="https://www.amazon.com/s?k=king+arthur+bread+flour&tag=sourdoughca0a-20" productName="king arthur bread flour" source="best-sourdough-tortillas">
            King Arthur Bread Flour on Amazon
          </AffiliateLink>
          <br />
          Price: $5 to $7 for 5 lb. For 100 percent flour tortillas use any bread flour. For
          the corn hybrid use 50 percent masa harina (Maseca brand is widely available).
        </p>

        <AffiliateDisclosure />

        <h2 className="mt-10 mb-3">Sourdough Tortillas FAQ</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">How long do sourdough tortillas keep?</h3>
          <p>3 to 4 days at room temperature in a sealed bag, or up to 2 weeks in the fridge.
          Reheat on a dry pan for 15 seconds per side. They reheat better than flour
          tortillas because the long ferment keeps them flexible.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Can I use discard starter from the fridge?</h3>
          <p>Yes, this is the best use of discard. Unfed starter straight from the fridge gives
          a milder flavor and denser texture, but it is still much better than a standard
          flour tortilla. The recipes above work either way.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Do I need a tortilla press?</h3>
          <p>No. A rolling pin works fine, especially if you let the dough balls rest 10 minutes
          after portioning. A press just makes the job faster and the thickness more
          consistent.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-brand-brown mb-1">Can I make these gluten-free?</h3>
          <p>Not really. Sourdough fermentation needs wheat gluten to develop structure. For
          gluten-free tortillas, use 100 percent masa harina without leavening (traditional
          Mexican method). They are excellent but are a different recipe entirely.</p>
        </div>

        <h2 className="mt-10 mb-3">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><a href="https://www.kingarthurbaking.com/learn/resources/sourdough-bread" target="_blank" rel="nofollow noopener">King Arthur: Sourdough Bread Guide</a></li>
          <li><a href="https://www.theperfectloaf.com/guides-to-sourdough-baking/" target="_blank" rel="nofollow noopener">The Perfect Loaf: Sourdough Guides</a></li>
          <li>Mexico One Plate at a Time by Diana Kennedy — tortilla reference</li>
        </ul>

        <NextPostNav slug="best-sourdough-tortillas" />
      </article>
    </>
  );
}
