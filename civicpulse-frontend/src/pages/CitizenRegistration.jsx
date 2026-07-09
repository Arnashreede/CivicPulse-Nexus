import { useState } from "react";
import Navbar from "../components/Navbar";
import { registerCitizen } from "../services/citizenService";
function CitizenRegistration() {
  const [citizen, setCitizen] = useState({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  aadhaarNumber: "",
});

  const handleChange = (e) => {
    setCitizen({
      ...citizen,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

  try {

    await registerCitizen(citizen);

    alert("Citizen Registered Successfully");

    setCitizen({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      aadhaarNumber: "",
    });

  } catch (error) {

    console.error(error);

    alert("Registration Failed");
  }
};
  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,.1)",
        }}
      >
        <h2>Register Citizen</h2>

       <input
  name="fullName"
  placeholder="Full Name"
  value={citizen.fullName}
  onChange={handleChange}
  style={inputStyle}
/>

<input
  name="email"
  placeholder="Email"
  value={citizen.email}
  onChange={handleChange}
  style={inputStyle}
/>

<input
  name="phone"
  placeholder="Phone"
  value={citizen.phone}
  onChange={handleChange}
  style={inputStyle}
/>

<input
  name="aadhaarNumber"
  placeholder="Aadhaar Number"
  value={citizen.aadhaarNumber}
  onChange={handleChange}
  style={inputStyle}
/>

<textarea
  name="address"
  placeholder="Address"
  value={citizen.address}
  onChange={handleChange}
  style={{ ...inputStyle, height: "80px" }}
/>
        <button onClick={handleSubmit} style={buttonStyle}>
          Register Citizen
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

export default CitizenRegistration;