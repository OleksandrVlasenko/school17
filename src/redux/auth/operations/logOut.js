import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, instance } from "api/instance";

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
