import axios from "axios";

const API = "http://localhost:8082";

export const getComplaintById = async (id) => {
    const response = await axios.get(`${API}/grievances/${id}`);
    return response.data;
};