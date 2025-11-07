// src/components/Inputs/BaseInput.tsx
import React from "react";
import { TextField, type TextFieldProps } from "@mui/material";

export type BaseInputProps = TextFieldProps & {
  label?: string;
  variantType?: "outlined" | "filled" | "standard";
};

/**
 * BaseInput — main input component with 3 style variants:
 * - outlined (default)
 * - filled
 * - standard
 */
const BaseInput: React.FC<BaseInputProps> = ({
  label,
  variantType = "outlined",
  ...props
}) => {
  const baseSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#fff",
      "& fieldset": { borderColor: "#d0d0d0" },
      "&:hover fieldset": { borderColor: "#7e57c2" },
      "&.Mui-focused fieldset": { borderColor: "#5e35b1" },
    },
    "& .MuiFilledInput-root": {
      borderRadius: "12px",
      backgroundColor: "#f8f8f8",
      "&:before": { borderBottomColor: "#ccc" },
      "&:hover:before": { borderBottomColor: "#7e57c2" },
      "&.Mui-focused:before": { borderBottomColor: "#5e35b1" },
    },
    "& .MuiInput-root": {
      "&:before": { borderBottomColor: "#ccc" },
      "&:hover:not(.Mui-disabled):before": { borderBottomColor: "#7e57c2" },
      "&.Mui-focused:after": { borderBottomColor: "#5e35b1" },
    },
  };

  return (
    <TextField
      label={label}
      variant={variantType}
      fullWidth
      sx={baseSx}
      {...props}
    />
  );
};

export default BaseInput;
