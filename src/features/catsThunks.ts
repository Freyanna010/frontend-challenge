import { API_KEY, API_URL } from "@/config/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

type ErrorResponse = {
  message: string;
};

export const fetchStudentsData = createAsyncThunk(
  "cats/fetchCats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          "x-api-key": API_KEY,
        },
        params: {
          limit: 100,
        },
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        return rejectWithValue(
          axiosError.response?.data?.message || "Ошибка запроса котиков"
        );
      } else {
        return rejectWithValue("Ошибка сети");
      }
    }
  }
);
