import { API_KEY, API_URL } from "@/config/config";
import { Cat } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatsData = createAsyncThunk<
  Cat[],
  number,
  { rejectValue: string }
>("cats/fetchCatsData", async (limit, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "x-api-key": API_KEY,
      },
      params: {
        limit,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data?.message || "Ошибка запроса котиков"
      );
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  }
});
