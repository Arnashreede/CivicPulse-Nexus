import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function CitizenDashboard() {

    const navigate = useNavigate();

    return (
        <>
            <Sidebar />
            <div style={{ marginLeft: "270px", padding: "20px" }}>
    <Header />
</div>

            <div style={container}>

                <h1>👤 Citizen Dashboard</h1>

                <p style={{ color: "#666" }}>
                    Welcome to CivicPulse Nexus Citizen Portal
                </p>

                <div style={cards}>

                    <div style={card}>
                        <h2>📋</h2>
                        <h3>Register Complaint</h3>

                        <button
                            style={button}
                            onClick={() => navigate("/grievance/register")}
                        >
                            Open
                        </button>
                    </div>

                    <div style={card}>
                        <h2>📄</h2>
                        <h3>My Complaints</h3>

                        <button
                            style={button}
                            onClick={() => navigate("/grievances")}
                        >
                            View
                        </button>
                    </div>

                    <div style={card}>
                        <h2>📍</h2>
                        <h3>Track Status</h3>

                        <button
                            style={button}
                            onClick={() => navigate("/grievances")}
                        >
                            Track
                        </button>
                    </div>

                    <div style={card}>
                        <h2>👤</h2>
                        <h3>My Profile</h3>

                        <button
                            style={button}
                        >
                            Coming Soon
                        </button>
                    </div>

                </div>

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

const cards = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginTop: "30px",
};

const card = {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,.1)",
};

const button = {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#1565C0",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
};

export default CitizenDashboard;