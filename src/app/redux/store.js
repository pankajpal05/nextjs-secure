"use client";
import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "@/app/redux/feature/Token/tokenSlice";
export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});
