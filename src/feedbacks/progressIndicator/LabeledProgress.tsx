// src/components/ProgressIndicators/LabeledProgress.tsx
import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

const LabeledProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Box width="100%">
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Typography variant="body2" color="text.secondary">
        {`${progress}%`}
      </Typography>
    </Box>
  );
};

export default LabeledProgress;
