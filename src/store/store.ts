import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from './postsSlice';
import CategoriesReducer from './categoriesSlice';
import AuthorsReducer from "./authorsSlice";

export const store = configureStore({
  reducer: {
    posts: PostsReducer,
    categories: CategoriesReducer,
    authors: AuthorsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;