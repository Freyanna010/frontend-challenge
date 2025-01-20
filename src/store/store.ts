import { configureStore } from "@reduxjs/toolkit";

import catsSlice from "@/features/catsSlice";

export const store = configureStore({
  reducer: {
    catsSlice: catsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
