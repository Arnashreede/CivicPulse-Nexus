import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllGrievances } from "../services/grievanceService";
import { getAllOfficers } from "../services/officerService";
import { assignOfficer } from "../services/assignService";

function AssignOfficer() {

    const [grievances, setGrievances] = useState([]);
    const [officers, setOfficers] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const grievanceData = await getAllGrievances();
        const officerData = await getAllOfficers();

        setGrievances(grievanceData);
        setOfficers(officerData);
    };

    const handleChange = (index, field, value) => {

        const updated = [...grievances];

        updated[index][field] = value;

        setGrievances(updated);
    };

    const handleAssign = async (grievance) => {

        try {

            await assignOfficer(grievance.id, {
                assignedOfficer: grievance.assignedOfficer,
                priority: grievance.priority,
                status: grievance.status,
            });

            alert("Officer Assigned Successfully");

        } catch (error) {

            console.error(error);

            alert("Assignment Failed");
        }
    };

    return (
        <>
            <Navbar />

            <div style={{ padding: "30px" }}>

                <h2>Assign Officer</h2>

                <table border="1" cellPadding="10">

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Officer</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {grievances.map((grievance, index) => (

                            <tr key={grievance.id}>

                                <td>{grievance.id}</td>

                                <td>{grievance.title}</td>

                                <td>{grievance.category}</td>

                                <td>

                                    <select
                                        value={grievance.assignedOfficer}
                                        onChange={(e) =>
                                            handleChange(
                                                index,
                                                "assignedOfficer",
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option value="">
                                            Select Officer
                                        </option>

                                        {officers.map((officer) => (

                                            <option
                                                key={officer.id}
                                                value={officer.fullName}
                                            >
                                                {officer.fullName}
                                            </option>

                                        ))}

                                    </select>

                                </td>

                                <td>

                                    <select
                                        value={grievance.priority}
                                        onChange={(e) =>
                                            handleChange(
                                                index,
                                                "priority",
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option>LOW</option>

                                        <option>MEDIUM</option>

                                        <option>HIGH</option>

                                    </select>

                                </td>

                                <td>

                                    <select
                                        value={grievance.status}
                                        onChange={(e) =>
                                            handleChange(
                                                index,
                                                "status",
                                                e.target.value
                                            )
                                        }
                                    >

                                        <option>OPEN</option>

                                        <option>IN_PROGRESS</option>

                                        <option>RESOLVED</option>

                                    </select>

                                </td>

                                <td>

                                    <button
                                        onClick={() =>
                                            handleAssign(grievance)
                                        }
                                    >
                                        Assign
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

export default AssignOfficer;