import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCatsData } from "./catsThunks";
import { Cat, CatsState } from "@/types/types";

const initialState: CatsState = {
  cats: [],
  isLoading: false,
  catsError: null,
  favoriteIds: [],
  favoriteCats: [],
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if (state.favoriteIds.includes(action.payload)) {
        state.favoriteIds = state.favoriteIds.filter(
          (id) => id !== action.payload
        );
      } else {
        state.favoriteIds.push(action.payload);
      }
      state.favoriteCats = state.cats.filter((cat) =>
        state.favoriteIds.includes(cat.id)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatsData.pending, (state) => {
        state.isLoading = true;
        state.catsError = null;
      })
      .addCase(
        fetchCatsData.fulfilled,
        (state, action: PayloadAction<Cat[]>) => {
          state.isLoading = false;
          state.cats = action.payload;

          state.favoriteCats = action.payload.filter((cat) =>
            state.favoriteIds.includes(cat.id)
          );
        }
      )
      .addCase(fetchCatsData.rejected, (state, action) => {
        state.isLoading = false;
        state.catsError = action.payload as string;
      });
  },
});

export const { toggleFavorite } = catsSlice.actions;
export default catsSlice.reducer;
