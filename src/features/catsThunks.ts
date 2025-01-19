import { API_KEY, API_URL } from "@/constants/config";
import { Cat } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Params = {
  limit?: number;
  offset?: number;
};

export const fetchCatsData = createAsyncThunk<
  Cat[],
  Params | undefined,
  { rejectValue: string }
>("cats/fetchCatsData", async (params, { rejectWithValue }) => {
  try {
    const { limit = 50, offset } = params || {};

    const response = await axios.get(API_URL, {
      headers: {
        "x-api-key": API_KEY,
      },
      params: {
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data?.message || "Ошибка запроса котиков",
      );
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  }
});
