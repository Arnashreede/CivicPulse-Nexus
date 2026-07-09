import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f4f7fc",
        }}
      >
        <div
          style={{
            width: "75%",
            background: "white",
            borderRadius: "15px",
            padding: "50px",
            textAlign: "center",
            boxShadow: "0 5px 20px rgba(0,0,0,.1)",
          }}
        >
          <h1
            style={{
              fontSize: "45px",
              color: "#1565C0",
              marginBottom: "20px",
            }}
          >
            🏛 CivicPulse Nexus
          </h1>

          <h2
            style={{
              color: "#444",
            }}
          >
            Cloud-Native Smart Governance & Citizen Services Platform
          </h2>

         

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <Link to="/login">
              <button style={buttonStyle}>
                Login
              </button>
            </Link>

            <Link to="/dashboard">
              <button
                style={{
                  ...buttonStyle,
                  background: "#2e7d32",
                }}
              >
                Dashboard
              </button>
            </Link>
          </div>

          <div
            style={{
              marginTop: "60px",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>
              <h3>👤 Citizen Management</h3>
              <p>Register and manage citizens.</p>
            </div>

            <div style={cardStyle}>
              <h3>📋 Grievance Management</h3>
              <p>Register and track complaints.</p>
            </div>

            <div style={cardStyle}>
              <h3>📊 Reporting Dashboard</h3>
              <p>View reports and analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const buttonStyle = {
  padding: "12px 30px",
  background: "#1565C0",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

const cardStyle = {
  background: "#f8f9fa",
  padding: "20px",
  borderRadius: "10px",
};

export default Home;