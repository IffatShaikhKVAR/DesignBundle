// components/Inputs.tsx
import React from "react";
import BaseInput, { type BaseInputProps } from "./BaseInput";

// 🧍 Name Input
export const NameInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput {...props} label="Full Name" placeholder="Enter your name" />
);

// ✉️ Email Input
export const EmailInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="email"
    label="Email"
    variantType="outlined"
    placeholder="example@mail.com"
  />
);

// 🔒 Password Input
export const PasswordInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="password"
    label="Password"
    variantType="outlined"
    placeholder="Enter password"
  />
);

// 📅 Date Input
export const DateInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="date"
    label="Select Date"
    variantType="outlined"
    InputLabelProps={{ shrink: true }}
  />
);

// 🔢 Number Input
export const NumberInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="number"
    label="Enter Value"
    placeholder="0"
    variantType="outlined"
  />
);

// Time Input
export const TimeInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="time"
    label={props.label || "Select Time"}
    variantType="outlined"
  />
);