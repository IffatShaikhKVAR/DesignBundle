// components/BaseCheckbox.tsx
import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import type { CheckboxProps } from "@mui/material"; // 👈 type-only import

export interface BaseCheckboxProps extends CheckboxProps {
  label?: string;
  labelPlacement?: "end" | "start" | "top" | "bottom";
}

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
  label,
  labelPlacement = "end",
  ...props
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...props}
          sx={{
            color: "#7e57c2",
            "&.Mui-checked": {
              color: "#5e35b1",
            },
            "&:hover": {
              backgroundColor: "rgba(94, 53, 177, 0.04)",
            },
          }}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default BaseCheckbox;
