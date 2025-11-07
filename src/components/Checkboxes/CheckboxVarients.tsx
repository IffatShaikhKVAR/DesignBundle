// components/CheckboxVariants.tsx
import React from "react";
import BaseCheckbox from "./BaseCheckbox";
import type { BaseCheckboxProps } from "./BaseCheckbox"

export const TermsCheckbox: React.FC<BaseCheckboxProps> = (props) => (
  <BaseCheckbox
    {...props}
    label="I agree to the Terms & Conditions"
    color="primary"
  />
);

export const NewsletterCheckbox: React.FC<BaseCheckboxProps> = (props) => (
  <BaseCheckbox
    {...props}
    label="Subscribe to our Newsletter"
    color="secondary"
  />
);

export const NotificationsCheckbox: React.FC<BaseCheckboxProps> = (props) => (
  <BaseCheckbox
    {...props}
    label="Enable Notifications"
    color="success"
  />
);

export const WarningCheckbox: React.FC<BaseCheckboxProps> = (props) => (
  <BaseCheckbox
    {...props}
    label="Proceed with Caution"
    sx={{
      color: "#ffa000",
      "&.Mui-checked": { color: "#ff6f00" },
    }}
  />
);
