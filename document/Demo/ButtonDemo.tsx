import React from "react";
import { ComponentDemo, type DemoCategory } from "../helper/ComponentDemo";

import {
  BlueLoginButton,
  PurpleLoginButton,
  OutlineLoginButton,
  PrimarySubmitButton,
  SuccessSubmitButton,
  WarningSubmitButton,
  OutlineSubmitButton,
  PinkRegisterButton,
  OutlineRegisterButton,
  GradientRegisterButton,
  CreateButton,
  EditButton,
  ExportExcelButton,
  DeleteButton,
  DownloadButton,
  EditIconButton,
  DeleteIconButton,
} from "../../src/components";

export const ButtonDemo: React.FC = () => {
  const buttonCategories: DemoCategory[] = [
    {
      title: "Login Buttons",
      description: "Used for user authentication or login-related actions.",
      items: [
        {
          id: "blue-login",
          name: "BlueLoginButton",
          component: <BlueLoginButton />,
          description: "Blue Login",
        },
        {
          id: "purple-login",
          name: "PurpleLoginButton",
          component: <PurpleLoginButton />,
          description: "Purple Login",
        },
        {
          id: "outline-login",
          name: "OutlineLoginButton",
          component: <OutlineLoginButton />,
          description: "Outline Login",
        },
      ],
    },
    {
      title: "Submit Buttons",
      description: "Used to submit forms or send data to the backend.",
      items: [
        {
          id: "primary-submit",
          name: "PrimarySubmitButton",
          component: <PrimarySubmitButton />,
          description: "Primary Submit",
        },
        {
          id: "success-submit",
          name: "SuccessSubmitButton",
          component: <SuccessSubmitButton />,
          description: "Success Submit",
        },
        {
          id: "warning-submit",
          name: "WarningSubmitButton",
          component: <WarningSubmitButton />,
          description: "Warning Submit",
        },
        {
          id: "outline-submit",
          name: "OutlineSubmitButton",
          component: <OutlineSubmitButton />,
          description: "Outline Submit",
        },
      ],
    },
    {
      title: "Register Buttons",
      description: "Used for user registration or sign-up flows.",
      items: [
        {
          id: "pink-register",
          name: "PinkRegisterButton",
          component: <PinkRegisterButton />,
          description: "Pink Register",
        },
        {
          id: "outline-register",
          name: "OutlineRegisterButton",
          component: <OutlineRegisterButton />,
          description: "Outline Register",
        },
        {
          id: "gradient-register",
          name: "GradientRegisterButton",
          component: <GradientRegisterButton />,
          description: "Gradient Register",
        },
      ],
    },
    {
      title: "Icon Buttons",
      description: "Used for common dashboard actions.",
      items: [
        {
          id: "create",
          name: "CreateButton",
          component: <CreateButton />,
          description: "Create",
        },
        {
          id: "export-excel",
          name: "ExportExcelButton",
          component: <ExportExcelButton />,
          description: "Export",
        },
        {
          id: "download",
          name: "DownloadButton",
          component: <DownloadButton />,
          description: "Download",
        },
        {
          id: "edit",
          name: "EditButton",
          component: <EditButton />,
          description: "Edit",
        },
        {
          id: "delete",
          name: "DeleteButton",
          component: <DeleteButton />,
          description: "Delete",
        },
        {
          id: "edit-icon",
          name: "EditIconButton",
          component: <EditIconButton />,
          description: "Edit Icon",
        },
        {
          id: "delete-icon",
          name: "DeleteIconButton",
          component: <DeleteIconButton />,
          description: "Delete Icon",
        },
      ],
    },
  ];

  return (
    <ComponentDemo 
      categories={buttonCategories} 
      packageName="design-bundle"
    />
  );
};

export default ButtonDemo;
