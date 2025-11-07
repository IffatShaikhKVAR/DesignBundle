import React from "react";
import { ComponentDemo, type DemoCategory } from "../helper/ComponentDemo";
import {
  NameInput,
  EmailInput,
  PasswordInput,
  DateInput,
  NumberInput,
  AutoFilledInput,
  ReadOnlyInput,
} from "../../src/components"; // ✅ cleaner path since you export from index.ts

export const InputDemo: React.FC = () => {
  const inputCategories: DemoCategory[] = [
    {
      title: "Text Inputs",
      description: "Basic text input fields for form data.",
      items: [
        {
          id: "name-input",
          name: "NameInput",
          component: <NameInput />,
          description: "Name Input",
        },
        {
          id: "email-input",
          name: "EmailInput",
          component: <EmailInput />,
          description: "Email Input",
        },
        {
          id: "password-input",
          name: "PasswordInput",
          component: <PasswordInput />,
          description: "Password Input",
        },
      ],
    },
    {
      title: "Special Inputs",
      description: "Specialized input types for specific data.",
      items: [
        {
          id: "date-input",
          name: "DateInput",
          component: <DateInput />,
          description: "Date Input",
        },
        {
          id: "number-input",
          name: "NumberInput",
          component: <NumberInput />,
          description: "Number Input",
        },
      ],
    },
    {
      title: "Smart Inputs",
      description: "Inputs that auto-fill or are read-only.",
      items: [
        {
          id: "auto-filled",
          name: "AutoFilledInput",
          component: (
            <AutoFilledInput
              autoValue="user@example.com"
              label="Auto-filled Email"
            />
          ),
          description: "Displays a pre-filled or fetched value.",
        },
        {
          id: "read-only",
          name: "ReadOnlyInput",
          component: (
            <ReadOnlyInput label="Read Only Field" value="12345-ABC" />
          ),
          description: "Displays a read-only value field.",
        },
      ],
    },
  ];

  return (
    <ComponentDemo 
      categories={inputCategories} 
      packageName="design-bundle"
    />
  );
};

export default InputDemo;
