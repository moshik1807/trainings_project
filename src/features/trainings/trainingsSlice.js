import { createSlice } from "@reduxjs/toolkit";

import {
  getTrainingsById,
  createTraining,
  deleteTraining,
} from "./trainingsThunk";
import { logout } from "../user/userSlice";
import { API_STATUS } from "../../constantVariables";
import { enterTraining } from "../../utils";

const initialState = {
  trainings: [],
  status: API_STATUS.start,
  error: null,
};

const trainingsSlice = createSlice({
  name: "trainings",
  initialState,
  reducers: {
    CleanError: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrainingsById.pending, (state) => {
        state.status = API_STATUS.pending;
      })
      .addCase(getTrainingsById.fulfilled, (state, action) => {
        state.status = API_STATUS.fulfilled;
        state.trainings = action.payload;
      })
      .addCase(getTrainingsById.rejected, (state, action) => {
        state.status = API_STATUS.rejected;
        state.error = action.error.message;
      })

      .addCase(createTraining.pending, (state) => {
        state.status = API_STATUS.pending;
      })
      .addCase(createTraining.fulfilled, (state, action) => {
        state.status = API_STATUS.fulfilled;
        state.trainings = enterTraining(state.trainings, action.payload);
      })
      .addCase(createTraining.rejected, (state, action) => {
        state.status = API_STATUS.rejected;
        state.error = action.payload || action.error.message;
      })

      .addCase(deleteTraining.pending, (state) => {
        state.status = API_STATUS.pending;
      })
      .addCase(deleteTraining.fulfilled, (state, action) => {
        state.status = API_STATUS.fulfilled;
        state.trainings = state.trainings.filter(
          ({ id }) => id !== parseInt(action.payload)
        );
      })
      .addCase(deleteTraining.rejected, (state, action) => {
        state.status = API_STATUS.rejected;
        state.error = action.error.message;
      })

      .addCase(logout, () => initialState);
  },
});



export const { CleanError } = trainingsSlice.actions;

export default trainingsSlice.reducer;

export const trainingsSelector = (state) => state.trainings.trainings;
export const traininssErrorSelector = (state) => state.trainings.error;
