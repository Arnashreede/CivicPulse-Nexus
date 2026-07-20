import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getOfficerGrievances } from "../services/officerDashboardService";
import { updateStatus } from "../services/statusService";
import { updateRemarks } from "../services/remarksService";
function OfficerDashboard() {

    const [grievances, setGrievances] = useState([]);

    const officerName = localStorage.getItem("officerName");

    useEffect(() => {
        loadGrievances();
    }, []);

    const loadGrievances = async () => {
        try {
            const data = await getOfficerGrievances(officerName);
            setGrievances(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            await updateStatus(id, status);
            alert("Status updated successfully");
            loadGrievances();
        } catch (error) {
            console.error(error);
            alert("Failed to update status");
        }
    };

    return (
        <>
            <Sidebar />

            <div style={{ marginLeft: "270px", padding: "20px" }}>
                <Header />
            </div>

            <div style={container}>

                <h1>👮 Officer Dashboard</h1>

                <p style={{ color: "#666" }}>
                    Welcome to CivicPulse Nexus Officer Portal
                </p>

                <div style={cards}>

                    <div style={summaryCard}>
                        <h2>📋</h2>
                        <h3>Assigned Complaints</h3>
                        <h1>{grievances.length}</h1>
                    </div>

                    <div style={summaryCard}>
                        <h2>⏳</h2>
                        <h3>Pending</h3>
                        <h1>
                            {grievances.filter(g => g.status === "PENDING").length}
                        </h1>
                    </div>

                    <div style={summaryCard}>
                        <h2>🔄</h2>
                        <h3>In Progress</h3>
                        <h1>
                            {grievances.filter(g => g.status === "IN_PROGRESS").length}
                        </h1>
                    </div>

                    <div style={summaryCard}>
                        <h2>✅</h2>
                        <h3>Resolved</h3>
                        <h1>
                            {grievances.filter(g => g.status === "RESOLVED").length}
                        </h1>
                    </div>

                </div>

                <h2 style={{ marginTop: "40px" }}>
                    Assigned Complaints
                </h2>

                <table
                    border="1"
                    cellPadding="10"
                    style={{
                        width: "100%",
                        marginTop: "20px",
                        borderCollapse: "collapse",
                        background: "white",
                    }}
                >
                    <thead>
                        <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Category</th>
    <th>Priority</th>
    <th>Status</th>
    <th>Remarks</th>
    <th>Change Status</th>
    <th>Save</th>
</tr>
                    </thead>

                    <tbody>
    {grievances.map((g) => (
        <tr key={g.id}>
            <td>{g.id}</td>
            <td>{g.title}</td>
            <td>{g.category}</td>
            <td>{g.priority}</td>

            <td>{g.status}</td>

            <td>
                <input
                    type="text"
                    placeholder="Enter remarks"
                    defaultValue={g.remarks}
                    id={`remarks-${g.id}`}
                    style={{
                        width: "180px",
                        padding: "6px",
                    }}
                />
            </td>

            <td>
                <select
                    defaultValue={g.status}
                    id={`status-${g.id}`}
                >
                    <option value="PENDING">PENDING</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="RESOLVED">RESOLVED</option>
                    <option value="CLOSED">CLOSED</option>
                </select>
            </td>

            <td>
                <button
    onClick={async () => {

        const status =
            document.getElementById(`status-${g.id}`).value;

        const remarks =
            document.getElementById(`remarks-${g.id}`).value;

        try {

            await updateStatus(g.id, status);
            await updateRemarks(g.id, remarks);

            alert("Grievance updated successfully");

            loadGrievances();

        } catch (error) {

            console.error(error);

            alert("Failed to update grievance");
        }

    }}
>
    Save
</button>
            </td>
        </tr>
    ))}
</tbody>

                </table>

            </div>
        </>
    );
}

const container = {
    marginLeft: "270px",
    padding: "40px",
    background: "#F4F6F9",
    minHeight: "100vh",
};

const cards = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "30px",
};

const summaryCard = {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,.1)",
};

export default OfficerDashboard;