import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../api/postApi";
import type { Post } from "../types";
import type { RootState } from "./store";

interface PostsState {
  items: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", getPosts);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
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
  }
});

export const selectPosts = (state: RootState) => state.posts.items;
export default postsSlice.reducer;