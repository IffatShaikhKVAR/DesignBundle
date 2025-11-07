// pages/AlertDemo.tsx
import React from "react";
import { ComponentDemo, type DemoCategory } from "../helper/ComponentDemo";
import {
  BaseAlert,
  OutlinedAlert,
  FilledAlert,
  DismissibleAlert,
  IconAlert,
} from "../../src/feedbacks";

export const AlertDemo: React.FC = () => {
  const alertCategories: DemoCategory[] = [
    {
      title: "Basic Alerts",
      description: "Default alert with optional titles and messages.",
      items: [
        {
          id: "base-alert",
          name: "BaseAlert",
          component: (
            <BaseAlert
              title="Information"
              message="This is a general information alert."
              severity="info"
            />
          ),
          description: "Basic alert component with title and message.",
        },
        {
          id: "outlined-alert",
          name: "OutlinedAlert",
          component: <OutlinedAlert />,
          description: "Outlined variant for subtle emphasis.",
        },
        {
          id: "filled-alert",
          name: "FilledAlert",
          component: <FilledAlert />,
          description: "Filled variant for strong emphasis.",
        },
      ],
    },
    {
      title: "Interactive Alerts",
      description: "Alerts that can be dismissed or contain custom icons.",
      items: [
        {
          id: "dismissible-alert",
          name: "DismissibleAlert",
          component: <DismissibleAlert />,
          description: "Alert with close (dismiss) button.",
        },
        {
          id: "icon-alert",
          name: "IconAlert",
          component: <IconAlert />,
          description: "Alerts with custom icons for better visual meaning.",
        },
      ],
    },
  ];

  return (
    <ComponentDemo 
      categories={alertCategories}
      packageName="design-bundle"
    />
  );
};

export default AlertDemo;
