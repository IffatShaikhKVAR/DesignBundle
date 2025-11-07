// src/components/Alerts/OutlinedAlert.tsx
import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const OutlinedAlert: React.FC = () => {
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

export default OutlinedAlert;
