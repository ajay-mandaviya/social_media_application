import axios from "axios";

export const getAllBookMarksApi = (token) => {
  return axios.get("/api/users/bookmark", {
    headers: {
      authorization: token,
    },
  });
};

export const addBookMarkPostApi = (token, postId) => {
  return axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const removeBookMarkApi = (token, postId) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
