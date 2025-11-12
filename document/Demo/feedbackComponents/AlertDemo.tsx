// src/pages/AlertDemo.tsx
import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import {OutlineAlerts } from "../../../src/components";
import {FilledAlerts} from "../../../src/components";
import {IconAlerts} from "../../../src/components";
import {DismissibleAlerts} from "../../../src/components";

// ========================================
// Categories for Alert Components
// ========================================

const alertCategories: DemoCategory[] = [
  {
    title: "Filled Alerts",
    description: "Solid background alerts with full color. Best for critical information.",
    items: [
      {
        id: "filled-info",
        name: "FilledInfoAlert",
        component: <FilledAlerts.Info />,
        description: "Filled information alert",
      },
      {
        id: "filled-success",
        name: "FilledSuccessAlert",
        component: <FilledAlerts.Success />,
        description: "Filled success alert",
      },
      {
        id: "filled-warning",
        name: "FilledWarningAlert",
        component: <FilledAlerts.Warning />,
        description: "Filled warning alert",
      },
      {
        id: "filled-error",
        name: "FilledErrorAlert",
        component: <FilledAlerts.Error />,
        description: "Filled error alert",
      },
    ],
  },
  {
    title: "Outlined Alerts",
    description: "Border-only alerts with minimal background. Best for secondary information.",
    items: [
      {
        id: "outlined-info",
        name: "OutlinedInfoAlert",
        component: <OutlineAlerts.OutlinedInfoAlert />,
        description: "Outlined information alert",
      },
      {
        id: "outlined-success",
        name: "OutlinedSuccessAlert",
        component: <OutlineAlerts.OutlinedSuccessAlert />,
        description: "Outlined success alert",
      },
      {
        id: "outlined-warning",
        name: "OutlinedWarningAlert",
        component: <OutlineAlerts.OutlinedWarningAlert />,
        description: "Outlined warning alert",
      },
      {
        id: "outlined-error",
        name: "OutlinedErrorAlert",
        component: <OutlineAlerts.OutlinedErrorAlert />,
        description: "Outlined error alert",
      },
    ],
  },
  {
    title: "Dismissible Filled Alerts",
    description: "Filled alerts with close button that can be dismissed by the user.",
    items: [
      {
        id: "dismissible-filled-info",
        name: "FilledInfoDismissibleAlert",
        component: <DismissibleAlerts.FilledInfoDismissibleAlert />,
        description: "Dismissible filled information alert",
      },
      {
        id: "dismissible-filled-success",
        name: "FilledSuccessDismissibleAlert",
        component: <DismissibleAlerts.FilledSuccessDismissibleAlert />,
        description: "Dismissible filled success alert",
      },
      {
        id: "dismissible-filled-warning",
        name: "FilledWarningDismissibleAlert",
        component: <DismissibleAlerts.FilledWarningDismissibleAlert />,
        description: "Dismissible filled warning alert",
      },
      {
        id: "dismissible-filled-error",
        name: "FilledErrorDismissibleAlert",
        component: <DismissibleAlerts.FilledErrorDismissibleAlert />,
        description: "Dismissible filled error alert",
      },
    ],
  },
  {
    title: "Dismissible Outlined Alerts",
    description: "Outlined alerts with close button that can be dismissed.",
    items: [
      {
        id: "dismissible-outlined-info",
        name: "OutlinedInfo",
        component: <DismissibleAlerts.OutlinedInfo />,
        description: "Dismissible outlined information alert",
      },
      {
        id: "dismissible-outlined-success",
        name: "OutlinedSuccess",
        component: <DismissibleAlerts.OutlinedSuccess />,
        description: "Dismissible outlined success alert",
      },
      {
        id: "dismissible-outlined-warning",
        name: "OutlinedWarning",
        component: <DismissibleAlerts.OutlinedWarning />,
        description: "Dismissible outlined warning alert",
      },
      {
        id: "dismissible-outlined-error",
        name: "OutlinedError",
        component: <DismissibleAlerts.OutlinedError />,
        description: "Dismissible outlined error alert",
      },
    ],
  },
  {
    title: "Dismissible Standard Alerts",
    description: "Standard alerts with close button that can be dismissed.",
    items: [
      {
        id: "dismissible-standard-info",
        name: "StandardInfoDismissibleAlert",
        component: <DismissibleAlerts.StandardInfoDismissibleAlert />,
        description: "Dismissible standard information alert",
      },
      {
        id: "dismissible-standard-success",
        name: "StandardSuccessDismissibleAlert",
        component: <DismissibleAlerts.StandardSuccessDismissibleAlert />,
        description: "Dismissible standard success alert",
      },
      {
        id: "dismissible-standard-warning",
        name: "StandardWarningDismissibleAlert",
        component: <DismissibleAlerts.StandardWarningDismissibleAlert />,
        description: "Dismissible standard warning alert",
      },
      {
        id: "dismissible-standard-error",
        name: "StandardErrorDismissibleAlert",
        component: <DismissibleAlerts.StandardErrorDismissibleAlert />,
        description: "Dismissible standard error alert",
      },
    ],
  },
  {
    title: "Dismissible Alerts Without Title",
    description: "Simple dismissible alerts with just a message, no title text.",
    items: [
      {
        id: "dismissible-no-title-info",
        name: "OutlinedInfoDismissibleAlertNoTitle",
        component: <DismissibleAlerts.OutlinedInfoDismissibleAlertNoTitle />,
        description: "Dismissible outlined info alert without title",
      },
      {
        id: "dismissible-no-title-success",
        name: "FilledSuccessDismissibleAlertNoTitle",
        component: <DismissibleAlerts.FilledSuccessDismissibleAlertNoTitle />,
        description: "Dismissible filled success alert without title",
      },
      {
        id: "dismissible-no-title-warning",
        name: "StandardWarningDismissibleAlertNoTitle",
        component: <DismissibleAlerts.StandardWarningDismissibleAlertNoTitle />,
        description: "Dismissible standard warning alert without title",
      },
      {
        id: "dismissible-no-title-error",
        name: "OutlinedErrorDismissibleAlertNoTitle",
        component: <DismissibleAlerts.OutlinedErrorDismissibleAlertNoTitle />,
        description: "Dismissible outlined error alert without title",
      },
    ],
  },
  {
    title: "Icon Alerts - Outlined",
    description: "Outlined alerts with Material-UI icons.",
    items: [
      {
        id: "icon-outlined-info",
        name: "OutlinedInfoIconAlert",
        component: <IconAlerts.OutlinedInfoIconAlert />,
        description: "Outlined info icon alert",
      },
      {
        id: "icon-outlined-success",
        name: "OutlinedSuccessIconAlert",
        component: <IconAlerts.OutlinedSuccessIconAlert />,
        description: "Outlined success icon alert",
      },
      {
        id: "icon-outlined-warning",
        name: "OutlinedWarningIconAlert",
        component: <IconAlerts.OutlinedWarningIconAlert />,
        description: "Outlined warning icon alert",
      },
      {
        id: "icon-outlined-error",
        name: "OutlinedErrorIconAlert",
        component: <IconAlerts.OutlinedErrorIconAlert />,
        description: "Outlined error icon alert",
      },
    ],
  },
  {
    title: "Icon Alerts - Filled",
    description: "Filled alerts with Material-UI icons.",
    items: [
      {
        id: "icon-filled-info",
        name: "FilledInfoIconAlert",
        component: <IconAlerts.FilledInfoIconAlert />,
        description: "Filled info icon alert",
      },
      {
        id: "icon-filled-success",
        name: "FilledSuccessIconAlert",
        component: <IconAlerts.FilledSuccessIconAlert />,
        description: "Filled success icon alert",
      },
      {
        id: "icon-filled-warning",
        name: "FilledWarningIconAlert",
        component: <IconAlerts.FilledWarningIconAlert />,
        description: "Filled warning icon alert",
      },
      {
        id: "icon-filled-error",
        name: "FilledErrorIconAlert",
        component: <IconAlerts.FilledErrorIconAlert />,
        description: "Filled error icon alert",
      },
    ],
  },
  {
    title: "Icon Alerts - Standard",
    description: "Standard alerts with Material-UI icons.",
    items: [
      {
        id: "icon-standard-info",
        name: "StandardInfoIconAlert",
        component: <IconAlerts.StandardInfoIconAlert />,
        description: "Standard info icon alert",
      },
      {
        id: "icon-standard-success",
        name: "StandardSuccessIconAlert",
        component: <IconAlerts.StandardSuccessIconAlert />,
        description: "Standard success icon alert",
      },
      {
        id: "icon-standard-warning",
        name: "StandardWarningIconAlert",
        component: <IconAlerts.StandardWarningIconAlert />,
        description: "Standard warning icon alert",
      },
      {
        id: "icon-standard-error",
        name: "StandardErrorIconAlert",
        component: <IconAlerts.StandardErrorIconAlert />,
        description: "Standard error icon alert",
      },
    ],
  },
  {
    title: "Icon Alerts Without Title",
    description: "Icon alerts with just a message, no title text.",
    items: [
      {
        id: "icon-no-title-info",
        name: "OutlinedInfoIconAlertNoTitle",
        component: <IconAlerts.OutlinedInfoIconAlertNoTitle />,
        description: "Outlined info icon alert without title",
      },
      {
        id: "icon-no-title-success",
        name: "FilledSuccessIconAlertNoTitle",
        component: <IconAlerts.FilledSuccessIconAlertNoTitle />,
        description: "Filled success icon alert without title",
      },
      {
        id: "icon-no-title-warning",
        name: "StandardWarningIconAlertNoTitle",
        component: <IconAlerts.StandardWarningIconAlertNoTitle />,
        description: "Standard warning icon alert without title",
      },
      {
        id: "icon-no-title-error",
        name: "OutlinedErrorIconAlertNoTitle",
        component: <IconAlerts.OutlinedErrorIconAlertNoTitle />,
        description: "Outlined error icon alert without title",
      },
    ],
  },
  {
    title: "Alerts Without Title",
    description: "Simple alerts with just a message, no title text.",
    items: [
      {
        id: "no-title-filled",
        name: "FilledAlertNoTitle",
        component: <FilledAlerts.NoTitle />,
        description: "Filled alert without title",
      },
      {
        id: "no-title-outlined",
        name: "OutlinedAlertNoTitle",
        component: <OutlineAlerts.OutlinedAlertNoTitle />,
        description: "Outlined alert without title",
      },
    ],
  },
];

// ========================================
// Alert Demo Component
// ========================================

const AlertDemo: React.FC = () => {
  return (
    <ComponentDemo 
      categories={alertCategories} 
      packageName="design-bundle"
    />
  );
};

export default AlertDemo;