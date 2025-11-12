// components/Dividers/BaseDivider.tsx
import React from "react";
import { Box } from "@mui/material";

export interface BaseDividerProps {
  variantType?:
    | "simple"
    | "solid"
    | "dashed"
    | "dotted"
    | "double"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "text"
    | "textLeft"
    | "textRight"
    | "thin"
    | "standard"
    | "thick"
    | "extrathick"
    | "compact"
    | "spaced"
    | "largeSpaced"
    | "icon"
    | "gradient"
    | "shadow"
    | "wavy"
    | "zigzag"
    | "vertical"
    | "verticalDashed"
    | "verticalColored"
    | "animated"
    | "pulse"
    | "slide"
    | "rounded"
    | "blurred"
    | "flexible"
    | "neon"
    | "glassmorphism";
  text?: string;
  icon?: string;
  sx?: any;
}

const BaseDivider: React.FC<BaseDividerProps> = ({
  variantType = "simple",
  text,
  icon,
  sx,
}) => {
  const getDividerStyle = (variant: string) => {
    switch (variant) {
      // ============ BASIC DIVIDERS ============
      case "simple":
        return {
          height: "1px",
          backgroundColor: "#e0e0e0",
          my: 2,
          width: "100%",
        };
      case "solid":
        return {
          height: "2px",
          backgroundColor: "#333",
          my: 2,
          width: "100%",
        };
      case "dashed":
        return {
          height: "1px",
          borderTop: "2px dashed #999",
          my: 2,
          width: "100%",
          backgroundColor: "transparent",
        };
      case "dotted":
        return {
          height: "1px",
          borderTop: "2px dotted #999",
          my: 2,
          width: "100%",
          backgroundColor: "transparent",
        };
      case "double":
        return {
          height: "6px",
          borderTop: "3px double #333",
          my: 2,
          width: "100%",
          backgroundColor: "transparent",
        };

      // ============ COLORED DIVIDERS ============
      case "primary":
        return {
          height: "2px",
          backgroundColor: "#1976d2",
          my: 2,
          width: "100%",
        };
      case "secondary":
        return {
          height: "2px",
          backgroundColor: "#7e57c2",
          my: 2,
          width: "100%",
        };
      case "success":
        return {
          height: "2px",
          backgroundColor: "#2e7d32",
          my: 2,
          width: "100%",
        };
      case "error":
        return {
          height: "2px",
          backgroundColor: "#c62828",
          my: 2,
          width: "100%",
        };
      case "warning":
        return {
          height: "2px",
          backgroundColor: "#f57f17",
          my: 2,
          width: "100%",
        };
      case "info":
        return {
          height: "2px",
          backgroundColor: "#0277bd",
          my: 2,
          width: "100%",
        };

      // ============ TEXT DIVIDERS ============
      case "text":
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    my: 2,
    color: "#555",
    position: "relative",
    "&::before, &::after": {
      content: '""',
      flex: 1,
      height: "1px",
      backgroundColor: "#ddd",
    },
    "&::before": {
      mr: 2,
    },
    "&::after": {
      ml: 2,
    },
  };

      case "textLeft":
        return {
          display: "flex",
          alignItems: "center",
          my: 2,
          "&::after": {
            content: '""',
            flex: 1,
            height: "1px",
            backgroundColor: "#ddd",
            ml: 2,
          },
        };
      case "textRight":
        return {
          display: "flex",
          alignItems: "center",
          my: 2,
          "&::before": {
            content: '""',
            flex: 1,
            height: "1px",
            backgroundColor: "#ddd",
            mr: 2,
          },
        };

      // ============ THICKNESS VARIANTS ============
      case "thin":
        return {
          height: "0.5px",
          backgroundColor: "#ddd",
          my: 2,
          width: "100%",
        };
      case "standard":
        return {
          height: "1px",
          backgroundColor: "#bbb",
          my: 2,
          width: "100%",
        };
      case "thick":
        return {
          height: "3px",
          backgroundColor: "#666",
          my: 2,
          width: "100%",
        };
      case "extrathick":
        return {
          height: "5px",
          backgroundColor: "#333",
          my: 2,
          width: "100%",
        };

      // ============ SPACED DIVIDERS ============
      case "compact":
        return {
          height: "1px",
          backgroundColor: "#ddd",
          my: 0.5,
          width: "100%",
        };
      case "spaced":
        return {
          height: "1px",
          backgroundColor: "#bbb",
          my: 3,
          width: "100%",
        };
      case "largeSpaced":
        return {
          height: "1px",
          backgroundColor: "#999",
          my: 5,
          width: "100%",
        };

      // ============ DECORATIVE DIVIDERS ============
      case "icon":
        return {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 2,
          gap: 2,
          color: "#666",
          fontSize: "1.5rem",
          "&::before, &::after": {
            content: '""',
            flex: 1,
            height: "1px",
            backgroundColor: "#ddd",
          },
        };
      case "gradient":
        return {
          height: "2px",
          background: "linear-gradient(90deg, transparent, #1976d2, transparent)",
          my: 2,
          width: "100%",
        };
      case "shadow":
        return {
          height: "2px",
          backgroundColor: "#999",
          my: 2,
          width: "100%",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        };
      case "wavy":
        return {
          my: 2,
          height: "20px",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,50 Q300,0 600,50 T1200,50' stroke='%23999' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%",
          width: "100%",
        };
      case "zigzag":
        return {
          my: 2,
          height: "20px",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpolyline points='0,10 10,0 20,10 30,0 40,10 50,0 60,10 70,0 80,10 90,0 100,10' stroke='%23999' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
          backgroundSize: "100% 100%",
          width: "100%",
        };

      // ============ VERTICAL DIVIDERS ============
      case "vertical":
        return {
          width: "1px",
          height: "100px",
          backgroundColor: "#ddd",
          display: "inline-block",
          mx: 2,
        };
      case "verticalDashed":
        return {
          width: "1px",
          height: "100px",
          borderLeft: "2px dashed #999",
          display: "inline-block",
          mx: 2,
          backgroundColor: "transparent",
        };
      case "verticalColored":
        return {
          width: "2px",
          height: "100px",
          background: "linear-gradient(180deg, #1976d2, #7e57c2)",
          display: "inline-block",
          mx: 2,
        };

      // ============ ANIMATED DIVIDERS ============
      case "animated":
        return {
          height: "2px",
          backgroundColor: "#1976d2",
          my: 2,
          width: "100%",
          animation: "slideIn 1.5s ease-in-out infinite",
          "@keyframes slideIn": {
            "0%": { width: "0%" },
            "50%": { width: "100%" },
            "100%": { width: "0%" },
          },
        };
      case "pulse":
        return {
          height: "2px",
          backgroundColor: "#1976d2",
          my: 2,
          width: "100%",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.5 },
          },
        };
      case "slide":
        return {
          height: "2px",
          background: "linear-gradient(90deg, #1976d2, #7e57c2, #1976d2)",
          backgroundSize: "200% 100%",
          my: 2,
          width: "100%",
          animation: "slide 3s ease-in-out infinite",
          "@keyframes slide": {
            "0%": { backgroundPosition: "0% 0%" },
            "100%": { backgroundPosition: "200% 0%" },
          },
        };

      // ============ SPECIAL DIVIDERS ============
      case "rounded":
        return {
          height: "2px",
          backgroundColor: "#1976d2",
          my: 2,
          width: "100%",
          borderRadius: "10px",
        };
      case "blurred":
        return {
          height: "2px",
          backgroundColor: "#bbb",
          my: 2,
          width: "100%",
          filter: "blur(1px)",
        };
      case "flexible":
        return {
          height: "2px",
          backgroundColor: "#1976d2",
          my: 2,
          width: "80%",
          mx: "auto",
        };
      case "neon":
        return {
          height: "2px",
          backgroundColor: "#00ff88",
          my: 2,
          width: "100%",
          boxShadow: "0 0 10px #00ff88, 0 0 20px #00ff88",
        };
      case "glassmorphism":
        return {
          height: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          my: 2,
          width: "100%",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        };

      default:
        return {
          height: "1px",
          backgroundColor: "#e0e0e0",
          my: 2,
          width: "100%",
        };
    }
  };

  const dividerStyle = getDividerStyle(variantType);

  // Handle text dividers
  if (text && (variantType === "text" || variantType === "textLeft" || variantType === "textRight")) {
    return (
      <Box sx={{ ...dividerStyle, ...sx }}>
        {text}
      </Box>
    );
  }

  // Handle icon dividers
  if (icon && variantType === "icon") {
    return (
      <Box sx={{ ...dividerStyle, ...sx }}>
        {icon}
      </Box>
    );
  }

  return <Box sx={{ ...dividerStyle, ...sx }} />;
};

export default BaseDivider;