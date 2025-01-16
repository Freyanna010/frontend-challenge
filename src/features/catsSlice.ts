import { createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {fetchCatsData } from "./catsThunks";
import { Cat } from "@/types/types";

interface CatsState {
cats: Cat[];
isCatsLoading: boolean
catsError: null | string
}

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
