import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/members.css";
import { RouteHandler } from "./RouteHandler";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <RouteHandler />
  // </StrictMode>
);
