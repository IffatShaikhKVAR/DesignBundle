// components/Inputs.tsx
import React from "react";
import BaseInput, { type BaseInputProps } from "./BaseInput";

// ============================================
// NAME INPUT - DIFFERENT VARIANTS
// ============================================

// Standard Variant
export const NameInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput 
    {...props} 
    label="Full Name" 
    placeholder="Enter your name"
    variantType="standard"
  />
);

// Outlined Variant
export const NameInputOutlined: React.FC<BaseInputProps> = (props) => (
  <BaseInput 
    {...props} 
    label="Full Name" 
    placeholder="Enter your name"
    variantType="outlined"
  />
);

// Filled Variant
export const NameInputFilled: React.FC<BaseInputProps> = (props) => (
  <BaseInput 
    {...props} 
    label="Full Name" 
    placeholder="Enter your name"
    variantType="filled"
  />
);

// ============================================
// EMAIL INPUT - DIFFERENT VARIANTS
// ============================================

// Standard Variant
export const EmailInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="email"
    label="Email"
    placeholder="example@mail.com"
    variantType="standard"
  />
);

// Outlined Variant
export const EmailInputOutlined: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="email"
    label="Email"
    placeholder="example@mail.com"
    variantType="outlined"
  />
);

// Filled Variant
export const EmailInputFilled: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="email"
    label="Email"
    placeholder="example@mail.com"
    variantType="filled"
  />
);




// ============================================
// NUMBER INPUT - DIFFERENT VARIANTS
// ============================================

// Standard Variant
export const NumberInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="number"
    label="Enter Value"
    placeholder="0"
    variantType="standard"
  />
);

// Outlined Variant
export const NumberInputOutlined: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="number"
    label="Enter Value"
    placeholder="0"
    variantType="outlined"
  />
);

// Filled Variant
export const NumberInputFilled: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="number"
    label="Enter Value"
    placeholder="0"
    variantType="filled"
  />
);



// ============================================
// PHONE INPUT - DIFFERENT VARIANTS
// ============================================

// Standard Variant
export const PhoneInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="tel"
    label="Phone Number"
    placeholder="+1 (555) 123-4567"
    variantType="standard"
  />
);

// Outlined Variant
export const PhoneInputOutlined: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="tel"
    label="Phone Number"
    placeholder="+1 (555) 123-4567"
    variantType="outlined"
  />
);

// Filled Variant
export const PhoneInputFilled: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="tel"
    label="Phone Number"
    placeholder="+1 (555) 123-4567"
    variantType="filled"
  />
);




// ============================================
// URL INPUT - DIFFERENT VARIANTS
// ============================================

// Standard Variant
export const URLInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="url"
    label="Website URL"
    placeholder="https://example.com"
    variantType="standard"
  />
);

// Outlined Variant
export const URLInputOutlined: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="url"
    label="Website URL"
    placeholder="https://example.com"
    variantType="outlined"
  />
);

// Filled Variant
export const URLInputFilled: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    type="url"
    label="Website URL"
    placeholder="https://example.com"
    variantType="filled"
  />
);


// ============================================
// ADDRESS INPUT - DIFFERENT VARIANTS
// ============================================

// Standard Variant
export const AddressInput: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    label="Street Address"
    placeholder="123 Main Street"
    variantType="standard"
    fullWidth
  />
);

// Outlined Variant
export const AddressInputOutlined: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    label="Street Address"
    placeholder="123 Main Street"
    variantType="outlined"
    fullWidth
  />
);

// Filled Variant
export const AddressInputFilled: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    label="Street Address"
    placeholder="123 Main Street"
    variantType="filled"
    fullWidth
  />
);

// ============================================
// EXPORT ALL INPUTS
// ============================================

export const Input = {
  // Name Input
  NameInput,
  NameInputOutlined,
  NameInputFilled,
  
  // Email Input
  EmailInput,
  EmailInputOutlined,
  EmailInputFilled,
  
  
  // Number Input
  NumberInput,
  NumberInputOutlined,
  NumberInputFilled,
  
  // Phone Input
  PhoneInput,
  PhoneInputOutlined,
  PhoneInputFilled,
  
  // URL Input
  URLInput,
  URLInputOutlined,
  URLInputFilled,
  
  
  // Address Input
  AddressInput,
  AddressInputOutlined,
  AddressInputFilled,
};