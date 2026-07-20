import api from "../api/axios";

export const getAllCertificates = async () => {
    const response = await api.get("/certificates");
    return response.data;
};

export const getCertificateById = async (id) => {
    const response = await api.get(`/certificates/${id}`);
    return response.data;
};

export const downloadCertificate = (id) => {
    window.open(`http://localhost:8089/certificates/${id}/download`, "_blank");
};

export const verifyCertificate = async (certificateNumber) => {
    const response = await api.get(`/certificates/verify/${certificateNumber}`);
    return response.data;
};