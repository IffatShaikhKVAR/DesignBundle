// components/BaseRadio.tsx
import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export interface BaseRadioProps {
  label?: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  row?: boolean;
  disabled?: boolean;
}

const BaseRadio: React.FC<BaseRadioProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  row = false,
  disabled = false,
}) => {
  return (
    <FormControl component="fieldset" sx={{ width: "100%" }}>
      {label && (
        <FormLabel
          component="legend"
          sx={{
            fontWeight: 500,
            color: "#5e35b1",
            mb: 1,
          }}
        >
          {label}
        </FormLabel>
      )}
      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
        row={row}
        sx={{
          "& .MuiFormControlLabel-root": {
            mr: 3,
          },
          "& .MuiRadio-root": {
            color: "#7e57c2",
            "&.Mui-checked": {
              color: "#5e35b1",
            },
          },
        }}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio disabled={disabled} />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default BaseRadio;
