import React, { useState } from "react";
import { Alert, Collapse, IconButton, AlertTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

/* -------------------------------------------------------------------------- */
/*                        OUTLINED DISMISSIBLE ALERTS                         */
/* -------------------------------------------------------------------------- */

export const OutlinedInfo = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="outlined"
        severity="info"
        icon={<InfoIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1, borderWidth: 2 }}
      >
        <AlertTitle>Info</AlertTitle>
        New update available for download.
      </Alert>
    </Collapse>
  );
};

export const OutlinedSuccess = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="outlined"
        severity="success"
        icon={<CheckCircleIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1, borderWidth: 2 }}
      >
        <AlertTitle>Success</AlertTitle>
        Your changes have been saved successfully.
      </Alert>
    </Collapse>
  );
};

export const OutlinedWarning = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="outlined"
        severity="warning"
        icon={<WarningAmberIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1, borderWidth: 2 }}
      >
        <AlertTitle>Warning</AlertTitle>
        Your subscription is about to expire.
      </Alert>
    </Collapse>
  );
};

export const OutlinedError = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="outlined"
        severity="error"
        icon={<ErrorOutlineIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, borderWidth: 2 }}
      >
        <AlertTitle>Error</AlertTitle>
        Something went wrong — please try again!
      </Alert>
    </Collapse>
  );
};

/* -------------------------------------------------------------------------- */
/*                          FILLED DISMISSIBLE ALERTS                         */
/* -------------------------------------------------------------------------- */

export const FilledInfoDismissibleAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        severity="info"
        icon={<InfoIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1 }}
      >
        <AlertTitle>Info</AlertTitle>
        New update available for download.
      </Alert>
    </Collapse>
  );
};

export const FilledSuccessDismissibleAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckCircleIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1 }}
      >
        <AlertTitle>Success</AlertTitle>
        Your changes have been saved successfully.
      </Alert>
    </Collapse>
  );
};

export const FilledWarningDismissibleAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        severity="warning"
        icon={<WarningAmberIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1 }}
      >
        <AlertTitle>Warning</AlertTitle>
        Your subscription is about to expire.
      </Alert>
    </Collapse>
  );
};

export const FilledErrorDismissibleAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        severity="error"
        icon={<ErrorOutlineIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2 }}
      >
        <AlertTitle>Error</AlertTitle>
        Something went wrong — please try again!
      </Alert>
    </Collapse>
  );
};

/* -------------------------------------------------------------------------- */
/*                        STANDARD DISMISSIBLE ALERTS                         */
/* -------------------------------------------------------------------------- */

export const StandardInfoDismissibleAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        severity="info"
        icon={<InfoIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1 }}
      >
        <AlertTitle>Info</AlertTitle>
        New update available for download.
      </Alert>
    </Collapse>
  );
};

export const StandardSuccessDismissibleAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        severity="success"
        icon={<CheckCircleIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1 }}
      >
        <AlertTitle>Success</AlertTitle>
        Your changes have been saved successfully.
      </Alert>
    </Collapse>
  );
};

export const StandardWarningDismissibleAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        severity="warning"
        icon={<WarningAmberIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1 }}
      >
        <AlertTitle>Warning</AlertTitle>
        Your subscription is about to expire.
      </Alert>
    </Collapse>
  );
};

export const StandardErrorDismissibleAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        icon={<ErrorOutlineIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2 }}
      >
        <AlertTitle>Error</AlertTitle>
        Something went wrong — please try again!
      </Alert>
    </Collapse>
  );
};

/* -------------------------------------------------------------------------- */
/*                    DISMISSIBLE ALERTS WITHOUT TITLE                        */
/* -------------------------------------------------------------------------- */

export const OutlinedInfoDismissibleAlertNoTitle = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="outlined"
        severity="info"
        icon={<InfoIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1, borderWidth: 2 }}
      >
        New update available for download.
      </Alert>
    </Collapse>
  );
};

export const FilledSuccessDismissibleAlertNoTitle = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckCircleIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1 }}
      >
        Your changes have been saved successfully.
      </Alert>
    </Collapse>
  );
};

export const StandardWarningDismissibleAlertNoTitle = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        severity="warning"
        icon={<WarningAmberIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, mb: 1 }}
      >
        Your subscription is about to expire.
      </Alert>
    </Collapse>
  );
};

export const OutlinedErrorDismissibleAlertNoTitle = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        variant="outlined"
        severity="error"
        icon={<ErrorOutlineIcon fontSize="inherit" />}
        action={
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 2, borderWidth: 2 }}
      >
        Something went wrong — please try again!
      </Alert>
    </Collapse>
  );
};

/* -------------------------------------------------------------------------- */
/*                         ✅ Export all alerts together                      */
/* -------------------------------------------------------------------------- */

export const DismissibleAlerts = {
  // No Title
  OutlinedInfoDismissibleAlertNoTitle,
  FilledSuccessDismissibleAlertNoTitle,
  StandardWarningDismissibleAlertNoTitle,
  OutlinedErrorDismissibleAlertNoTitle,

  // Standard
  StandardInfoDismissibleAlert,
  StandardSuccessDismissibleAlert,
  StandardWarningDismissibleAlert,
  StandardErrorDismissibleAlert,

  // Outlined
  OutlinedInfo,
  OutlinedSuccess,
  OutlinedWarning,
  OutlinedError,

  // Filled
  FilledInfoDismissibleAlert,
  FilledSuccessDismissibleAlert,
  FilledWarningDismissibleAlert,
  FilledErrorDismissibleAlert,
};

export default DismissibleAlerts;
