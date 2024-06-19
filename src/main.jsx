import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import OrgLogin from "./pages/organization/Org-Login.jsx";
import OrgSignup from "./pages/organization/org-signup.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import VerifyEmail from "./pages/organization/VerifyEmail.jsx";
import VerifySuccess from "./pages/organization/VerifySuccess.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import DashBoard from "./pages/organization/DashBoard.jsx";
import PatientSearchCard from "./pages/organization/PatientSearchCard.jsx";
import MedHistory from "./pages/organization/MedHistory.jsx";
import PatientSignup from "./pages/patient/Patient-Signup.jsx";
import ResetPassword from "./pages/patient/Reset-Password.jsx";
import ForgotPassword from "./pages/patient/Forgot-Password.jsx";
import PatientLogin from "./pages/patient/Patient-Login.jsx";
import Email from "./pages/patient/Email.jsx";
import PasswordChanged from "./pages/patient/PasswordChanged.jsx";
import PatientProfile from "./pages/patient/Patient-Profile.jsx";
import EmailVerification from "./pages/patient/EmailVerification.jsx";
import EmailSuccessful from "./pages/patient/EmailSuccessful.jsx";



const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/login", element: <Login /> },
  { path: "/org-login", element: <OrgLogin /> },
  { path: "/user-login", element: <Login /> },
  { path: "/org-signup", element: <OrgSignup /> },
  { path: "/org-verify", element: <VerifyEmail /> },
  { path: "/success", element: <VerifySuccess /> },
  { path: "/dashboard", element: <DashBoard /> },
  { path: "/searchcard", element: <PatientSearchCard /> },
  { path: "/medhistory", element: <MedHistory /> },
  {path: "/patient-signup", element: <PatientSignup />},
  {path: "/forgot-password", element: <ForgotPassword />},
  {path: "/patient-login", element: <PatientLogin />},
  {path: "/Email", element: <Email />},
  {path: "/reset-password", element: <ResetPassword/>},
  {path: "/passwordchanged", element: <PasswordChanged />},
  {path: "/patient-profile", element: <PatientProfile />},
  {path: "/emailverification", element: <EmailVerification />},
  {path: "/emailsuccessful", element: <EmailSuccessful/>},


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
