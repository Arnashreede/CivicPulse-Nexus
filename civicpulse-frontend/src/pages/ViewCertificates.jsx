import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getAllCertificates, downloadCertificate } from "../services/certificateService";

function ViewCertificates() {

    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        loadCertificates();
    }, []);

    const loadCertificates = async () => {
        const data = await getAllCertificates();
        setCertificates(data);
    };

    return (
        <div>
            <h2>Certificates</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Certificate No</th>
                        <th>Citizen</th>
                        <th>Service</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {certificates.map((certificate) => (
                        <tr key={certificate.id}>
                            <td>{certificate.id}</td>
                            <td>{certificate.certificateNumber}</td>
                            <td>{certificate.citizenName}</td>
                            <td>{certificate.serviceName}</td>

                            <td>
                                <Button
                                    variant="contained"
                                    onClick={() => downloadCertificate(certificate.id)}
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