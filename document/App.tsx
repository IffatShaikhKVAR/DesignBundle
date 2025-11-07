import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SidebarLayout from "./layout/SidebarLayout";

// Demo pages
import ButtonDemo from "../document/Demo/ButtonDemo";
import InputDemo from "../document/Demo/InputDemo";
import CheckboxDemo from "../document/Demo/CheckboxDemo"; // ✅ Add this line when you have CheckboxDemo
import DropdownDemo from "../document/Demo/DropdownDemo";
import ToggleDemo from "../document/Demo/ToggleDemo";
import ProgressDemo from "../document/Demo/ProgressDemo";
// import TypographyDemo from "../document/Demo/TypographyDemo"; // Uncomment when ready

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        {/* Default redirect to Button Demo */}
        <Route index element={<Navigate to="/button" replace />} />

        {/* Demo routes */}
        <Route path="button" element={<ButtonDemo />} />
        <Route path="input" element={<InputDemo />} />
        <Route path="checkbox" element={<CheckboxDemo />} />
        <Route path="dropdown" element={<DropdownDemo />} />
        <Route path="toggle" element={<ToggleDemo />} />
        <Route path="progress" element={<ProgressDemo />} />

        {/* <Route path="typography" element={<TypographyDemo />} /> */}

        {/* Placeholder route */}
        <Route path="card" element={<h3>Card demo coming soon...</h3>} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/button" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
