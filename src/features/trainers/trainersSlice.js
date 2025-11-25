import { createSlice } from "@reduxjs/toolkit";

import { getAllTrainers } from "./trainersThunk";
import { logout } from "../user/userSlice";
import { API_STATUS } from "../../constantVariables";

const initialState = {
  trainers: [],
  status: API_STATUS.start,
  error: null,
};

const trainersSlice = createSlice({
  name: "trainers",
  initialState,
  reducers: {
    clean: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTrainers.pending, (state) => {
        state.status = API_STATUS.pending;
      })
      .addCase(getAllTrainers.fulfilled, (state, action) => {
        state.status = API_STATUS.fulfilled;
        state.trainers = action.payload;
      })
      .addCase(getAllTrainers.rejected, (state, action) => {
        state.status = API_STATUS.rejected;
        state.error = action.error.message;
      })

      .addCase(logout, () => initialState);
  },
});

export const { clean } = trainersSlice.actions;

export default trainersSlice.reducer;

export const trainersSelector = (state) => state.trainers.trainers;
