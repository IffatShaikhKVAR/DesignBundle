// src/components/Toggles/ToggleVariants.tsx
import React, { useState } from "react";
import BaseToggle from "./BaseToggle";

export const PrimaryToggle = () => {
  const [checked, setChecked] = useState(false);
  return (
    <BaseToggle
      label="Primary Toggle"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      color="primary"
    />
  );
};

export const SuccessToggle = () => {
  const [checked, setChecked] = useState(false);
  return (
    <BaseToggle
      label="Success Toggle"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      color="success"
    />
  );
};

export const WarningToggle = () => {
  const [checked, setChecked] = useState(false);
  return (
    <BaseToggle
      label="Warning Toggle"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      color="warning"
    />
  );
};
