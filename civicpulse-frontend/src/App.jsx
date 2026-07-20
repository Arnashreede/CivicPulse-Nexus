import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import CitizenRegistration from "./pages/CitizenRegistration";
import ViewCitizens from "./pages/ViewCitizens";
import CitizenDashboard from "./pages/CitizenDashboard";
import CitizenApplication from "./pages/CitizenApplication";
import MyApplications from "./pages/MyApplications";
import UploadDocument from "./pages/UploadDocument";
import RegisterGrievance from "./pages/RegisterGrievance";
import ViewGrievances from "./pages/ViewGrievances";

import OfficerRegistration from "./pages/OfficerRegistration";
import ViewOfficers from "./pages/ViewOfficers";
import AssignOfficer from "./pages/AssignOfficer";
import OfficerDashboard from "./pages/OfficerDashboard";
import OfficerApplicationDashboard from "./pages/OfficerApplicationDashboard";

import CertificatePage from "./pages/CertificatePage";
import ViewCertificates from "./pages/ViewCertificates";

import CitizenLogin from "./pages/CitizenLogin";
import OfficerLogin from "./pages/OfficerLogin";
import AdminLogin from "./pages/AdminLogin";

import TrackComplaint from "./pages/TrackComplaint";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/citizen-login" element={<CitizenLogin />} />
        <Route path="/officer-login" element={<OfficerLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

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
<Route path="/upload-document" element={<UploadDocument />} />
        <Route
          path="/citizens"
          element={
            <ProtectedRoute>
              <ViewCitizens />
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
          path="/citizen/application"
          element={
            <ProtectedRoute>
              <CitizenApplication />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />

        {/* Certificates */}
        <Route
          path="/certificates"
          element={
            <ProtectedRoute>
              <ViewCertificates />
            </ProtectedRoute>
          }
        />

        <Route
          path="/certificate/:id"
          element={
            <ProtectedRoute>
              <CertificatePage />
            </ProtectedRoute>
          }
        />

        {/* Grievances */}
        <Route
          path="/grievance/register"
          element={
            <ProtectedRoute>
              <RegisterGrievance />
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

        {/* Officers */}
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

        <Route
          path="/assign-officer"
          element={
            <ProtectedRoute>
              <AssignOfficer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/officer-dashboard"
          element={
            <ProtectedRoute>
              <OfficerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/officer/applications"
          element={
            <ProtectedRoute>
              <OfficerApplicationDashboard />
            </ProtectedRoute>
          }
        />

        {/* Other Pages */}
        <Route
          path="/track-complaint"
          element={
            <ProtectedRoute>
              <TrackComplaint />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

        {/* Unknown Route */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;