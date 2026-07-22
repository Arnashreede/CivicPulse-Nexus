import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

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
  totalCertificates: 0,
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

      <Box
        sx={{
          ml: "260px",
          p: 4,
          background: "#F4F6F9",
          minHeight: "100vh",
        }}
      >
        <Header />

        <Typography
          variant="h4"
          fontWeight="bold"
          mt={3}
        >
          🏛 Government Dashboard
        </Typography>

        <Typography
          color="text.secondary"
          mb={4}
        >
          Welcome to CivicPulse Nexus Administration Portal
        </Typography>

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
<div style={card}>
  <h2>📄 Certificates</h2>
  <h1>{counts.totalCertificates}</h1>
  <p>Issued Certificates</p>
</div>
        </div>

        <Typography
          variant="h5"
          fontWeight="bold"
          mt={6}
          mb={3}
        >
          📊 Analytics
        </Typography>

        <DashboardCharts grievances={grievances} />

      </Box>
    </>
  );
}

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

export default Dashboard;