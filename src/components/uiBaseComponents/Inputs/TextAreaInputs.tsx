// components/Inputs/TextAreaInputs.tsx
import React from "react";
import BaseInput, { type BaseInputProps } from "./BaseInput";

/**
 * ============================================
 * TEXTAREA / MULTILINE INPUT COMPONENTS
 * ============================================
 * Includes Standard, Outlined, and Filled variants
 * with configurable rows and placeholders.
 */

// --- Standard Variant ---
export const TextAreaStandard: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    label="Message"
    placeholder="Type your message here..."
    variantType="standard"
    multiline
    rows={4}
    fullWidth
  />
);

// --- Outlined Variant ---
export const TextAreaOutlined: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    label="Message"
    placeholder="Type your message here..."
    variantType="outlined"
    multiline
    rows={4}
    fullWidth
  />
);

// --- Filled Variant ---
export const TextAreaFilled: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    label="Message"
    placeholder="Type your message here..."
    variantType="filled"
    multiline
    rows={4}
    fullWidth
  />
);

/**
 * ============================================
 * EXPORT COLLECTION
 * ============================================
 */
export const TextAreaInput = {
  TextAreaStandard,
  TextAreaOutlined,
  TextAreaFilled,
};
