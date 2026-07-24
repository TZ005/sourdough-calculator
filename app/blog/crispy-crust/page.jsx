import Link from "next/link";

export const metadata = {
  title: "Sourdough Crust: 7 Tips for a Crispy, Crackling, Bakery-Style Crust",
  description: "Want that signature crackling sourdough crust? Seven proven tips for oven spring, steam, and the perfect crackle every time.",
  keywords: ["sourdough crust", "crispy sourdough crust", "sourdough oven spring", "crusty bread", "sourdough steam"],
};

export default function CrispyCrust() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog/" className="text-brand-muted text-sm">← Back to Blog</Link>

      <h1 className="mt-4 mb-3">Sourdough Crust: 7 Tips for a Crispy, Crackling, Bakery-Style Crust</h1>
      <p className="text-brand-muted text-sm mb-8">📖 7 min read · Updated July 2026</p>

      <p className="text-lg mb-6">
        Sourdough's signature crackling crust is what makes it special. Achieving it is not magic,
        it is technique. Here are the seven things that professional bakers do that home bakers often
        skip. Master these and your bread will sound like a drum when you tap it.
      </p>

      <h2 className="mt-10 mb-3">1. Bake in a Dutch Oven (or Similar)</h2>
      <p className="mb-4">
        This is the single biggest upgrade you can make. A Dutch oven traps the steam that the
        bread releases during baking, which keeps the crust soft and pliable during oven spring.
        This gives the bread time to fully expand before the crust hardens. After 20 minutes, remove
        the lid and the crust will crisp up in the dry oven heat. <strong>Result:</strong> thick,
        crackly crust with maximum oven spring.
      </p>
      <p className="mb-4">
        If you don't have a Dutch oven, use any heavy oven-safe pot with a lid: Pyrex, cast iron
        combo cooker, ceramic baker. Even a metal bowl with foil over the top works in a pinch.
      </p>

      <h2 className="mt-10 mb-3">2. Add Steam (Without a Dutch Oven)</h2>
      <p className="mb-4">
        Place a metal pan or cast iron skillet on the bottom rack of the oven. When you put the
        bread in, pour 1 cup of boiling water into the pan and quickly close the door. The
        steam fills the oven, keeps the crust soft for the first 10-15 minutes, then dissipates.
        You can also throw 4-5 ice cubes onto the hot pan for an even more dramatic burst of steam.
      </p>

      <h2 className="mt-10 mb-3">3. Score Aggressively (Not Shy)</h2>
      <p className="mb-4">
        A deep, confident score is essential. Use a sharp lame or razor blade, and cut at a
        <strong>30-45 degree angle</strong>, <strong>1/2 to 3/4 inch deep</strong>. A single cut at the
        longest axis is the classic baker's mark. A cut that's too shallow will not allow the
        bread to expand and will seal shut in the oven. Hesitation leads to jagged edges. Cut
        decisively.
      </p>

      <h2 className="mt-10 mb-3">4. Bake Hot (At Least 450°F)</h2>
      <p className="mb-4">
        Crust forms at high temperatures. 450-500°F is the standard. Lower temperatures produce a
        soft, pale crust. Higher temperatures produce a deep, dark, crackly crust. Don't be afraid
        of dark. The interior temperature is what matters for doneness, and the crust color is
        purely aesthetic. Darker crust = more flavor.
      </p>

      <h2 className="mt-10 mb-3">5. Pre-heat Properly (At Least 45 Minutes)</h2>
      <p className="mb-4">
        The oven needs to be <strong>thoroughly pre-heated</strong> for at least 45 minutes. A Dutch
        oven or pizza stone needs this time to fully saturate with heat. If you put bread into a
        lukewarm oven, you will lose at least 30% of your oven spring. Use an oven thermometer to
        verify the actual temperature. Most home ovens are 25-50°F off from the dial.
      </p>

      <h2 className="mt-10 mb-3">6. Cool Completely (At Least 1 Hour)</h2>
      <p className="mb-4">
        Sourdough continues to bake internally as it cools. The interior is still setting when
        you take it out. Cut too early and the crumb will be gummy and the crust will feel doughy.
        Wait at least 1 hour, ideally 2 hours, on a wire rack before cutting. Yes, this is the
        hardest part.
      </p>

      <h2 className="mt-10 mb-3">7. Hydration Matters Too</h2>
      <p className="mb-4">
        Higher hydration doughs (78%+) produce thinner, more crackly crusts because the higher
        water content evaporates more during baking, creating more steam inside the crust. If
        you want extra crackle, push your hydration up by 5%. Our <Link href="/" className="text-brand-brown font-medium">hydration calculator</Link>{" "}
        makes this easy.
      </p>

      <h2 className="mt-10 mb-3">The Cheat Sheet</h2>
      <p className="mb-4">
        If you do only one thing, buy a Dutch oven. If you do two, score deeper. If you do
        three, bake at 500°F. If you do all seven, your bread will sound like a drum and crackle
        when you cut it. That is the sourdough experience.
      </p>
    </article>
  );
}
