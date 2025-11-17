import { createSlice } from "@reduxjs/toolkit";

import { getAllTrainers } from "./trainersThunk";
import { logout } from "../user/userSlice";
import { apiStatus } from "../../constantVariables";

const initialState = {
  trainers: [],
  status: apiStatus.start,
  error: null,
};

const trainersSlice = createSlice({
  name: "trainers",
  initialState,
  reducers: {
    clean: (state) => {
      state.trainers = [];
      state.status = apiStatus.start;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTrainers.pending, (state) => {
        state.status = apiStatus.pending;
      })
      .addCase(getAllTrainers.fulfilled, (state, action) => {
        state.status = apiStatus.fulfilled;
        state.trainers = action.payload;
      })
      .addCase(getAllTrainers.rejected, (state, action) => {
        state.status = apiStatus.rejected;
        state.error = action.error.message;
      })

      .addCase(logout, () => initialState);
  },
});

export const { clean } = trainersSlice.actions;

export default trainersSlice.reducer;

export const trainersSelector = (state) => state.trainers.trainers;
