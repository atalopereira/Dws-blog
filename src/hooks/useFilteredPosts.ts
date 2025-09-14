import type { FiltersState, Post } from "../types";

export function useFilteredPosts(posts: Post[], filters: FiltersState) {
  let filtered = posts;

  if (filters.authors && filters.authors.length > 0) {
    const selectedAuthorIds = filters.authors.map(author => author.id);

    filtered = posts.filter(post => 
      selectedAuthorIds.includes(post.authorId)
    );
  }

  if (filters.categories && filters.categories.length > 0) {
    const selectedCategoryIds = filters.categories.map(cat => cat.id);

    filtered = filtered.filter(post => 
      post.categories.some(cat => selectedCategoryIds.includes(cat.id))
    );
  }

  if (filters.search) {
    const textSearch = filters.search.toLowerCase().trim();
    filtered = filtered.filter(post => post.title.toLowerCase().includes(textSearch))
  }

  filtered = [...filtered].sort((a, b) => {
    return filters.sortBy === 'newest'
      ? a.createdAt.localeCompare(b.createdAt)
      : b.createdAt.localeCompare(a.createdAt); 
  });

  return filtered;
}