import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/context/Context";
import ThemeProvider from "./components/context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
