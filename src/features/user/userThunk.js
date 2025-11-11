import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/trainees/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    return await res.json();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const signup = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/trainees/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("signup failed");
      }

      return res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
