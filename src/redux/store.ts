import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import userReducer from "./features/user/userSlice";
import { baseApi } from "./api/api";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        counter: counterReducer,
        user: userReducer,
        
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
