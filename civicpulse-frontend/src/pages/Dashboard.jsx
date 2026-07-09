import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "#f4f7fc",
          padding: "40px",
        }}
      >
        <h1
          style={{
            color: "#1565C0",
            marginBottom: "10px",
          }}
        >
          🏛 CivicPulse Nexus Dashboard
        </h1>

        <p
          style={{
            color: "#555",
            marginBottom: "35px",
          }}
        >
          Cloud-Native Smart Governance & Citizen Services Platform
        </p>

        {/* Dashboard Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3>👤 Citizens</h3>
            <h1>0</h1>
            <p>Total Registered Citizens</p>
          </div>

          <div style={cardStyle}>
            <h3>📋 Grievances</h3>
            <h1>0</h1>
            <p>Total Complaints</p>
          </div>

          <div style={cardStyle}>
            <h3>✅ Resolved</h3>
            <h1>0</h1>
            <p>Resolved Complaints</p>
          </div>

          <div style={cardStyle}>
            <h3>⚠ Pending</h3>
            <h1>0</h1>
            <p>Pending Complaints</p>
          </div>
        </div>

        {/* Quick Actions */}

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <h2>Quick Actions</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Link to="/citizen/register">
              <button style={buttonStyle}>
                👤 Register Citizen
              </button>
            </Link>

            <Link to="/citizens">
              <button style={buttonStyle}>
                📄 View Citizens
              </button>
            </Link>

            <Link to="/grievance/register">
              <button style={buttonStyle}>
                📋 Register Grievance
              </button>
            </Link>

            <Link to="/grievances">
              <button style={buttonStyle}>
                📑 View Grievances
              </button>
            </Link>
          </div>
        </div>

       {/* Quick Access */}

<div
  style={{
    marginTop: "50px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,.1)",
  }}
>
  <h2>Quick Access</h2>

  <p style={{ color: "#555" }}>
    Use the options below to manage citizens and grievances.
  </p>

  <div
    style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "25px",
    }}
  >
    <Link to="/citizen/register">
      <button style={buttonStyle}>➕ Add Citizen</button>
    </Link>

    <Link to="/citizens">
      <button style={buttonStyle}>👥 View Citizens</button>
    </Link>

    <Link to="/grievance/register">
      <button style={buttonStyle}>📝 Add Grievance</button>
    </Link>

    <Link to="/grievances">
      <button style={buttonStyle}>📋 View Grievances</button>
    </Link>
  </div>
</div>
      </div>
    </>
  );
}

const cardStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 5px 20px rgba(0,0,0,.1)",
  textAlign: "center",
};

const buttonStyle = {
  padding: "15px 25px",
  border: "none",
  background: "#1565C0",
  color: "white",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Dashboard;