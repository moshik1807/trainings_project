import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (token, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/trainees/readById", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) return thunkAPI.rejectWithValue("Failed to fetch user");

      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
