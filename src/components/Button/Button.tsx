import React from "react";
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

export interface BaseButtonProps extends ButtonProps {
  label?: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({ label, children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        textTransform: "none",
        borderRadius: 2,
        fontWeight: 600,
        px: 3,
        py: 1,
        ...props.sx,
      }}
    >
      {label || children}
    </Button>
  );
};

export default BaseButton;
