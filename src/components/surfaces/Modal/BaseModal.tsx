// components/Modals/BaseModal.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface BaseModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: React.ReactNode;
  cancelText?: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  showFooter?: boolean;
  showCloseButton?: boolean;
  disabled?: boolean;
  buttonText?: string;
}

/**
 * BaseModal Component
 * Core modal component that all other modals extend from
 */
export const BaseModal: React.FC<BaseModalProps> = ({
  open,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  maxWidth = "sm",
  showFooter = true,
  showCloseButton = true,
  disabled = false,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        {showCloseButton && (
          <IconButton onClick={onClose} size="small" disabled={disabled}>
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>

      <DialogContent>{children}</DialogContent>

      {showFooter && (
        <DialogActions sx={{ p: 2, gap: 1 }}>
          <Button onClick={onClose} variant="outlined" disabled={disabled}>
            {cancelText}
          </Button>
          {onConfirm && (
            <Button onClick={onConfirm} variant="contained" disabled={disabled}>
              {confirmText}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default BaseModal;