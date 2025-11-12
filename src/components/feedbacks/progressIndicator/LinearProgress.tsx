// src/components/ProgressIndicators/LinearProgressVariants.tsx
import React, { useEffect, useState } from "react";
import { LinearProgress, Box, Typography, styled } from "@mui/material";

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

// Gradient Linear Progress
export const GradientLinearProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => (old >= 100 ? 0 : old + 5));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const GradientBar = styled(LinearProgress)({
    height: 8,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    "& .MuiLinearProgress-bar": {
      backgroundImage: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
      borderRadius: 5,
    },
  });

  return (
    <Box width="100%">
      <Typography variant="body2" mb={1}>
        Gradient Progress: {Math.round(progress)}%
      </Typography>
      <GradientBar variant="determinate" value={progress} />
    </Box>
  );
};

// Animated Rainbow Linear Progress
export const RainbowLinearProgress = () => {
  const RainbowBar = styled(LinearProgress)({
    height: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    "& .MuiLinearProgress-bar": {
      backgroundImage:
        "linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)",
      backgroundSize: "200% 100%",
      animation: "rainbowShift 3s infinite",
    },
    "@keyframes rainbowShift": {
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
      <Typography variant="body2" mb={1}>
        Rainbow Progress
      </Typography>
      <RainbowBar variant="indeterminate" />
    </Box>
  );
};

// Striped Linear Progress
export const StripedLinearProgress = () => {
  const [progress, setProgress] = useState(30);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => (old >= 100 ? 0 : old + 8));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  const StripedBar = styled(LinearProgress)({
    height: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    "& .MuiLinearProgress-bar": {
      backgroundImage:
        "linear-gradient(45deg, #2575fc 25%, transparent 25%, transparent 50%, #2575fc 50%, #2575fc 75%, transparent 75%, transparent)",
      backgroundSize: "20px 20px",
      animation: "stripeAnimation 1s linear infinite",
    },
    "@keyframes stripeAnimation": {
      "0%": {
        backgroundPosition: "0 0",
      },
      "100%": {
        backgroundPosition: "20px 20px",
      },
    },
  });

  return (
    <Box width="100%">
      <Typography variant="body2" mb={1}>
        Striped Progress: {Math.round(progress)}%
      </Typography>
      <StripedBar variant="determinate" value={progress} />
    </Box>
  );
};

// Glow Effect Linear Progress
export const GlowLinearProgress = () => {
  const [progress, setProgress] = useState(50);

  const GlowBar = styled(LinearProgress)({
    height: 8,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    "& .MuiLinearProgress-bar": {
      backgroundColor: "#2575fc",
      borderRadius: 5,
      boxShadow: "0 0 10px 2px rgba(37, 117, 252, 0.6)",
    },
  });

  return (
    <Box width="100%">
      <Typography variant="body2" mb={1}>
        Glow Effect Progress: {progress}%
      </Typography>
      <GlowBar variant="determinate" value={progress} />
    </Box>
  );
};

// Dual Layer Linear Progress
export const DualLayerLinearProgress = () => {
  const [primary, setPrimary] = useState(60);
  const [secondary, setSecondary] = useState(40);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrimary((old) => (old >= 100 ? 0 : old + 3));
      setSecondary((old) => (old >= 100 ? 0 : old + 2));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%">
      <Typography variant="body2" mb={1}>
        Dual Layer Progress
      </Typography>
      <Box position="relative" height={16} borderRadius={1} overflow="hidden" bgcolor="#f0f0f0">
        <LinearProgress
          variant="determinate"
          value={secondary}
          sx={{
            height: "100%",
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#4caf50",
              opacity: 0.5,
            },
          }}
        />
        <LinearProgress
          variant="determinate"
          value={primary}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            backgroundColor: "transparent",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#2575fc",
            },
          }}
        />
      </Box>
    </Box>
  );
};

