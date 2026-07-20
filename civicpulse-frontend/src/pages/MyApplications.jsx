import { useEffect, useState } from "react";
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

    return (
        <div style={{ padding: "30px" }}>

            <h2>My Certificate Applications</h2>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "center"
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Certificate Type</th>
                        <th>Status</th>
                        <th>Certificate Number</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {applications.map((app) => (

                        <tr key={app.id}>

                            <td>{app.id}</td>

                            <td>{app.applicationType}</td>

                            <td>{app.status}</td>

                            <td>{app.certificateNumber || "-"}</td>

                            <td>

                                {app.status === "APPROVED" ? (

                                    <button
                                        style={{
                                            padding: "10px 18px",
                                            background: "#1565C0",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => downloadCertificate(app.id)}
                                    >
                                        📄 Download Certificate
                                    </button>

                                ) : (

                                    <span style={{ color: "red" }}>
                                        Waiting for Approval
                                    </span>

                                )}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default MyApplications;