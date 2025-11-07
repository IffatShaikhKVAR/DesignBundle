// src/components/Alerts/FilledAlert.tsx
import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const FilledAlert: React.FC = () => {
  return (
    <Alert
      variant="filled"
      severity="success"
      sx={{
        borderRadius: 2,
        fontWeight: 500,
      }}
    >
      <AlertTitle>Success</AlertTitle>
      Your profile has been updated successfully.
    </Alert>
  );
};

export default FilledAlert;
