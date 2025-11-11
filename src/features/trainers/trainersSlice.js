import { createSlice } from "@reduxjs/toolkit";

import { getAllTrainers } from "./trainersThunk";
import { logout } from "../user/userSlice";

const initialState = {
  trainers: [],
  status: "idle",
  error: null,
};

const trainersSlice = createSlice({
  name: "trainers",
  initialState,
  reducers: {
    clean: (state) => {
      state.trainers = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTrainers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllTrainers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trainers = action.payload;
      })
      .addCase(getAllTrainers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(logout, (state) => {
        state.trainers = [];
        state.status = "idle";
        state.error = null;
      });
  },
});

export const { clean } = trainersSlice.actions;
export default trainersSlice.reducer;
export const trainersSelector = (state) => state.trainers.trainers;
