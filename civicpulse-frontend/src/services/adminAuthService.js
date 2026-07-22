import axios from "axios";

const API = "http://localhost:8083/auth/login";

export const adminLogin = async (email, password) => {
  const response = await axios.post(API, {
    email,
    password,
  });

  return response.data;
};