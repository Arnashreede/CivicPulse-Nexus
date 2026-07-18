// src/services/reportService.js

import api from "../api/axios";

export const getDashboard = async () => {
    const response = await api.get("http://localhost:8084/reports/dashboard");
    return response.data;
};