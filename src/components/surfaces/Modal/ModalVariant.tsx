// components/Modals/ConfirmationModal.tsx
import React from "react";
import { Typography } from "@mui/material";
import BaseModal, {type BaseModalProps } from "./BaseModal";
import { Box, CircularProgress } from "@mui/material";

export interface ConfirmationModalProps extends Omit<BaseModalProps, "children"> {
  message: string;
  confirmColor?: "primary" | "error" | "success" | "warning";
  confirmIcon?: React.ReactNode;
  onConfirm: () => void;
}

/**
 * ConfirmationModal Component
 * Used for confirming actions like delete, logout, etc.
 * Extends BaseModal with confirmation-specific props
 */
export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  title,
  message,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  maxWidth = "sm",
  showFooter = true,
  showCloseButton = true,
  disabled = false,
  confirmColor = "primary",
}) => {
  return (
    <BaseModal
      open={open}
      title={title}
      onClose={onClose}
      onConfirm={onConfirm}
      confirmText={confirmText}
      cancelText={cancelText}
      maxWidth={maxWidth}
      showFooter={showFooter}
      showCloseButton={showCloseButton}
      disabled={disabled}
    >
      <Typography sx={{ mt: 2, mb: 2 }}>{message}</Typography>
    </BaseModal>
  );
};

export interface FormModalProps extends Omit<BaseModalProps, "onConfirm"> {
  onSubmit: () => void | Promise<void>;
  isLoading?: boolean;
  submitText?: string;
  onClose: () => void;
}

/**
 * FormModal Component
 * Modal designed for form submission with loading states
 * Extends BaseModal with form-specific functionality
 */
export const FormModal: React.FC<FormModalProps> = ({
  open,
  title,
  children,
  onClose,
  onSubmit,
  isLoading = false,
  submitText = "Submit",
  cancelText = "Cancel",
  maxWidth = "sm",
  showCloseButton = true,
  disabled = false,
}) => {
  const handleSubmit = async () => {
    try {
      await onSubmit();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <BaseModal
      open={open}
      title={title}
      onClose={onClose}
      onConfirm={handleSubmit}
      confirmText={
        isLoading ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CircularProgress size={16} sx={{ color: "white" }} />
            Submitting...
          </Box>
        ) : (
          submitText
        )
      }
      cancelText={cancelText}
      maxWidth={maxWidth}
      showFooter={true}
      showCloseButton={showCloseButton}
      disabled={isLoading || disabled}
    >
      <Box sx={{ pt: 2 }}>{children}</Box>
    </BaseModal>
  );
};

export interface ScrollableModalProps extends BaseModalProps {
  scrollHeight?: number; // in pixels
  onConfirm: () => void;
}

/**
 * ScrollableModal Component
 * Modal with scrollable content area, useful for long lists or content
 * Extends BaseModal with custom scroll handling
 */
export const ScrollableModal: React.FC<ScrollableModalProps> = ({
  open,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  maxWidth = "md",
  showFooter = true,
  showCloseButton = true,
  disabled = false,
  scrollHeight = 500,
}) => {
  return (
    <BaseModal
      open={open}
      title={title}
      children={
        <div style={{ maxHeight: `${scrollHeight}px`, overflow: "auto" }}>
          {children}
        </div>
      }
      onClose={onClose}
      onConfirm={onConfirm}
      confirmText={confirmText}
      cancelText={cancelText}
      maxWidth={maxWidth}
      showFooter={showFooter}
      showCloseButton={showCloseButton}
      disabled={disabled}
    />
  );
};

/* ---------------------------
   EditModal (based on FormModal)
   - fix typing by Omit'ing title from FormModalProps and making it optional
   --------------------------- */
export type EditModalProps = Omit<FormModalProps, "title"> & {
  title?: string;
};

export const EditModal: React.FC<EditModalProps> = ({
  title = "Edit Item",
  submitText = "Save Changes",
  ...rest
}) => {
  return <FormModal {...(rest as FormModalProps)} title={title} submitText={submitText} />;
};

/* ---------------------------
   DeleteModal (based on ConfirmationModal)
   - allow confirmColor optional, default to "error"
   --------------------------- */
// components/Modals/ConfirmationModal.tsx

export type DeleteModalProps = Omit<ConfirmationModalProps, "confirmColor"> & {
  title?: string;
  message?: string;
  confirmColor?: ConfirmationModalProps["confirmColor"];
};


export const DeleteModal: React.FC<DeleteModalProps> = ({
  title = "Delete Confirmation",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  confirmText = "Delete",
  confirmColor = "error",
  ...rest
}) => {
  return (
    <ConfirmationModal
      {...(rest as ConfirmationModalProps)}
      title={title}
      message={message}
      confirmText={confirmText}
      confirmColor={confirmColor}
    />
  );
};

export const Modal = {
  ScrollableModal,
  FormModal,
  ConfirmationModal,
  EditModal,
  DeleteModal,
}
