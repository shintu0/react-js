import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [{ id: "1", title: "Dummy", description: "Some descriptions" }],
  },
  reducers: {
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const id = action.payload.id;
      state.value = state.value.filter((todo) => todo.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
