import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTrainersBySearch = createAsyncThunk(
  "trainers/getBySearch",
  async ({city,trainingType}, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/trainers/readBySearch/${city}/${trainingType}`);
      const result = await res.json();
      if (!res.ok) {
        return thunkAPI.rejectWithValue(result.message);
      }
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
