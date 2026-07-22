import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Stack
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import VerifiedIcon from "@mui/icons-material/Verified";
import DownloadIcon from "@mui/icons-material/Download";

import { getCitizenApplications } from "../services/applicationService";
import { downloadCertificate } from "../services/certificateService";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  const citizenId = localStorage.getItem("citizenId");

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const data = await getCitizenApplications(citizenId);
      setApplications(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "APPROVED":
        return "success";
      case "PENDING":
        return "warning";
      case "VERIFIED":
        return "info";
      case "REJECTED":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Container sx={{ mt: 4 }}>

      <Typography
        variant="h4"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        📄 My Certificate Applications
      </Typography>

      <Grid container spacing={3}>

        {applications.map((app) => (

          <Grid item xs={12} md={6} lg={4} key={app.id}>

            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 8
                }
              }}
            >

              <CardContent>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography variant="h6">
                    <DescriptionIcon sx={{ mr: 1 }} />
                    {app.applicationType}
                  </Typography>

                  <Chip
                    label={app.status}
                    color={getStatusColor(app.status)}
                  />
                </Stack>

                <Typography>
                  <strong>Application ID:</strong> {app.id}
                </Typography>

                <Typography>
                  <strong>Certificate No:</strong>{" "}
                  {app.certificateNumber || "Not Generated"}
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  <strong>Status:</strong> {app.status}
                </Typography>

                <Stack spacing={1} sx={{ mt: 3 }}>

                  {app.status === "APPROVED" ? (

                    <Button
                      variant="contained"
                      startIcon={<DownloadIcon />}
                      onClick={() => downloadCertificate(app.id)}
                    >
                      Download Certificate
                    </Button>

                  ) : (

                    <Button
                      variant="outlined"
                      startIcon={<VerifiedIcon />}
                      disabled
                    >
                      Waiting for Approval
                    </Button>

                  )}

                </Stack>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Container>
  );
}

export default MyApplications;