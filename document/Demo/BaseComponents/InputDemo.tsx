import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import {
  Input,
  IconInput,
  TextAreaInput,
  fileInput,
  AutoFilledInput,
  ReadOnlyInput,
} from "../../../src/components";

// ========================================
// Categories for Input Components
// ========================================

const inputCategories: DemoCategory[] = [
  // ----------------------------------------
  // BASIC TEXT INPUTS
  // ----------------------------------------
  {
    title: "Basic Text Inputs",
    description: "Fundamental input components with Standard, Outlined, and Filled variants.",
    items: [
      // Name Inputs
      {
        id: "name-standard",
        name: "NameInput",
        component: <Input.NameInput />,
        description: "Standard variant for name entry.",
      },
      {
        id: "name-outlined",
        name: "NameInputOutlined",
        component: <Input.NameInputOutlined />,
        description: "Outlined variant for name entry.",
      },
      {
        id: "name-filled",
        name: "NameInputFilled",
        component: <Input.NameInputFilled />,
        description: "Filled variant for name entry.",
      },

      // Email Inputs
      {
        id: "email-standard",
        name: "EmailInput",
        component: <Input.EmailInput />,
        description: "Standard variant for email entry.",
      },
      {
        id: "email-outlined",
        name: "EmailInputOutlined",
        component: <Input.EmailInputOutlined />,
        description: "Outlined variant for email entry.",
      },
      {
        id: "email-filled",
        name: "EmailInputFilled",
        component: <Input.EmailInputFilled />,
        description: "Filled variant for email entry.",
      },

      // Password Inputs
      {
        id: "password-standard",
        name: "PasswordInput",
        component: <Input.PasswordInput />,
        description: "Standard password input with masking.",
      },
      {
        id: "password-outlined",
        name: "PasswordInputOutlined",
        component: <Input.PasswordInputOutlined />,
        description: "Outlined password input.",
      },
      {
        id: "password-filled",
        name: "PasswordInputFilled",
        component: <Input.PasswordInputFilled />,
        description: "Filled password input variant.",
      },

      // Number Inputs
      {
        id: "number-standard",
        name: "NumberInput",
        component: <Input.NumberInput />,
        description: "Standard numeric input.",
      },
      {
        id: "number-outlined",
        name: "NumberInputOutlined",
        component: <Input.NumberInputOutlined />,
        description: "Outlined numeric input.",
      },
      {
        id: "number-filled",
        name: "NumberInputFilled",
        component: <Input.NumberInputFilled />,
        description: "Filled numeric input.",
      },

      // Phone Inputs
      {
        id: "phone-standard",
        name: "PhoneInput",
        component: <Input.PhoneInput />,
        description: "Standard phone input.",
      },
      {
        id: "phone-outlined",
        name: "PhoneInputOutlined",
        component: <Input.PhoneInputOutlined />,
        description: "Outlined phone input.",
      },
      {
        id: "phone-filled",
        name: "PhoneInputFilled",
        component: <Input.PhoneInputFilled />,
        description: "Filled phone input.",
      },

      // Description Inputs
      {
        id: "description-standard",
        name: "DescriptionInput",
        component: <Input.DescriptionInput />,
        description: "Standard description input.",
      },
      {
        id: "description-outlined",
        name: "DescriptionInputOutlined",
        component: <Input.DescriptionInputOutlined />,
        description: "Outlined description input.",
      },
      {
        id: "description-filled",
        name: "DescriptionInputFilled",
        component: <Input.DescriptionInputFilled />,
        description: "Filled description input.",
      },

      // Search Inputs
      {
        id: "search-standard",
        name: "SearchInput",
        component: <Input.SearchInput />,
        description: "Standard search input.",
      },
      {
        id: "search-outlined",
        name: "SearchInputOutlined",
        component: <Input.SearchInputOutlined />,
        description: "Outlined search input.",
      },
      {
        id: "search-filled",
        name: "SearchInputFilled",
        component: <Input.SearchInputFilled />,
        description: "Filled search input.",
      },

      // URL Inputs
      {
        id: "url-standard",
        name: "URLInput",
        component: <Input.URLInput />,
        description: "Standard URL input.",
      },
      {
        id: "url-outlined",
        name: "URLInputOutlined",
        component: <Input.URLInputOutlined />,
        description: "Outlined URL input.",
      },
      {
        id: "url-filled",
        name: "URLInputFilled",
        component: <Input.URLInputFilled />,
        description: "Filled URL input.",
      },

      // Address Inputs
      {
        id: "address-standard",
        name: "AddressInput",
        component: <Input.AddressInput />,
        description: "Standard address input.",
      },
      {
        id: "address-outlined",
        name: "AddressInputOutlined",
        component: <Input.AddressInputOutlined />,
        description: "Outlined address input.",
      },
      {
        id: "address-filled",
        name: "AddressInputFilled",
        component: <Input.AddressInputFilled />,
        description: "Filled address input.",
      },
    ],
  },

  // ----------------------------------------
  // ICON INPUTS
  // ----------------------------------------
  {
    title: "Icon Inputs",
    description: "Input fields with built-in icons for better UX and context.",
    items: [
      {
        id: "icon-phone",
        name: "StandardPhone",
        component: <IconInput.StandardPhone />,
        description: "Phone input with icon.",
      },
      {
        id: "icon-email",
        name: "StandardEmail",
        component: <IconInput.StandardEmail />,
        description: "Email input with icon.",
      },
      {
        id: "icon-password",
        name: "StandardPassword",
        component: <IconInput.StandardPassword />,
        description: "Password input with visibility toggle.",
      },
      {
        id: "icon-search",
        name: "StandardSearch",
        component: <IconInput.StandardSearch />,
        description: "Search input with magnifying glass icon.",
      },
      {
        id: "icon-name",
        name: "StandardName",
        component: <IconInput.StandardName />,
        description: "Name input with user icon.",
      },
    ],
  },

  // ----------------------------------------
  // TEXT AREA INPUTS
  // ----------------------------------------
  {
    title: "Text Area Inputs",
    description: "Multiline input fields for longer content.",
    items: [
      {
        id: "textarea-standard",
        name: "TextAreaStandard",
        component: <TextAreaInput.TextAreaStandard />,
        description: "Standard multiline input.",
      },
      {
        id: "textarea-outlined",
        name: "TextAreaOutlined",
        component: <TextAreaInput.TextAreaOutlined />,
        description: "Outlined multiline input.",
      },
      {
        id: "textarea-filled",
        name: "TextAreaFilled",
        component: <TextAreaInput.TextAreaFilled />,
        description: "Filled multiline input.",
      },
    ],
  },

  // ----------------------------------------
  // FILE INPUTS
  // ----------------------------------------
  {
    title: "File Inputs",
    description: "Components for file uploads and downloads.",
    items: [
      {
        id: "file-upload",
        name: "FileUploadInput",
        component: <fileInput.FileUploadInput />,
        description: "Single file upload input.",
      },
      {
        id: "multi-file-upload",
        name: "MultiFileUploadInput",
        component: <fileInput.MultiFileUploadInput />,
        description: "Multiple file uploads.",
      },
      {
        id: "file-download",
        name: "FileDownloadInput",
        component: <fileInput.FileDownloadInput />,
        description: "File download component.",
      },
      {
        id: "upload-progress",
        name: "FileUploadWithProgressInput",
        component: <fileInput.FileUploadWithProgressInput />,
        description: "Shows upload progress.",
      },
      {
        id: "document-picker",
        name: "DocumentPicker",
        component: <fileInput.DocumentPicker />,
        description: "Preview documents before upload.",
      },
      {
        id: "drag-drop",
        name: "DragDropUpload",
        component: <fileInput.DragDropUpload />,
        description: "Drag-and-drop file upload.",
      },
    ],
  },

  // ----------------------------------------
  // SMART INPUTS
  // ----------------------------------------
  {
    title: "Smart Inputs",
    description: "Inputs with auto-filled or read-only states.",
    items: [
      {
        id: "auto-filled",
        name: "AutoFilledInput",
        component: (
          <AutoFilledInput
            autoValue="user@example.com"
            label="Auto-filled Email"
          />
        ),
        description: "Displays a pre-filled email.",
      },
      {
        id: "read-only",
        name: "ReadOnlyInput",
        component: (
          <ReadOnlyInput label="Read Only Field" value="12345-ABC" />
        ),
        description: "Displays non-editable value.",
      },
    ],
  },
];

// ========================================
// INPUT DEMO COMPONENT
// ========================================

const InputDemo: React.FC = () => {
  return <ComponentDemo categories={inputCategories} packageName="design-bundle" />;
};

export default InputDemo;
