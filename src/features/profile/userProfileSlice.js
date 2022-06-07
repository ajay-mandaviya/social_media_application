import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { followUserApi, getAllUserApi, unfollowUserApi } from "../../services";
import { updateUser } from "../auth/authSlice";
export const getAllUserThunk = createAsyncThunk(
  "post/getAllUser",
  async (_, thunkApi) => {
    try {
      const response = await getAllUserApi();
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
      const token = localStorage.getItem("token");
      const response = await followUserApi(id, token);
      dispatch(updateUser(response.data.user));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "user/unfollow",
  async ({ id, dispatch }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await unfollowUserApi(id, token);
      dispatch(updateUser(response.data.user));
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
    isModalOpen: false,
  },
  reducers: {
    openEditModal: (state) => {
      state.isModalOpen = true;
    },
    closeEditModal: (state) => {
      state.isModalOpen = false;
    },
  },
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
    [followUser.pending]: (state, action) => {
      state.loading = true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.allUsers = [...state.allUsers].map((currUser) =>
        currUser._id === action.payload.followUser._id
          ? action.payload.followUser
          : currUser
      );
      state.loading = false;
    },
    [followUser.rejected]: (state, action) => {
      state.loading = false;
    },
    [unfollowUser.pending]: (state) => {
      state.loading = true;
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.allUsers = [...state.allUsers].map((currUser) =>
        currUser._id === action.payload.followUser._id
          ? action.payload.followUser
          : currUser
      );
      state.loading = false;
    },
    [unfollowUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { openEditModal, closeEditModal } = userSliceProfile.actions;
export default userSliceProfile.reducer;
