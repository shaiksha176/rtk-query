import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { userApi } from "./api/userApi";
import { productsApi } from "./api/dummyApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productsApi.middleware), // Include both RTK Query middlewares
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
