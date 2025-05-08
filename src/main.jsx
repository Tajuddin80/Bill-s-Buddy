import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Route";
import AuthProvider from "./components/Contexts/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  
  <StrictMode>
   <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </HelmetProvider>
  </StrictMode>
);
