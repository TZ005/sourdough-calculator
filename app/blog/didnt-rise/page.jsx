import Link from "next/link";

export const metadata = {
  title: "Why Your Sourdough Did Not Rise: 12 Common Causes and How to Fix Each",
  description: "Troubleshooting guide for flat, dense, or sunken sourdough. 12 common causes with specific fixes, from weak starter to oven temperature mistakes.",
  keywords: ["sourdough did not rise", "sourdough flat", "dense sourdough", "sourdough not rising", "sourdough troubleshooting"],
};

export default function DidntRise() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">Why Your Sourdough Did Not Rise: 12 Common Causes and How to Fix Each</h1>
      <p className="text-brand-muted text-sm mb-8">📖 10 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        Sourdough is supposed to rise. When it does not, there is always a reason. Here are the
        12 most common causes, organized by when they happen in the bake, with specific fixes
        for each.
      </p>

      <h2 className="mt-10 mb-3">1. The Starter is Young or Weak</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough barely rises at all. The starter itself takes 12+ hours to peak.
        <strong>Fix:</strong> Use a starter that is at least 2 weeks old and reliably doubles in
        4-6 hours after feeding. If your starter is slow, give it more time. Or feed it more
        often (every 4-6 hours) for a few days to strengthen it.
      </p>

      <h2 className="mt-10 mb-3">2. Cold Kitchen</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough barely rises even with a strong starter. Bulk takes 8+ hours.
        <strong>Fix:</strong> Find a warmer spot. On top of the fridge, inside the oven with just the
        light on, in a cooler bag with a warm water bottle. Target 75-80°F for bulk.
      </p>

      <h2 className="mt-10 mb-3">3. Too Much Salt</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Slow rise, dense crumb. Salt inhibits yeast.
        <strong>Fix:</strong> Use 1.8-2% salt by baker's percentage. Re-measure with a scale. Salt
        volumes vary wildly by type.
      </p>

      <h2 className="mt-10 mb-3">4. Too Much Starter Inhibits</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough rises fast initially but collapses. Too much starter over-acidifies.
        <strong>Fix:</strong> Use 15-20% ripe starter. More than 25% and the dough becomes acidic and
        unstable.
      </p>

      <h2 className="mt-10 mb-3">5. Not Enough Starter</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Slow rise, weak oven spring.
        <strong>Fix:</strong> Use at least 15% ripe starter. Below 10% and fermentation is too slow.
      </p>

      <h2 className="mt-10 mb-3">6. Flour is Too Weak</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough spreads flat. Crumb is tight. Oven spring is weak.
        <strong>Fix:</strong> Use bread flour (12-14% protein) or blend with vital wheat gluten. Cake
        flour and pastry flour do not have enough gluten.
      </p>

      <h2 className="mt-10 mb-3">7. Too Much Water</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough collapses, spreads during proof.
        <strong>Fix:</strong> Lower hydration by 5%. Most beginners do better at 70-72% hydration
        than 75%+. Use our <Link href="/" className="text-brand-brown font-medium">calculator</Link>{" "}
        to track accurately.
      </p>

      <h2 className="mt-10 mb-3">8. Bulk Fermentation Too Short</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dense crumb, pale crust, bland flavor.
        <strong>Fix:</strong> Bulk for 4-6 hours at 70-75°F, or until 50-75% rise with domed top. Time
        alone is unreliable; watch the dough.
      </p>

      <h2 className="mt-10 mb-3">9. Over-Fermented</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dough collapses when shaped. Strong vinegar smell. Flat loaf.
        <strong>Fix:</strong> Cut bulk time by 30-60 minutes. Aim for 50% rise, not 100% doubled.
      </p>

      <h2 className="mt-10 mb-3">10. Weak Shaping</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Spreads flat in oven. No oven spring.
        <strong>Fix:</strong> Build more surface tension. Use a bench scraper. Drag the dough
        rather than folding. Watch our shaping guide.
      </p>

      <h2 className="mt-10 mb-3">11. Under-Proofed Final Proof</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Dense crumb, explosive oven spring, tears in the crust.
        <strong>Fix:</strong> Let the final proof go longer. The poke test: poke the dough with a
        floured finger. If it springs back slowly and leaves a slight indent, it is ready. If it
        springs back quickly, it is under-proofed.
      </p>

      <h2 className="mt-10 mb-3">12. Oven Too Cool</h2>
      <p className="mb-4">
        <strong>Symptom:</strong> Pale, soft crust. No oven spring.
        <strong>Fix:</strong> Preheat to 500°F for at least 45 minutes. Use an oven thermometer. Most
        home ovens are 25-50°F off. A Dutch oven or pizza steel helps a lot.
      </p>

      <h2 className="mt-10 mb-3">The Quick Diagnostic</h2>
      <p className="mb-4">
        Flat loaf: under-proofed final proof OR over-bulk OR too much water.
      </p>
      <p className="mb-4">
        Dense crumb: under-bulk OR weak flour.
      </p>
      <p className="mb-4">
        Vinegar taste: over-bulk OR too much starter.
      </p>
      <p className="mb-4">
        Pale crust: oven too cool OR not enough steam.
      </p>
      <p className="mb-4">
        Use our <Link href="/" className="text-brand-brown font-medium">hydration calculator</Link>{" "}
        to dial in the right hydration for your flour and conditions. The most common cause of
        flat/dense bread is a hydration that is too high for your flour strength.
      </p>
    </article>
  );
}
