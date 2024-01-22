import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCarsThunk } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "carList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCarsThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    // .addCase(addTodoThunk.fulfilled, (state, action) => {
    //   state.items.push(action.payload);
    // })
    // .addCase(deleteTodoThunk.fulfilled, (state, action) => {
    //   state.items = state.items.filter(
    //     (todo) => todo.id !== action.payload.id
    //   );
    // });
  },
});
export const carsReducer = slice.reducer;
