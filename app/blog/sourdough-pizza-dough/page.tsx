import Link from "next/link";
import type { Metadata } from "next";
import NextPostNav from "@/components/NextPostNav";
import ArticleSchema from "@/components/ArticleSchema";



export const metadata: Metadata = {
  title: "Sourdough Pizza Dough: Crispy, Chewy Crust",
  description: "Use your sourdough starter to make incredible pizza dough with better flavor and a crispy-chewy crust. Step-by-step recipe plus troubleshooting.",
  keywords: ["sourdough pizza dough","sourdough pizza crust","pizza with sourdough starter"],

  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/sourdough-pizza-dough/",
  },
  openGraph: {
    siteName: "SourdoughCalc",
    title: "Sourdough Pizza Dough: Crispy, Chewy Crust",
    description: "Use your sourdough starter to make incredible pizza dough with better flavor and a crispy-chewy crust. Step-by-step recipe plus troubleshooting.",
    type: "article",
    url: "https://sourdough-hydrationcalculator.com/blog/sourdough-pizza-dough/",
    publishedTime: "2026-07-25T08:00:00Z",
    modifiedTime: "2026-07-25T08:00:00Z",
    images: [
      {
        url: "/images/blog/sourdough-pizza-dough.webp",
        alt: "Sourdough Pizza Dough: Crispy, Chewy Crust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough Pizza Dough: Crispy, Chewy Crust",
    description: "Use your sourdough starter to make incredible pizza dough with better flavor and a crispy-chewy crust. Step-by-step recipe plus troubleshooting.",
    images: ["/images/blog/sourdough-pizza-dough.webp"],
  },
};

export default function SourdoughPizzaDough() {
  

  return (
    
      
    <>
      <ArticleSchema
        slug="sourdough-pizza-dough"
        title="Sourdough Pizza Dough: Crispy, Chewy Crust"
        description="Use your sourdough starter to make incredible pizza dough with better flavor and a crispy-chewy crust. Step-by-step recipe plus troubleshooting."
        image="/images/blog/sourdough-pizza-dough.webp"
        datePublished="2026-07-25T08:00:00Z"
        dateModified="2026-07-25T08:00:00Z"
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-brown font-bold text-xl inline-flex items-center gap-2 hover:underline"><span className="text-2xl">←</span> Back to Blog</Link>

      <picture>
        <source srcSet="/images/blog/sourdough-pizza-dough.webp" type="image/webp" />
        <img
          src="/images/blog/sourdough-pizza-dough.webp"
          alt="Sourdough pizza with a crispy crust on a baking tray"
          width="1200"
          height="800"
          className="w-full rounded-xl my-8"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      

      <h1 className="mt-6 mb-4 text-3xl font-bold text-brand-dark">Sourdough Pizza Dough: A Complete Guide for Crispy, Chewy Crust</h1>
      <p className="text-brand-muted text-sm mb-8">📖 9 min read · Updated July 2026</p>
      <p className="text-brand-muted text-sm mb-8">By SourdoughCalc Team</p>

      <p className="text-lg mb-6">
        If you already keep a sourdough starter, you are 20 minutes away from the best pizza
        you have ever made at home. Sourdough pizza dough has everything you want: deeper
        flavor than commercial yeast, a tang that complements tomato and cheese, an open
        crumb under the cheese, and a crust that shatters when you bite it but stays chewy
        in the middle. This guide gives you the recipe, the timeline, and every fix for the
        common problems.
      </p>

      <h2 className="mt-10 mb-3">Why Sourdough Pizza Works So Well</h2>
      <p className="mb-4">
        Commercial yeast gives you <strong>rise</strong>. Sourdough starter gives you <strong>flavor and texture</strong>
        at the same time. The wild yeast and bacteria in your starter produce lactic and acetic acid
        during fermentation. These acids do three things:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Develop gluten</strong> faster, so you can mix and stretch without overworking the dough.</li>
        <li><strong>Break down starches</strong> into simpler sugars that feed the Maillard reaction, giving you
        those dark, blistered spots on the crust.</li>
        <li><strong>Create complex flavor</strong>: tangy, slightly funky, and never neutral like commercial yeast.</li>
      </ul>
      <p className="mb-4">
        The flavor difference is not subtle. Once you make pizza with sourdough, you will not go back
        to dry-yeast dough. The texture difference is even bigger: a long, cold ferment develops the
        open crumb that makes Neapolitan pizza so addictive.
      </p>

      <h2 className="mt-10 mb-3">The Recipe (Makes 4 Pizzas, 250g Each)</h2>
      <p className="mb-4">
        This is a 65% hydration dough. Lower than bread because pizza needs to hold its shape when
        stretched and cooked at high heat. Adjust water up to 70% if you prefer a thinner, more
        foldable crust.
      </p>
      <p className="mb-4">
        <strong>Baker's percentages:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Flour (bread or 00): 100%</li>
        <li>Water: 65%</li>
        <li>Active sourdough starter: 20%</li>
        <li>Salt: 2.5%</li>
        <li>Olive oil: 2% (optional, for tenderness and flavor)</li>
      </ul>
      <p className="mb-4">
        <strong>For 1000g flour (4 pizzas):</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Bread flour or 00 flour: 1000g</li>
        <li>Water (warm, 80F): 650g</li>
        <li>Active sourdough starter: 200g</li>
        <li>Sea salt or kosher salt: 25g</li>
        <li>Olive oil: 20g</li>
      </ul>
      <p className="mb-4">
        Use our <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link>{" "}
        if you want to scale this recipe up or down. It handles the math so you can focus on the baking.
      </p>

      <h2 className="mt-10 mb-3">Method: Mix, Bulk Ferment, Shape, Bake</h2>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Step 1: Mix (5 minutes)</h3>
      <p className="mb-4">
        Dissolve the salt in the water. Add the starter and mix with your hands until it breaks up.
        Add the flour and mix until no dry flour remains. The dough will look shaggy and rough.
        Cover and let it rest for 20 minutes (this is the autolyse).
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Step 2: Bulk Fermentation (4-6 hours at room temp)</h3>
      <p className="mb-4">
        Every 30 minutes for the first 2 hours, do one set of <strong>stretch and folds</strong>:
        wet your hands, grab one side of the dough, stretch it up until you feel resistance, and
        fold it over the top. Rotate the bowl a quarter turn and repeat. Four folds per set.
        After 4 sets (2 hours), let the dough rest undisturbed for another 2-4 hours. It should
        rise by 50-75% and feel light and pillowy when poked.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Step 3: Cold Ferment (24-72 hours in fridge)</h3>
      <p className="mb-4">
        Divide the dough into 4 equal balls (250g each). Round each ball tightly and place in a
        sealed container lightly oiled. Refrigerate for at least 24 hours, up to 3 days. The cold
        ferment is where the flavor magic happens: slow fermentation develops complex tang and
        makes the dough easier to stretch.
      </p>
      <p className="mb-4">
        Take the dough out of the fridge 2-3 hours before baking so it warms up to room temperature.
        Cold dough will not stretch properly and will spring back.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Step 4: Shape (2-3 minutes per pizza)</h3>
      <p className="mb-4">
        On a lightly floured surface, press the dough ball out with your fingertips, leaving
        1 inch of border untouched. Do not use a rolling pin: it compresses the air bubbles
        you spent 30 hours developing. Pick the dough up and stretch it gently over your
        knuckles, letting gravity do the work. Place on a semolina-dusted pizza peel or
        parchment paper.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Step 5: Top and Bake (5-7 minutes)</h3>
      <p className="mb-4">
        Add sauce, cheese, and toppings. For a home oven, preheat a pizza stone or steel on the
        top rack at 500F (or as hot as your oven goes) for at least 45 minutes. Slide the pizza
        onto the stone and bake 5-7 minutes until the crust is blistered and the cheese is
        bubbly with brown spots.
      </p>
      <p className="mb-4">
        For best results, use the broiler for the last 60 seconds to char the top without
        overcooking the bottom.
      </p>

      <h2 className="mt-10 mb-3">Troubleshooting Common Problems</h2>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Dough springs back when I stretch it</h3>
      <p className="mb-4">
        <strong>Cause:</strong> Gluten is too tight. Either the dough is too cold, or it has not
        fermented long enough.
      </p>
      <p className="mb-4">
        <strong>Fix:</strong> Let the dough sit at room temperature for at least 30 minutes before
        stretching. If it still springs back, let it rest on the counter for another 15 minutes
        and try again. Stretching in stages (rest 5 minutes between each) also helps.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Crust is tough and chewy, not crispy</h3>
      <p className="mb-4">
        <strong>Cause:</strong> Either the oven is not hot enough, or the hydration is too high
        for your flour.
      </p>
      <p className="mb-4">
        <strong>Fix:</strong> Preheat your oven for at least 45 minutes at maximum temperature.
        If your oven only goes to 450F, use the broiler for the last 2 minutes to mimic the
        high top heat of a pizza oven. Reduce hydration by 5% if you want a crunchier crust.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Crust tastes too sour</h3>
      <p className="mb-4">
        <strong>Cause:</strong> Over-fermented. Your starter is very active, or you left the dough
        in the fridge too long.
      </p>
      <p className="mb-4">
        <strong>Fix:</strong> Reduce cold ferment time to 24 hours. Use a less ripe starter
        (peak rise, not falling). If your starter is very acidic, feed it more often and use it
        at a younger stage.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Bottom burns before top is done</h3>
      <p className="mb-4">
        <strong>Cause:</strong> Pizza stone too close to the bottom heating element.
      </p>
      <p className="mb-4">
        <strong>Fix:</strong> Move the stone to the top rack. Or use a pizza steel, which
        transfers heat faster and cooks the bottom in less time.
      </p>

      <h2 className="mt-10 mb-3">Equipment That Actually Helps</h2>
      <p className="mb-4">
        You can make great sourdough pizza with a regular baking sheet. But if you bake pizza
        often, two upgrades are worth it:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Pizza stone or steel.</strong> A cordierite stone or 1/4-inch steel plate stores
        heat and transfers it to the dough on contact, giving you the bottom char that defines
        great pizza. Preheat for at least 45 minutes.</li>
        <li><strong>Infrared thermometer.</strong> Verify your stone is actually 500F+ before
        baking. Many home ovens run 50F cooler than the dial says.</li>
      </ul>

      <h2 className="mt-10 mb-3">FAQ</h2>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Can I use sourdough discard instead of active starter?</h3>
      <p className="mb-4">
        Yes, but the dough will not rise as much and will taste flatter. Discard has the bacteria
        but very little active yeast. For best results, use starter that has peaked (just started
        to fall). If you only have discard, add 1/4 tsp of commercial yeast per 500g flour as a
        backup.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">How long does the dough last in the fridge?</h3>
      <p className="mb-4">
        Up to 5 days, but flavor peaks around 48-72 hours. After day 4, the dough gets noticeably
        more sour and the gluten structure starts to break down. Use it or freeze it.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">Can I freeze the dough?</h3>
      <p className="mb-4">
        Yes. After the cold ferment, wrap each dough ball tightly in plastic wrap and freeze for up
        to 3 months. Thaw in the fridge overnight, then bring to room temperature 2-3 hours before
        shaping.
      </p>

      <h3 className="mt-6 mb-3 text-xl font-semibold">What is 00 flour and do I need it?</h3>
      <p className="mb-4">
        00 (doppio zero) is an Italian flour finely ground from soft wheat. It makes a more tender,
        stretchable dough than bread flour. You do not need it: bread flour works great. But if you
        want truly Neapolitan-style pizza, 00 is the traditional choice.
      </p>

      <h2 className="mt-10 mb-3">The Bottom Line</h2>
      <p className="mb-4">
        Sourdough pizza is one of those rare recipes that is genuinely easier than the
        commercial-yeast version. You mix, you wait, you bake. The starter does all the hard work
        of flavor development while you go about your day. Once you have it dialed in, this
        becomes your weekly pizza recipe. Our{" "}
        <Link href="/" className="text-brand-brown font-medium">free hydration calculator</Link>{" "}
        handles any scaling or flour swap.
      </p>
      
      
      <section className="max-w-3xl mx-auto px-6 mt-10 pt-8 border-t border-brand-tan">
        <h2 className="text-2xl mb-4">References</h2>
        <ol className="list-decimal pl-6 space-y-3 text-sm text-brand-muted">
          <li>
            Reinhart, P. (2010). <em>The Bread Baker's Apprentice: Mastering the Art of Extraordinary Bread</em> (10th Anniversary Edition). Ten Speed Press. ISBN 978-1607741296. Chapter 8 covers pizza dough, including a 14-hour cold-fermented method using a stiff starter.
          </li>
          <li>
            Forkish, K. (2012). <em>Flour Water Salt Yeast: The Fundamentals of Artisan Bread and Pizza</em>. Chronicle Books. ISBN 978-1607742736. Forkish's overnight pizza dough method (Chapter 9) uses a similar ratio to our recipe.
          </li>
          <li>
            King Arthur Baking Company. "Sourdough Pizza Crust." King Arthur Baking. https://www.kingarthurbaking.com/recipes/breads/sourdough-pizza-crust. Accessed 2026.
          </li>
          <li>
            Lopez-Alt, J.K. "The Food Lab: The Science of the Perfect Pizza." Serious Eats. https://www.seriouseats.com/the-pizza-lab. Accessed 2026. Covers oven temperature science and dough hydration tradeoffs.
          </li>
          <li>
            Leo, M. "Sourdough Pizza Dough." The Perfect Loaf. https://www.theperfectloaf.com/sourdough-pizza-dough/. Accessed 2026. Detailed home-baker method with troubleshooting.
          </li>
          <li>
            Robertson, C. (2013). <em>Tartine Bread</em>. Chronicle Books. ISBN 978-1452172867. Background on natural leavening and gluten development principles.
          </li>
        </ol>
        <p className="mt-6 text-sm text-brand-muted italic">
          The recipe and method in this article are based on standard sourdough baking practices
          refined from these sources and adapted for home bakers. Adjust flour and timing to
          your specific starter, flour brand, and ambient conditions.
        </p>
      </section><NextPostNav slug="sourdough-pizza-dough" />
        </article>
    </>
  );
}
