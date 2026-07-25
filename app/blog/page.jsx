import Link from "next/link";
import { POSTS, PAGE_SIZE, TOTAL_PAGES, getPostsForPage, emoji } from "../_lib/posts";

const page = 1;
const displayedPosts = getPostsForPage(page);

export const metadata = {
  title: "Blog - Page 1 of " + TOTAL_PAGES + " - SourdoughCalc",
  description: "Learn sourdough baking from the ground up. Hydration guides, recipes, and tips.",
};

export default function BlogPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="mb-3">Sourdough Baking Blog</h1>
      <p className="text-lg text-[#5C4033] mb-10">
        Learn the science and craft of sourdough baking. Free guides, practical tips, and tested recipes.
      </p>

      <div className="space-y-6">
        {displayedPosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}/`}
            className="relative block bg-white rounded-xl pl-16 pr-6 py-6 shadow-md hover:shadow-lg transition-shadow hover:no-underline"
          >
            <span className="absolute top-3 left-3 w-12 h-12 flex items-center justify-center bg-brand-brown text-white rounded-full font-bold text-lg shadow-sm">
              {String(1 + i).padStart(2, "0")}
            </span>
            <h2 className="text-brand-brown mb-2">{post.title}</h2>
            <p className="text-[#5C4033] mb-3">{post.excerpt}</p>
            <span className="text-brand-muted text-sm">{emoji} {post.readTime} read</span>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-3 text-sm">
        <Link
          href="/blog"
          className={"px-4 py-2 rounded-lg bg-white shadow hover:shadow-md text-brand-brown font-medium ring-2 ring-brand-brown"}
        >
          ← Previous
        </Link>
        <span className="text-brand-muted px-3">
          Page {page} of {TOTAL_PAGES}
        </span>
        <Link
          href={"/blog/page/2"}
          className={"px-4 py-2 rounded-lg bg-white shadow hover:shadow-md text-brand-brown font-medium ring-2 ring-brand-brown"}
        >
          Next →
        </Link>
      </div>

      <p className="mt-10 text-brand-muted text-sm text-center">
        More articles coming soon. Subscribe to our newsletter to get notified.
      </p>
    </article>
  );
}
