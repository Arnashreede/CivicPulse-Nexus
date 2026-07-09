import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllGrievances } from "../services/grievanceService";

function ViewGrievances() {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    loadGrievances();
  }, []);

  const loadGrievances = async () => {
    try {
      const data = await getAllGrievances();
      setGrievances(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load grievances");
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
          Registered Grievances
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
              <th style={th}>Citizen ID</th>
              <th style={th}>Title</th>
              <th style={th}>Category</th>
              <th style={th}>Priority</th>
              <th style={th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {grievances.map((grievance) => (
              <tr key={grievance.id}>
                <td style={td}>{grievance.id}</td>
                <td style={td}>{grievance.citizenId}</td>
                <td style={td}>{grievance.title}</td>
                <td style={td}>{grievance.category}</td>
                <td style={td}>{grievance.priority}</td>
                <td style={td}>
                  <span
                    style={{
                      padding: "5px 12px",
                      borderRadius: "20px",
                      background:
                        grievance.status === "OPEN"
                          ? "#ffeb3b"
                          : grievance.status === "RESOLVED"
                          ? "#4caf50"
                          : "#2196f3",
                      color:
                        grievance.status === "OPEN"
                          ? "black"
                          : "white",
                      fontWeight: "bold",
                    }}
                  >
                    {grievance.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const th = {
  padding: "15px",
};

const td = {
  padding: "12px",
  textAlign: "center",
  borderBottom: "1px solid #ddd",
};

export default ViewGrievances;