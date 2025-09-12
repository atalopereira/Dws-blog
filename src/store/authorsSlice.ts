import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuthors } from "../api/authorApi";
import type { Author } from "../types";
import type { RootState } from "./store";

interface AuthorsState {
  items: Author[];
  loading: boolean;
  error: string | null;
}

const initialState: AuthorsState = {
  items: [],
  loading: false,
  error: null
}

export const fetchAuthors = createAsyncThunk("authors/fetchAuthors", getAuthors);

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch authors";
      })
  }
});

export const selectAuthors = (state: RootState) => state.authors.items;
export default authorsSlice.reducer;