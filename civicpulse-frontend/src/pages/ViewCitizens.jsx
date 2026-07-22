import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { getAllCitizens } from "../services/citizenService";

function ViewCitizens() {
  const [citizens, setCitizens] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCitizens();
  }, []);

  const loadCitizens = async () => {
    try {
      const data = await getAllCitizens();

      // Normalize rows for DataGrid
      const rows = (Array.isArray(data) ? data : []).map((citizen, index) => ({
        id: citizen.id ?? citizen.citizenId ?? index + 1,
        fullName: citizen.fullName ?? "",
        email: citizen.email ?? "",
        phone: citizen.phone ?? "",
        aadhaarNumber: citizen.aadhaarNumber ?? "",
        address: citizen.address ?? "",
      }));

      console.log(rows);

      setCitizens(rows);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredCitizens = citizens.filter((citizen) =>
    (
      citizen.fullName +
      citizen.email +
      citizen.phone +
      citizen.address
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
      headerName: "Citizen Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.3,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "aadhaarNumber",
      headerName: "Aadhaar",
      width: 180,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value || "N/A"}
          size="small"
          color="primary"
          variant="outlined"
        />
      ),
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
            👤 Registered Citizens
          </Typography>

          <TextField
            fullWidth
            placeholder="Search Citizen..."
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
            rows={filteredCitizens}
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

export default ViewCitizens;