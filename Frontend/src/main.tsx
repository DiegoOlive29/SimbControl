import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes";
import { AlertProvider } from "./common/context/AlertContext";
import { AuthProvider } from "./common/context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AlertProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AlertProvider>
  </StrictMode>
);
