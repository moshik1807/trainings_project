import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTrainers = createAsyncThunk(
  "trainers/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/trainers/readAll");
      if (!res.ok) throw new Error("Failed to fetch trainers");
      const data = await res.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
