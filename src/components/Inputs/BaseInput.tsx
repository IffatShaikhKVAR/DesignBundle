// components/BaseInput.tsx
import React from "react";
import { TextField, type TextFieldProps } from "@mui/material"; // 👈 type-only import for props

export type BaseInputProps = TextFieldProps & {
  label?: string;
};

const BaseInput: React.FC<BaseInputProps> = ({ label, ...props }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          backgroundColor: "#fff",
          "& fieldset": {
            borderColor: "#d0d0d0",
          },
          "&:hover fieldset": {
            borderColor: "#7e57c2",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#5e35b1",
          },
        },
      }}
      {...props}
    />
  );
};

export default BaseInput;
