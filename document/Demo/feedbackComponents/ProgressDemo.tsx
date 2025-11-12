import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import {
  LinearProgressIndicator,
  CircleProgress,
  LabeleProgress,
  AdvanceProgress,
} from "../../../src/components";

// ========================================
// Categories for Progress Components
// ========================================

const progressCategories: DemoCategory[] = [
  {
    title: "Linear Progress Bars",
    description:
      "Different linear progress indicators for various use cases.",
    items: [
      {
        id: "linear-determinate",
        name: "DeterminateLinearProgress",
        component: <LinearProgressIndicator.DeterminateLinearProgress />,
        description: "Shows progress with a percentage fill.",
      },
      {
        id: "linear-gradient",
        name: "GradientLinearProgress",
        component: <LinearProgressIndicator.GradientLinearProgress />,
        description: "Gradient-styled progress bar.",
      },
      {
        id: "linear-striped",
        name: "StripedLinearProgress",
        component: <LinearProgressIndicator.StripedLinearProgress />,
        description: "Striped animation effect on progress.",
      },
      {
        id: "linear-buffering",
        name: "BufferingLinearProgress",
        component: <LinearProgressIndicator.BufferingLinearProgress />,
        description: "Shows buffering and active progress.",
      },
      {
        id: "linear-wave",
        name: "WaveLinearProgress",
        component: <LinearProgressIndicator.WaveLinearProgress />,
        description: "Wave animation style linear loader.",
      },
    ],
  },
  {
    title: "Circular Progress Indicators",
    description:
      "Circular spinners and determinate loaders for loading visuals.",
    items: [
      {
        id: "circular-primary",
        name: "CircularPrimary",
        component: <CircleProgress.CircularPrimary />,
        description: "Primary circular loader.",
      },
      {
        id: "circular-success",
        name: "CircularSuccess",
        component: <CircleProgress.CircularSuccess />,
        description: "Circular success indicator.",
      },
      {
        id: "circular-error",
        name: "CircularError",
        component: <CircleProgress.CircularError />,
        description: "Error state circular indicator.",
      },
      {
        id: "circular-determinate",
        name: "DeterminateCircular",
        component: <CircleProgress.DeterminateCircular />,
        description: "Shows progress percentage inside the circle.",
      },
    ],
  },
  {
    title: "Labeled Progress Bars",
    description:
      "Progress indicators that display text labels or details.",
    items: [
      {
        id: "labeled-progress",
        name: "LabeledProgress",
        component: <LabeleProgress.LabeledProgress />,
        description: "Basic labeled progress indicator.",
      },
      {
        id: "labeled-with-details",
        name: "LabeledProgressWithDetails",
        component: <LabeleProgress.LabeledProgressWithDetails />,
        description: "Displays additional details beside the label.",
      },
      {
        id: "labeled-with-icon",
        name: "LabeledProgressWithIcon",
        component: <LabeleProgress.LabeledProgressWithIcon />,
        description: "Labeled progress bar with icon.",
      },
      {
        id: "labeled-circular",
        name: "LabeledCircularProgress",
        component: <LabeleProgress.LabeledCircularProgress />,
        description: "Circular progress with label.",
      },
      {
        id: "multi-step-labeled",
        name: "MultiStepLabeledProgress",
        component: <LabeleProgress.MultiStepLabeledProgress />,
        description: "Multi-step progress with label at each step.",
      },
    ],
  },
  {
    title: "Advanced Progress Bars",
    description:
      "Creative and visually enhanced progress styles for modern designs.",
    items: [
      {
        id: "segmented-progress",
        name: "SegmentedProgress",
        component: <AdvanceProgress.SegmentedProgress />,
        description: "Progress divided into segments.",
      },
      {
        id: "pulse-progress",
        name: "PulseProgress",
        component: <AdvanceProgress.PulseProgress />,
        description: "Pulsing progress animation.",
      },
      {
        id: "dashed-circular",
        name: "DashedCircularProgress",
        component: <AdvanceProgress.DashedCircularProgress />,
        description: "Dashed circular loader style.",
      },
      {
        id: "wave-progress",
        name: "WaveProgress",
        component: <AdvanceProgress.WaveProgress />,
        description: "Wave-style animated loader.",
      },
      {
        id: "skeleton-progress",
        name: "SkeletonProgress",
        component: <AdvanceProgress.SkeletonProgress />,
        description: "Skeleton shimmer loading placeholder.",
      },
      {
        id: "multicolor-progress",
        name: "MulticolorProgress",
        component: <AdvanceProgress.MulticolorProgress />,
        description: "Color-changing progress effect.",
      },
      {
        id: "stacked-progress",
        name: "StackedProgress",
        component: <AdvanceProgress.StackedProgress />,
        description: "Progress bar showing multiple values stacked.",
      },
      {
        id: "step-progress",
        name: "StepProgress",
        component: <AdvanceProgress.StepProgress />,
        description: "Step-based progress tracking.",
      },
    ],
  },
];

// ========================================
// Progress Demo Component
// ========================================

const ProgressDemo: React.FC = () => {
  return (
    <ComponentDemo categories={progressCategories} packageName="design-bundle" />
  );
};

export default ProgressDemo;
