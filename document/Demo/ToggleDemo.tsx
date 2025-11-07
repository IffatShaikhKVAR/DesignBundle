// pages/ToggleDemo.tsx
import React from "react";
import { ComponentDemo, type DemoCategory } from "../helper/ComponentDemo";
import {
  BaseToggle,
  PrimaryToggle,
  SuccessToggle,
  WarningToggle,
  IconToggle,
  ThemedToggle,
} from "../../src/components";

export const ToggleDemo: React.FC = () => {
  const toggleCategories: DemoCategory[] = [
    {
      title: "Basic Toggles",
      description: "Simple toggle switches with different colors.",
      items: [
        {
          id: "primary-toggle",
          name: "PrimaryToggle",
          component: <PrimaryToggle />,
          description: "Standard primary color toggle switch.",
        },
        {
          id: "success-toggle",
          name: "SuccessToggle",
          component: <SuccessToggle />,
          description: "Used for successful or positive actions.",
        },
        {
          id: "warning-toggle",
          name: "WarningToggle",
          component: <WarningToggle />,
          description: "Indicates a warning or critical toggle option.",
        },
      ],
    },
    {
      title: "Advanced Toggles",
      description: "Custom-styled or icon-based toggle switches.",
      items: [
        {
          id: "icon-toggle",
          name: "IconToggle",
          component: <IconToggle />,
          description: "A toggle switch with light and dark mode icons.",
        },
        {
          id: "themed-toggle",
          name: "ThemedToggle",
          component: <ThemedToggle />,
          description: "Stylized switch with custom colors and theme.",
        },
      ],
    },
  ];

  return (
    <ComponentDemo 
      categories={toggleCategories} 
      packageName="design-bundle" 
    />
  );
};

export default ToggleDemo;
