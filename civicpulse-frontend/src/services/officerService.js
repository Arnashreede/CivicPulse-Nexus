import officerApi from "../api/officerAxios";

// Register Officer
export const registerOfficer = async (officer) => {
  const response = await officerApi.post("/officers", officer);
  return response.data;
};

// Get All Officers
export const getAllOfficers = async () => {
  const response = await officerApi.get("/officers");
  return response.data;
};

// Delete Officer
export const deleteOfficer = async (id) => {
  return await officerApi.delete(`/officers/${id}`);
};