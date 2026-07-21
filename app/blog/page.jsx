import Link from "next/link";

const POSTS = [
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
