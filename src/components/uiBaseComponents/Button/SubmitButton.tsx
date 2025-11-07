// components/Button/SubmitButtons.tsx
import React from "react";
import BaseButton from "./Button";
import type { BaseButtonProps } from "./Button";

// Primary Submit (default)
export const PrimarySubmitButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    label="Submit"
    sx={{
      backgroundColor: "#6C4BAE",
      color: "#fff",
      "&:hover": { backgroundColor: "#6C4BAE" },
    }}
  />
);

// Success Submit
export const SuccessSubmitButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    label="Success"
    sx={{
      backgroundColor: "#4caf50",
      color: "#fff",
      "&:hover": { backgroundColor: "#43a047" },
    }}
  />
);

// Warning Submit
export const WarningSubmitButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    label="Warning"
    sx={{
      backgroundColor: "#ff9800",
      color: "#fff",
      "&:hover": { backgroundColor: "#fb8c00" },
    }}
  />
);

// Outline Submit
export const OutlineSubmitButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    label="Outlined"
    variant="outlined"
    sx={{
      borderColor: "#2e7d32",
      color: "#2e7d32",
      "&:hover": { backgroundColor: "#e8f5e9" },
    }}
  />
);
