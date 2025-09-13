import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from './postsSlice';
import CategoriesReducer from './categoriesSlice';
import AuthorsReducer from "./authorsSlice";
import FiltersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    posts: PostsReducer,
    categories: CategoriesReducer,
    authors: AuthorsReducer,
    filters: FiltersReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;