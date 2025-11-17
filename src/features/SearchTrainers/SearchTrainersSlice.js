import { createSlice } from "@reduxjs/toolkit";

import { getTrainersBySearch } from "./SearchTrainersThunk";
import { logout } from "../user/userSlice";
import { apiStatus } from "../../constantVariables";

const initialState = {
  searchTrainers: [],
  status: apiStatus.start,
  error: null,
};

const SearchTrainersSlice = createSlice({
  name: "SearchTrainers",
  initialState,
  reducers: {
    cleanSearch: (state) => {
      state.searchTrainers = [];
      state.status = apiStatus.start;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrainersBySearch.pending, (state) => {
        state.status = apiStatus.pending;
      })
      .addCase(getTrainersBySearch.fulfilled, (state, action) => {
        state.status = apiStatus.fulfilled;
        state.searchTrainers = action.payload;
      })
      .addCase(getTrainersBySearch.rejected, (state, action) => {
        state.status = apiStatus.rejected;
        state.error = action.error.message;
      })

      .addCase(logout, () => initialState);
  },
});

export const { cleanSearch } = SearchTrainersSlice.actions;

export default SearchTrainersSlice.reducer;

export const searchTrainersSelector = (state) =>
  state.searchTrainers.searchTrainers;
export const searchTrainersErrorSelector = (state) =>
  state.searchTrainers.error;
