import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./apis/dataApi";
import postsDataSlice from "./slices/postsDataSlice";
import usersDataSlice from "./slices/usersDataSlice";
import commentsDataSlice from './slices/commentsDataSlice'
export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    postsDataSlice,
    usersDataSlice,
    commentsDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
