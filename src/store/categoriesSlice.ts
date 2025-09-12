import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../api/categoryApi";
import type { Category } from "../types";
import type { RootState } from "./store";

interface CategoriesState {
  items: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  items: [],
  loading: false,
  error: null
}

export const fetchCategories = createAsyncThunk("categories/fetchCategories", getCategories);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch categories ";
      })
  }
});

export const selectCategories = (state: RootState) => state.categories.items;
export default categoriesSlice.reducer;