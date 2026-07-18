import grievanceApi from "../api/grievanceAxios";

export const getOfficerGrievances = async (officerName) => {
  const response = await grievanceApi.get(`/grievances/officer/${officerName}`);
  return response.data;
};