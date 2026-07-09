import grievanceApi from "../api/grievanceAxios";

export const registerGrievance = async (grievance) => {
  const response = await grievanceApi.post("/grievances", grievance);
  return response.data;
};

export const getAllGrievances = async () => {
  const response = await grievanceApi.get("/grievances");
  return response.data;
};