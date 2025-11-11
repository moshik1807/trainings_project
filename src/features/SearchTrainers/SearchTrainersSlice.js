import { createSlice } from "@reduxjs/toolkit";

import { getTrainersBySearch } from "./SearchTrainersThunk";
import { logout } from "../user/userSlice";

const initialState = {
  searchTrainers: [],
  status: "idle",
  error: null,
};

const SearchTrainersSlice = createSlice({
  name: "SearchTrainers",
  initialState,
  reducers: {
    cleanSearch: (state) => {
      state.searchTrainers = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrainersBySearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTrainersBySearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchTrainers = action.payload;
      })
      .addCase(getTrainersBySearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(logout, (state) => {
        state.searchTrainers = [];
        state.status = "idle";
        state.error = null;
      });
  },
});

export const { cleanSearch } = SearchTrainersSlice.actions;
export default SearchTrainersSlice.reducer;
export const searchTrainersSelector = (state) =>
  state.searchTrainers.searchTrainers;
export const searchTrainersErrorSelector = (state) =>
  state.searchTrainers.error;
