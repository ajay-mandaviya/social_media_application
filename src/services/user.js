import axios from "axios";

export const getAllUserApi = () => {
  return axios.get("/api/users");
};

export const getUser = () => {};
