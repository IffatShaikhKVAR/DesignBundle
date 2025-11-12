// src/components/ProgressIndicators/GradientProgress.tsx
import React from "react";
import { LinearProgress, styled } from "@mui/material";

const GradientBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 5,
  backgroundColor: "#f0f0f0",
  "& .MuiLinearProgress-bar": {
    backgroundImage: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
  },
}));

const GradientProgress: React.FC = () => <GradientBar variant="indeterminate" />;

export default GradientProgress;
