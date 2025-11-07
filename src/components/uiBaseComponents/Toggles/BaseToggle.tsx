// src/components/Toggles/BaseToggle.tsx
import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

export interface BaseToggleProps {
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  color?: "primary" | "secondary" | "error" | "success" | "info" | "warning";
}

const BaseToggle: React.FC<BaseToggleProps> = ({
  label = "Toggle",
  checked,
  onChange,
  disabled = false,
  color = "primary",
}) => (
  <FormControlLabel
    control={<Switch checked={checked} onChange={onChange} disabled={disabled} color={color} />}
    label={label}
  />
);

export default BaseToggle;
