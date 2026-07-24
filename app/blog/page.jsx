import Link from "next/link";

const POSTS = [
  {
    slug: "crispy-crust",
    title: "Sourdough Crust: 7 Tips for a Crispy, Crackling, Bakery-Style Crust",
    excerpt: "Want that signature crackling sourdough crust? Seven proven tips for oven spring, steam, and the perfect crackle every time.",
    readTime: "7 min",
  },
  {
    slug: "vs-regular-bread",
    title: "Sourdough vs Regular Bread: Nutrition, Digestibility, and Taste Compared",
    excerpt: "Is sourdough actually healthier than regular bread? A science-backed comparison of nutrition, glycemic index, digestibility, and flavor.",
    readTime: "8 min",
  },
  {
    slug: "best-flour",
    title: "Best Flour for Sourdough: A Complete Guide for Home Bakers",
    excerpt: "Bread flour, all-purpose, whole wheat, rye: which flour makes the best sourdough? Practical guide to choosing flour by skill level and style.",
    readTime: "9 min",
  },
  {
    slug: "sourdough-discard",
    title: "Sourdough Discard: 10 Easy Recipes That Don't Taste Sour",
    excerpt: "Don't throw away your sourdough discard! 10 delicious recipes including pancakes, crackers, waffles, pizza dough and more. Zero waste, full flavor.",
    readTime: "8 min",
  },
  { slug: "sourdough-starter",
    title: "Sourdough Starter: A 7-Day Guide from Scratch",
    excerpt: "Day-by-day guide to creating your own starter from just flour + water. Includes feeding schedules and troubleshooting.",
    readTime: "10 min",
  },
  { slug: "bakers-percentage",
    title: "Baker's Percentage: Convert Any Recipe (With Calculator)",
    excerpt: "Master baker's percentage in 8 minutes. Convert any bread recipe, scale to your loaf size, never guess hydration again.",
    readTime: "8 min",
  },
  { slug: "sourdough-schedule",
    title: "Sourdough Schedule: A 24-Hour Timeline for Your First Loaf",
    excerpt: "Hour-by-hour timeline from starter feed to slicing. Perfect for first-time bakers.",
    readTime: "9 min",
  },

  {
    slug: "common-mistakes",
    title: "5 Common Sourdough Mistakes (and How to Fix Them)",
    excerpt: "Dense crumb, flat loaf, gummy texture? The 5 most common sourdough mistakes and exactly how to fix each one.",
    readTime: "12 min",
  },
  {
    slug: "hydration-guide",
    title: "Sourdough Hydration: The Complete Beginner's Guide (2026)",
    excerpt: "Everything you need to know about sourdough hydration, from 70% beginner loaves to 100% ciabatta. Includes flour absorption tips and a free calculator.",
    readTime: "15 min",
  },
  {
    slug: "best-sourdough-calculators",
    title: "Best 10 Free Sourdough Hydration Calculators (2026)",
    excerpt: "I tested 10 popular sourdough hydration calculators. Here is which one is best for beginners, mobile users, and serious bakers.",
    readTime: "12 min",
  },
  {
    slug: "what-is-hydration",
    title: "What is Sourdough Hydration? A Complete Guide",
    excerpt: "Understand hydration, how it affects your dough, and how to choose the right percentage for your bread.",
    readTime: "8 min",
  },
];

export const metadata = {
  title: "Blog - SourdoughCalc",
  description: "Learn sourdough baking from the ground up. Hydration guides, recipes, and tips.",
};

export default function Blog() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="mb-3">Sourdough Baking Blog</h1>
      <p className="text-lg text-[#5C4033] mb-10">
        Learn the science and craft of sourdough baking. Free guides, practical tips, and tested recipes.
      </p>

      <div className="space-y-6">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}/`}
            className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow hover:no-underline"
          >
            <h2 className="text-brand-brown mb-2">{post.title}</h2>
            <p className="text-[#5C4033] mb-3">{post.excerpt}</p>
            <span className="text-brand-muted text-sm">📖 {post.readTime} read</span>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-brand-muted text-sm text-center">
        More articles coming soon. Subscribe to our newsletter to get notified.
      </p>
    </article>
  );
}
