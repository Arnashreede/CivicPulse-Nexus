import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin } from "../services/adminAuthService";

function CitizenLogin() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const data = await adminLogin(
        login.username,
        login.password
      );

      console.log("========== LOGIN RESPONSE ==========");
      console.log(data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("userId", data.id);
      localStorage.setItem("citizenId", data.id); // <-- Important
      localStorage.setItem("username", data.username);

      console.log("Stored citizenId:", localStorage.getItem("citizenId"));
      console.log("Stored userId:", localStorage.getItem("userId"));

      if (data.role === "CITIZEN") {
        navigate("/citizen-dashboard");
      } else {
        alert("Please login through the Citizen Portal.");
      }

    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid Username or Password");
    }
  };

  return (
    <div style={page}>
      <div style={leftPanel}>
        <h1>👤 Citizen Portal</h1>

        <h2>CivicPulse Nexus</h2>

        <p>
          Register complaints, track complaint status,
          and stay updated on issue resolution.
        </p>
      </div>

      <div style={rightPanel}>
        <div style={card}>
          <h2>Citizen Login</h2>

          <input
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
            style={input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
            style={input}
          />

          <button
            style={button}
            onClick={handleLogin}
          >
            Login
          </button>

          <p style={{ textAlign: "center", marginTop: "20px" }}>
            New Citizen?{" "}
            <Link to="/citizen/register">
              Register Here
            </Link>
          </p>

          <Link
            to="/"
            style={backLink}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

const page = {
  display: "flex",
  minHeight: "100vh",
};

const leftPanel = {
  flex: 1,
  background: "linear-gradient(135deg,#2E7D32,#66BB6A)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "60px",
};

const rightPanel = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#F5F7FA",
};

const card = {
  width: "420px",
  background: "white",
  padding: "40px",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,.15)",
};

const input = {
  width: "100%",
  padding: "14px",
  marginTop: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const button = {
  width: "100%",
  padding: "14px",
  marginTop: "25px",
  background: "#2E7D32",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

const backLink = {
  display: "block",
  marginTop: "20px",
  textAlign: "center",
  textDecoration: "none",
  color: "#2E7D32",
};

export default CitizenLogin;