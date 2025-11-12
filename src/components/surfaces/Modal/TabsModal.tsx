// components/Modals/StyledTabsModal.tsx
import React, { useState } from "react";
import { Box, Tabs, Tab, TextField, styled, alpha } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import ListIcon from "@mui/icons-material/List";
import BaseModal, { type BaseModalProps } from "./BaseModal";

// ============================================
// STYLED COMPONENTS
// ============================================

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#2575fc",
    height: 3,
  },
  "& .MuiTabs-scroller": {
    paddingBottom: 0,
  },
});

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: "14px",
  padding: "12px 24px",
  color: "#666",
  transition: "all 0.3s ease",
  borderRadius: "8px 8px 0 0",
  marginRight: "4px",
  "&:hover": {
    backgroundColor: alpha("#2575fc", 0.08),
    color: "#2575fc",
  },
  "&.Mui-selected": {
    color: "#2575fc",
    backgroundColor: alpha("#2575fc", 0.05),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&.Mui-focused": {
      backgroundColor: "#fff",
      "& fieldset": {
        borderColor: "#2575fc",
        borderWidth: 2,
      },
    },
  },
  "& .MuiInputBase-input": {
    padding: "12px 14px",
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "#2575fc",
    },
  },
}));

// ============================================
// TABS MODAL COMPONENT
// ============================================

export interface TabItem {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactElement;
  description?: string;
}

export interface StyledTabsModalProps extends Omit<BaseModalProps, "children"> {
  tabs: TabItem[];
  onConfirm: () => void;
}

/**
 * StyledTabsModal Component
 * Modern, user-friendly modal with styled tabs
 * Extends BaseModal with enhanced design
 */
export const StyledTabsModal: React.FC<StyledTabsModalProps> = ({
  open,
  title,
  tabs,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  maxWidth = "md",
  showCloseButton = true,
  disabled = false,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <BaseModal
      open={open}
      title={title}
      onClose={onClose}
      onConfirm={onConfirm}
      confirmText={confirmText}
      cancelText={cancelText}
      maxWidth={maxWidth}
      showFooter={true}
      showCloseButton={showCloseButton}
      disabled={disabled}
    >
      <Box>
        {/* Tab Header with Background */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #f5f7fa 0%, #f0f4f8 100%)",
            borderRadius: "8px",
            mb: 2,
            overflow: "hidden",
            border: "1px solid #e8eef7",
          }}
        >
          <StyledTabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="styled tabs"
            variant="scrollable"
            scrollButtons="auto"
            sx={{ p: 0 }}
          >
            {tabs.map((tab, index) => (
              <StyledTab
                key={index}
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {tab.icon}
                    <span>{tab.label}</span>
                  </Box>
                }
                icon={undefined}
                iconPosition="start"
              />
            ))}
          </StyledTabs>
        </Box>

        {/* Tab Description */}
        {tabs[activeTab]?.description && (
          <Box
            sx={{
              backgroundColor: alpha("#2575fc", 0.05),
              borderLeft: "4px solid #2575fc",
              p: 1.5,
              borderRadius: "4px",
              mb: 2,
            }}
          >
            <Box sx={{ fontSize: "13px", color: "#555", fontStyle: "italic" }}>
              💡 {tabs[activeTab].description}
            </Box>
          </Box>
        )}

        {/* Tab Content */}
        <Box
          sx={{
            minHeight: 300,
            py: 2,
            animation: "fadeIn 0.3s ease",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(5px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {tabs[activeTab]?.content}
        </Box>
      </Box>
    </BaseModal>
  );
};

// ============================================
// GENERAL TABS MODAL COMPONENT
// ============================================

export interface GeneralStyledTabsModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

export const GeneralStyledTabsModal: React.FC<GeneralStyledTabsModalProps> = ({
  open,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    deviceName: "KLog1",
    modelName: "AQI",
    matrixSerialNo: "25060127",
    serialNumber: "4017337747",
    simNumber: "89918304267634937211",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.deviceName.trim()) newErrors.deviceName = "Device name is required";
    if (!formData.modelName.trim()) newErrors.modelName = "Model name is required";
    if (!formData.serialNumber.trim()) newErrors.serialNumber = "Serial number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
      onClose();
    }
  };

  const tabs: TabItem[] = [
    {
      label: "General",
      icon: <BuildIcon sx={{ fontSize: 18 }} />,
      description: "Edit basic device information",
      content: (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <StyledTextField
            fullWidth
            label="Device Name"
            name="deviceName"
            value={formData.deviceName}
            onChange={handleChange}
            error={!!errors.deviceName}
            helperText={errors.deviceName}
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="Model Name"
            name="modelName"
            value={formData.modelName}
            onChange={handleChange}
            error={!!errors.modelName}
            helperText={errors.modelName}
            variant="outlined"
          />
        </Box>
      ),
    },
    {
      label: "Details",
      icon: <ListIcon sx={{ fontSize: 18 }} />,
      description: "Manage serial numbers and device identifiers",
      content: (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <StyledTextField
            fullWidth
            label="Matrix Serial No"
            name="matrixSerialNo"
            value={formData.matrixSerialNo}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="Serial Number"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
            error={!!errors.serialNumber}
            helperText={errors.serialNumber}
            variant="outlined"
          />
          <StyledTextField
            fullWidth
            label="SIM Number"
            name="simNumber"
            value={formData.simNumber}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
      ),
    },
  ];

  return (
    <StyledTabsModal
      open={open}
      title="Edit Device Information"
      tabs={tabs}
      onClose={onClose}
      onConfirm={handleSave}
      confirmText="Save Changes"
      cancelText="Close"
      maxWidth="md"
    />
  );
};

export const StyledTabModal = {
  GeneralStyledTabsModal,
  StyledTabsModal,
};
