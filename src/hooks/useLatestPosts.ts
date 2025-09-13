import type { Post } from "../types";

export function useLatestPosts(posts: Post[], limit: number) {
  if (!posts || posts.length === 0) return []

  const latestPosts = [...posts].sort(
    (a,b) => a.createdAt.localeCompare(b.createdAt)
  ).slice(0, limit);

  return latestPosts;
}