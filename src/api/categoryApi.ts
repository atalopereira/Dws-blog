import type { Category } from "../types";

const API_URL = "https://tech-test-backend.dwsbrazil.io/categories/";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error when searching for categories");
  return res.json();
}