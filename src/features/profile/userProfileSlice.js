import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserApi } from "../../services";

export const getAllUserThunk = createAsyncThunk(
  "post/getAllUser",
  async (_, thunkApi) => {
    try {
      const response = await getAllUserApi();
      console.log("response all user", response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSliceProfile = createSlice({
  name: "userProfile",
  initialState: {
    allUsers: [],
    bookMark: [],
    loading: false,
    user: {},
  },
  reducers: {},
  extraReducers: {
    [getAllUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [getAllUserThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUsers = action.payload.users;
    },
    [getAllUserThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default userSliceProfile.reducer;
