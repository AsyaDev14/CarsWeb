import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favoriteCars",
  initialState: [],
  isLoading: false,
  reducers: {},
});

export const favoriteReducer = slice.reducer;
