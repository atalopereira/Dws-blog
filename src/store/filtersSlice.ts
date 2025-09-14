import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { FiltersState, OptionItem, SortBy } from "../types";

const initialState: FiltersState = {
  authors: [],
  categories: [],
  sortBy: "newest",
  search: '',
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
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    }
  }
});

export const { setAuthorsFilter, setCategoriesFilter, setSortBy, setSearch } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters;
export default filtersSlice.reducer;