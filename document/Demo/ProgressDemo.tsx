// pages/ProgressDemo.tsx
import React from "react";
import { ComponentDemo, type DemoCategory } from "../helper/ComponentDemo";
import {
  BaseProgress,
  PrimaryLinearProgress,
  SuccessLinearProgress,
  ErrorLinearProgress,
  DeterminateLinearProgress,
  CircularPrimary,
  CircularSuccess,
  CircularError,
  DeterminateCircular,
  GradientProgress,
  LabeledProgress,
} from "../../src/components";

export const ProgressDemo: React.FC = () => {
  const progressCategories: DemoCategory[] = [
    {
      title: "Linear Progress Bars",
      description: "Various styles of linear progress indicators.",
      items: [
        {
          id: "base-linear",
          name: "BaseProgress (Linear)",
          component: <BaseProgress type="linear" />,
          description: "Default linear indeterminate progress bar.",
        },
        {
          id: "primary-linear",
          name: "PrimaryLinearProgress",
          component: <PrimaryLinearProgress />,
          description: "Primary color linear bar.",
        },
        {
          id: "determinate-linear",
          name: "DeterminateLinearProgress",
          component: <DeterminateLinearProgress />,
          description: "Linear progress that fills based on percentage value.",
        },
        {
          id: "gradient-progress",
          name: "GradientProgress",
          component: <GradientProgress />,
          description: "Custom gradient-styled progress bar.",
        },
        {
          id: "labeled-progress",
          name: "LabeledProgress",
          component: <LabeledProgress />,
          description: "Shows percentage value beside the progress bar.",
        },
      ],
    },
    {
      title: "Circular Progress Indicators",
      description: "Circular spinners for loading or completion visuals.",
      items: [
        {
          id: "circular-primary",
          name: "CircularPrimary",
          component: <CircularPrimary />,
          description: "Default circular loader.",
        },
        {
          id: "determinate-circular",
          name: "DeterminateCircular",
          component: <DeterminateCircular />,
          description: "Circular progress with value display.",
        },
      ],
    },
  ];

  return (
    <ComponentDemo 
      categories={progressCategories}
      packageName="design-bundle"
    />
  );
};

export default ProgressDemo;
