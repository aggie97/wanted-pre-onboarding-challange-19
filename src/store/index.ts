import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { todoReducer } from "./features/todo";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      todoReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
  return store;
};
export const store = makeStore();

export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
export type AppStore = ReturnType<typeof makeStore>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
