import { useEffect, useState } from "react";
import {
    getAllApplications,
    approveApplication,
    rejectApplication,
    verifyApplication,
    viewDocument
} from "../services/applicationService";

import { Button } from "@mui/material";

function OfficerApplicationDashboard() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {
        try {
            const data = await getAllApplications();
            setApplications(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleVerify = async (id) => {
        try {
            await verifyApplication(id);
            alert("Application Verified Successfully");
            loadApplications();
        } catch (error) {
            console.error(error);
            alert("Verification Failed");
        }
    };

    const handleApprove = async (id) => {
        try {
            await approveApplication(id);
            alert("Application Approved Successfully");
            loadApplications();
        } catch (error) {
            console.error(error);
            alert(error.response?.data || "Approval Failed");
        }
    };

    const handleReject = async (id) => {

        const reason = prompt("Enter Rejection Reason");

        if (!reason) return;

        try {
            await rejectApplication(id, reason);
            alert("Application Rejected");
            loadApplications();
        } catch (error) {
            console.error(error);
            alert("Rejection Failed");
        }
    };

    return (
        <div style={{ padding: "30px" }}>

            <h2>Certificate Applications</h2>

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
                        <th>Applicant</th>
                        <th>Application Type</th>
                        <th>Status</th>
                        <th>Certificate No.</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {applications.map((app) => (

                        <tr key={app.id}>

                            <td>{app.id}</td>
                            <td>{app.applicantName}</td>
                            <td>{app.applicationType}</td>
                            <td>{app.status}</td>
                            <td>
                                {app.certificateNumber || "-"}
                            </td>

                            <td>

                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => viewDocument(app.id)}
                                >
                                    View Document
                                </Button>

                                {" "}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => handleVerify(app.id)}
                                    disabled={app.status !== "SUBMITTED"}
                                >
                                    Verify
                                </Button>

                                {" "}

                                <Button
                                    variant="contained"
                                    color="success"
                                    size="small"
                                    onClick={() => handleApprove(app.id)}
                                    disabled={app.status !== "VERIFIED"}
                                >
                                    Approve
                                </Button>

                                {" "}

                                <Button
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    onClick={() => handleReject(app.id)}
                                    disabled={
                                        app.status === "APPROVED" ||
                                        app.status === "REJECTED"
                                    }
                                >
                                    Reject
                                </Button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default OfficerApplicationDashboard;