// Pulse Linear Progress
export const PulseLinearProgress = () => {
  const PulseBar = styled(LinearProgress)({
    height: 8,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    "& .MuiLinearProgress-bar": {
      backgroundColor: "#ff9800",
      animation: "pulse 1.5s ease-in-out infinite",
    },
    "@keyframes pulse": {
      "0%, 100%": {
        opacity: 0.6,
      },
      "50%": {
        opacity: 1,
      },
    },
  });

  return (
    <Box width="100%">
      <Typography variant="body2" mb={1}>
        Pulse Progress
      </Typography>
      <PulseBar variant="indeterminate" />
    </Box>
  );
};

// Segmented Linear Progress
export const SegmentedLinearProgress = () => {
  const [progress, setProgress] = useState(0);
  const segments = 10;
  const filledSegments = Math.ceil((progress / 100) * segments);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => (old >= 100 ? 0 : old + 10));
    }, 700);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box width="100%">
      <Typography variant="body2" mb={1}>
        Segmented Progress: {progress}%
      </Typography>
      <Box display="flex" gap={1}>
        {Array.from({ length: segments }).map((_, i) => (
          <Box
            key={i}
            sx={{
              flex: 1,
              height: 8,
              backgroundColor: i < filledSegments ? "#2575fc" : "#e0e0e0",
              borderRadius: 2,
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

// Smooth Wave Linear Progress
export const WaveLinearProgress = () => {
  const WaveBar = styled(LinearProgress)({
    height: 6,
    borderRadius: 3,
    backgroundColor: "#f0f0f0",
    "& .MuiLinearProgress-bar": {
      background: "linear-gradient(90deg, #6a11cb, #2575fc, #6a11cb)",
      backgroundSize: "200% 100%",
      animation: "wave 2s infinite",
    },
    "@keyframes wave": {
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
      <Typography variant="body2" mb={1}>
        Wave Progress
      </Typography>
      <WaveBar variant="indeterminate" />
    </Box>
  );
};

// Buffering Linear Progress
export const BufferingLinearProgress = () => {
  return (
    <Box width="100%">
      <Typography variant="body2" mb={1}>
        Buffering Progress
      </Typography>
      <Box position="relative" height={6} borderRadius={3} overflow="hidden" bgcolor="#f0f0f0">
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "30%",
            backgroundColor: "#2575fc",
            animation: "progress 1.5s ease-in-out infinite",
            "@keyframes progress": {
              "0%": {
                left: "-30%",
              },
              "100%": {
                left: "100%",
              },
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "30%",
            backgroundColor: "#6a11cb",
            opacity: 0.5,
            animation: "buffering 2s ease-in-out infinite",
            "@keyframes buffering": {
              "0%": {
                left: "-60%",
              },
              "100%": {
                left: "100%",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

// Status Based Linear Progress
interface StatusProgressProps {
  status: "success" | "error" | "warning" | "info";
  progress: number;
}

export const StatusBasedProgress: React.FC<StatusProgressProps> = ({
  status,
  progress,
}) => {
  const colorMap = {
    success: "#4caf50",
    error: "#f44336",
    warning: "#ff9800",
    info: "#2575fc",
  };

  return (
    <Box width="100%">
      <Typography variant="body2" mb={1}>
        Status: {status.charAt(0).toUpperCase() + status.slice(1)} - {progress}%
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 5,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: colorMap[status],
            borderRadius: 5,
          },
        }}
      />
    </Box>
  );
};

// Labeled with Multiple Indicators
export const LabeledMultiProgress = () => {
  const items = [
    { label: "Downloaded", value: 80, color: "#4caf50" },
    { label: "Uploading", value: 45, color: "#2575fc" },
    { label: "Processing", value: 60, color: "#ff9800" },
  ];

  return (
    <Box display="flex" flexDirection="column" gap={2} width="100%">
      {items.map((item, index) => (
        <Box key={index}>
          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography variant="caption" color="textSecondary">
              {item.label}
            </Typography>
            <Typography variant="caption" fontWeight={600}>
              {item.value}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: item.color,
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export const LinearProgressIndicator = {
  DeterminateLinearProgress,
  GradientLinearProgress,
  RainbowLinearProgress,
  StripedLinearProgress,
  GlowLinearProgress,
  DualLayerLinearProgress,
  PulseLinearProgress,
  SegmentedLinearProgress,
  WaveLinearProgress,
  BufferingLinearProgress,
  StatusBasedProgress,
  LabeledMultiProgress,
};