import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCatsData } from "./catsThunks";
import { CatsState } from "@/types/types";

const initialState: CatsState = {
  cats: [],
  isCatsLoading: false,
  catsError: null
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatsData.pending, (state) => {
        state.isCatsLoading = true;
        state.catsError = null;
      })
      .addCase(fetchCatsData.fulfilled, (state, action) => {
        // TODO: убрать 
        console.log('сработал fulfilled в slice');
        state.isCatsLoading = false;
        state.cats = action.payload;
      })
      .addCase(fetchCatsData.rejected, (state, action) => {
        state.isCatsLoading = false;
        state.catsError = action.payload as string;
      });
  },
});

export const {

} = catsSlice.actions;
export default catsSlice.reducer;
