// src/components/Alerts/BaseAlert.tsx
import React from "react";
import { Alert, AlertTitle } from "@mui/material";

export interface BaseAlertProps {
  title?: string;
  message: string;
  severity?: "success" | "info" | "warning" | "error";
}

const BaseAlert: React.FC<BaseAlertProps> = ({
  title,
  message,
  severity = "info",
}) => {
  return (
    <Alert severity={severity} sx={{ borderRadius: 2 }}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
};

export default BaseAlert;
