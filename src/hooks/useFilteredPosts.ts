import type { DropdownItem, Post } from "../types";

interface Filters {
  authors: DropdownItem[];
  categories: DropdownItem[];
  sortBy: 'newest' | 'oldest';
}

export function useFilteredPosts(posts: Post[], filters: Filters) {
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

  filtered = [...filtered].sort((a, b) => {
    return filters.sortBy === 'newest'
      ? a.createdAt.localeCompare(b.createdAt)
      : b.createdAt.localeCompare(a.createdAt); 
  });

  return filtered;
}