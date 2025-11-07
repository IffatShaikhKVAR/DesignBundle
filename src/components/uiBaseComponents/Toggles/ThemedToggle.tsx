// src/components/Toggles/ThemedToggle.tsx
import React, { useState } from "react";
import { Switch, styled } from "@mui/material";

const ThemedSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#fff",
    transform: "translateX(20px)",
    "& + .MuiSwitch-track": {
      backgroundColor: "#673ab7",
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: "#bdbdbd",
  },
}));

const ThemedToggle: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ThemedSwitch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  );
};

export default ThemedToggle;
