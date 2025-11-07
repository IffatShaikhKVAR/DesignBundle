// src/components/Toggles/IconToggle.tsx
import React, { useState } from "react";
import { Switch } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

const IconToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <LightMode color={darkMode ? "disabled" : "warning"} />
      <Switch
        checked={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
        color="default"
      />
      <DarkMode color={darkMode ? "primary" : "disabled"} />
    </div>
  );
};

export default IconToggle;
