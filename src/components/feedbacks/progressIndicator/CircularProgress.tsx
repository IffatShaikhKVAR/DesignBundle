// src/components/ProgressIndicators/CircularProgressVariants.tsx
import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

export const CircularPrimary = () => <CircularProgress color="primary" />;
export const CircularSuccess = () => <CircularProgress color="success" />;
export const CircularError = () => <CircularProgress color="error" />;

// Determinate Circular Progress
export const DeterminateCircular = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 700);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
      <CircularProgress variant="determinate" value={value} color="info" />
      <Typography variant="body2">{`${Math.round(value)}%`}</Typography>
    </Box>
  );
};

export const CircleProgress ={
  DeterminateCircular,
  CircularPrimary,
  CircularSuccess,
  CircularError,
}