// components/AutoFilledInput.tsx
import React, { useEffect, useState } from "react";
import BaseInput, { type BaseInputProps } from "./BaseInput";

/**
 * AutoFilledInput automatically fills its value from a provided source.
 * Example: pre-filling user email or ID from saved data.
 */
export type AutoFilledInputProps = BaseInputProps & {
  autoValue?: string; // static prefill value
  fetchValue?: () => Promise<string>; // optional async loader
};

const AutoFilledInput: React.FC<AutoFilledInputProps> = ({
  autoValue,
  fetchValue,
  label = "Auto Filled Input",
  ...props
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (autoValue) {
      setValue(autoValue);
    } else if (fetchValue) {
      fetchValue().then((val) => setValue(val));
    }
  }, [autoValue, fetchValue]);

  return (
    <BaseInput
      {...props}
      label={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        readOnly: true,
        style: { backgroundColor: "#f9f9ff" }, // visual cue for autofill
      }}
    />
  );
};

export default AutoFilledInput;
