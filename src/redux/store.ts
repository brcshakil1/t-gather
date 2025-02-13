import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./apis/baseApi";
// import {
// //   persistStore,
//   //   persistReducer,
//   // FLUSH,
//   // REHYDRATE,
//   // PAUSE,
//   // PERSIST,
//   // PURGE,
//   // REGISTER,
// } from "redux-persist";

// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "auth",
//   storage,
// };

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
