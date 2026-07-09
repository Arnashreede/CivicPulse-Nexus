import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#1565C0",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>
        🏛 CivicPulse Nexus
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        {token && (
          <>
            <Link to="/dashboard" style={linkStyle}>
              Dashboard
            </Link>

            <Link to="/citizen/register" style={linkStyle}>
              Register Citizen
            </Link>

            <Link to="/citizens" style={linkStyle}>
              View Citizens
            </Link>

            <Link to="/grievance/register" style={linkStyle}>
              Register Grievance
            </Link>

            <Link to="/grievances" style={linkStyle}>
              View Grievances
            </Link>

            <button
              onClick={logout}
              style={{
                background: "#d32f2f",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}

        {!token && (
          <>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;