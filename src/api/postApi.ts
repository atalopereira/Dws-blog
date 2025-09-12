import type { Post } from "../types";

const API_URL = "https://tech-test-backend.dwsbrazil.io/posts/";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error when searching for posts");
  return res.json();
}