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

// 👤 Name Input with Icon (All Variants)
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

// ✉️ Email Input with Icon (All Variants)
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

// 🔍 Search Input (All Variants)
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

// 🔒 Password Input with Lock icon and visibility toggle (All Variants)
export const IconPasswordInput: React.FC<BaseInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <BaseInput
      {...props}
      type={showPassword ? "text" : "password"}
      label="Password"
      placeholder="Enter password"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Lock sx={{ color: "text.secondary" }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              aria-label="toggle password visibility"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};


// 📞 Phone Number Input (All Variants)
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
