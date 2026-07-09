import api from "../api/axios";

export const registerCitizen = async (citizen) => {
  const response = await api.post("/citizens", citizen);
  return response.data;
};

export const getAllCitizens = async () => {
  const response = await api.get("/citizens");
  return response.data;
};