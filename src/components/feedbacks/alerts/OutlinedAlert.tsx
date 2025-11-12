// src/components/Alerts/OutlinedAlert.tsx
import React from "react";
import { Alert, AlertTitle } from "@mui/material";

/**
 * OUTLINED ALERTS
 */

// Warning Outlined Alert
export const OutlinedWarningAlert: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      severity="warning"
      sx={{
        borderRadius: 2,
        borderWidth: 2,
        "& .MuiAlert-icon": { color: "#ed6c02" },
      }}
    >
      <AlertTitle>Warning</AlertTitle>
      Your subscription is about to expire.
    </Alert>
  );
};

// Success Outlined Alert
export const OutlinedSuccessAlert: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      severity="success"
      sx={{
        borderRadius: 2,
        borderWidth: 2,
        "& .MuiAlert-icon": { color: "#2e7d32" },
      }}
    >
      <AlertTitle>Success</AlertTitle>
      Your changes have been saved successfully.
    </Alert>
  );
};

// Error Outlined Alert
export const OutlinedErrorAlert: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      severity="error"
      sx={{
        borderRadius: 2,
        borderWidth: 2,
        "& .MuiAlert-icon": { color: "#d32f2f" },
      }}
    >
      <AlertTitle>Error</AlertTitle>
      Something went wrong. Please try again later.
    </Alert>
  );
};

// Info Outlined Alert
export const OutlinedInfoAlert: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      severity="info"
      sx={{
        borderRadius: 2,
        borderWidth: 2,
        "& .MuiAlert-icon": { color: "#1976d2" },
      }}
    >
      <AlertTitle>Info</AlertTitle>
      New features are available. Update now to get started.
    </Alert>
  );
};

// Outlined Alert without Title
export const OutlinedAlertNoTitle: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      severity="warning"
      sx={{
        borderRadius: 2,
        borderWidth: 2,
      }}
    >
      Your subscription is about to expire.
    </Alert>
  );
};

export const OutlineAlerts = {
  OutlinedAlertNoTitle,
  OutlinedInfoAlert,
  OutlinedErrorAlert,
  OutlinedSuccessAlert,
  OutlinedWarningAlert,
};