// src/components/Alerts/DismissibleAlert.tsx
import React, { useState } from "react";
import { Alert, Collapse, IconButton, AlertTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DismissibleAlert: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setOpen(false)}
          >
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

export default DismissibleAlert;
