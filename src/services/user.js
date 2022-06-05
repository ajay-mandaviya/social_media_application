import axios from "axios";

export const getAllUserApi = () => {
  return axios.get("/api/users");
};

export const getUser = () => {};

export const followUserApi = (followUserId, token) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};
export const unfollowUserApi = (followUserId, token) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

    export const editUserApi = (token, userData) => {
    return axios.post(
      "/api/users/edit",
      {
        userData,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };