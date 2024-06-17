import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import OrgLogin from "./pages/Org-Login.jsx";
import PatientLogin from "./pages/patient/Patient-Login.jsx";
import PatientSignup from "./pages/patient/Patient-Signup.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <HomePage /> },
  { path: "/login", element: <Login /> },
  { path: "/org-login", element: <OrgLogin /> },
  { path: "/patient-login", element: <PatientLogin /> },
  {path: "/patient-signup", element: <PatientSignup />}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
