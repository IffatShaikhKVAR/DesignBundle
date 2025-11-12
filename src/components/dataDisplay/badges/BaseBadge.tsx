// components/Badges/BaseBadge.tsx
import React from "react";
import { Box } from "@mui/material";

export interface BaseBadgeProps {
  variantType?:
    | "simple"
    | "filled"
    | "outlined"
    | "soft"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "small"
    | "medium"
    | "large"
    | "extralarge"
    | "rounded"
    | "pill"
    | "square"
    | "circle"
    | "icon"
    | "check"
    | "close"
    | "star"
    | "active"
    | "inactive"
    | "pending"
    | "online"
    | "offline"
    | "counter"
    | "dot"
    | "new"
    | "gradient"
    | "glassmorphism"
    | "shadow"
    | "neon"
    | "animated"
    | "pulse"
    | "tag"
    | "label"
    | "category"
    | "type"
    | "premium"
    | "verified"
    | "official"
    | "exclusive"
    | "limited";
  label?: string;
  icon?: string;
  sx?: any;
}

const BaseBadge: React.FC<BaseBadgeProps> = ({
  variantType = "simple",
  label = "Badge",
  icon,
  sx,
}) => {
  const getBadgeStyle = (variant: string) => {
    switch (variant) {
      // ============ BASIC BADGES ============
      case "simple":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "4px 12px",
          borderRadius: "12px",
          backgroundColor: "#f0f0f0",
          color: "#333",
          fontSize: "0.75rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
        };
      case "filled":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "outlined":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "4px 12px",
          borderRadius: "6px",
          backgroundColor: "transparent",
          color: "#1976d2",
          border: "1.5px solid #1976d2",
          fontSize: "0.75rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
        };
      case "soft":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#e3f2fd",
          color: "#1976d2",
          fontSize: "0.75rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
        };

      // ============ COLORED BADGES ============
      case "primary":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "secondary":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#7e57c2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "success":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#2e7d32",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "error":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#c62828",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "warning":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#f57f17",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "info":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#0277bd",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };

      // ============ SIZE VARIANTS ============
      case "small":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "4px" : "0",
          padding: "2px 8px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.65rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
        };
      case "medium":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 12px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "large":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "8px" : "0",
          padding: "8px 16px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.9rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "extralarge":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "10px" : "0",
          padding: "10px 20px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: 700,
          whiteSpace: "nowrap",
        };

      // ============ SHAPE VARIANTS ============
      case "rounded":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "16px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "pill":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "50px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "square":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "2px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "circle":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.8rem",
          fontWeight: 700,
          whiteSpace: "nowrap",
        };

      // ============ ICON BADGES ============
      case "icon":
      case "check":
      case "close":
      case "star":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };

      // ============ STATUS BADGES ============
      case "active":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#2e7d32",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
          "&::before": {
            content: '""',
            width: "8px",
            height: "8px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          },
        };
      case "inactive":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#999",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
          "&::before": {
            content: '""',
            width: "8px",
            height: "8px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          },
        };
      case "pending":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#f57f17",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
          "&::before": {
            content: '""',
            width: "8px",
            height: "8px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          },
        };
      case "online":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#4caf50",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
          "&::before": {
            content: '""',
            width: "8px",
            height: "8px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            animation: "pulse 2s infinite",
          },
        };
      case "offline":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#666",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
          "&::before": {
            content: '""',
            width: "8px",
            height: "8px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          },
        };

      // ============ COUNTER BADGES ============
      case "counter":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "24px",
          height: "24px",
          padding: "0 8px",
          borderRadius: "12px",
          backgroundColor: "#c62828",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 700,
          whiteSpace: "nowrap",
        };
      case "dot":
        return {
          display: "inline-block",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#c62828",
        };
      case "new":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px 10px",
          borderRadius: "4px",
          backgroundColor: "#c62828",
          color: "#fff",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.5px",
          whiteSpace: "nowrap",
        };

      // ============ SPECIAL BADGES ============
      case "gradient":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          background: "linear-gradient(135deg, #1976d2, #7e57c2)",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "glassmorphism":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#1976d2",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "shadow":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
          whiteSpace: "nowrap",
        };
      case "neon":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#00ff88",
          color: "#000",
          fontSize: "0.75rem",
          fontWeight: 700,
          boxShadow: "0 0 10px #00ff88, 0 0 20px #00ff88",
          whiteSpace: "nowrap",
        };
      case "animated":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          animation: "slideIn 1.5s ease-in-out infinite",
          whiteSpace: "nowrap",
          "@keyframes slideIn": {
            "0%": { transform: "translateX(-10px)", opacity: 0.5 },
            "50%": { transform: "translateX(0)", opacity: 1 },
            "100%": { transform: "translateX(10px)", opacity: 0.5 },
          },
        };
      case "pulse":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          whiteSpace: "nowrap",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.7 },
          },
        };

      // ============ BADGE GROUPS ============
      case "tag":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "4px 12px",
          borderRadius: "12px",
          backgroundColor: "#e3f2fd",
          color: "#1976d2",
          fontSize: "0.75rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
        };
      case "label":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "4px 12px",
          borderRadius: "6px",
          backgroundColor: "#f5f5f5",
          color: "#333",
          fontSize: "0.75rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
        };
      case "category":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "4px",
          backgroundColor: "#7e57c2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "type":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#ff6b6b",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };

      // ============ PREMIUM / SPECIAL ============
      case "premium":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          background: "linear-gradient(135deg, #ffd700, #ff8c00)",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 700,
          boxShadow: "0 4px 15px rgba(255, 215, 0, 0.3)",
          whiteSpace: "nowrap",
        };
      case "verified":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#2e7d32",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "official":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
      case "exclusive":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          background: "linear-gradient(135deg, #ff006e, #8338ec)",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 700,
          boxShadow: "0 4px 15px rgba(255, 0, 110, 0.3)",
          whiteSpace: "nowrap",
        };
      case "limited":
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#f57f17",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 700,
          whiteSpace: "nowrap",
        };

      default:
        return {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: icon ? "6px" : "0",
          padding: "6px 14px",
          borderRadius: "6px",
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
        };
    }
  };

  const badgeStyle = getBadgeStyle(variantType);

  return (
    <Box sx={{ ...badgeStyle, ...sx }}>
      {icon && <span>{icon}</span>}
      {label}
    </Box>
  );
};

export default BaseBadge;