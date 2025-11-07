// components/SearchableDropdown.tsx
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import type { BaseDropdownOption } from "./BaseDropdown";

/**
 * SearchableDropdown — dropdown with internal search box.
 * Ideal for long dynamic lists.
 */
export interface SearchableDropdownProps {
  label?: string;
  name: string;
  value: string | number;
  options: BaseDropdownOption[];
  onChange?: (event: SelectChangeEvent<string | number>) => void;
  fullWidth?: boolean;
  helperText?: string;
  placeholder?: string;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  fullWidth = true,
  helperText,
  placeholder = "Search...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter options based on search term
  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <FormControl fullWidth={fullWidth} sx={{ minWidth: 220 }}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        // Custom menu with search box
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300,
              overflowY: "auto",
              padding: "8px 12px",
            },
          },
        }}
        renderValue={(selected) => {
          const selectedOption = options.find((o) => o.value === selected);
          return selectedOption ? selectedOption.label : placeholder;
        }}
      >
        {/* Inline search field */}
        <MenuItem disableRipple disableTouchRipple>
          <TextField
            size="small"
            placeholder={placeholder}
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </MenuItem>

        {/* Filtered results */}
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No results found</MenuItem>
        )}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default SearchableDropdown;
