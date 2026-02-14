import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// 👇 BOOTSTRAP (OBLIGATORIO)
import "bootstrap/dist/css/bootstrap.min.css";

// 👇 ESTILOS GLOBALES
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
