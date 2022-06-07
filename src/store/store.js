import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import PostModaSlice from "../features/Home/PostModaSlice";
import postSlice from "../features/Home/postSlice";
import userProfileSlice from "../features/profile/userProfileSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    authReducer: authReducer,
    post: postSlice,
    userProfile: userProfileSlice,
    postModal: PostModaSlice,
  },
});
