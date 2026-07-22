import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import {
  getCertificatesByCitizen,
  downloadCertificate,
} from "../services/certificateService";

function ViewCertificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    loadCertificates();
  }, []);

 const loadCertificates = async () => {
  try {
    const citizenId = localStorage.getItem("citizenId");

    const data = await getCertificatesByCitizen(citizenId);
    setCertificates(data);
  } catch (error) {
    console.error("Error loading certificates:", error);
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Certificates</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Certificate ID</th>
            <th>Certificate No</th>
            <th>Application ID</th>
            <th>Citizen ID</th>
            <th>Citizen Name</th>
            <th>Department</th>
            <th>Service</th>
            <th>Officer ID</th>
            <th>Officer Name</th>
            <th>Issue Date</th>
            <th>Valid Till</th>
            <th>Verification Code</th>
            <th>Download</th>
          </tr>
        </thead>

        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate.certificateId}>
              <td>{certificate.certificateId}</td>
              <td>{certificate.certificateNumber}</td>
              <td>{certificate.applicationId}</td>
              <td>{certificate.citizenId}</td>
              <td>{certificate.citizenName}</td>
              <td>{certificate.departmentName}</td>
              <td>{certificate.serviceName}</td>
              <td>{certificate.officerId}</td>
              <td>{certificate.officerName}</td>
              <td>{certificate.issueDate}</td>
              <td>{certificate.validTill}</td>
              <td>{certificate.verificationCode}</td>
              <td>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    downloadCertificate(certificate.certificateId)
                  }
                >
                  Download PDF
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewCertificates;