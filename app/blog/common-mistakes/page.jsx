import Link from "next/link";

export const metadata = {
  title: "5 Common Sourdough Mistakes (and How to Fix Them) - 2026 Guide",
  description: "Dense crumb, flat loaf, gummy texture? These are the 5 most common sourdough mistakes and exactly how to fix each one. Includes troubleshooting tips and timing guides.",
  keywords: ["sourdough mistakes", "sourdough troubleshooting", "dense sourdough", "flat sourdough loaf", "sourdough not rising"],
};

export default function CommonMistakes() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">5 Common Sourdough Mistakes (and How to Fix Them)</h1>
      <p className="text-brand-muted text-sm mb-8">📖 12 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        Every sourdough baker has pulled a loaf out of the oven that was flat, dense, gummy, or just
        plain disappointing. The good news: most sourdough problems come from the same five
        mistakes, and they are all fixable. This guide walks you through what went wrong, why it
        happened, and exactly how to fix it next time.
      </p>

      <p className="mb-8">
        New to sourdough? Read our{" "}
        <Link
          href="/blog/hydration-guide/"
          className="text-brand-brown font-medium"
        >
          complete beginner&apos;s guide to hydration
        </Link>{" "}
        first, or jump to our{" "}
        <Link
          href="/blog/best-sourdough-calculators/"
          className="text-brand-brown font-medium"
        >
          10 best hydration calculators
        </Link>
        .
      </p>

      <h2 className="mt-10 mb-3">Mistake #1: Your Dough Is Under-fermented</h2>
      <p className="mb-4">
        <strong>What it looks like:</strong> a dense, tight crumb that does not have visible
        holes. The loaf often tears unevenly when you cut it. It may also taste sour but feel heavy
        in your mouth.
      </p>
      <p className="mb-4">
        <strong>Why it happens:</strong> you pulled the dough out of bulk fermentation too early.
        The yeast had not finished producing gas, so the crumb did not have time to open up.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Add 30–60 minutes to your bulk fermentation time and re-evaluate</li>
        <li>Look for visual cues, not just time: the dough should be 50–75% larger, jiggle when you shake the bowl, and have bubbles around the edges</li>
        <li>Do the windowpane test before shaping: a small piece of dough should stretch thin enough to see light through without tearing</li>
        <li>If your kitchen is cold (under 70°F), plan for 1–2 hours longer than the recipe says</li>
      </ul>

      <h2 className="mt-10 mb-3">Mistake #2: You Cut Into the Loaf Too Early</h2>
      <p className="mb-4">
        <strong>What it looks like:</strong> the inside of the loaf is gummy and dense, even
        though the crust looks great. It feels "under-baked" in the middle.
      </p>
      <p className="mb-4">
        <strong>Why it happens:</strong> sourdough is not actually done baking when it comes out
        of the oven. The interior is still setting. Cutting into it too early traps moisture and
        leaves you with a gummy crumb that will not slice cleanly.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Wait <strong>at least 1 hour</strong> before cutting. Ideally 2 hours.</li>
        <li>The internal temperature should drop to around 90°F (use an instant-read thermometer)</li>
        <li>If you can smell a strong yeasty or sour smell when you cut, the crumb is still gummy</li>
        <li>Resting on a wire rack (not a cutting board) helps air circulate and the crust stay crispy</li>
      </ul>

      <h2 className="mt-10 mb-3">Mistake #3: Your Hydration Is Too High for Your Flour</h2>
      <p className="mb-4">
        <strong>What it looks like:</strong> the dough spreads out flat during shaping instead of
        holding a round shape. The final loaf is wide, flat, and has a dense bottom crust.
      </p>
      <p className="mb-4">
        <strong>Why it happens:</strong> you are using high hydration (80%+) with flour that
        cannot support it. Weak or all-purpose flour breaks down under high hydration, leaving you
        with a slack dough that collapses under its own weight.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Check the protein content of your flour. Bread flour should be 12–14% protein. Anything below 11% will struggle at 80%+ hydration.</li>
        <li>If using all-purpose flour, stay at 70–75% hydration</li>
        <li>Strengthen your dough with a few stretch and folds during bulk fermentation</li>
        <li>Use a higher-protein flour like King Arthur Bread Flour or Bob&apos;s Red Mill Artisan Bread Flour</li>
      </ul>
      <p className="mb-4">
        Our{" "}
        <Link
          href="/blog/hydration-guide/"
          className="text-brand-brown font-medium"
        >
          hydration guide
        </Link>{" "}
        has more detail on choosing the right hydration for your flour.
      </p>

      <h2 className="mt-10 mb-3">Mistake #4: Your Oven Is Not Hot Enough</h2>
      <p className="mb-4">
        <strong>What it looks like:</strong> the loaf comes out pale instead of deeply
        caramelized. The crust is soft rather than crackly. The oven spring (initial rise in the
        oven) is minimal.
      </p>
      <p className="mb-4">
        <strong>Why it happens:</strong> sourdough needs intense heat for the first 20 minutes of
        baking. The heat creates oven spring and sets the crust. Most home ovens struggle to
        maintain the 450–500°F your dough needs.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Preheat your oven (and Dutch oven if using one) for at least 45 minutes at 500°F</li>
        <li>Use an oven thermometer — most home ovens are 25°F off their stated temperature</li>
        <li>If you have a Dutch oven, use it. It traps steam and gives you bakery-quality crust.</li>
        <li>Add 1 cup of water to a tray at the bottom of the oven for the first 20 minutes to create steam</li>
        <li>Lower the temperature to 450°F after 20 minutes, remove the lid if using a Dutch oven, and bake for another 20–25 minutes</li>
      </ul>
      <p className="mb-4">
        Need gear recommendations? Our{" "}
        <Link
          href="/best-sourdough-calculators"
          className="text-brand-brown font-medium"
        >
          homepage
        </Link>{" "}
        has affiliate links to the Dutch ovens and tools we recommend.
      </p>

      <h2 className="mt-10 mb-3">Mistake #5: You Are Not Scoring Deep Enough</h2>
      <p className="mb-4">
        <strong>What it looks like:</strong> the loaf does not have the classic &quot;ear&quot;
        (the raised flap where you cut). Instead, the cuts barely open, or the dough tears
        unpredictably.
      </p>
      <p className="mb-4">
        <strong>Why it happens:</strong> scoring is not decoration. It is a controlled release
        for the gas inside the dough. If you do not cut deep enough, the gas finds the weakest
        point and bursts out randomly. That is why your crust tears in ugly places.
      </p>
      <p className="mb-4">
        <strong>How to fix it:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Score at a 30–45 degree angle, not straight down</li>
        <li>Cut 1/2 inch (1.25 cm) deep for smaller loaves, 3/4 inch (2 cm) for larger ones</li>
        <li>Use a sharp lame (a razor blade on a handle) or a very sharp knife</li>
        <li>One confident cut beats five timid ones. Hesitation causes jagged edges.</li>
        <li>Always score right before putting the dough in the oven, never earlier</li>
      </ul>

      <h2 className="mt-10 mb-3">Bonus: How to Save a Bad Bake</h2>
      <p className="mb-4">
        Sometimes nothing goes right. The crust is burnt, the crumb is dense, and the loaf is
        shaped like a flying saucer. Before you throw it out:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong>Too dense?</strong> Slice it thin and make sourdough grilled cheese. Density becomes a feature, not a bug.</li>
        <li><strong>Too sour?</strong> Toast it. Heat cuts the perceived sourness.</li>
        <li><strong>Crust burnt?</strong> Cut off the burnt parts and use the inside for breadcrumbs or croutons.</li>
        <li><strong>Over-proofed and flat?</strong> Cut it into cubes and bake as croutons or stuffing.</li>
      </ul>
      <p className="mb-4">
        Almost no sourdough bake is a total loss. Even the failures are delicious if you know how
        to use them.
      </p>

      <h2 className="mt-10 mb-3">FAQ: Sourdough Troubleshooting</h2>

      <h3 className="mt-6 mb-2">Why is my sourdough dense and heavy?</h3>
      <p className="mb-4">
        Almost always under-fermentation. The dough did not have enough time for the yeast to
        produce gas and open up the crumb. Extend your bulk fermentation by 30–60 minutes and try
        again.
      </p>

      <h3 className="mt-6 mb-2">Why does my sourdough spread out flat?</h3>
      <p className="mb-4">
        Your dough is too wet for your flour, or you over-proofed it. Lower hydration by 5% or
        switch to a higher-protein flour. Also make sure you shape tightly and use a banneton or
        bowl to support the dough during the final rise.
      </p>

      <h3 className="mt-6 mb-2">Why is my sourdough gummy in the middle?</h3>
      <p className="mb-4">
        You almost certainly cut it too early. The internal temperature of the loaf needs to drop
        to around 90°F before slicing. Wait at least 1–2 hours after baking.
      </p>

      <h3 className="mt-6 mb-2">Why is my sourdough pale, not golden brown?</h3>
      <p className="mb-4">
        Your oven is not hot enough, or you are not using a Dutch oven. Sourdough needs 450–500°F
        for proper caramelization. Preheat longer, use an oven thermometer, and consider investing
        in a Dutch oven.
      </p>

      <h3 className="mt-6 mb-2">Why does my sourdough taste too sour?</h3>
      <p className="mb-4">
        Either your starter is very mature (over 12 hours since feeding) or your bulk fermentation
        is too long. Try a younger starter or a shorter bulk to mellow the flavor.
      </p>

      <h2 className="mt-10 mb-3">The Takeaway</h2>
      <p className="mb-4">
        Most sourdough problems come down to timing, hydration, or oven temperature. Once you
        understand the three knobs, almost every other variable is just fine-tuning. Track what
        you do in each bake (hydration, time, temperature) and you will start seeing patterns
        within five or six bakes.
      </p>
      <p className="mb-4">
        Need help with the math? Our{" "}
        <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link>{" "}
        handles the calculations so you can focus on the baking. And if you want to understand
        every number, our{" "}
        <Link
          href="/blog/hydration-guide/"
          className="text-brand-brown font-medium"
        >
          beginner&apos;s guide to hydration
        </Link>{" "}
        walks through the science.
      </p>
    </article>
  );
}
