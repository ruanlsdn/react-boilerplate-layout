import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateContextProvider } from "./contexts/StateContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>
);
