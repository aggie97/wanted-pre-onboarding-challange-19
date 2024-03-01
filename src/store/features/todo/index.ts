import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TodoState {
  todos: { id: number; todo: string }[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      const todo = action.payload;
      state.todos.push({ id: (state.todos.at(-1)?.id ?? 0) + 1, todo });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const selectedId = action.payload;
      state.todos = state.todos.filter(({ id }) => id !== selectedId);
    },
  },
});

export const { reducer: todoReducer } = todoSlice;

export const { createTodo, deleteTodo } = todoSlice.actions;
