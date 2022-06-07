import {
  addBookMarkPostApi,
  getAllBookMarksApi,
  removeBookMarkApi,
} from "./bookmarkApi";
import {
  addPostCommentAPi,
  deletePostCommentAPi,
  editPostCommentAPi,
} from "./comment";
import {
  addUserPostApi,
  deletePostApi,
  editUserPostApi,
  getUserPostService,
  getSinglePostApi,
} from "./post";
import { followUserApi, getAllUserApi, unfollowUserApi ,editUserApi } from "./user";

export { addPostCommentAPi, editPostCommentAPi, deletePostCommentAPi };
export { addUserPostApi, editUserPostApi, deletePostApi, getSinglePostApi };
export { getAllUserApi, getUserPostService };
export { signupUserApi } from "./auth";
export { loginWithUserApi } from "./auth";
export {
  getAllBookMarksApi,
  addBookMarkPostApi,
  removeBookMarkApi,
  followUserApi,
  unfollowUserApi,
  editUserApi
};
