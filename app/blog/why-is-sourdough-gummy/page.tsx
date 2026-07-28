import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";




export const metadata: Metadata = {
  title: "Why Is My Sourdough Gummy Inside? 7 Causes and How to Fix Each (2026)",
  description: "Gummy, dense, sticky sourdough crumb? These are the 7 most common causes and exactly how to fix each. Includes diagnostic flowchart and timing guides.",
  keywords: ["sourdough gummy","gummy sourdough","sourdough gummy inside","dense sourdough crumb","sourdough texture","sourdough underbaked"],
};

export default function BlogPost() {


  return (


    <>

      <ArticleSchema
        slug="why-is-sourdough-gummy"
        title="Why Is My Sourdough Gummy Inside? 7 Causes and How to Fix Each (2026)"
        description="Gummy, dense, sticky sourdough crumb? These are the 7 most common causes and exactly how to fix each. Includes diagnostic flowchart and timing guides."
        image="/images/blog/why-is-sourdough-gummy.png"
        datePublished="2026-07-28"
        dateModified="2026-07-28T08:00:00Z"
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

      <picture>

        <source srcSet="/images/blog/why-is-sourdough-gummy.webp" type="image/webp" />

        <img

          src="/images/blog/why-is-sourdough-gummy.png"

          alt="Hand-drawn watercolor illustration of a sourdough loaf cut in half showing the interior crumb structure on a wooden board"

          width="1200"

          height="630"

          className="w-full rounded-xl my-8"

          loading="eager"

          fetchPriority="high"

        />

      </picture>
      <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Why Is My Sourdough Gummy Inside? 7 Causes and How to Fix Each</h1>
      <p className="text-brand-muted text-sm mb-8">📖 10 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        You cut into your sourdough expecting that crackly crust and open crumb, but the inside is a sticky, dense, gummy mess. This is the single most common complaint from home sourdough bakers, and it has a small set of well-understood causes. Almost every gummy loaf comes back to the same handful of issues: not enough fermentation, cutting too early, or a hydration that your flour cannot support.
      </p>
      <p className="mb-8">
        If you are new to sourdough, start with our <Link href="/blog/sourdough-for-beginners/" className="text-brand-brown font-medium">complete beginner guide</Link> or jump straight to <Link href="/blog/hydration-guide/" className="text-brand-brown font-medium">how hydration works</Link>. Then come back here to troubleshoot.
      </p>

      <h2 className="mt-10 mb-3">What Does "Gummy" Actually Mean?</h2>
      <p className="mb-4">
        A gummy crumb is one that feels dense, sticky, or under-cooked in the middle. When you tear it, it pulls apart in rubbery strands instead of breaking cleanly. The slices may feel "wet" or doughy even though the crust is fully baked. The flavor is often fine, but the texture is unpleasant.
      </p>
      <p className="mb-4">
        Gummy crumb is a texture problem, not a flavor problem. The crumb structure did not open up properly during baking, so the starches and proteins stayed too close together. Fixing it almost always means changing one of three things: time (more fermentation or more rest), temperature (cooler dough or hotter oven), or hydration (less water or stronger flour).
      </p>

      <h2 className="mt-10 mb-3">Cause 1: You Cut the Loaf Too Early</h2>
      <p className="mb-4">
        <strong>This is the most common cause of gummy crumb, by a wide margin.</strong> When bread comes out of the oven, the interior is still gelatinizing. The starches and proteins are setting as the loaf cools. If you cut into it before this process finishes, the interior is still half-cooked. It will feel gummy and dense no matter how good the bake was.
      </p>
      <p className="mb-4">
        Sourdough takes longer to finish than regular bread because of its high hydration. The crumb is still moist when it comes out of the oven. The internal temperature needs to drop from around 210°F (just out of the oven) to under 100°F before the crumb structure is stable. That usually takes <strong>at least 1.5 hours</strong>, ideally 2.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Wait a minimum of 90 minutes after baking before cutting. Two hours is better.</li>
        <li>Use an instant-read thermometer. The internal temp should drop below 95°F before slicing.</li>
        <li>Rest the loaf on a wire rack, not a cutting board. Trapped steam softens the crust and can make the bottom gummy.</li>
        <li>If you cannot wait (we have all been there), at least cut from the middle first. The end pieces are always gummiest because they lose moisture fastest.</li>
      </ul>

      <h2 className="mt-10 mb-3">Cause 2: Under-fermentation</h2>
      <p className="mb-4">
        If you cut the loaf at the right time and it is still gummy, the next suspect is under-fermentation. Under-fermented dough does not produce enough gas during bulk fermentation, so the crumb does not have the open structure it needs. The result is a tight, dense, gummy interior even with a perfect bake.
      </p>
      <p className="mb-4">
        Most home bakers under-ferment because they are afraid of over-fermenting. Both are real, but under-fermentation is far more common. Sourdough is more forgiving of longer fermentation than shorter.
      </p>
      <p className="mb-4">
        <strong>How to tell if it is under-fermented:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>The dough did not grow 50-75% in volume during bulk fermentation</li>
        <li>The dough feels dense when you poke it, not airy and jiggly</li>
        <li>There are few or no bubbles visible on the surface and around the edges</li>
        <li>The shaped dough ball feels tight and dense, not light and pillowy</li>
        <li>The final loaf has tight crumb with small or no holes, and tastes yeasty or under-developed</li>
      </ul>
      <p className="mb-4">
        <strong>How to fix it:</strong> extend your bulk fermentation by 30 to 60 minutes and re-evaluate. Use a warmer spot (an oven with just the light on, or on top of the fridge). Look for visual cues, not the clock.
      </p>

      <h2 className="mt-10 mb-3">Cause 3: Hydration Too High for Your Flour</h2>
      <p className="mb-4">
        Higher hydration creates a more open crumb, but only if your flour can support it. Weak flour (below 11% protein) breaks down under high hydration, leaving you with a slack dough that collapses into a dense, gummy mass in the oven. The crumb might look "wet" even after baking.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Check your flour protein. Anything below 11% struggles at 75%+ hydration.</li>
        <li>If using all-purpose flour, cap your hydration at 72-75%.</li>
        <li>If using bread flour (12-14% protein), 75-80% works well.</li>
        <li>If using high-protein flour (14%+) like King Arthur Sir Lancelot, you can push to 80-85%.</li>
      </ul>
      <p className="mb-4">
        Our <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link> tells you the right water-to-flour ratio for your specific flour.
      </p>

      <h2 className="mt-10 mb-3">Cause 4: Under-baked</h2>
      <p className="mb-4">
        Sourdough is done when the internal temperature reaches 205-210°F. Many home ovens run 25°F cooler than the dial says, so your "450°F oven" might really be 425°F. The loaf looks golden on the outside but is still under-cooked in the middle.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Use an instant-read thermometer. Pull the loaf at 208°F internal, not by time alone.</li>
        <li>Get a separate oven thermometer. Most home ovens are 15-30°F off their stated temperature.</li>
        <li>Extend baking by 5-10 minutes if your oven runs cool.</li>
        <li>If using a Dutch oven, remove the lid for the last 15-20 minutes to dry out the crust.</li>
      </ul>

      <h2 className="mt-10 mb-3">Cause 5: Inadequate Gluten Development</h2>
      <p className="mb-4">
        A weak gluten structure cannot hold gas. The dough rises during bulk, then collapses during shaping and baking. The result is a dense, gummy loaf. This usually happens when you skip the stretch-and-folds or autolyse, or when the bulk fermentation was so short that the gluten never had time to develop.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong> do 3-4 sets of stretch-and-folds during the first 2 hours of bulk fermentation. Each set takes 30 seconds and dramatically strengthens the dough.
      </p>

      <h2 className="mt-10 mb-3">Cause 6: Too Much Water in the Recipe</h2>
      <p className="mb-4">
        Some sourdough recipes call for 80-85% hydration even for beginners. That is fine for high-protein flour and an experienced baker, but it is a recipe for gumminess for anyone using AP flour or who has not yet learned to read their dough.
      </p>
      <p className="mb-4">
        Start at 70-72% hydration. Once you can reliably get an open crumb, increase by 2-3% per bake. Work your way up to 80%+ over months, not weeks.
      </p>

      <h2 className="mt-10 mb-3">Cause 7: Storage Problem</h2>
      <p className="mb-4">
        A loaf that was perfect at 4 hours can feel gummy at 24 hours if stored wrong. Wrapping sourdough in plastic while it is still warm traps steam, which makes the crust soft and the crumb gummy. The fix: cool the loaf completely (2+ hours), then store in a paper bag, bread box, or cloth. Avoid plastic until the loaf is fully cool.
      </p>

      <h2 className="mt-10 mb-3">Quick Diagnostic Flow</h2>
      <p className="mb-4">
        If your sourdough is gummy, work through this list in order:
      </p>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong>Did you wait 1.5-2 hours before cutting?</strong> If no, that is almost certainly the cause.</li>
        <li><strong>Is the crumb also tight with few holes?</strong> Under-fermentation. Extend bulk by 30-60 minutes.</li>
        <li><strong>Is the loaf pale and soft-crusted?</strong> Under-baked or oven too cool. Use a thermometer.</li>
        <li><strong>Is the dough very wet and slack?</strong> Hydration too high. Drop 3-5%.</li>
        <li><strong>Did you skip stretch-and-folds?</strong> Weak gluten. Add them next time.</li>
        <li><strong>Was the loaf perfect yesterday but gummy today?</strong> Storage. Use paper, not plastic.</li>
      </ol>

      <h2 className="mt-10 mb-3">The Takeaway</h2>
      <p className="mb-4">
        Gummy crumb almost always comes back to one of seven causes, and the most common is cutting too early. Be patient. The second most common is under-fermentation. Trust the visual cues, not the clock. If you do those two things right, gummy crumb disappears in 90% of cases.
      </p>
      <p className="mb-4">
        For more troubleshooting, see our guide to the <Link href="/blog/common-mistakes/" className="text-brand-brown font-medium">5 most common sourdough mistakes</Link>, and use our <Link href="/" className="text-brand-brown font-medium">free calculator</Link> to dial in your hydration.
      </p>

      <h2 className="mt-10 mb-3">Frequently Asked Questions</h2>

      <h3 className="mt-6 mb-2">Why is my sourdough gummy in the middle but baked on the outside?</h3>
      <p className="mb-4">
        You almost certainly cut it too early, under-fermented, or under-baked. Cut after at least 1.5 hours of cooling, ferment until the dough is 50-75% larger, and bake to 208°F internal.
      </p>

      <h3 className="mt-6 mb-2">Is gummy sourdough safe to eat?</h3>
      <p className="mb-4">
        Yes, gummy crumb is a texture problem, not a safety problem. The bread is fully edible. Toasting it fixes the texture in most cases.
      </p>

      <h3 className="mt-6 mb-2">How do I fix gummy sourdough without re-baking?</h3>
      <p className="mb-4">
        Cut the loaf into slices, then toast them. Toasting drives off the moisture that is making the crumb gummy. You can also cube the loaf and bake as croutons.
      </p>

      <h3 className="mt-6 mb-2">Can gummy crumb be caused by my starter?</h3>
      <p className="mb-4">
        Yes, indirectly. An inactive or weak starter produces less gas, leading to under-fermentation. If your starter takes more than 8 hours to double after feeding, it may be too sluggish to leaven bread well. <Link href="/blog/sourdough-starter/" className="text-brand-brown font-medium">Our starter guide</Link> covers how to revive a sluggish starter.
      </p>

      <h3 className="mt-6 mb-2">Will longer bulk fermentation always fix gummy crumb?</h3>
      <p className="mb-4">
        No. Longer bulk helps if under-fermentation is the cause. If the cause is high hydration, weak flour, or under-baking, longer bulk will not help and may make the dough over-fermented and flat. Work through the diagnostic flow above to find the actual cause.
      </p>

      <NextPostNav slug="why-is-sourdough-gummy" />
    </article>
    </>
  );
}