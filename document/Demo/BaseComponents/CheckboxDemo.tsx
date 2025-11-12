// pages/CheckboxDemo.tsx
import React, { useState } from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";

import {
  TermsCheckbox,
  NewsletterCheckbox,
  NotificationsCheckbox,
  WarningCheckbox,
  CheckboxGroup,
} from "../../../src/components";


export const CheckboxDemo: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["email"]);

  const checkboxCategories: DemoCategory[] = [
    {
      title: "Single Checkboxes",
      description: "Common checkbox variations used across forms and settings.",
      items: [
        {
          id: "terms",
          name: "TermsCheckbox",
          component: <TermsCheckbox />,
          description: "Agree to terms and conditions.",
        },
        {
          id: "newsletter",
          name: "NewsletterCheckbox",
          component: <NewsletterCheckbox />,
          description: "Subscribe to our newsletter.",
        },
        {
          id: "notifications",
          name: "NotificationsCheckbox",
          component: <NotificationsCheckbox />,
          description: "Enable or disable notifications.",
        },
        {
          id: "warning",
          name: "WarningCheckbox",
          component: <WarningCheckbox />,
          description: "Used for cautionary or critical options.",
        },
      ],
    },
    {
      title: "Grouped Checkboxes",
      description: "Multiple checkbox options that allow multi-selection.",
      items: [
        {
          id: "checkbox-group",
          name: "CheckboxGroup",
          component: (
            <CheckboxGroup
              label="Notification Preferences"
              options={[
                { label: "Email Alerts", value: "email" },
                { label: "SMS Alerts", value: "sms" },
                { label: "Push Notifications", value: "push" },
              ]}
              selected={selectedOptions}
              onChange={setSelectedOptions}
            />
          ),
          description: "Allows selection of multiple preferences.",
        },
      ],
    },
  ];

  return (
    <ComponentDemo 
      categories={checkboxCategories}
      packageName="design-bundle"
    />
  );
};

export default CheckboxDemo;
