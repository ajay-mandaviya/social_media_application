import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  getUserPostService,
  addUserPostApi,
  editUserPostApi,
  deletePostApi,
  getAllBookMarksApi,
  addBookMarkPostApi,
  removeBookMarkApi,
  getSinglePostApi,
  addPostCommentAPi,
  editPostCommentAPi,
  deletePostCommentAPi,
} from "../../services";
import {
  disLikePostApi,
  getAllPostApi,
  likePostApi,
} from "../../services/post";

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

export const likeUserPost = createAsyncThunk(
  "post/likePost",
  async (postID, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const respone = await likePostApi(token, postID);
      return respone.data;
    } catch (error) {
      console.log("werro in thunk ", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const dislikeUserPost = createAsyncThunk(
  "post/disLikePost",
  async (postId, thunkAPI) => {
    try {
      console.log("dislikeUserPost", postId);
      const token = localStorage.getItem("token");
      const respone = await disLikePostApi(token, postId);
      console.log("dislikeUserPost", respone);
      return respone.data;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getBookMarks = createAsyncThunk(
  "user/getBookMark",
  async (token, thunkAPI) => {
    try {
      const response = await getAllBookMarksApi(token);
      console.log("book marks", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addBookMark = createAsyncThunk(
  "post/addBookMark",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const respone = await addBookMarkPostApi(token, postId);

      return respone.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeBookMark = createAsyncThunk(
  "post/removeBookMark",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const respone = await removeBookMarkApi(token, postId);

      return respone.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "comment/addComment",
  async ({ postId, commentData, token }, thunkAPI) => {
    try {
      const respone = await addPostCommentAPi(postId, commentData, token);
      return respone.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editComment = createAsyncThunk(
  "comment/editComment",
  async ({ postId, commentId, commentData, token }, thunkAPI) => {
    console.log("postId", postId, "commentData", commentData, "rtoken", token);
    try {
      const response = await editPostCommentAPi(
        postId,
        commentId,
        commentData,
        token
      );
      console.log("edit coomet response", response);
      return response.data;
    } catch (error) {
      console.error(error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async ({ postId, commentId, token }, thunkAPI) => {
    try {
      const respone = await deletePostCommentAPi(postId, commentId, token);
      return respone.data;
    } catch (error) {
      console.error(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getsinglePost = createAsyncThunk(
  "post/singlePost",
  async (id, thunkAPI) => {
    try {
      const response = await getSinglePostApi(id);
      console.log("single psot", response.data);
      return response.data;
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
    bookmarks: [],
    post: null,
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
    // create
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
    // edit
    [editUserPostThunk.pending]: (state, action) => {},
    [editUserPostThunk.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [editUserPostThunk.rejected]: (state, action) => {},

    // delte post
    [deletePostThunk.pending]: (state, action) => {},
    [deletePostThunk.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [deletePostThunk.rejected]: (state, action) => {},
    // like
    [likeUserPost.pending]: (state, action) => {},
    [likeUserPost.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [likeUserPost.rejected]: (state, action) => {},
    // dislike
    [dislikeUserPost.pending]: () => {},
    [dislikeUserPost.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [dislikeUserPost.rejected]: () => {},
    [getBookMarks.pending]: (state) => {},
    [getBookMarks.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    },

    [getBookMarks.rejected]: (state) => {},

    [addBookMark.pending]: (state) => {},
    [addBookMark.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    },
    [addBookMark.rejected]: (state) => {},

    [removeBookMark.pending]: (state) => {},
    [removeBookMark.fulfilled]: (state, action) => {
      state.bookmarks = action.payload.bookmarks;
    },
    [removeBookMark.rejected]: (state) => {},
    // post
    [getsinglePost.pending]: (state) => {
      state.loading = true;
    },
    [getsinglePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload.post;
    },
    [getsinglePost.rejected]: (state, action) => {
      state.loading = false;
    },
    [addComment.pending]: (state) => {},
    [addComment.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [addComment.rejected]: (state) => {},
    [editComment.pending]: () => {},
    [editComment.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [editComment.rejected]: () => {},
    [deleteComment.pending]: () => {},
    [deleteComment.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [deleteComment.rejected]: () => {},
  },
});

export default postSlice.reducer;
export const useUserPost = () => useSelector((state) => state.post);
