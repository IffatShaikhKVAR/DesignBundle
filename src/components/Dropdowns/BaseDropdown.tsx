// components/BaseDropdown.tsx
import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material"; // ✅ type-only import

export interface BaseDropdownOption {
  label: string;
  value: string | number;
}

export interface BaseDropdownProps {
  label?: string;
  value: string | number;
  name: string;
  options: BaseDropdownOption[];
  onChange?: (event: SelectChangeEvent<string | number>) => void;
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
}

const BaseDropdown: React.FC<BaseDropdownProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  fullWidth = true,
  required = false,
  disabled = false,
  helperText,
}) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      required={required}
      disabled={disabled}
      sx={{
        minWidth: 200,
        "& .MuiInputLabel-root": { color: "#5e35b1" },
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          "&:hover fieldset": { borderColor: "#7e57c2" },
          "&.Mui-focused fieldset": { borderColor: "#5e35b1" },
        },
      }}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        sx={{
          bgcolor: "#fff",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default BaseDropdown;
