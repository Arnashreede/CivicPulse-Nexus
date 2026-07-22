import { useState } from "react";
import Navbar from "../components/Navbar";
import { registerCitizen } from "../services/citizenService";
import { useNavigate } from "react-router-dom";
function CitizenRegistration() {

  const [citizen, setCitizen] = useState({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  aadhaarNumber: "",
  password: "",
  confirmPassword: "",
});
const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCitizen({
      ...citizen,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {

    let temp = {};

    // Full Name
    if (!citizen.fullName.trim()) {
      temp.fullName = "Full Name is required";
    } else if (!/^[A-Za-z ]+$/.test(citizen.fullName)) {
      temp.fullName = "Only letters and spaces are allowed";
    }

    // Email
    if (!citizen.email.trim()) {
      temp.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(citizen.email)) {
      temp.email = "Enter a valid email";
    }

    // Phone
    if (!citizen.phone.trim()) {
      temp.phone = "Phone Number is required";
    } else if (!/^[6-9]\d{9}$/.test(citizen.phone)) {
      temp.phone = "Phone must be 10 digits and start with 6-9";
    }

    // Aadhaar
    if (!citizen.aadhaarNumber.trim()) {
      temp.aadhaarNumber = "Aadhaar Number is required";
    } else if (!/^\d{12}$/.test(citizen.aadhaarNumber)) {
      temp.aadhaarNumber = "Aadhaar must contain exactly 12 digits";
    }

    // Address
    if (!citizen.address.trim()) {
      temp.address = "Address is required";
    }
// Password
if (!citizen.password) {
  temp.password = "Password is required";
} else if (citizen.password.length < 6) {
  temp.password = "Password must be at least 6 characters";
}

// Confirm Password
if (!citizen.confirmPassword) {
  temp.confirmPassword = "Confirm Password is required";
} else if (citizen.password !== citizen.confirmPassword) {
  temp.confirmPassword = "Passwords do not match";
}
    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async () => {

    if (!validate()) return;

    try {

      const { confirmPassword, ...citizenData } = citizen;

await registerCitizen(citizenData);

     alert("Registration Successful! Please login with your email and password.");

setCitizen({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  aadhaarNumber: "",
  password: "",
  confirmPassword: "",
});

setErrors({});

navigate("/citizen-login");
     

      setErrors({});

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

        {/* Full Name */}

        <input
          name="fullName"
          placeholder="Enter Full Name"
          value={citizen.fullName}
          onChange={handleChange}
          style={inputStyle}
        />

        <small style={helperStyle}>
          Only letters and spaces allowed.
        </small>

        <p style={errorStyle}>{errors.fullName}</p>

        {/* Email */}

        <input
          name="email"
          placeholder="Enter Email"
          value={citizen.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <small style={helperStyle}>
          Example: abc@gmail.com
        </small>

        <p style={errorStyle}>{errors.email}</p>

        {/* Phone */}

        <input
          name="phone"
          placeholder="Enter Phone Number"
          value={citizen.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <small style={helperStyle}>
          Must be 10 digits and start with 6, 7, 8 or 9.
        </small>

        <p style={errorStyle}>{errors.phone}</p>

        {/* Aadhaar */}

        <input
          name="aadhaarNumber"
          placeholder="Enter Aadhaar Number"
          value={citizen.aadhaarNumber}
          onChange={handleChange}
          style={inputStyle}
        />

        <small style={helperStyle}>
          Aadhaar must contain exactly 12 digits.
        </small>

        <p style={errorStyle}>{errors.aadhaarNumber}</p>
        {/* Address */}

        <textarea
          name="address"
          placeholder="Enter Complete Address"
          value={citizen.address}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
        />

        <small style={helperStyle}>
          Enter your complete residential address.
        </small>

        <p style={errorStyle}>{errors.address}</p>

{/* Password */}

<input
  type="password"
  name="password"
  placeholder="Create Password"
  value={citizen.password}
  onChange={handleChange}
  style={inputStyle}
/>

<small style={helperStyle}>
  Minimum 6 characters.
</small>

<p style={errorStyle}>{errors.password}</p>
{/* Confirm Password */}

<input
  type="password"
  name="confirmPassword"
  placeholder="Confirm Password"
  value={citizen.confirmPassword}
  onChange={handleChange}
  style={inputStyle}
/>

<small style={helperStyle}>
  Re-enter your password.
</small>

<p style={errorStyle}>{errors.confirmPassword}</p>
        
        <button
          onClick={handleSubmit}
          style={buttonStyle}
        >
          Register Citizen
        </button>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "5px",
  marginBottom: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const helperStyle = {
  color: "#666",
  fontSize: "12px",
};

const errorStyle = {
  color: "red",
  fontSize: "13px",
  marginTop: "3px",
  marginBottom: "12px",
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

export default CitizenRegistration;