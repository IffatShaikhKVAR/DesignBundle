import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Import BrowserRouter
import { AppThemeProvider } from "./theme/AppTheme.tsx";
import "./index.css";
import App from "../document/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider defaultDark={false}>
      <BrowserRouter> {/* ✅ Wrap App with BrowserRouter */}
        <App />
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
);
