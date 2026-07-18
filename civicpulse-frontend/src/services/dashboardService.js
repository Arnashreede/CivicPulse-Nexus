import axios from "axios";

const CITIZEN_API = "http://localhost:8081";
const OFFICER_API = "http://localhost:8086";
const GRIEVANCE_API = "http://localhost:8082";

export const getDashboardCounts = async () => {

    try {

        const citizenCount = await axios.get(
            `${CITIZEN_API}/citizens/dashboard/count`
        );
        console.log("Citizen:", citizenCount.data);

        const officerCount = await axios.get(
            `${OFFICER_API}/officers/dashboard/count`
        );
        console.log("Officer:", officerCount.data);

        const grievanceCounts = await axios.get(
            `${GRIEVANCE_API}/grievances/dashboard/counts`
        );
        console.log("Grievance:", grievanceCounts.data);

        return {
            totalCitizens: citizenCount.data,
            totalOfficers: officerCount.data,
            totalGrievances: grievanceCounts.data.totalGrievances,
            pending: grievanceCounts.data.pending,
            inProgress: grievanceCounts.data.inProgress,
            resolved: grievanceCounts.data.resolved,
            closed: grievanceCounts.data.closed
        };

    } catch (error) {
        console.error("Dashboard Error:", error);
        throw error;
    }
};