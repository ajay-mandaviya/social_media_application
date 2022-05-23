import axios from "axios";

export const loginWithUserApi = (user) => {
  return axios.post("api/auth/login", user);
};

export const signupUserApi = (newUser) => {
  return axios.post("api/auth/signup", newUser);
};
