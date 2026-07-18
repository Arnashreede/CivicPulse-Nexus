import notificationApi from "../api/notificationAxios";

export const getNotifications = async (citizenId) => {
  const response = await notificationApi.get(`/notifications/${citizenId}`);
  return response.data;
};

export const markAsRead = async (id) => {
  const response = await notificationApi.put(`/notifications/${id}/read`);
  return response.data;
};

