import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { OptionItem } from "../types";

type SortBy = "newest" | "oldest";

interface FiltersState {
  authors: OptionItem[];
  categories: OptionItem[];
  sortBy: SortBy;
}

const initialState: FiltersState = {
  authors: [],
  categories: [],
  sortBy: "newest",
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setAuthorsFilter(state, action: PayloadAction<OptionItem[]>) {
      state.authors = action.payload;
    },
    setCategoriesFilter(state, action: PayloadAction<OptionItem[]>) {
      state.categories = action.payload;
    },
    setSortBy(state, action: PayloadAction<SortBy>) {
      state.sortBy = action.payload;
    }
  }
});

export const { setAuthorsFilter, setCategoriesFilter, setSortBy } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters;
export default filtersSlice.reducer;