import { useState } from "react";
import Navbar from "../components/Navbar";
import { registerGrievance } from "../services/grievanceService";

function RegisterGrievance() {
  const [grievance, setGrievance] = useState({
    citizenId: "",
    department: "",
    category: "",
    title: "",
    description: "",
    status: "OPEN",
  });

  const categories = {
    Water: [
      "Water Leakage",
      "No Water Supply",
      "Pipeline Burst",
      "Low Water Pressure",
    ],
    Electricity: [
      "Power Cut",
      "Street Light",
      "Transformer Issue",
      "Electric Pole Damage",
    ],
    Sanitation: [
      "Garbage Collection",
      "Drain Overflow",
      "Public Toilet",
    ],
    Roads: [
      "Potholes",
      "Road Damage",
      "Footpath Damage",
    ],
    Drainage: [
      "Blocked Drain",
      "Water Logging",
    ],
    Healthcare: [
      "Hospital Complaint",
      "Ambulance Delay",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGrievance((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "department" && { category: "" }),
    }));
  };

  const handleSubmit = async () => {
    try {
      await registerGrievance(grievance);

      alert("Grievance Registered Successfully");

      setGrievance({
        citizenId: "",
        department: "",
        category: "",
        title: "",
        description: "",
        status: "OPEN",
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data ||
        "Failed to Register Grievance"
      );
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

        <select
          name="department"
          value={grievance.department}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Department</option>
          <option value="Water">Water</option>
          <option value="Electricity">Electricity</option>
          <option value="Sanitation">Sanitation</option>
          <option value="Roads">Roads</option>
          <option value="Drainage">Drainage</option>
          <option value="Healthcare">Healthcare</option>
        </select>

        <select
          name="category"
          value={grievance.category}
          onChange={handleChange}
          style={inputStyle}
          disabled={!grievance.department}
        >
          <option value="">Select Complaint Type</option>

          {(categories[grievance.department] || []).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

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
  borderRadius: "5px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#1565C0",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default RegisterGrievance;