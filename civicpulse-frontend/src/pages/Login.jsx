import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { login } from "../services/authService";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const data = await login(email, password);
console.log("LOGIN RESPONSE:", data);
      localStorage.setItem("token", data.token);
localStorage.setItem("role", data.role);
localStorage.setItem("email", data.email);
localStorage.setItem("fullName", data.fullName);
localStorage.setItem("citizenId", data.citizenId);

      alert("Login Successful");

      if (data.role === "ADMIN" || data.role === "SUPER_ADMIN") {
        navigate("/dashboard");
      } else if (data.role === "OFFICER") {
        navigate("/officer-dashboard");
      } else if (data.role === "CITIZEN") {
        navigate("/citizen-dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      console.error(error);
      alert("Invalid Email or Password");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          background: "#f4f7fc",
        }}
      >
        <div
          style={{
            width: "420px",
            background: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,.15)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#1565C0",
              marginBottom: "30px",
            }}
          >
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={handleLogin}
            style={buttonStyle}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "20px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#1565C0",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "18px",
};

export default Login;