import { useState } from "react";
import Navbar from "../components/Navbar";
import { registerGrievance } from "../services/grievanceService";

function RegisterGrievance() {
  const [grievance, setGrievance] = useState({
    citizenId: "",
    title: "",
    description: "",
    category: "",
    priority: "",
    status: "OPEN",
  });

  const handleChange = (e) => {
    setGrievance({
      ...grievance,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await registerGrievance(grievance);

      alert("Grievance Registered Successfully");

      setGrievance({
        citizenId: "",
        title: "",
        description: "",
        category: "",
        priority: "",
        status: "OPEN",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to Register Grievance");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,.1)",
        }}
      >
        <h2>Register Grievance</h2>

        <input
          name="citizenId"
          placeholder="Citizen ID"
          value={grievance.citizenId}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="title"
          placeholder="Title"
          value={grievance.title}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={grievance.description}
          onChange={handleChange}
          style={{ ...inputStyle, height: "100px" }}
        />

        <input
          name="category"
          placeholder="Category"
          value={grievance.category}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="priority"
          placeholder="Priority (HIGH/MEDIUM/LOW)"
          value={grievance.priority}
          onChange={handleChange}
          style={inputStyle}
        />

        <button onClick={handleSubmit} style={buttonStyle}>
          Register Grievance
        </button>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#1565C0",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default RegisterGrievance;