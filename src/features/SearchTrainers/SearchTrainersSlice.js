import { createSlice } from "@reduxjs/toolkit";

import { getTrainersBySearch } from "./SearchTrainersThunk";
import { logout } from "../user/userSlice";
import { API_STATUS } from "../../constantVariables";

const initialState = {
  searchTrainers: [],
  status: API_STATUS.start,
  error: null,
};

const SearchTrainersSlice = createSlice({
  name: "SearchTrainers",
  initialState,
  reducers: {
    cleanSearch:() => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrainersBySearch.pending, (state) => {
        state.status = API_STATUS.pending;
      })
      .addCase(getTrainersBySearch.fulfilled, (state, action) => {
        state.status = API_STATUS.fulfilled;
        state.searchTrainers = action.payload;
      })
      .addCase(getTrainersBySearch.rejected, (state, action) => {
        state.status = API_STATUS.rejected;
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
