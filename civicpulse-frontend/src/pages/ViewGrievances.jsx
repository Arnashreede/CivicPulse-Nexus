import { useEffect, useState } from "react";

import {
  getAllGrievances,
  getOfficerGrievances,
  getCitizenGrievances
} from "../services/grievanceService";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import GrievanceTable from "../components/GrievanceTable";

function ViewGrievances() {

  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    loadGrievances();
  }, []);

  const loadGrievances = async () => {

    try {

      const role = localStorage.getItem("role");

      let data = [];

      if (role === "ADMIN") {

        data = await getAllGrievances();

      } else if (role === "OFFICER") {

        const officerName = localStorage.getItem("username");

        data = await getOfficerGrievances(officerName);

      } else if (role === "CITIZEN") {

        const citizenId = localStorage.getItem("userId");

        data = await getCitizenGrievances(citizenId);

      }

      setGrievances(data);

    } catch (error) {

      console.error(error);

      alert("Failed to load grievances");

    }

  };

  return (
    <>
      <Sidebar />

      <div style={container}>

        <Header />

        <h1 style={{ marginTop: "30px" }}>
          📋 Complaint Management
        </h1>

        <p style={{ color: "#666" }}>
          View and manage complaints.
        </p>

        <div style={tableCard}>
          <GrievanceTable grievances={grievances} />
        </div>

      </div>
    </>
  );
}

const container = {
  marginLeft: "270px",
  padding: "30px",
  background: "#F4F6F9",
  minHeight: "100vh",
};

const tableCard = {
  marginTop: "25px",
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 5px 15px rgba(0,0,0,.1)",
};

export default ViewGrievances;