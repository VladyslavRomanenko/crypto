import { createSlice } from "@reduxjs/toolkit";
import { getCoinThunk, getCoinsThunk, getNewsThunk } from "./operations";

const initialState = {
  coins: [],
  coin: {},
  news: [],
  loading: "true",
  error: null,
};

const pending = (state) => {
  state.loading = true;
  state.error = "";
};
const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCoinsThunk.fulfilled, (state, action) => {
        state.coins = action.payload;
        state.loading = false;
      })
      .addCase(getCoinThunk.fulfilled, (state, action) => {
        state.coin = action.payload;
        state.loading = false;
      })
      .addCase(getNewsThunk.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), pending)
      .addMatcher((action) => action.type.endsWith("/rejected"), rejected);
  },
});

export const coinsReducer = coinsSlice.reducer;
