import { useState } from "react";
import { uploadDocument } from "../services/applicationService";

function UploadDocument() {

    const [applicationId, setApplicationId] = useState("");
    const [file, setFile] = useState(null);

    const handleUpload = async () => {

        if (!applicationId || !file) {
            alert("Please enter Application ID and select a file.");
            return;
        }

        try {

            await uploadDocument(applicationId, file);

            alert("Document uploaded successfully.");

            setApplicationId("");
            setFile(null);

        } catch (error) {

            console.error(error);
            alert("Upload failed.");

        }
    };

    return (
        <div style={{ padding: "30px" }}>

            <h2>Upload Document</h2>

            <input
                type="number"
                placeholder="Application ID"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
            />

            <br /><br />

            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <br /><br />

            <button onClick={handleUpload}>
                Upload
            </button>

        </div>
    );
}

export default UploadDocument;