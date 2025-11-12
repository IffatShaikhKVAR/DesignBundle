// src/components/Alerts/FilledAlert.tsx
import React from "react";
import { Alert, AlertTitle } from "@mui/material";

// --- Individual Alert Components ---

export const FilledWarningAlert: React.FC = () => (
  <Alert variant="filled" severity="warning" sx={{ borderRadius: 2 }}>
    <AlertTitle>Warning</AlertTitle>
    Your subscription is about to expire.
  </Alert>
);

export const FilledSuccessAlert: React.FC = () => (
  <Alert variant="filled" severity="success" sx={{ borderRadius: 2 }}>
    <AlertTitle>Success</AlertTitle>
    Your changes have been saved successfully.
  </Alert>
);

export const FilledErrorAlert: React.FC = () => (
  <Alert variant="filled" severity="error" sx={{ borderRadius: 2 }}>
    <AlertTitle>Error</AlertTitle>
    Something went wrong. Please try again later.
  </Alert>
);

export const FilledInfoAlert: React.FC = () => (
  <Alert variant="filled" severity="info" sx={{ borderRadius: 2 }}>
    <AlertTitle>Info</AlertTitle>
    New features are available. Update now to get started.
  </Alert>
);

export const FilledAlertNoTitle: React.FC = () => (
  <Alert variant="filled" severity="success" sx={{ borderRadius: 2 }}>
    Your changes have been saved successfully.
  </Alert>
);

// --- ✅ Export all alerts together ---
export const FilledAlerts = {
  Warning: FilledWarningAlert,
  Success: FilledSuccessAlert,
  Error: FilledErrorAlert,
  Info: FilledInfoAlert,
  NoTitle: FilledAlertNoTitle,
};

