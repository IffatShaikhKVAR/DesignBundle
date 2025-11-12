// src/components/BaseCard.tsx
import React from "react";
import { Box } from "@mui/material";
import {
  Info as InfoIcon,
  Warning as WarningIcon,
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

export interface BaseCardProps {
  title?: string;
  content?: string;
  variantType?:
    | "default"
    | "outlined"
    | "elevated"
    | "registration"
    | "info"
    | "warning"
    | "success"
    | "error"
    | "minimal"
    | "highlight"
    | "gradient"
    | "bordered";
  sx?: object;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  content,
  variantType = "default",
  sx = {},
  children,
  onClose,
}) => {
  const getCardStyle = () => {
    switch (variantType) {
      case "outlined":
        return {
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "16px",
          backgroundColor: "#fff",
        };
      case "elevated":
        return {
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          padding: "16px",
          backgroundColor: "#fff",
        };
      case "registration":
        return {
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        };
      case "info":
        return {
          borderLeft: "4px solid #2196F3",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#E3F2FD",
          boxShadow: "0 2px 8px rgba(33, 150, 243, 0.15)",
        };
      case "warning":
        return {
          borderLeft: "4px solid #FF9800",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#FFF3E0",
          boxShadow: "0 2px 8px rgba(255, 152, 0, 0.15)",
        };
      case "success":
        return {
          borderLeft: "4px solid #4CAF50",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#E8F5E9",
          boxShadow: "0 2px 8px rgba(76, 175, 80, 0.15)",
        };
      case "error":
        return {
          borderLeft: "4px solid #F44336",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#FFEBEE",
          boxShadow: "0 2px 8px rgba(244, 67, 54, 0.15)",
        };
      case "minimal":
        return {
          borderRadius: "8px",
          padding: "12px 16px",
          backgroundColor: "#fafafa",
          border: "1px solid #e0e0e0",
        };
      case "highlight":
        return {
          borderRadius: "12px",
          padding: "20px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#fff",
          boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
        };
      case "gradient":
        return {
          borderRadius: "12px",
          padding: "20px",
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          color: "#fff",
          boxShadow: "0 8px 24px rgba(245, 87, 108, 0.3)",
        };
      case "bordered":
        return {
          border: "2px solid #667eea",
          borderRadius: "12px",
          padding: "16px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(102, 126, 234, 0.1)",
        };
      default:
        return {
          borderRadius: "8px",
          backgroundColor: "#fff",
          padding: "16px",
        };
    }
  };

  const getIconComponent = () => {
    switch (variantType) {
      case "info":
        return <InfoIcon sx={{ mr: 1, color: "#2196F3" }} />;
      case "warning":
        return <WarningIcon sx={{ mr: 1, color: "#FF9800" }} />;
      case "success":
        return <SuccessIcon sx={{ mr: 1, color: "#4CAF50" }} />;
      case "error":
        return <ErrorIcon sx={{ mr: 1, color: "#F44336" }} />;
      default:
        return null;
    }
  };

  const cardStyle = getCardStyle();
  const icon = getIconComponent();

  // Registration style card
  if (variantType === "registration") {
    return (
      <Box sx={{ ...cardStyle, ...sx }}>
        <Box
          sx={{
            background: "linear-gradient(90deg, #3dc45d, #b6e46e)",
            color: "#fff",
            padding: "16px 24px",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            fontWeight: 600,
            fontSize: "1.1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{title || "Device Registration"}</span>
          {onClose && (
            <CloseIcon
              sx={{ cursor: "pointer", fontSize: "1.5rem" }}
              onClick={onClose}
            />
          )}
        </Box>
        <Box sx={{ padding: "24px", backgroundColor: "#fff" }}>
          {children || <p style={{ margin: 0, color: "#444" }}>{content}</p>}
        </Box>
      </Box>
    );
  }

  // Status cards (info, warning, success, error)
  if (["info", "warning", "success", "error"].includes(variantType)) {
    return (
      <Box sx={{ ...cardStyle, ...sx }}>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          {icon}
          <Box sx={{ flex: 1 }}>
            {title && (
              <Box sx={{ fontWeight: 600, fontSize: "1rem", mb: 0.5 }}>
                {title}
              </Box>
            )}
            {content && <p style={{ margin: 0, fontSize: "0.95rem" }}>{content}</p>}
            {children}
          </Box>
          {onClose && (
            <CloseIcon
              sx={{
                cursor: "pointer",
                fontSize: "1.2rem",
                ml: 1,
                opacity: 0.6,
                "&:hover": { opacity: 1 },
              }}
              onClick={onClose}
            />
          )}
        </Box>
      </Box>
    );
  }

  // Highlight and Gradient cards (text color already set to white)
  if (["highlight", "gradient"].includes(variantType)) {
    return (
      <Box sx={{ ...cardStyle, ...sx }}>
        {title && (
          <Box
            sx={{
              fontWeight: 700,
              fontSize: "1.2rem",
              marginBottom: "8px",
              color: "#fff",
            }}
          >
            {title}
          </Box>
        )}
        {content && (
          <p style={{ margin: 0, color: "#fff", fontSize: "0.95rem" }}>
            {content}
          </p>
        )}
        {children}
      </Box>
    );
  }

  // Default, outlined, elevated, minimal, bordered
  return (
    <Box sx={{ ...cardStyle, ...sx }}>
      {title && (
        <Box
          sx={{
            fontWeight: 600,
            fontSize: "1.1rem",
            marginBottom: "8px",
          }}
        >
          {title}
        </Box>
      )}
      {content && <p style={{ margin: 0 }}>{content}</p>}
      {children}
    </Box>
  );
};

export default BaseCard;