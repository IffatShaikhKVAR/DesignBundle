// components/Modals/FullScreenModal.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface FullScreenModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onSave?: () => void;
  saveText?: string;
  cancelText?: string;
  showSaveButton?: boolean;
}

/**
 * FullScreenModal Component
 * Full-screen modal for large content and complex forms
 * Standalone component (not extending BaseModal)
 */
export const FullScreenModal: React.FC<FullScreenModalProps> = ({
  open,
  title,
  children,
  onClose,
  onSave,
  saveText = "Save",
  cancelText = "Cancel",
  showSaveButton = true,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #e0e0e0",
            py: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* Content */}
        <DialogContent sx={{ flex: 1, overflow: "auto", p: 3 }}>
          {children}
        </DialogContent>

        {/* Footer */}
        {showSaveButton && (
          <DialogActions sx={{ p: 2, borderTop: "1px solid #e0e0e0" }}>
            <Button onClick={onClose} variant="outlined">
              {cancelText}
            </Button>
            {onSave && (
              <Button onClick={onSave} variant="contained">
                {saveText}
              </Button>
            )}
          </DialogActions>
        )}
      </Box>
    </Dialog>
  );
};

export default FullScreenModal;