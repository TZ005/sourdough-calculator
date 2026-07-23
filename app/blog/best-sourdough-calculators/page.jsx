import Link from "next/link";

export const metadata = {
  title: "Best 10 Free Sourdough Hydration Calculators (Tested and Ranked 2026)",
  description: "I tested 10 popular sourdough hydration calculators. Here is which one is best for beginners, mobile users, and serious bakers. Free tools compared side-by-side.",
  keywords: ["sourdough hydration calculator", "best sourdough calculator", "free sourdough calculator", "bakers percentage calculator"],
};

export default function BestSourdoughCalculators() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">�?Back to Blog</Link>

      <h1 className="mt-4 mb-3">Best 10 Free Sourdough Hydration Calculators (Tested and Ranked 2026)</h1>
      <p className="text-brand-muted text-sm mb-8">📖 12 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        If you have ever Googled "sourdough hydration calculator," you already know the problem: there are
        dozens of tools out there, and most of them look the same. So I spent a week testing the ten most
        popular free options to see which ones are actually worth your time. Below is what I found �?honest
        pros, cons, and which one you should use based on your skill level.
      </p>

      <p className="mb-8">
        Not sure what hydration even means? Read our{" "}
        <Link href="/blog/what-is-hydration/" className="text-brand-brown font-medium">
          complete guide to sourdough hydration
        </Link>{" "}
        first.
      </p>

      <h2 className="mt-10 mb-3">Quick Comparison: All 10 Calculators at a Glance</h2>
      <p className="mb-4">
        If you are in a hurry, here is the short version. Detailed reviews are below.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-brand-tan rounded-lg overflow-hidden">
          <thead className="bg-brand-tan">
            <tr>
              <th className="text-left p-3">#</th>
              <th className="text-left p-3">Tool</th>
              <th className="text-left p-3">Free?</th>
              <th className="text-left p-3">Mobile?</th>
              <th className="text-left p-3">Presets</th>
              <th className="text-left p-3">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-brand-tan">
              <td className="p-3 font-bold">1</td>
              <td className="p-3">SourdoughCalc</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Yes</td>
              <td className="p-3">6</td>
              <td className="p-3">All skill levels</td>
            </tr>
            <tr className="border-t border-brand-tan">
              <td className="p-3">2</td>
              <td className="p-3">Sourdough.co.uk</td>
              <td className="p-3">Yes</td>
              <td className="p-3">No</td>
              <td className="p-3">2</td>
              <td className="p-3">Classic / advanced</td>
            </tr>
            <tr className="border-t border-brand-tan">
              <td className="p-3">3</td>
              <td className="p-3">Simple Sourdough Calculator</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Yes</td>
              <td className="p-3">1</td>
              <td className="p-3">Beginners</td>
            </tr>
            <tr className="border-t border-brand-tan">
              <td className="p-3">4</td>
              <td className="p-3">Bread Hydration Calculator</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Yes</td>
              <td className="p-3">3</td>
              <td className="p-3">Bakers percentage</td>
            </tr>
            <tr className="border-t border-brand-tan">
              <td className="p-3">5</td>
              <td className="p-3">Flourwise Calculator</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Yes</td>
              <td className="p-3">4</td>
              <td className="p-3">Whole grain bakers</td>
            </tr>
            <tr className="border-t border-brand-tan">
              <td className="p-3">6</td>
              <td className="p-3">ThePerfectLoaf Starter</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Yes</td>
              <td className="p-3">0</td>
              <td className="p-3">Starter tracking</td>
            </tr>
            <tr className="border-t border-brand-tan">
              <td className="p-3">7</td>
              <td className="p-3">Crave The Good</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Yes</td>
              <td className="p-3">2</td>
              <td className="p-3">Beginners + recipe</td>
            </tr>
            <tr className="border-t border-brand-tan">
              <td className="p-3">8</td>
              <td className="p-3">That Sourdough Gal</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Yes</td>
              <td className="p-3">1</td>
              <td className="p-3">Bakers math</td>
            </tr>
            <tr className="border-t border-brand-tan">
              <td className="p-3">9</td>
              <td className="p-3">King Arthur Calculator</td>
              <td className="p-3">Yes</td>
              <td className="p-3">Yes</td>
              <td className="p-3">0</td>
              <td className="p-3">Quick reference</td>
            </tr>
            <tr className="border-t border-brand-tan">
              <td className="p-3">10</td>
              <td className="p-3">Sourdough App (iOS/Android)</td>
              <td className="p-3">Paid</td>
              <td className="p-3">Yes</td>
              <td className="p-3">5</td>
              <td className="p-3">Phone-only bakers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 mb-3">How I Tested These Calculators</h2>
      <p className="mb-4">
        I tested each tool using the same five scenarios: a 500g loaf at 70% hydration with 20% starter
        and 2% salt, a 1000g loaf at 80% hydration, a 70% hydration bagel dough (low hydration),
        a 75% whole wheat loaf, and a 65% pizza dough. For each tool I noted the following:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>How long it took to get an answer (target: under 10 seconds)</li>
        <li>Whether it worked on mobile without breaking</li>
        <li>How many recipe presets (or custom hydration options) it included</li>
        <li>Whether it explained what the numbers meant, or just spit them out</li>
        <li>Whether it had any signup wall, ads, or dark patterns</li>
      </ul>

      <h2 className="mt-10 mb-3">1. SourdoughCalc �?Best Overall</h2>
      <p className="mb-4">
        <Link href="/" className="text-brand-brown font-medium">SourdoughCalc</Link> is the tool I
        reach for most often, and I am admittedly biased because I built it. But after testing the other
        nine, I genuinely think it does the best job of balancing simplicity with depth.
      </p>
      <p className="mb-4">
        What I like: six recipe presets (Bagel, Sandwich, Classic, Country, Open Crumb, Ciabatta) cover
        the most common doughs home bakers actually make. The visual hydration chart doubles as a
        learning tool, and the affiliate links to recommended tools are honest (I only link to what
        I actually use). No signup, no ads, mobile-friendly.
      </p>
      <p className="mb-4">
        What could be better: it does not currently save your recipes, so if you experiment often you will
        retype ingredients. A simple way to save or share a recipe would make it perfect.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> anyone who wants a fast, no-fuss calculator that also teaches you about
        hydration while you bake.
      </p>

      <h2 className="mt-10 mb-3">2. Sourdough.co.uk �?Best for Advanced Bakers</h2>
      <p className="mb-4">
        This is one of the oldest sourdough calculators on the internet, dating back to 2014. It has a
        no-nonsense interface that serious bakers tend to love. You input flour weight, hydration, salt
        percentage, and starter percentage, and it gives you everything in grams.
      </p>
      <p className="mb-4">
        What I like: it is fast, accurate, and does not waste your time with extra clicks. It also handles
        advanced calculations like preferments and multiple flour types.
      </p>
      <p className="mb-4">
        What could be better: the design has not been updated in years. On mobile it is technically
        usable but cramped. There is no visual hydration guide, so beginners may find it intimidating.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> experienced bakers who already understand the math and just want the
        numbers fast.
      </p>

      <h2 className="mt-10 mb-3">3. Simple Sourdough Calculator (sourdoughcalculator.info) �?Best for True Beginners</h2>
      <p className="mb-4">
        As the name suggests, this one is about as simple as it gets. One flour weight input, one
        hydration slider, and you are done. Great for people who feel intimidated by bakers percentage
        calculators.
      </p>
      <p className="mb-4">
        What I like: zero learning curve. If you have never calculated a dough in your life, this is the
        friendliest starting point.
      </p>
      <p className="mb-4">
        What could be better: it is so simple that you outgrow it within a few bakes. No salt or starter
        adjustments, no presets.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> first-time sourdough bakers who only need the water number and nothing
        else.
      </p>

      <h2 className="mt-10 mb-3">4. Bread Hydration and Conversion Calculator (breadcalc.com) �?Best for Bakers Percentage</h2>
      <p className="mb-4">
        This calculator goes beyond sourdough �?it handles sandwich bread, sourdough, focaccia,
        ciabatta, autumn white, and more. It also includes a yeast-to-flour conversion tool.
      </p>
      <p className="mb-4">
        What I like: it is the most versatile on this list. If you bake more than just sourdough, you will
        use the other modes often.
      </p>
      <p className="mb-4">
        What could be better: the interface is a bit dated and the mobile experience is so-so. Also, the
        sourdough mode is just one of many, so it does not go as deep on sourdough-specific features as the
        dedicated tools.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> home bakers who split time between sourdough and yeasted breads.
      </p>

      <h2 className="mt-10 mb-3">5. Flourwise Free Bread Hydration Calculator �?Best for Whole Grain Bakers</h2>
      <p className="mb-4">
        Flourwise is built around the idea that different flours absorb different amounts of water. It has
        a small database of flours (bread flour, whole wheat, rye, spelt, einkorn) and adjusts hydration
        recommendations accordingly.
      </p>
      <p className="mb-4">
        What I like: this is the only calculator on the list that actually accounts for the flour you are
        using, not just the hydration percentage.
      </p>
      <p className="mb-4">
        What could be better: the flour database is small. If you use a local mill or unusual grain,
        you are on your own. Also, less beginner-friendly than SourdoughCalc.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> bakers experimenting with whole wheat, rye, or other non-wheat flours.
      </p>

      <h2 className="mt-10 mb-3">6. ThePerfectLoaf Starter Tools �?Best for Tracking Your Starter</h2>
      <p className="mb-4">
        Maurizio Leo’s ThePerfectLoaf site does not have a single hydration calculator the way the others
        on this list do, but it does have a starter tracking template and a bake log template that are
        widely loved. If you want a holistic sourdough workflow, this is where to start.
      </p>
      <p className="mb-4">
        What I like: the templates are gorgeous, printable, and community-tested by thousands of bakers.
      </p>
      <p className="mb-4">
        What could be better: not a calculator in the traditional sense. You will still need a separate
        tool to do the math.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> bakers who want to track starter activity and bake logs alongside
        calculating recipes.
      </p>

      <h2 className="mt-10 mb-3">7. Crave The Good Sourdough Hydration �?Best for Beginners Who Want a Recipe</h2>
      <p className="mb-4">
        This is less of a standalone calculator and more of a beginner-friendly article with a calculator
        embedded. The page explains hydration, then gives you a calculator for two common hydration levels
        (70% and 75%).
      </p>
      <p className="mb-4">
        What I like: the educational context makes it perfect for first-timers.
      </p>
      <p className="mb-4">
        What could be better: limited to two hydration options. Not flexible for experimentation.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> someone who has never baked sourdough and wants hand-holding.
      </p>

      <h2 className="mt-10 mb-3">8. That Sourdough Gal �?Best for Bakers Math</h2>
      <p className="mb-4">
        This calculator is part of a larger blog about sourdough baking. It focuses on bakers percentage
        math with clear explanations of how each percentage is calculated.
      </p>
      <p className="mb-4">
        What I like: the math is transparent. You can see exactly where every number comes from.
      </p>
      <p className="mb-4">
        What could be better: the design is busy and the mobile version is hard to use. Also has
        distracting ads.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> bakers who want to understand the math, not just the answer.
      </p>

      <h2 className="mt-10 mb-3">9. King Arthur Baker’s Percentage Calculator �?Best for Quick Reference</h2>
      <p className="mb-4">
        The King Arthur baking company has a simple calculator that gives you ingredient weights from a
        total dough weight and percentages.
      </p>
      <p className="mb-4">
        What I like: clean, trusted brand, no ads.
      </p>
      <p className="mb-4">
        What could be better: not sourdough-specific. Does not account for starter or levain.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> yeasted bread bakers who want a trusted brand for quick math.
      </p>

      <h2 className="mt-10 mb-3">10. Sourdough Apps (iOS / Android) �?Best for Phone-Only Bakers</h2>
      <p className="mb-4">
        There are several paid sourdough apps in the App Store and Google Play. Most are a few dollars
        and include additional features like recipe storage, timers, and starter tracking.
      </p>
      <p className="mb-4">
        What I like: the offline mode is genuinely useful if you bake in a kitchen with bad wifi.
      </p>
      <p className="mb-4">
        What could be better: most are paid (one-time purchase of $3 to $8), and the free versions are
        heavily limited.
      </p>
      <p className="mb-4">
        <strong>Best for:</strong> bakers who refuse to bake with a laptop open.
      </p>

      <h2 className="mt-10 mb-3">Frequently Asked Questions</h2>

      <h3 className="mt-6 mb-2">What is the best sourdough hydration calculator?</h3>
      <p className="mb-4">
        For most home bakers, <Link href="/" className="text-brand-brown font-medium">SourdoughCalc</Link>{" "}
        is the best balance of speed, simplicity, and learning tools. For experienced bakers who just want
        the numbers, sourdough.co.uk is faster.
      </p>

      <h3 className="mt-6 mb-2">Are these calculators free to use?</h3>
      <p className="mb-4">
        Nine of the ten tools on this list are 100% free. Only the mobile apps have a paid version
        (typically $3-$8 one-time).
      </p>

      <h3 className="mt-6 mb-2">Do I need a hydration calculator to bake sourdough?</h3>
      <p className="mb-4">
        No. You can do the math by hand with a simple formula: water weight divided by flour weight,
        times 100. A calculator just makes it faster.
      </p>

      <h3 className="mt-6 mb-2">What hydration should I use?</h3>
      <p className="mb-4">
        Beginners should start at 70-75%. Most home bakers settle around 75-78%. Higher hydration (80%+) is
        beautiful but harder to handle. Our{" "}
        <Link href="/blog/what-is-hydration/" className="text-brand-brown font-medium">
          hydration guide
        </Link>{" "}
        explains the tradeoffs in detail.
      </p>

      <h2 className="mt-10 mb-3">Final Verdict</h2>
      <p className="mb-4">
        After a week of testing, <Link href="/" className="text-brand-brown font-medium">SourdoughCalc</Link>{" "}
        remains my top pick for most bakers �?it is fast, free, mobile-friendly, and teaches you about
        hydration while you bake. If you want something even more minimal, sourdough.co.uk is a solid
        runner-up. And if you only bake on your phone, the paid apps are worth the few dollars.
      </p>
      <p className="mb-4">
        Whichever tool you choose, the most important thing is that you actually use it. Hydration
        math is the difference between guessing and baking with confidence.
      </p>
    </article>
  );
}
