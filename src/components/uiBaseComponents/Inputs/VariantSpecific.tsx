// src/components/Inputs/IconInputVariants.tsx
import React from "react";
import type { BaseInputProps } from "./BaseInput";
import {
  IconNameInput,
  IconEmailInput,
  IconSearchInput,
  IconPasswordInput,
  IconPhoneInput,
} from "./IconInput";

/**
 * Outlined Variants - Default MUI style with border
 */
export const OutlinedName: React.FC<BaseInputProps> = (props) => (
  <IconNameInput {...props} variant="outlined" />
);

export const OutlinedEmail: React.FC<BaseInputProps> = (props) => (
  <IconEmailInput {...props} variant="outlined" />
);

export const OutlinedSearch: React.FC<BaseInputProps> = (props) => (
  <IconSearchInput {...props} variant="outlined" />
);

export const OutlinedPassword: React.FC<BaseInputProps> = (props) => (
  <IconPasswordInput {...props} variant="outlined" />
);


export const OutlinedPhone: React.FC<BaseInputProps> = (props) => (
  <IconPhoneInput {...props} variant="outlined" />
);

/**
 * Filled Variants - Background color fill style
 */
export const FilledName: React.FC<BaseInputProps> = (props) => (
  <IconNameInput {...props} variant="filled" />
);

export const FilledEmail: React.FC<BaseInputProps> = (props) => (
  <IconEmailInput {...props} variant="filled" />
);

export const FilledSearch: React.FC<BaseInputProps> = (props) => (
  <IconSearchInput {...props} variant="filled" />
);

export const FilledPassword: React.FC<BaseInputProps> = (props) => (
  <IconPasswordInput {...props} variant="filled" />
);


export const FilledPhone: React.FC<BaseInputProps> = (props) => (
  <IconPhoneInput {...props} variant="filled" />
);

/**
 * Standard Variants - Minimal style, just underline
 */
export const StandardName: React.FC<BaseInputProps> = (props) => (
  <IconNameInput {...props} variant="standard" />
);

export const StandardEmail: React.FC<BaseInputProps> = (props) => (
  <IconEmailInput {...props} variant="standard" />
);

export const StandardSearch: React.FC<BaseInputProps> = (props) => (
  <IconSearchInput {...props} variant="standard" />
);

export const StandardPassword: React.FC<BaseInputProps> = (props) => (
  <IconPasswordInput {...props} variant="standard" />
);


export const StandardPhone: React.FC<BaseInputProps> = (props) => (
  <IconPhoneInput {...props} variant="standard" />
);

export const IconInput = {
  StandardPhone,
  StandardPassword,
  StandardSearch,
  StandardEmail,
  StandardName,
  FilledPhone,
  FilledPassword,
  FilledSearch,
  FilledEmail,
  FilledName,
  OutlinedPhone,
  OutlinedPassword,
  OutlinedSearch,
  OutlinedEmail,
  OutlinedName
} 