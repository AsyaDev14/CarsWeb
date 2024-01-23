import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCarsThunk, fetchCarsBrandThunk } from "./operations";

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
    builder
      .addCase(fetchAllCarsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllCarsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCarsThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});
const initialStateBrand = {
  items: [],
};
const brandSlice = createSlice({
  name: "brandList",
  initialState: initialStateBrand,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarsBrandThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export const carsReducer = slice.reducer;
export const brandReducer = brandSlice.reducer;
