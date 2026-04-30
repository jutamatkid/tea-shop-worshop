import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Tailwind from "./learn-hooks/Tailwind";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Tailwind />
  </StrictMode>,
);
