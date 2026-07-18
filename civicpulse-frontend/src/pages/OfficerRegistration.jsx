import { useState } from "react";
import Navbar from "../components/Navbar";
import { registerOfficer } from "../services/officerService";

function OfficerRegistration() {

  const [officer, setOfficer] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
  });

  const handleChange = (e) => {
    setOfficer({
      ...officer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {

      await registerOfficer(officer);

      alert("Officer Registered Successfully");

      setOfficer({
        fullName: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
      });

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Registration Failed");
      }
    }
  };

  return (
    <>
      <Navbar />

      <div style={containerStyle}>

        <h2>Officer Registration</h2>

        <input
          name="fullName"
          placeholder="Full Name"
          value={officer.fullName}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          placeholder="Email"
          value={officer.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={officer.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="department"
          value={officer.department}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Department</option>
          <option>Water</option>
          <option>Electricity</option>
          <option>Road</option>
          <option>Health</option>
          <option>Sanitation</option>
        </select>

        <input
          name="designation"
          placeholder="Designation"
          value={officer.designation}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
          style={buttonStyle}
        >
          Register Officer
        </button>

      </div>
    </>
  );
}

const containerStyle = {
  maxWidth: "500px",
  margin: "40px auto",
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,.1)",
};

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

export default OfficerRegistration;