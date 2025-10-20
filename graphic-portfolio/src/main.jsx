import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ← add
import App from "./App.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* ← wrap App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
