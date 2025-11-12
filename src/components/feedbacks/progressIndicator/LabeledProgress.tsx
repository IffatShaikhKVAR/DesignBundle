// src/components/ProgressIndicators/LabeledProgress.tsx
import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Typography, CircularProgress, styled } from "@mui/material";

// Basic Labeled Progress
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

// Labeled Progress with Title
export const LabeledProgressWithTitle: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 8));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="subtitle2" fontWeight={600}>
          Download Progress
        </Typography>
        <Typography variant="body2" color="primary" fontWeight={600}>
          {`${progress}%`}
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3 }} />
    </Box>
  );
};

// Labeled Progress with Description
export const LabeledProgressWithDescription: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%">
      <Typography variant="subtitle2" fontWeight={600} mb={0.5}>
        File Upload
      </Typography>
      <Box display="flex" gap={2} alignItems="center">
        <Box flex={1}>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
        </Box>
        <Box minWidth={45}>
          <Typography variant="body2" color="text.secondary" align="center">
            {`${progress}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="caption" color="text.secondary" mt={1} display="block">
        Uploading file_document.pdf...
      </Typography>
    </Box>
  );
};

// Labeled Progress with Status
export const LabeledProgressWithStatus: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev >= 100 ? 0 : prev + 10;
        if (next === 0) setStatus("Initializing...");
        else if (next <= 25) setStatus("Preparing...");
        else if (next <= 50) setStatus("Processing...");
        else if (next <= 75) setStatus("Completing...");
        else setStatus("Almost done...");
        return next;
      });
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="subtitle2" fontWeight={600}>
          Processing
        </Typography>
        <Box display="flex" gap={1} alignItems="center">
          <Typography variant="body2" fontWeight={600} color="primary">
            {`${progress}%`}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {status}
          </Typography>
        </Box>
      </Box>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3 }} />
    </Box>
  );
};

// Labeled Circular Progress
export const LabeledCircularProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={progress} size={100} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            {`${progress}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary">
        Completing...
      </Typography>
    </Box>
  );
};

// Multi-Step Labeled Progress
interface Step {
  label: string;
  progress: number;
}

export const MultiStepLabeledProgress: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps: Step[] = [
    { label: "Step 1: Validation", progress: 100 },
    { label: "Step 2: Processing", progress: 75 },
    { label: "Step 3: Optimization", progress: 45 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={2}>
      {steps.map((step, index) => (
        <Box key={index}>
          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography variant="body2" fontWeight={index === currentStep ? 600 : 400}>
              {step.label}
            </Typography>
            <Typography variant="body2" color={index === currentStep ? "primary" : "text.secondary"}>
              {`${step.progress}%`}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={step.progress}
            sx={{
              height: 6,
              borderRadius: 3,
              opacity: index === currentStep ? 1 : 0.5,
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

// Labeled Progress with Icon
export const LabeledProgressWithIcon: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  const getIcon = () => {
    if (progress < 33) return "📥";
    if (progress < 66) return "⚙️";
    return "✅";
  };

  return (
    <Box width="100%">
      <Box display="flex" alignItems="center" gap={2} mb={1}>
        <Typography variant="h5">{getIcon()}</Typography>
        <Box flex={1}>
          <Typography variant="subtitle2" fontWeight={600}>
            Installation
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {progress < 33 && "Downloading files..."}
            {progress >= 33 && progress < 66 && "Installing..."}
            {progress >= 66 && "Finalizing..."}
          </Typography>
        </Box>
        <Typography variant="body2" fontWeight={600} color="primary">
          {`${progress}%`}
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3 }} />
    </Box>
  );
};

// Labeled Progress with Time Estimate
export const LabeledProgressWithTime: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const totalTime = 60;
  const remainingTime = Math.round((totalTime * (100 - progress)) / 100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="subtitle2" fontWeight={600}>
          Download
        </Typography>
        <Box display="flex" gap={2} alignItems="center">
          <Typography variant="body2" color="primary" fontWeight={600}>
            {`${progress}%`}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {remainingTime > 0 ? `${remainingTime}s remaining` : "Complete"}
          </Typography>
        </Box>
      </Box>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3 }} />
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography variant="caption" color="text.secondary">
          Speed: 2.5 MB/s
        </Typography>
        <Typography variant="caption" color="text.secondary">
          50 MB / 100 MB
        </Typography>
      </Box>
    </Box>
  );
};

// Labeled Progress with Color Status
export const LabeledProgressWithColorStatus: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  const getColor = () => {
    if (progress < 33) return "#ff9800";
    if (progress < 66) return "#2575fc";
    return "#4caf50";
  };

  const getLabel = () => {
    if (progress < 33) return "Starting";
    if (progress < 66) return "In Progress";
    return "Finishing";
  };

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="subtitle2" fontWeight={600}>
          Task Execution
        </Typography>
        <Box display="flex" gap={1} alignItems="center">
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: getColor(),
            }}
          />
          <Typography variant="body2" fontWeight={600} color={getColor()}>
            {getLabel()}
          </Typography>
          <Typography variant="body2" fontWeight={600} color="primary">
            {`${progress}%`}
          </Typography>
        </Box>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 6,
          borderRadius: 3,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: getColor(),
          },
        }}
      />
    </Box>
  );
};

// Labeled Progress with Animated Background
export const LabeledProgressAnimated: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  const AnimatedBar = styled(LinearProgress)({
    height: 8,
    borderRadius: 4,
    backgroundColor: "#f0f0f0",
    "& .MuiLinearProgress-bar": {
      backgroundImage: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
    },
    "@keyframes shimmer": {
      "0%": {
        backgroundPosition: "0% 0%",
      },
      "100%": {
        backgroundPosition: "200% 0%",
      },
    },
  });

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="subtitle2" fontWeight={600}>
          Syncing Data
        </Typography>
        <Typography variant="body2" fontWeight={600} color="primary">
          {`${progress}%`}
        </Typography>
      </Box>
      <AnimatedBar variant="determinate" value={progress} />
    </Box>
  );
};

// Labeled Progress with Details Grid
export const LabeledProgressWithDetails: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%" sx={{ border: "1px solid #e0e0e0", borderRadius: 2, p: 2 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="subtitle2" fontWeight={600}>
          Build Process
        </Typography>
        <Typography variant="body2" fontWeight={600} color="primary">
          {`${progress}%`}
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4, mb: 2 }} />
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1}>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Status
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            {progress < 50 ? "Compiling" : "Bundling"}
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Time Elapsed
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            {`${Math.round((progress / 100) * 120)}s`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const LabeleProgress =
{
  LabeledProgressWithDetails,
  LabeledProgressAnimated,
  LabeledProgressWithColorStatus,
  LabeledProgressWithTime,
  LabeledProgress,
  LabeledProgressWithTitle,
  LabeledProgressWithDescription,
  LabeledProgressWithStatus,
  LabeledCircularProgress,
  MultiStepLabeledProgress,
  LabeledProgressWithIcon,
};