// src/components/ProgressIndicators/BaseProgress.tsx
import React from "react";
import { LinearProgress, CircularProgress, Box } from "@mui/material";

export interface BaseProgressProps {
  type?: "linear" | "circular";
  value?: number;
  variant?: "determinate" | "indeterminate";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: number;
  thickness?: number;
}

const BaseProgress: React.FC<BaseProgressProps> = ({
  type = "linear",
  value,
  variant = "indeterminate",
  color = "primary",
  size = 40,
  thickness = 4,
}) => {
  return type === "linear" ? (
    <LinearProgress
      variant={variant}
      value={value}
      color={color}
      sx={{ borderRadius: 2, height: 6 }}
    />
  ) : (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress
        variant={variant}
        value={value}
        color={color}
        size={size}
        thickness={thickness}
      />
    </Box>
  );
};

export default BaseProgress;
