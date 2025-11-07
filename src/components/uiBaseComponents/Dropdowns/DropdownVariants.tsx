// components/DropdownVariants.tsx
import React from "react";
import BaseDropdown from "./BaseDropdown";
import type { BaseDropdownProps } from "./BaseDropdown";

export const CountryDropdown: React.FC<Omit<BaseDropdownProps, "options">> = (props) => (
  <BaseDropdown
    {...props}
    label="Country"
    options={[
      { label: "India 🇮🇳", value: "india" },
      { label: "United States 🇺🇸", value: "usa" },
      { label: "United Kingdom 🇬🇧", value: "uk" },
      { label: "Canada 🇨🇦", value: "canada" },
    ]}
  />
);

export const RoleDropdown: React.FC<Omit<BaseDropdownProps, "options">> = (props) => (
  <BaseDropdown
    {...props}
    label="User Role"
    options={[
      { label: "Admin", value: "admin" },
      { label: "Manager", value: "manager" },
      { label: "Editor", value: "editor" },
      { label: "Viewer", value: "viewer" },
    ]}
  />
);

export const StatusDropdown: React.FC<Omit<BaseDropdownProps, "options">> = (props) => (
  <BaseDropdown
    {...props}
    label="Status"
    options={[
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
      { label: "Pending", value: "pending" },
    ]}
  />
);
