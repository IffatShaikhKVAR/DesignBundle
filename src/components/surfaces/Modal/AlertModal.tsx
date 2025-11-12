// components/Modals/AlertModal.tsx
import React from "react";
import { Typography, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import BaseModal, {type BaseModalProps } from "./BaseModal";

export interface AlertModalProps extends Omit<BaseModalProps, "children" | "onConfirm"> {
  message: string;
  type?: "info" | "success" | "warning" | "error";
  onClose: () => void;
  buttonText?: string
}

const iconMap = {
  info: <InfoIcon sx={{ fontSize: 40, color: "#2575fc" }} />,
  success: <CheckCircleIcon sx={{ fontSize: 40, color: "#4caf50" }} />,
  warning: <WarningIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
  error: <ErrorIcon sx={{ fontSize: 40, color: "#f44336" }} />,
};

const colorMap = {
  info: "primary",
  success: "success",
  warning: "warning",
  error: "error",
} as const;

/**
 * AlertModal Component
 * Displays alert messages with different types (info, success, warning, error)
 * Extends BaseModal with alert-specific styling
 */
export const AlertModal: React.FC<AlertModalProps> = ({
  open,
  title,
  message,
  onClose,
  type = "info",
  maxWidth = "sm",
  showCloseButton = true,
  disabled = false,
  buttonText = "OK",
}) => {
  return (
    <BaseModal
      open={open}
      title={title}
      onClose={onClose}
      confirmText={buttonText}
      cancelText=""
      maxWidth={maxWidth}
      showFooter={true}
      showCloseButton={showCloseButton}
      disabled={disabled}
      onConfirm={onClose}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, py: 2 }}>
        {iconMap[type]}
        <Typography sx={{ textAlign: "center" }}>{message}</Typography>
      </Box>
    </BaseModal>
  );
};

export default AlertModal;