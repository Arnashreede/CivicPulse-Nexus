import { useState } from "react";
import { submitApplication } from "../services/applicationService";

function CitizenApplication() {

    const [application, setApplication] = useState({
        citizenId: "",
        applicantName: "",
        applicationType: "",
        document: ""
    });

    const handleChange = (e) => {
        setApplication({
            ...application,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await submitApplication(application);

            alert("Application submitted successfully");

            setApplication({
                citizenId: "",
                applicantName: "",
                applicationType: "",
                document: ""
            });

        } catch (error) {

            console.error(error);

            alert("Failed to submit application");
        }
    };

    return (
        <div style={{ padding: "30px" }}>

            <h2>Apply for Certificate / Permit</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="number"
                    name="citizenId"
                    placeholder="Citizen ID"
                    value={application.citizenId}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="applicantName"
                    placeholder="Applicant Name"
                    value={application.applicantName}
                    onChange={handleChange}
                />

                <br /><br />

                <select
                    name="applicationType"
                    value={application.applicationType}
                    onChange={handleChange}
                >
                    <option value="">Select Application Type</option>
                    <option value="Birth Certificate">Birth Certificate</option>
                    <option value="Death Certificate">Death Certificate</option>
                    <option value="Income Certificate">Income Certificate</option>
                    <option value="Residence Certificate">Residence Certificate</option>
                    <option value="Trade License">Trade License</option>
                </select>

                <br /><br />

                <input
                    type="text"
                    name="document"
                    placeholder="Document Name"
                    value={application.document}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Submit Application
                </button>

            </form>

        </div>
    );
}

export default CitizenApplication;