import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={sidebar}>

      <h2 style={logo}>🏛 CivicPulse</h2>

      <hr style={{ borderColor: "#ffffff33" }} />

      {/* ADMIN MENU */}
      {role === "ADMIN" && (
        <>
          <Link style={link} to="/dashboard">
            📊 Dashboard
          </Link>

          <Link style={link} to="/citizens">
            👤 Citizens
          </Link>

          <Link style={link} to="/officers">
            👮 Officers
          </Link>

          <Link style={link} to="/grievances">
            📋 Complaints
          </Link>

          <Link style={link} to="/assign-officer">
            📌 Assign Officer
          </Link>

          <Link style={link} to="/reports">
            📊 Reports
          </Link>
        </>
      )}

      {/* OFFICER MENU */}
      {role === "OFFICER" && (
        <>
          <Link style={link} to="/officer-dashboard">
            📊 Dashboard
          </Link>

          <Link style={link} to="/grievances">
            📋 Assigned Complaints
          </Link>

          <Link style={link} to="/officer/applications">
            📑 Certificate Applications
          </Link>
        </>
      )}

      {/* CITIZEN MENU */}
      {role === "CITIZEN" && (
        <>
          <Link style={link} to="/citizen-dashboard">
            🏠 Dashboard
          </Link>

          <Link style={link} to="/grievance/register">
            📝 Register Complaint
          </Link>

          <Link style={link} to="/track-complaint">
            📍 Track Complaint
          </Link>

          <Link style={link} to="/citizen/application">
            📑 Apply Certificate / Permit
          </Link>

          <Link style={link} to="/my-applications">
            📄 My Applications
          </Link>

          <Link style={link} to="/notifications">
            🔔 Notifications
          </Link>
        </>
      )}

      <button style={logoutBtn} onClick={logout}>
        🚪 Logout
      </button>

    </div>
  );
}

const sidebar = {
  width: "260px",
  boxSizing: "border-box",
  height: "100vh",
  position: "fixed",
  left: 0,
  top: 0,
  background: "#0D47A1",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
};

const logo = {
  color: "white",
  textAlign: "center",
};

const link = {
  color: "white",
  textDecoration: "none",
  marginTop: "18px",
  fontSize: "18px",
};

const logoutBtn = {
  marginTop: "auto",
  padding: "12px",
  background: "#E53935",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Sidebar;