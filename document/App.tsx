import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SidebarLayout from "./layout/SidebarLayout";
import  ButtonDemo  from "../document/Demo/ButtonDemo";
import InputDemo from "../document/Demo/InputDemo"
// import { TypographyDemo } from "./components/Typography/TypographyDemo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        <Route index element={<Navigate to="/button" />} />
        <Route path="button" element={<ButtonDemo />} />
        <Route path="input" element={<InputDemo />} />
        {/* <Route path="typography" element={<TypographyDemo />} /> */}
        <Route path="card" element={<h3>Card demo coming soon</h3>} />
      </Route>
    </Routes>
  );
}
