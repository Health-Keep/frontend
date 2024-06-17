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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
