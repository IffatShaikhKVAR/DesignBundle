// src/components/ProgressIndicators/LinearProgressVariants.tsx
import React, { useEffect, useState } from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

export const PrimaryLinearProgress = () => <LinearProgress color="primary" />;
export const SuccessLinearProgress = () => <LinearProgress color="success" />;
export const ErrorLinearProgress = () => <LinearProgress color="error" />;

// Determinate progress simulation
export const DeterminateLinearProgress = () => {
  const [progress, setProgress] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => (old >= 100 ? 10 : old + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%">
      <Typography variant="body2" mb={1}>
        Determinate Progress: {progress}%
      </Typography>
      <LinearProgress variant="determinate" value={progress} color="secondary" />
    </Box>
  );
};
