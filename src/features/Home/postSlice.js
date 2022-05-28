import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getAllUserApi, getUserPostService } from "../../services";
import { getAllPostApi } from "../../services/post";

export const getAllPost = createAsyncThunk(
  "post/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await getAllPostApi();

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserPostThunk = createAsyncThunk(
  "post/singleUserPost",
  async (userName, thunkAPI) => {
    try {
      const respone = await getUserPostService(userName);
      console.log("repsone getUserPost", respone);
      return respone.data;
    } catch (error) {
      console.log("get error while get user post", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    allPosts: [],
    userPosts: [],
  },
  reducers: {},
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.loading = true;
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPosts = action.payload.posts;
    },
    [getAllPost.rejected]: (state) => {
      state.loading = false;
    },
    [getUserPostThunk.pending]: (state) => {
      state.loading = true;
    },
    [getUserPostThunk.fulfilled]: (state, action) => {
      state.userPosts = action.payload.posts;
      state.loading = false;
    },
    [getUserPostThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
export const useUserPost = () => useSelector((state) => state.post);
