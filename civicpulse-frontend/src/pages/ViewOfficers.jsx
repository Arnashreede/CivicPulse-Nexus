import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Chip,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { getAllOfficers } from "../services/officerService";

function ViewOfficers() {
  const [officers, setOfficers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadOfficers();
  }, []);

  const loadOfficers = async () => {
    try {
      const data = await getAllOfficers();

      const rows = (Array.isArray(data) ? data : []).map((officer, index) => ({
        id: officer.id ?? officer.officerId ?? index + 1,
        fullName: officer.fullName ?? "",
        email: officer.email ?? "",
        phone: officer.phone ?? "",
        department: officer.department ?? "",
        designation: officer.designation ?? "",
      }));

      console.log(rows);

      setOfficers(rows);
    } catch (error) {
      console.error(error);
      alert("Failed to load officers");
    }
  };

  const filteredOfficers = officers.filter((officer) =>
    (
      officer.fullName +
      officer.email +
      officer.department +
      officer.designation
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Officer Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.4,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "department",
      headerName: "Department",
      width: 180,
      renderCell: (params) => (
        <Chip
          label={params.value || "N/A"}
          color="primary"
          variant="outlined"
          size="small"
        />
      ),
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 180,
    },
  ];

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

        <Paper
          elevation={3}
          sx={{
            mt: 3,
            p: 3,
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={3}>
            👮 Government Officers
          </Typography>

          <TextField
            fullWidth
            placeholder="Search officer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <DataGrid
            rows={filteredOfficers}
            columns={columns}
            autoHeight
            pageSizeOptions={[5, 10, 20]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            disableRowSelectionOnClick
          />
        </Paper>
      </Box>
    </>
  );
}

export default ViewOfficers;