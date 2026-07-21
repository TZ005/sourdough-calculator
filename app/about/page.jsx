export const metadata = {
  title: "About - SourdoughCalc",
  description: "About SourdoughCalc - the free sourdough hydration calculator for home bakers.",
};

export default function About() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="mb-6">About SourdoughCalc</h1>
      <p className="text-lg mb-4">
        SourdoughCalc is a free, fast, and accurate sourdough hydration calculator built for home bakers.
      </p>
      <p className="mb-4">
        We believe great sourdough starts with the right ratios. Our calculator takes the math out of baking,
        so you can focus on technique, timing, and taste.
      </p>
      <h2 className="mt-8 mb-3">Why we built this</h2>
      <p className="mb-4">
        Most online calculators are either too complex, too cluttered with ads, or require signup.
        We built SourdoughCalc to be the opposite: free, instant, and beautifully simple.
      </p>
      <h2 className="mt-8 mb-3">Our values</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Free forever</strong> — no paywalls, no premium tiers</li>
        <li><strong>Privacy first</strong> — no tracking, no cookies, no signup</li>
        <li><strong>Mobile friendly</strong> — bake from your phone in the kitchen</li>
        <li><strong>Open content</strong> — based on classic baking principles</li>
      </ul>
    </article>
  );
}
