import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// 'https://65aa42f8081bd82e1d967c09.mockapi.io/cars/advert'

axios.defaults.baseURL = "https://65aa42f8081bd82e1d967c09.mockapi.io/cars/";

export const fetchAllCarsThunk = createAsyncThunk(
  "advert/fetch",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("advert");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
