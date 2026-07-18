import grievanceApi from "../api/grievanceAxios";

export const assignOfficer = async (id, data) => {

    const response = await grievanceApi.put(
        `/grievances/${id}/assign`,
        data
    );

    return response.data;
};