import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getOfficerGrievances } from "../services/officerDashboardService";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function OfficerDashboard() {

    const [grievances, setGrievances] = useState([]);

    const officerName = "Rahul Sharma";

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
                            {grievances.filter(g => g.status === "OPEN").length}
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