import { createSlice } from "@reduxjs/toolkit";

import {
  getTrainingsById,
  createTraining,
  deleteTraining,
} from "./trainingsThunk";
import { logout } from "../user/userSlice";
import { apiStatus } from "../../constantVariables";

const initialState = {
  trainings: [],
  status: apiStatus.start,
  error: null,
};

const trainingsSlice = createSlice({
  name: "trainings",
  initialState,
  reducers: {
    cleanTrainings: (state) => {
      state.trainings = [];
      state.status = apiStatus.start;
      state.error = null;
    },
    CleanError: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrainingsById.pending, (state) => {
        state.status = apiStatus.pending;
      })
      .addCase(getTrainingsById.fulfilled, (state, action) => {
        state.status = apiStatus.fulfilled;
        state.trainings = action.payload;
      })
      .addCase(getTrainingsById.rejected, (state, action) => {
        state.status = apiStatus.rejected;
        state.error = action.error.message;
      })

      .addCase(createTraining.pending, (state) => {
        state.status = apiStatus.pending;
      })
      .addCase(createTraining.fulfilled, (state, action) => {
        state.status = apiStatus.fulfilled;
        state.trainings = enterTraining(state.trainings, action.payload);
      })
      .addCase(createTraining.rejected, (state, action) => {
        state.status = apiStatus.rejected;
        state.error = action.payload || action.error.message;
      })

      .addCase(deleteTraining.pending, (state) => {
        state.status = apiStatus.pending;
      })
      .addCase(deleteTraining.fulfilled, (state, action) => {
        state.status = apiStatus.fulfilled;
        state.trainings = state.trainings.filter(
          ({ id }) => id !== parseInt(action.payload)
        );
      })
      .addCase(deleteTraining.rejected, (state, action) => {
        state.status = apiStatus.rejected;
        state.error = action.error.message;
      })

      .addCase(logout, () => initialState);
  },
});

function enterTraining(trainings, training) {
  let start = 0;
  let end = trainings.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (
      new Date(`${trainings[middle].date}T${trainings[middle].time}`) <
      new Date(`${training.date}T${training.time}`)
    ) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  trainings.splice(start, 0, training);

  return trainings;
}

export const { cleanTrainings, CleanError } = trainingsSlice.actions;

export default trainingsSlice.reducer;

export const trainingsSelector = (state) => state.trainings.trainings;
export const traininssErrorSelector = (state) => state.trainings.error;
