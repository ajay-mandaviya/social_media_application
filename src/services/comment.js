import axios from "axios";
export const addPostCommentAPi = (postId, commentData, token) => {
  return axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const editPostCommentAPi = (postId, commentId, commentData, token) => {
  return axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deletePostCommentAPi = (postId, commentId, token) => {
  return axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: {
      authorization: token,
    },
  });
};
