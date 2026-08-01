import Link from "next/link";
import type { Metadata } from "next";
import { POSTS, PAGE_SIZE, TOTAL_PAGES, getPostsForPage, emoji } from "../_lib/posts";

const page = 1;
const displayedPosts = getPostsForPage(page);

export const metadata: Metadata = {
  title: "Sourdough Baking Blog - Free Guides and Recipes",
  description: "Free sourdough baking guides: hydration, recipes, troubleshooting, and tips for home bakers. New articles added regularly.",
  alternates: {
    canonical: "https://sourdough-hydrationcalculator.com/blog/",
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://sourdough-hydrationcalculator.com/blog/#blog",
            "name": "Sourdough Baking Blog",
            "url": "https://sourdough-hydrationcalculator.com/blog/",
            "description": "Free sourdough baking guides, recipes, and troubleshooting for home bakers.",
            "inLanguage": "en",
            "dateModified": "2026-08-01",
            "author": {
              "@type": "Organization",
              "name": "SourdoughCalc",
              "url": "https://sourdough-hydrationcalculator.com/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SourdoughCalc",
              "url": "https://sourdough-hydrationcalculator.com/"
            },
            "mainEntity": displayedPosts.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "url": "https://sourdough-hydrationcalculator.com/blog/" + post.slug + "/"
            }))
          })
        }}
      />
      <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl mb-4">Sourdough Baking Blog</h1>
      <p className="text-lg text-[#5C4033] mb-4">
        This is the SourdoughCalc blog: free, tested guides for baking better sourdough at home.
      </p>
      <p className="text-lg text-[#5C4033] mb-10">
        Start with hydration and a simple loaf, then move on to recipes and troubleshooting.
      </p>
      <p className="text-brand-muted text-sm mb-10">By SourdoughCalc Team</p>

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
            <h2 className="text-brand-brown font-bold text-lg mb-2">{post.title}</h2>
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

      <h2 className="mt-10 mb-3">Sources</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="https://www.kingarthurbaking.com/learn/guides/sourdough" target="_blank" rel="nofollow noopener">King Arthur Baking: Sourdough Guide</a></li>
        <li><a href="https://www.theperfectloaf.com/beginners-sourdough-bread/" target="_blank" rel="nofollow noopener">The Perfect Loaf: Beginner Sourdough Bread</a></li>
      </ul>
      </article>
    </>
  );
}
