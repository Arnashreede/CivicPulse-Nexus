import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
    getNotifications,
    markAsRead,
} from "../services/notificationService";

function Notifications() {

    const [notifications, setNotifications] = useState([]);

    const citizenId = localStorage.getItem("userId");

    useEffect(() => {
        loadNotifications();
    }, []);

    const loadNotifications = async () => {
        try {
            const data = await getNotifications(citizenId);
            setNotifications(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRead = async (id) => {
        try {
            await markAsRead(id);
            await loadNotifications();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Sidebar />

            <div style={{ marginLeft: "270px", padding: "20px" }}>
                <Header />
            </div>

            <div style={container}>
                <h1>🔔 Notifications</h1>

                {notifications.length === 0 ? (
                    <p>No notifications found.</p>
                ) : (
                    notifications.map((notification) => (
                        <div
                            key={notification.id}
                            style={{
                                ...card,
                                background: notification.read ? "#E8F5E9" : "white",
                            }}
                        >
                            <h3>{notification.title}</h3>

                            <p>{notification.message}</p>

                            {!notification.read ? (
                                <button
                                    style={button}
                                    onClick={() => handleRead(notification.id)}
                                >
                                    Mark as Read
                                </button>
                            ) : (
                                <p
                                    style={{
                                        color: "green",
                                        fontWeight: "bold",
                                    }}
                                >
                                    ✅ Read
                                </p>
                            )}

                            <br />

                            <small>
                                {new Date(notification.createdAt).toLocaleString()}
                            </small>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

const container = {
    marginLeft: "270px",
    padding: "40px",
    background: "#F4F6F9",
    minHeight: "100vh",
};

const card = {
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,.1)",
};

const button = {
    marginTop: "15px",
    padding: "10px 18px",
    background: "#1565C0",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
};

export default Notifications;