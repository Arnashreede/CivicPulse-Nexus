import { Link, useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.clear();

        navigate("/");

    };

    return (

        <div style={sidebar}>

            <h2 style={{color:"white"}}>
                🏛 CivicPulse
            </h2>

            <hr/>

            {role==="ADMIN" && (

                <>

                <Link style={link} to="/dashboard">
                    <DashboardIcon/> Dashboard
                </Link>

                <Link style={link} to="/citizens">
                    <PeopleIcon/> Citizens
                </Link>

                <Link style={link} to="/officers">
                    <EngineeringIcon/> Officers
                </Link>

                <Link style={link} to="/grievances">
                    <AssignmentIcon/> Complaints
                </Link>

                <Link style={link} to="/assign-officer">
                    <AssignmentIcon/> Assign Officer
                </Link>

                <Link style={link} to="#">
                    <AssessmentIcon/> Reports
                </Link>

                </>

            )}

            {role==="OFFICER" && (

                <>

                <Link style={link} to="/officer-dashboard">
                    <DashboardIcon/> Dashboard
                </Link>

                </>

            )}

            {role==="CITIZEN" && (

    <>

    <Link style={link} to="/citizen-dashboard">
        <DashboardIcon/> Dashboard
    </Link>

    <Link style={link} to="/grievance/register">
        <AssignmentIcon/> Register Complaint
    </Link>

    <Link style={link} to="/notifications">
        <NotificationsIcon/> Notifications
    </Link>

    </>

)}

            <button
                onClick={logout}
                style={logoutButton}
            >
                <LogoutIcon/> Logout
            </button>

        </div>

    );

}

const sidebar={

    position:"fixed",

    left:0,

    top:0,

    width:"250px",

    height:"100vh",

    background:"#0D47A1",

    padding:"20px",

    display:"flex",

    flexDirection:"column",

    gap:"20px"

};

const link={

    color:"white",

    textDecoration:"none",

    display:"flex",

    alignItems:"center",

    gap:"10px",

    fontSize:"18px"

};

const logoutButton={

    marginTop:"auto",

    padding:"12px",

    background:"#E53935",

    color:"white",

    border:"none",

    cursor:"pointer",

    display:"flex",

    alignItems:"center",

    justifyContent:"center",

    gap:"10px"

};

export default Navbar;