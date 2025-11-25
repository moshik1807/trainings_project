import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

export const getTrainingsById = createAsyncThunk(
  "trainings/getById",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/trainings/readById/${id}`);

      if (!res.ok) throw new Error("Failed to fetch trainings");

      const data = await res.json();

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTraining = createAsyncThunk(
  "trainings/delete",
  async ({ trainingId, userId }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:3000/trainings/delete/${trainingId}/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Failed to fetch delete");

      const data = await res.json();

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const createTraining = createAsyncThunk(
  "trainings/create",
  async (training, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/trainings/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(training),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      const data = await res.json();
      toast.success("Training added successfully!")
      return data.data;
    } catch (err) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
