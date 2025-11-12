// src/components/ProgressIndicators/SegmentedProgress.tsx
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

interface SegmentedProgressProps {
  segments?: number;
  filledSegments?: number;
  color?: string;
}

export const SegmentedProgress: React.FC<SegmentedProgressProps> = ({
  segments = 8,
  filledSegments: initialFilled = 0,
  color = "#2575fc",
}) => {
  const [filled, setFilled] = useState(initialFilled);

  useEffect(() => {
    const timer = setInterval(() => {
      setFilled((prev) => (prev >= segments ? 0 : prev + 1));
    }, 500);
    return () => clearInterval(timer);
  }, [segments]);

  return (
    <Box display="flex" gap={1} alignItems="center">
      {Array.from({ length: segments }).map((_, i) => (
        <Box
          key={i}
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: i < filled ? color : "#e0e0e0",
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </Box>
  );
};

// src/components/ProgressIndicators/PulseProgress.tsx
export const PulseProgress: React.FC = () => {
  return (
    <Box
      sx={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        border: "4px solid #2575fc",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "4px solid #2575fc",
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": {
              transform: "scale(1)",
              opacity: 1,
            },
            "100%": {
              transform: "scale(1.4)",
              opacity: 0,
            },
          },
        },
      }}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#2575fc",
        }}
      />
    </Box>
  );
};

// src/components/ProgressIndicators/DashedCircularProgress.tsx
export const DashedCircularProgress: React.FC = () => {
  return (
    <Box
      sx={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        background:
          "conic-gradient(#6a11cb 0deg 270deg, #e0e0e0 270deg 360deg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        animation: "rotate 3s linear infinite",
        "@keyframes rotate": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: 600,
          color: "#6a11cb",
        }}
      >
        75%
      </Box>
    </Box>
  );
};

// src/components/ProgressIndicators/StackedProgress.tsx
interface StackedProgressItem {
  label: string;
  value: number;
  color: string;
}

interface StackedProgressProps {
  items?: StackedProgressItem[];
}

export const StackedProgress: React.FC<StackedProgressProps> = ({
  items = [
    { label: "Completed", value: 40, color: "#4caf50" },
    { label: "In Progress", value: 35, color: "#2575fc" },
    { label: "Pending", value: 25, color: "#ff9800" },
  ],
}) => {
  return (
    <Box>
      <Box display="flex" height={24} borderRadius={1} overflow="hidden">
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              width: `${item.value}%`,
              backgroundColor: item.color,
              transition: "width 0.3s ease",
            }}
          />
        ))}
      </Box>
      <Box display="flex" gap={2} mt={2} flexWrap="wrap">
        {items.map((item, i) => (
          <Box key={i} display="flex" alignItems="center" gap={0.5}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "2px",
                backgroundColor: item.color,
              }}
            />
            <Typography variant="caption">
              {item.label}: {item.value}%
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

// src/components/ProgressIndicators/WaveProgress.tsx
export const WaveProgress: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 4,
        background: "#f0f0f0",
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "100%",
          background: "linear-gradient(90deg, #6a11cb, #2575fc, #6a11cb)",
          backgroundSize: "200% 100%",
          animation: "wave 2s infinite",
          "@keyframes wave": {
            "0%": {
              backgroundPosition: "0% 0%",
            },
            "100%": {
              backgroundPosition: "200% 0%",
            },
          },
        }}
      />
    </Box>
  );
};

// src/components/ProgressIndicators/SkeletonProgress.tsx
export const SkeletonProgress: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Box
          key={i}
          sx={{
            height: 8,
            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            borderRadius: 4,
            animation: "shimmer 2s infinite",
            "@keyframes shimmer": {
              "0%": {
                backgroundPosition: "200% 0%",
              },
              "100%": {
                backgroundPosition: "-200% 0%",
              },
            },
            width: `${80 + i * 10}%`,
          }}
        />
      ))}
    </Box>
  );
};

// src/components/ProgressIndicators/StepProgress.tsx
interface StepProgressProps {
  steps?: number;
  currentStep?: number;
}

export const StepProgress: React.FC<StepProgressProps> = ({
  steps = 5,
  currentStep: initialStep = 1,
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev >= steps ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [steps]);

  return (
    <Box>
      <Box display="flex" alignItems="center" gap={1}>
        {Array.from({ length: steps }).map((_, i) => (
          <React.Fragment key={i}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor:
                  i < currentStep ? "#4caf50" : i === currentStep - 1 ? "#2575fc" : "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 600,
                fontSize: "14px",
                transition: "background-color 0.3s ease",
              }}
            >
              {i < currentStep - 1 ? "✓" : i + 1}
            </Box>
            {i < steps - 1 && (
              <Box
                sx={{
                  flex: 1,
                  height: 2,
                  backgroundColor: i < currentStep - 1 ? "#4caf50" : "#e0e0e0",
                  transition: "background-color 0.3s ease",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

// src/components/ProgressIndicators/BufferingProgress.tsx
export const BufferingProgress: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 6,
        background: "#f0f0f0",
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "30%",
          background: "#2575fc",
          left: 0,
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
          background: "#6a11cb",
          opacity: 0.5,
          left: 0,
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
  );
};

// src/components/ProgressIndicators/MulticolorProgress.tsx
export const MulticolorProgress: React.FC = () => {
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7"];

  return (
    <Box
      sx={{
        width: "100%",
        height: 8,
        borderRadius: 4,
        overflow: "hidden",
        background: "linear-gradient(90deg, " + colors.join(", ") + ")",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    />
  );
};

export const AdvanceProgress = {
  SegmentedProgress,
  PulseProgress,
  DashedCircularProgress,
  StackedProgress,
  WaveProgress,
  SkeletonProgress,
  StepProgress,
  BufferingProgress,
  MulticolorProgress,
};