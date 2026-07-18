import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import CitizenRegistration from "./pages/CitizenRegistration";
import ViewCitizens from "./pages/ViewCitizens";

import RegisterGrievance from "./pages/RegisterGrievance";
import ViewGrievances from "./pages/ViewGrievances";

import OfficerRegistration from "./pages/OfficerRegistration";
import ViewOfficers from "./pages/ViewOfficers";

import AssignOfficer from "./pages/AssignOfficer";
import OfficerDashboard from "./pages/OfficerDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

import CitizenLogin from "./pages/CitizenLogin";
import OfficerLogin from "./pages/OfficerLogin";
import AdminLogin from "./pages/AdminLogin";
import CitizenDashboard from "./pages/CitizenDashboard";
import TrackComplaint from "./pages/TrackComplaint";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Citizen */}
        <Route
          path="/citizen/register"
          element={
            <ProtectedRoute>
              <CitizenRegistration />
            </ProtectedRoute>
          }
        />

        <Route
          path="/citizens"
          element={
            <ProtectedRoute>
              <ViewCitizens />
            </ProtectedRoute>
          }
        />

        {/* Grievance */}
        <Route
          path="/grievance/register"
          element={
            <ProtectedRoute>
              <RegisterGrievance />
            </ProtectedRoute>
          }
        />
        <Route
  path="/citizen-dashboard"
  element={
    <ProtectedRoute>
      <CitizenDashboard />
    </ProtectedRoute>
  }
/>

        <Route
          path="/grievances"
          element={
            <ProtectedRoute>
              <ViewGrievances />
            </ProtectedRoute>
          }
        />

        {/* Officer */}
        <Route
          path="/officer/register"
          element={
            <ProtectedRoute>
              <OfficerRegistration />
            </ProtectedRoute>
          }
        />

        <Route
          path="/officers"
          element={
            <ProtectedRoute>
              <ViewOfficers />
            </ProtectedRoute>
          }
        />

        {/* Assign Officer */}
        <Route
          path="/assign-officer"
          element={
            <ProtectedRoute>
              <AssignOfficer />
            </ProtectedRoute>
          }
        />

        {/* Officer Dashboard */}
        <Route
          path="/officer-dashboard"
          element={
            <ProtectedRoute>
              <OfficerDashboard />
            </ProtectedRoute>
          }
        />

        {/* Unknown Route */}
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/citizen-login" element={<CitizenLogin />} />

<Route path="/officer-login" element={<OfficerLogin />} />

<Route path="/admin-login" element={<AdminLogin />} />
<Route path="/track-complaint" element={<TrackComplaint />} />
<Route path="/notifications" element={<Notifications />} />
<Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;