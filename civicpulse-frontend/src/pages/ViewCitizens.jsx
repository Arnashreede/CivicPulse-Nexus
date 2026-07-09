import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllCitizens } from "../services/citizenService";

function ViewCitizens() {
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    loadCitizens();
  }, []);

  const loadCitizens = async () => {
    try {
      console.log("Calling API...");

      const data = await getAllCitizens();

      console.log("API Response:", data);

      setCitizens(data);
    } catch (error) {
      console.log("ERROR:", error);
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);

      alert("Failed to load citizens");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          background: "#f4f7fc",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            color: "#1565C0",
            marginBottom: "25px",
          }}
        >
          Registered Citizens
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "white",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 5px 20px rgba(0,0,0,.1)",
          }}
        >
          <thead
            style={{
              background: "#1565C0",
              color: "white",
            }}
          >
            <tr>
              <th style={th}>ID</th>
              <th style={th}>Full Name</th>
              <th style={th}>Email</th>
              <th style={th}>Phone</th>
              <th style={th}>Aadhaar</th>
              <th style={th}>Address</th>
            </tr>
          </thead>

          <tbody>
            {citizens.length > 0 ? (
              citizens.map((citizen) => (
                <tr key={citizen.id}>
                  <td style={td}>{citizen.id}</td>
                  <td style={td}>{citizen.fullName}</td>
                  <td style={td}>{citizen.email}</td>
                  <td style={td}>{citizen.phone}</td>
                  <td style={td}>{citizen.aadhaarNumber}</td>
                  <td style={td}>{citizen.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={td} colSpan="6">
                  No citizens found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

const th = {
  padding: "15px",
  textAlign: "center",
};

const td = {
  padding: "12px",
  textAlign: "center",
  borderBottom: "1px solid #ddd",
};

export default ViewCitizens;