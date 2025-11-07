// components/IconButtons.tsx
import React from "react";
import BaseButton from "./Button";
import type { BaseButtonProps } from "./Button";
import {
  Add,
  Download,
  FileDownloadOutlined,
  Edit,
  Delete,
} from "@mui/icons-material";

// ➕ Create Button
export const CreateButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    startIcon={<Add />}
    label="Create"
    sx={{
      backgroundColor: "#1976d2",
      color: "#fff",
      "&:hover": { backgroundColor: "#1565c0" },
    }}
  />
);

// 📤 Export to Excel Button
export const ExportExcelButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    startIcon={<FileDownloadOutlined />}
    label="Export to Excel"
    sx={{
      backgroundColor: "#1F8D49",
      color: "#fff",
      "&:hover": { backgroundColor: "#15723a" },
    }}
  />
);

// ⬇️ Download Button
export const DownloadButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    startIcon={<Download />}
    label="Download"
    sx={{
      backgroundColor: "#0288d1",
      color: "#fff",
      "&:hover": { backgroundColor: "#0277bd" },
    }}
  />
);

// ✏️ Edit Button
export const EditButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    startIcon={<Edit />}
    label="Edit"
    sx={{
      backgroundColor: "#FBC02D",
      color: "#000",
      "&:hover": { backgroundColor: "#F9A825" },
    }}
  />
);

// 🗑️ Delete Button
export const DeleteButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    startIcon={<Delete />}
    label="Delete"
    sx={{
      backgroundColor: "#E53935",
      color: "#fff",
      "&:hover": { backgroundColor: "#C62828" },
    }}
  />
);

// ✏️ Circular Edit Icon Button
export const EditIconButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    startIcon={<Edit />}
    label=""
    sx={{
      background: "linear-gradient(135deg, #6A47C9, #8A63D2)", // Purple gradient
      color: "#fff",
      borderRadius: "50px",
      minWidth: "50px",
      height: "45px",
      width: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .MuiButton-startIcon": {
        margin: 0,
      },
      "&:hover": {
        background: "linear-gradient(135deg, #5B3DB1, #7B55C0)",
      },
    }}
  />
);

// 🗑️ Circular Delete Icon Button
export const DeleteIconButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton
    {...props}
    startIcon={<Delete />}
    label=""
    sx={{
      background: "linear-gradient(135deg, #E53935, #FF5252)", // Red gradient
      color: "#fff",
      borderRadius: "50px",
      minWidth: "50px",
      height: "45px",
      width: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .MuiButton-startIcon": {
        margin: 0,
      },
      "&:hover": {
        background: "linear-gradient(135deg, #C62828, #F44336)",
      },
    }}
  />
);