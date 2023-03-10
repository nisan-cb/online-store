import { configureStore } from '@reduxjs/toolkit';
import viewSlice from './view/viewSlice';

export const store = configureStore({
    reducer: {
        view: viewSlice,
    },
});

export const viewState = store.getState().view;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch