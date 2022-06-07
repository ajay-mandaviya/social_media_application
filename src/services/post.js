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
  console.log("postData  editUserPostApi", postData);
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
  console.log("postdata deletePostApi", postId);
  return axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });
};
