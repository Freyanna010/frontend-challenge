import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCatsData } from "./catsThunks";
import { CatsState } from "@/types/types";

const initialState: CatsState = {
  cats: [],
  isLoading: false,
  catsError: null,
  favoriteIds: []
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if(state.favoriteIds.includes(action.payload)) {
        state.favoriteIds.filter((id) => id !== action.payload)
      } else {
        state.favoriteIds.push(action.payload)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatsData.pending, (state) => {
        state.isLoading = true;
        state.catsError = null;
      })
      .addCase(fetchCatsData.fulfilled, (state, action) => {
            state.isLoading = false;
        state.cats = action.payload;
      })
      .addCase(fetchCatsData.rejected, (state, action) => {
        state.isLoading = false;
        state.catsError = action.payload as string;
      });
  },
});

export const {
  toggleFavorite
} = catsSlice.actions;
export default catsSlice.reducer;
