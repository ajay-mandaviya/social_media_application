import axios from "axios";

export const getAllPostApi = () => {
  return axios.get("/api/posts");
};

export const getUserPostService = (userName) => {

  console.log("getUserPostService" , userName);


  return axios.get(`/api/posts/user/${userName}`);
};
