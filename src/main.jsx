import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router";
import routes from "./routers/Routers.jsx";
import CoursesProvider from "./context/CoursesProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CoursesProvider>
          <Routes>{routes}</Routes>
        </CoursesProvider> 
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
