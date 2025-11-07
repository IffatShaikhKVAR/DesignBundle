// components/Inputs.tsx
import React from "react";
import BaseInput from "./BaseInput";
import type { BaseInputProps } from "./BaseInput";

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
    placeholder="example@mail.com"
  />
);

// 🔒 Password Input
export const PasswordInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="password"
    label="Password"
    placeholder="Enter password"
  />
);

// 📅 Date Input
export const DateInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="date"
    label="Select Date"
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
  />
);
