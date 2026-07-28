import Link from "next/link";
import { getAdjacentPosts } from "@/app/_lib/posts";

interface NextPostNavProps {
  slug: string;
}

export default function NextPostNav({ slug }: NextPostNavProps): JSX.Element | null {
  const { prev, next } = getAdjacentPosts(slug);
  if (!prev && !next) return null;
  return (
    <nav className="max-w-3xl mx-auto px-6 mt-12 pt-8 border-t border-brand-tan">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/blog/${prev.slug}/`}
            className="group block bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow"
          >
            <div className="text-base text-brand-muted mb-1 flex items-center gap-2">
              <span className="text-2xl">←</span>
              <span className="font-semibold">Previous</span>
            </div>
            <div className="text-base text-brand-brown font-semibold group-hover:underline line-clamp-2">
              {prev.title}
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {next ? (
          <Link
            href={`/blog/${next.slug}/`}
            className="group block bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow text-right"
          >
            <div className="text-base text-brand-muted mb-1 flex items-center gap-2 justify-end">
              <span className="font-semibold">Next</span>
              <span className="text-2xl">→</span>
            </div>
            <div className="text-base text-brand-brown font-semibold group-hover:underline line-clamp-2">
              {next.title}
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
}