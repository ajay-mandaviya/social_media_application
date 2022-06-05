import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { loginWithUserApi, signupUserApi, editUserApi } from "../../services";

export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const response = await loginWithUserApi(user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (newUser, thunkAPI) => {
    try {
      const response = await signupUserApi(newUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/editUser",
  async (updateUser, thunkAPI) => {
    try {
      console.log("updateUser", updateUser);
      const token = localStorage.getItem("token");
      const response = await editUserApi(token, updateUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [loginUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [loginUserThunk.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.user = payload.foundUser;
      localStorage.setItem("token", payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(payload.foundUser));
      state.loading = false;
    },
    [loginUserThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // signup
    [signupThunk.pending]: (state) => {
      state.loading = true;
    },
    [signupThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      localStorage.setItem("token", payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(payload.createdUser));
      state.token = payload.encodedToken;
      state.user = payload.createdUser;
    },
    [signupThunk.rejected]: (state, action) => {
      state.loading = false;
    },
    [updateUser.pending]: (state, action) => {},
    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
    [updateUser.rejected]: (state, action) => {},
  },
});

export default authSlice.reducer;
export const useAuth = () => useSelector((state) => state.authReducer);
