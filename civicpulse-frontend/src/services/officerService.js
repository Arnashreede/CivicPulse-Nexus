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

// Get Officer By Username
export const getOfficerByUsername = async (username) => {
  const response = await officerApi.get(`/officers/username/${username}`);
  return response.data;
};
export const getOfficersByDepartment = async (department) => {
    const response = await officerApi.get(
        `/officers/department/${department}`
    );
    return response.data;
};