import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import { RouteHandler } from "./RouteHandler";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteHandler />
  </StrictMode>
);
