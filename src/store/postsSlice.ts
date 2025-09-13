import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostById, getPosts } from "../api/postApi";
import type { Post } from "../types";
import type { RootState } from "./store";

interface PostsState {
  items: Post[];
  selectedPost: Post | null;
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  selectedPost: null,
  loading: false,
  error: null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", getPosts);
export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id: string) => {
    return await getPostById(id)
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    clearSelectedPost: (state) => {
      state.selectedPost = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      })
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPost = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch post";
      })
  }
});

export const { addSelectedPost, clearSelectedPost } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.items;
export const selectSelectedPost = (state: RootState) => state.posts.selectedPost;
export default postsSlice.reducer;