import React from "react";
import BaseInput from "./BaseInput";
import type { BaseInputProps } from "./BaseInput";

/**
 * ReadOnlyInput — displays a non-editable field
 * Useful for IDs, auto-generated fields, or view-only data
 */
const ReadOnlyInput: React.FC<BaseInputProps> = ({
  label = "Read Only",
  value = "",
  ...props
}) => {
  return (
    <BaseInput
      {...props}
      label={label}
      value={value}
      InputProps={{
        readOnly: true,
        style: {
          backgroundColor: "#f9f9f9",
          cursor: "not-allowed",
        },
      }}
    />
  );
};

export default ReadOnlyInput;
