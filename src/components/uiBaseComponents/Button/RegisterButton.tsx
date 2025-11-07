// components/Button/RegisterButtons.tsx
import React from "react";
import BaseButton from "./Button";
import type { BaseButtonProps } from "./Button";

export const PinkRegisterButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    label="Register"
    sx={{
      backgroundColor: "#6C4BAE",
      color: "#fff",
      "&:hover": { backgroundColor: "#6C4BAE" },
    }}
  />
);

export const OutlineRegisterButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    variant="outlined"
    label="Sign Up"
    sx={{
      borderColor: "#ff4081",
      color: "#ff4081",
      "&:hover": { backgroundColor: "#ffeef4" },
    }}
  />
);

export const GradientRegisterButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    label="Save Changes"
    sx={{
      backgroundColor: "#6C4BAE",
      color: "#fff",
      "&:hover": {
        background: { backgroundColor: "#6C4BAE" },
      },
    }}
  />
);
