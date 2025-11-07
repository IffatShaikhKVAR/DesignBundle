// src/components/Alerts/IconAlert.tsx
import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const IconAlert: React.FC = () => {
  return (
    <>
      <Alert
        icon={<InfoIcon fontSize="inherit" />}
        severity="info"
        sx={{ borderRadius: 2, mb: 1 }}
      >
        <AlertTitle>Info</AlertTitle>
        New update available for download.
      </Alert>

      <Alert
        icon={<CheckCircleIcon fontSize="inherit" />}
        severity="success"
        sx={{ borderRadius: 2, mb: 1 }}
      >
        <AlertTitle>Success</AlertTitle>
        Your payment has been processed successfully.
      </Alert>

      <Alert
        icon={<WarningAmberIcon fontSize="inherit" />}
        severity="warning"
        sx={{ borderRadius: 2, mb: 1 }}
      >
        <AlertTitle>Warning</AlertTitle>
        Storage space running low.
      </Alert>

      <Alert
        icon={<ErrorOutlineIcon fontSize="inherit" />}
        severity="error"
        sx={{ borderRadius: 2 }}
      >
        <AlertTitle>Error</AlertTitle>
        Failed to connect to the server.
      </Alert>
    </>
  );
};

export default IconAlert;
