import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { followUserApi, getAllUserApi, unfollowUserApi } from "../../services";
import { updateUser } from "../auth/authSlice";
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

export const followUser = createAsyncThunk(
  "user/follow",
  async ({ id, dispatch }, thunkAPI) => {
    try {
      console.log("dispatch", dispatch);
      const token = localStorage.getItem("token");
      const response = await followUserApi(id, token);
      dispatch(updateUser({ updateUser: response.data.user }));
      return response.data;
    } catch (error) {
      console.log("follow error", error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "user/unfollow",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await unfollowUserApi(id, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
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
    [followUser.pending]: (state, action) => {},
    [followUser.fulfilled]: (state, action) => {
      state.allUsers = [...state.allUsers].map((currUser) =>
        currUser._id === action.payload.followUser._id
          ? action.payload.followUser
          : currUser
      );
    },
    [followUser.rejected]: (state, action) => {},
  },
});

export default userSliceProfile.reducer;
