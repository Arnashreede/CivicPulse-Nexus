import grievanceApi from "../api/grievanceAxios";

export const updateStatus = async (id, status) => {

    const response = await grievanceApi.put(
        `/grievances/${id}/status`,
        {
            status: status
        }
    );

    return response.data;
};