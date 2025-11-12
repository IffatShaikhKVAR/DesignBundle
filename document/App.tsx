import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SidebarLayout from "./layout/SidebarLayout";

// Demo pages
import ButtonDemo from "../document/Demo/BaseComponents/ButtonDemo";
import InputDemo from "../document/Demo/BaseComponents/InputDemo";
import CheckboxDemo from "../document/Demo/BaseComponents/CheckboxDemo"; // ✅ Add this line when you have CheckboxDemo
import DropdownDemo from "../document/Demo/BaseComponents/DropdownDemo";
import ToggleDemo from "./Demo/BaseComponents/ToggleDemo";
import ProgressDemo from "../document/Demo/feedbackComponents/ProgressDemo";
import TypographyDemo from "../document/Demo/DataDisplay/TypographyDemo"; // Uncomment when ready
import CardDemo from "./Demo/Surface/CardDemo";
import SidebarDemo from "./Demo/Surface/SidebarDemo";
import AppBarDemo from "./Demo/Surface/AppBarDemo";
import TableDemo from "../document/Demo/DataDisplay/TableDemo";
import DividerDemo from "../document/Demo/DataDisplay/DividerDemo";
import BadgeDemo from "../document/Demo/DataDisplay/BadgeDemo";
import CalenderDemo from "../document/Demo/DataDisplay/CalenderDemo";
import AlertDemo from "../document/Demo/feedbackComponents/AlertDemo";
import ModalDemo from "../document/Demo/Surface/ModalDemo";
import PaginationDemo from "../document/Demo/Surface/PaginationDemo";

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
        <Route path="alerts" element={<AlertDemo />} />
        <Route path="typography" element={<TypographyDemo />} />
        <Route path="table" element={<TableDemo />} />
        <Route path="divider" element={<DividerDemo />} />
        <Route path="badge" element={<BadgeDemo />} />
        <Route path="calender" element={<CalenderDemo />} />
        <Route path="sideBar" element={<SidebarDemo />} />
        <Route path="appBar" element={<AppBarDemo />} />
        <Route path="modal" element={<ModalDemo />} />
        <Route path="pagination" element={<PaginationDemo />} />
        {/* Placeholder route */}
        <Route path="card" element={<CardDemo />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/button" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
