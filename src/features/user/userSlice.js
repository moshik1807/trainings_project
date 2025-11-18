import { createSlice } from "@reduxjs/toolkit";

import { getUserById } from "./userThunk";
import { API_STATUS } from "../../constantVariables";

const initialState = {
  user: null,
  status: API_STATUS.start,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.status = API_STATUS.pending;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = API_STATUS.fulfilled;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = API_STATUS.rejected;
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state) => state.user.user;
export const userIdSelector = (state) => state.user.user?.id;
