import { useState } from "react";
import { getComplaintById } from "../services/trackComplaintService";

function TrackComplaint() {

    const [id, setId] = useState("");
    const [complaint, setComplaint] = useState(null);
    const [error, setError] = useState("");

    const searchComplaint = async () => {
        try {
            const data = await getComplaintById(id);
            setComplaint(data);
            setError("");
        } catch (err) {
            setComplaint(null);
            setError("Complaint not found");
        }
    };

    return (
        <div style={{ padding: "40px" }}>

            <h1>Track Complaint</h1>

            <input
                type="number"
                placeholder="Enter Complaint ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                style={{
                    padding: "10px",
                    width: "250px",
                    marginRight: "10px"
                }}
            />

            <button onClick={searchComplaint}>
                Search
            </button>

            {error && (
                <p style={{ color: "red" }}>{error}</p>
            )}

            {complaint && (

                <div
                    style={{
                        marginTop: "30px",
                        border: "1px solid #ccc",
                        padding: "20px",
                        borderRadius: "10px"
                    }}
                >

                    <h2>Complaint Details</h2>

                    <p><b>ID:</b> {complaint.id}</p>

                    <p><b>Citizen ID:</b> {complaint.citizenId}</p>

                    <p><b>Title:</b> {complaint.title}</p>

                    <p><b>Description:</b> {complaint.description}</p>

                    <p><b>Category:</b> {complaint.category}</p>

                    <p><b>Status:</b> {complaint.status}</p>

                    <p><b>Priority:</b> {complaint.priority}</p>

                    <p><b>Assigned Officer:</b> {complaint.assignedOfficer || "Not Assigned"}</p>

                </div>

            )}

        </div>
    );
}

export default TrackComplaint;