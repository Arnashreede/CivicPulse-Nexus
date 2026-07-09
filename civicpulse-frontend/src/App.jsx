import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CitizenRegistration from "./pages/CitizenRegistration";
import ViewCitizens from "./pages/ViewCitizens";
import RegisterGrievance from "./pages/RegisterGrievance";
import ViewGrievances from "./pages/ViewGrievances";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

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

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;