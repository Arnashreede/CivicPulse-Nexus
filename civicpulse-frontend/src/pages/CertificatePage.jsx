import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCertificate } from "../services/applicationService";

function CertificatePage() {
    const { id } = useParams();

    const [certificate, setCertificate] = useState(null);

    useEffect(() => {
        loadCertificate();
    }, []);

    const loadCertificate = async () => {
        try {
            const data = await getCertificate(id);
            setCertificate(data);
        } catch (error) {
            console.error(error);
        }
    };

    if (!certificate) {
        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    }

    return (
        <>
            <style>
                {`
                @media print{
                    button{
                        display:none;
                    }

                    body{
                        background:white;
                    }
                }
                `}
            </style>

            <div
                style={{
                    width: "800px",
                    margin: "30px auto",
                    padding: "50px",
                    border: "8px solid #0D47A1",
                    background: "white",
                    fontFamily: "Times New Roman",
                    boxShadow: "0 0 15px rgba(0,0,0,0.2)"
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h3>Government of India</h3>
                    <h2 style={{ color: "#0D47A1" }}>
                        CivicPulse Nexus
                    </h2>

                    <h1 style={{ marginTop: "20px" }}>
                        GOVERNMENT CERTIFICATE
                    </h1>

                    <hr />
                </div>

                <p>
                    This is to certify that the following application has been
                    successfully approved by the concerned authority.
                </p>

                <table
                    style={{
                        width: "100%",
                        marginTop: "30px",
                        borderCollapse: "collapse"
                    }}
                >
                    <tbody>
                        <tr>
                            <td><b>Certificate Number</b></td>
                            <td>{certificate.certificateNumber}</td>
                        </tr>

                        <tr>
                            <td><b>Applicant Name</b></td>
                            <td>{certificate.applicantName}</td>
                        </tr>

                        <tr>
                            <td><b>Application Type</b></td>
                            <td>{certificate.applicationType}</td>
                        </tr>

                        <tr>
                            <td><b>Status</b></td>
                            <td>{certificate.status}</td>
                        </tr>

                        <tr>
                            <td><b>Approved By</b></td>
                            <td>{certificate.approvedBy}</td>
                        </tr>

                        <tr>
                            <td><b>Approved Date</b></td>
                            <td>{certificate.approvedDate}</td>
                        </tr>
                    </tbody>
                </table>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "80px"
                    }}
                >
                    <div>
                        <p>______________________</p>
                        <b>Applicant Signature</b>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <div
                            style={{
                                width: "120px",
                                height: "120px",
                                border: "1px solid gray",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            QR Code
                        </div>

                        <p>Scan to Verify</p>
                    </div>

                    <div style={{ textAlign: "right" }}>
                        <p>______________________</p>
                        <b>Authorized Officer</b>
                    </div>
                </div>

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "50px"
                    }}
                >
                    <button
                        onClick={() => window.print()}
                        style={{
                            padding: "12px 25px",
                            background: "#0D47A1",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "16px"
                        }}
                    >
                        🖨 Print Certificate
                    </button>
                </div>
            </div>
        </>
    );
}

export default CertificatePage;