// components/CheckboxGroup.tsx
import React from "react";
import { FormGroup, FormLabel } from "@mui/material";
import BaseCheckbox from "./BaseCheckbox";

export interface CheckboxGroupOption {
  label: string;
  value: string;
}

export interface CheckboxGroupProps {
  label?: string;
  options: CheckboxGroupOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  selected,
  onChange,
}) => {
  const handleToggle = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onChange(newSelected);
  };

  return (
    <div>
      {label && (
        <FormLabel component="legend" sx={{ fontWeight: 600, mb: 1 }}>
          {label}
        </FormLabel>
      )}
      <FormGroup>
        {options.map((option) => (
          <BaseCheckbox
            key={option.value}
            label={option.label}
            checked={selected.includes(option.value)}
            onChange={() => handleToggle(option.value)}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default CheckboxGroup;
