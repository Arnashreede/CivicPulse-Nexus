import { useEffect, useState } from "react";
import {
    getAllApplications,
    approveApplication,
    rejectApplication
} from "../services/applicationService";
import { verifyApplication } from "../services/applicationService";
import { useNavigate } from "react-router-dom";

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

    const handleApprove = async (id) => {
        try {
            await approveApplication(id);
            alert("Application Approved");
            loadApplications();
        } catch (error) {
            console.error(error);
        }
    };

    const handleReject = async (id) => {

        const remarks = prompt("Enter rejection remarks");

        if (!remarks) return;

        try {
            await rejectApplication(id, remarks);
            alert("Application Rejected");
            loadApplications();
        } catch (error) {
            console.error(error);
        }
    };
    const handleVerify = async (id) => {

    try {

        await verifyApplication(id);

        alert("Application Verified");

        loadApplications();

    } catch (error) {

        console.error(error);
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
                    borderCollapse: "collapse"
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Applicant</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Certificate No.</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {applications.map((app) => (

                        <tr key={app.id}>

                            <td>{app.id}</td>
                            <td>{app.applicantName}</td>
                            <td>{app.applicationType}</td>
                            <td>{app.status}</td>
                            <td>{app.certificateNumber}</td>

                           <td>

    <button
        onClick={() => handleVerify(app.id)}
    >
        Verify
    </button>

    {" "}

    <button
        onClick={() => handleApprove(app.id)}
    >
        Approve
    </button>

    {" "}

    <button
        onClick={() => handleReject(app.id)}
    >
        Reject
    </button>

</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default OfficerApplicationDashboard;