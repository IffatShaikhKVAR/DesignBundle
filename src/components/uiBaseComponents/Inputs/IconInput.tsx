// src/components/Inputs/IconInputs.tsx
import React, { useState } from "react";
import BaseInput from "./BaseInput";
import type { BaseInputProps } from "./BaseInput";
import {
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Email,
  Person,
  Search,
  Visibility,
  VisibilityOff,
  Lock,
  CalendarToday,
  Phone,
} from "@mui/icons-material";

/**
 * Text field inputs with leading or trailing icons
 * Built using MUI InputAdornment and your BaseInput
 */

// 👤 Name Input with Icon
export const IconNameInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    label="Full Name"
    placeholder="Enter your name"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Person />
        </InputAdornment>
      ),
    }}
  />
);

// ✉️ Email Input with Icon
export const IconEmailInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="email"
    label="Email"
    placeholder="example@mail.com"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Email />
        </InputAdornment>
      ),
    }}
  />
);

// 🔍 Search Input
export const IconSearchInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    label="Search"
    placeholder="Search..."
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      ),
    }}
  />
);

// 🔒 Password Input with visibility toggle
export const IconPasswordInput: React.FC<BaseInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BaseInput
      {...props}
      type={showPassword ? "text" : "password"}
      label="Password"
      placeholder="Enter password"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

// 📅 Date Input with Icon
export const IconDateInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="date"
    label="Select Date"
    InputLabelProps={{ shrink: true }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <CalendarToday />
        </InputAdornment>
      ),
    }}
  />
);

// 📞 Phone Number Input
export const IconPhoneInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="tel"
    label="Phone Number"
    placeholder="Enter phone number"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Phone />
        </InputAdornment>
      ),
    }}
  />
);
