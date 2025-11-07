// components/RadioVariants.tsx
import React from "react";
import BaseRadio from "./BaseRadio";
import type { BaseRadioProps } from "./BaseRadio";

// 👩‍🦱 Gender Selector
export const GenderRadio: React.FC<Omit<BaseRadioProps, "options">> = (props) => (
  <BaseRadio
    {...props}
    label="Gender"
    options={[
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ]}
  />
);

// 🟢 Status Selector
export const StatusRadio: React.FC<Omit<BaseRadioProps, "options">> = (props) => (
  <BaseRadio
    {...props}
    label="Status"
    options={[
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
    ]}
    row
  />
);
