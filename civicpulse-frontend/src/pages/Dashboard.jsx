import { useEffect, useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardCharts from "../components/DashboardCharts";

import { getDashboardCounts } from "../services/dashboardService";
import { getAllGrievances } from "../services/grievanceService";

function Dashboard() {

  const [counts, setCounts] = useState({
    totalCitizens: 0,
    totalOfficers: 0,
    totalGrievances: 0,
    pending: 0,
  });

  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    loadDashboard();
    loadGrievances();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboardCounts();
      setCounts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadGrievances = async () => {
    try {
      const data = await getAllGrievances();
      setGrievances(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Sidebar />

      <div style={{ marginLeft: "270px", padding: "20px" }}>
        <Header />
      </div>

      <div style={container}>

        <h1>🏛 Government Dashboard</h1>

        <p style={{ color: "#666", marginBottom: "30px" }}>
          Welcome to CivicPulse Nexus Administration Portal
        </p>

        <div style={cards}>

          <div style={card}>
            <h2>👤 Citizens</h2>
            <h1>{counts.totalCitizens}</h1>
            <p>Registered Citizens</p>
          </div>

          <div style={card}>
            <h2>👮 Officers</h2>
            <h1>{counts.totalOfficers}</h1>
            <p>Government Officers</p>
          </div>

          <div style={card}>
            <h2>📋 Complaints</h2>
            <h1>{counts.totalGrievances}</h1>
            <p>Total Complaints</p>
          </div>

          <div style={card}>
            <h2>⏳ Pending</h2>
            <h1>{counts.pending}</h1>
            <p>Pending Cases</p>
          </div>

        </div>

        

        <h2 style={{ marginTop: "60px" }}>
          📊 Analytics
        </h2>

        <DashboardCharts grievances={grievances} />

      </div>
    </>
  );
}

const container = {
  marginLeft: "270px",
  padding: "40px",
  background: "#F4F6F9",
  minHeight: "100vh",
};

const cards = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
};

const card = {
  background: "white",
  borderRadius: "15px",
  padding: "25px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,.1)",
};

const actions = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  marginTop: "20px",
};

const button = {
  background: "#1565C0",
  color: "white",
  border: "none",
  padding: "14px 25px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Dashboard;