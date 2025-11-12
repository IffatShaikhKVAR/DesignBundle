// src/components/Alerts/IconAlert.tsx
import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

/**
 * OUTLINED ICON ALERTS
 */

export const OutlinedInfoIconAlert: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      icon={<InfoIcon fontSize="inherit" />}
      severity="info"
      sx={{ borderRadius: 2, mb: 1, borderWidth: 2 }}
    >
      <AlertTitle>Info</AlertTitle>
      New update available for download.
    </Alert>
  );
};

export const OutlinedSuccessIconAlert: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      icon={<CheckCircleIcon fontSize="inherit" />}
      severity="success"
      sx={{ borderRadius: 2, mb: 1, borderWidth: 2 }}
    >
      <AlertTitle>Success</AlertTitle>
      Your payment has been processed successfully.
    </Alert>
  );
};

export const OutlinedWarningIconAlert: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      icon={<WarningAmberIcon fontSize="inherit" />}
      severity="warning"
      sx={{ borderRadius: 2, mb: 1, borderWidth: 2 }}
    >
      <AlertTitle>Warning</AlertTitle>
      Storage space running low.
    </Alert>
  );
};

export const OutlinedErrorIconAlert: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      icon={<ErrorOutlineIcon fontSize="inherit" />}
      severity="error"
      sx={{ borderRadius: 2, borderWidth: 2 }}
    >
      <AlertTitle>Error</AlertTitle>
      Failed to connect to the server.
    </Alert>
  );
};

/**
 * FILLED ICON ALERTS
 */

export const FilledInfoIconAlert: React.FC = () => {
  return (
    <Alert
      variant="filled"
      icon={<InfoIcon fontSize="inherit" />}
      severity="info"
      sx={{ borderRadius: 2, mb: 1 }}
    >
      <AlertTitle>Info</AlertTitle>
      New update available for download.
    </Alert>
  );
};

export const FilledSuccessIconAlert: React.FC = () => {
  return (
    <Alert
      variant="filled"
      icon={<CheckCircleIcon fontSize="inherit" />}
      severity="success"
      sx={{ borderRadius: 2, mb: 1 }}
    >
      <AlertTitle>Success</AlertTitle>
      Your payment has been processed successfully.
    </Alert>
  );
};

export const FilledWarningIconAlert: React.FC = () => {
  return (
    <Alert
      variant="filled"
      icon={<WarningAmberIcon fontSize="inherit" />}
      severity="warning"
      sx={{ borderRadius: 2, mb: 1 }}
    >
      <AlertTitle>Warning</AlertTitle>
      Storage space running low.
    </Alert>
  );
};

export const FilledErrorIconAlert: React.FC = () => {
  return (
    <Alert
      variant="filled"
      icon={<ErrorOutlineIcon fontSize="inherit" />}
      severity="error"
      sx={{ borderRadius: 2 }}
    >
      <AlertTitle>Error</AlertTitle>
      Failed to connect to the server.
    </Alert>
  );
};

/**
 * STANDARD ICON ALERTS (no variant)
 */

export const StandardInfoIconAlert: React.FC = () => {
  return (
    <Alert
      icon={<InfoIcon fontSize="inherit" />}
      severity="info"
      sx={{ borderRadius: 2, mb: 1 }}
    >
      <AlertTitle>Info</AlertTitle>
      New update available for download.
    </Alert>
  );
};

export const StandardSuccessIconAlert: React.FC = () => {
  return (
    <Alert
      icon={<CheckCircleIcon fontSize="inherit" />}
      severity="success"
      sx={{ borderRadius: 2, mb: 1 }}
    >
      <AlertTitle>Success</AlertTitle>
      Your payment has been processed successfully.
    </Alert>
  );
};

export const StandardWarningIconAlert: React.FC = () => {
  return (
    <Alert
      icon={<WarningAmberIcon fontSize="inherit" />}
      severity="warning"
      sx={{ borderRadius: 2, mb: 1 }}
    >
      <AlertTitle>Warning</AlertTitle>
      Storage space running low.
    </Alert>
  );
};

export const StandardErrorIconAlert: React.FC = () => {
  return (
    <Alert
      icon={<ErrorOutlineIcon fontSize="inherit" />}
      severity="error"
      sx={{ borderRadius: 2 }}
    >
      <AlertTitle>Error</AlertTitle>
      Failed to connect to the server.
    </Alert>
  );
};

/**
 * ICON ALERTS WITHOUT TITLE
 */

export const OutlinedInfoIconAlertNoTitle: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      icon={<InfoIcon fontSize="inherit" />}
      severity="info"
      sx={{ borderRadius: 2, mb: 1, borderWidth: 2 }}
    >
      New update available for download.
    </Alert>
  );
};

export const FilledSuccessIconAlertNoTitle: React.FC = () => {
  return (
    <Alert
      variant="filled"
      icon={<CheckCircleIcon fontSize="inherit" />}
      severity="success"
      sx={{ borderRadius: 2, mb: 1 }}
    >
      Your payment has been processed successfully.
    </Alert>
  );
};

export const StandardWarningIconAlertNoTitle: React.FC = () => {
  return (
    <Alert
      icon={<WarningAmberIcon fontSize="inherit" />}
      severity="warning"
      sx={{ borderRadius: 2, mb: 1 }}
    >
      Storage space running low.
    </Alert>
  );
};

export const OutlinedErrorIconAlertNoTitle: React.FC = () => {
  return (
    <Alert
      variant="outlined"
      icon={<ErrorOutlineIcon fontSize="inherit" />}
      severity="error"
      sx={{ borderRadius: 2, borderWidth: 2 }}
    >
      Failed to connect to the server.
    </Alert>
  );
};

export const IconAlerts = {
  OutlinedErrorIconAlertNoTitle,
  StandardWarningIconAlertNoTitle,
  FilledSuccessIconAlertNoTitle,
  OutlinedInfoIconAlertNoTitle,
  StandardErrorIconAlert,
  StandardWarningIconAlert,
  StandardSuccessIconAlert,
  StandardInfoIconAlert,
  OutlinedInfoIconAlert,
  OutlinedSuccessIconAlert,
  OutlinedWarningIconAlert,
  OutlinedErrorIconAlert,
  FilledInfoIconAlert,
  FilledSuccessIconAlert,
  FilledWarningIconAlert,
  FilledErrorIconAlert
};