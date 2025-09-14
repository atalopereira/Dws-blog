import { useLatestPosts } from "../../hooks/useLatestPosts"
import type { Post } from "../../types";

describe('UseLatestPosts hook', () => {
  const mockPosts = [
    { id: '1', title: 'Tech Innovations in Healthcare', createdAt: '2025-07-23T08:54:45.931Z' },
    { id: '2', title: 'Fitness Routines for Athletes', createdAt: '2025-08-15T08:54:45.931Z' },
    { id: '3', title: 'Climate Change and Its Effects', createdAt: '2024-02-01T08:54:45.931Z' },
  ] as Post[]

  it('Should return empty when the post is empty', () => {
    expect(useLatestPosts([], 3)).toEqual([]);
  })

  it('Should return the most recent posts up to the limit entered', () => {
    const latestPosts = useLatestPosts(mockPosts, 2);

    expect(latestPosts.map(post => post.id)).toEqual(['2', '1']);
  })

  it('Should return all posts if the limit is greater than the list size', () => {
    const latestPosts = useLatestPosts(mockPosts, 5);

    expect(latestPosts.map(post => post.id)).toEqual(['2', '1', '3']);
  })
})