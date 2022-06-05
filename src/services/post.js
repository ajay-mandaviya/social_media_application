import axios from "axios";

export const getAllPostApi = () => {
  return axios.get("/api/posts");
};

export const getUserPostService = (userName) => {
  return axios.get(`/api/posts/user/${userName}`);
};

export const addUserPostApi = (token, postData) => {
  return axios.post(
    "/api/posts",
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const editUserPostApi = (token, postData) => {
  return axios.post(
    `/api/posts/edit/${postData?._id}`,
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deletePostApi = (token, postId) => {
  return axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });
};

export const likePostApi = (token, postId) => {
  return axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const disLikePostApi = (token, postID) => {
  return axios.post(
    `api/posts/dislike/${postID}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const getSinglePostApi = (postId) => {
  return axios.get(`/api/posts/${postId}`);
};
