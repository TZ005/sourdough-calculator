// Shared shape of a blog post entry. Matches the fields in app/_lib/posts.ts.
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export interface AdjacentPosts {
  prev: Post | null;
  next: Post | null;
}