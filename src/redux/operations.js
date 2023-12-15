import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCoinById, fetchCoins } from "../services/cryptoAPI";
import { fetchNews } from "../services/cryptoNews";

export const getCoinsThunk = createAsyncThunk(
  "coins/getCoins",
  async (count, { rejectWithValue }) => {
    try {
      const response = await fetchCoins(count);
      return response?.data?.data || [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCoinThunk = createAsyncThunk(
  "coins/getCoin/id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchCoinById(id);
      return response.data.data.coin || {};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNewsThunk = createAsyncThunk(
  "news/getNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchNews();
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
