import citizenApi from "../api/citizenAxios";

export const registerCitizen = async (citizen) => {
  const response = await citizenApi.post("/citizens", citizen);
  return response.data;
};

export const getAllCitizens = async () => {
  const response = await citizenApi.get("/citizens");
  return response.data;
};