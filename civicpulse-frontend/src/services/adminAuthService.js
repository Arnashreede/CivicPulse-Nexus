import axios from "axios";

const API = "http://localhost:8083/auth/login";

export const adminLogin = async (username, password) => {
  const response = await axios.post(API, {
    username,
    password,
  });

  return response.data;
};