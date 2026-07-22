import { useState } from "react";
import {
  submitApplication,
  uploadDocument
} from "../services/applicationService";

import {
  Container, Paper, Typography, Card, CardContent, Grid,
  MenuItem, TextField, Button, Box, Divider, List, ListItem,
  ListItemText, Chip
} from "@mui/material";

function CitizenApplication() {
const citizenId = localStorage.getItem("userId");
const applicantName = localStorage.getItem("fullName");
const username = localStorage.getItem("email");
  const today = new Date().toLocaleDateString();

  const [application, setApplication] = useState({
    citizenId,
    applicantName,
    applicationType: ""
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const serviceDetails = {
    "Birth Certificate": {
      department: "Health Department",
      time: "5-7 Working Days",
      docs: ["Birth Record","Parent Aadhaar","Parent ID"]
    },
    "Death Certificate": {
      department: "Health Department",
      time: "5-7 Working Days",
      docs: ["Hospital Record","Applicant ID"]
    },
    "Income Certificate": {
      department: "Revenue Department",
      time: "7-10 Working Days",
      docs: ["Income Proof","Aadhaar"]
    },
    "Residence Certificate": {
      department: "Revenue Department",
      time: "5-7 Working Days",
      docs: ["Address Proof","Aadhaar"]
    },
    "Trade License": {
      department: "Trade Department",
      time: "10-15 Working Days",
      docs: ["Business Proof","Owner ID"]
    }
  };

  const handleChange=(e)=>setApplication({...application,[e.target.name]:e.target.value});

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const saved=await submitApplication(application);
      if(selectedFile) await uploadDocument(saved.id,selectedFile);
      alert("Application Submitted Successfully");
      setApplication({...application,applicationType:""});
      setSelectedFile(null);
    }catch(err){
      alert(err.response?.data||"Failed to submit application");
    }
  };

  const info=serviceDetails[application.applicationType];

  return (
    <Container maxWidth="lg" sx={{mt:4,mb:4}}>
      <Paper elevation={6} sx={{borderRadius:4,overflow:"hidden"}}>
        <Box sx={{p:4,color:"#fff",background:"linear-gradient(90deg,#0d47a1,#42a5f5)"}}>
          <Typography variant="h3" fontWeight="bold">🏛 CivicPulse Nexus</Typography>
          <Typography variant="h6">Municipal Citizen Service Portal</Typography>
          <Typography>Fast • Secure • Transparent Government Services</Typography>
        </Box>

        <Box sx={{p:4}}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{mb:3}}>
                <CardContent>
                  <Typography variant="h6">👤 Applicant Profile</Typography>
                  <Divider sx={{my:2}}/>
                  <Typography><b>Name:</b> {applicantName}</Typography>
                  <Typography><b>Citizen ID:</b> {citizenId}</Typography>
                  <Typography><b>Username:</b> {username}</Typography>
                  <Typography><b>Date:</b> {today}</Typography>
                  <Chip sx={{mt:2}} label="Ready to Apply" color="primary"/>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h6">📌 Instructions</Typography>
                  <List dense>
                    <ListItem><ListItemText primary="Upload PDF/JPG/PNG"/></ListItem>
                    <ListItem><ListItemText primary="Maximum size: 5 MB"/></ListItem>
                    <ListItem><ListItemText primary="Use clear scanned documents"/></ListItem>
                    <ListItem><ListItemText primary="One application per service"/></ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>📋 Apply for Municipal Service</Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      select fullWidth required
                      label="Application Type"
                      name="applicationType"
                      value={application.applicationType}
                      onChange={handleChange}
                    >
                      {Object.keys(serviceDetails).map(item=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))}
                    </TextField>

                    <Box sx={{
                      mt:3,p:4,textAlign:"center",
                      border:"2px dashed #1976d2",
                      borderRadius:3,
                      bgcolor:"#f8fbff"
                    }}>
                      <Typography variant="h6">📎 Upload Supporting Document</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{mb:2}}>
                        PDF, JPG, PNG • Max 5 MB
                      </Typography>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e)=>setSelectedFile(e.target.files[0])}
                      />
                      {selectedFile &&
                        <Typography sx={{mt:2,color:"green",fontWeight:"bold"}}>
                          ✔ {selectedFile.name}
                        </Typography>}
                    </Box>

                    <Button type="submit" fullWidth variant="contained" size="large" sx={{mt:3}}>
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {info &&
              <Card sx={{mt:3}}>
                <CardContent>
                  <Typography variant="h6">ℹ Service Information</Typography>
                  <Divider sx={{my:2}}/>
                  <Typography><b>Department:</b> {info.department}</Typography>
                  <Typography><b>Processing Time:</b> {info.time}</Typography>
                  <Typography sx={{mt:2}}><b>Required Documents</b></Typography>
                  <List dense>
                    {info.docs.map(d=><ListItem key={d}><ListItemText primary={"✔ "+d}/></ListItem>)}
                  </List>
                </CardContent>
              </Card>}

              <Card sx={{mt:3}}>
                <CardContent>
                  <Typography variant="h6">📂 Recent Applications</Typography>
                  <Typography color="text.secondary">
                    Connect this section with your backend API to display citizen application history.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
export default CitizenApplication;
