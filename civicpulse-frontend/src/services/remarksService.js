import grievanceApi from "../api/grievanceAxios";

export const updateRemarks = async (id, remarks) => {

    const response = await grievanceApi.put(
        `/grievances/${id}/remarks`,
        {
            remarks: remarks
        }
    );

    return response.data;
};