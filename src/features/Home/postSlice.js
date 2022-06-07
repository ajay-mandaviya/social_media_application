import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  getAllUserApi,
  getUserPostService,
  addUserPostApi,
  editUserPostApi,
  deletePostApi,
} from "../../services";
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
      return respone.data;
    } catch (error) {
      console.log("get error while get user post", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createPostThunk = createAsyncThunk(
  "post/createPost",
  async (post, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await addUserPostApi(token, post);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editUserPostThunk = createAsyncThunk(
  "post/editPost",
  async (post, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const response = await editUserPostApi(token, post);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePostThunk = createAsyncThunk(
  "post/deltePost",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const respone = await deletePostApi(token, postId);
      console.log("responseis delete", respone);
      return respone.data;
    } catch (error) {
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
    [createPostThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [createPostThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPosts = action.payload.posts;
    },
    [createPostThunk.rejected]: (state, action) => {
      state.loading = false;
    },
    [editUserPostThunk.pending]: (state, action) => {},
    [editUserPostThunk.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [editUserPostThunk.rejected]: (state, action) => {},

    [deletePostThunk.pending]: (state, action) => {},
    [deletePostThunk.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [deletePostThunk.rejected]: (state, action) => {},
  },
});

export default postSlice.reducer;
export const useUserPost = () => useSelector((state) => state.post);
