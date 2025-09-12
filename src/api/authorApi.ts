import type { Author } from "../types";

const API_URL = "https://tech-test-backend.dwsbrazil.io/authors/";

export async function getAuthors(): Promise<Author[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error when searching for authors");
  return res.json();
}