// components/LoginButtons.tsx
import React from "react";
import BaseButton from "./Button";
import type { BaseButtonProps } from "./Button";

export const BlueLoginButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    label="Sign In"
    sx={{
      backgroundColor: "#36AFFF",
      color: "#fff",
      "&:hover": { backgroundColor: "#1E90FF" },
    }}
  />
);

export const PurpleLoginButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    label="Sign Me In"
    sx={{
      backgroundColor: "#6A47C9",
      color: "#fff",
      "&:hover": { backgroundColor: "#5739A6" },
    }}
  />
);

export const OutlineLoginButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    variant="outlined"
    label="Login"
    sx={{
      borderColor: "#6A47C9",
      color: "#6A47C9",
      "&:hover": { backgroundColor: "#f0e9ff" },
    }}
  />
);
