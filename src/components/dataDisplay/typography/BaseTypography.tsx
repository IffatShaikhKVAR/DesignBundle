// components/Typography/BaseTypography.tsx
import React from "react";
import { Typography, type TypographyProps } from "@mui/material";

export interface BaseTypographyProps extends TypographyProps {
  variantType?:
    | "heading"
    | "display"
    | "subtitle"
    | "overline"
    | "body"
    | "longtext"
    | "caption"
    | "label"
    | "helper"
    | "tag"
    | "code"
    | "codeblock"
    | "monospace"
    | "highlight"
    | "bold"
    | "italic"
    | "underline"
    | "strikethrough"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "muted"
    | "quote"
    | "link"
    | "accent"
    | "gradient";
}

const BaseTypography: React.FC<BaseTypographyProps> = ({
  variantType = "body",
  sx,
  children,
  ...props
}) => {
  // Get style based on variant type
  const getStyleByVariant = (variant: string) => {
    switch (variant) {
      case "heading":
        return {
          fontWeight: 700,
          color: "#1a237e",
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "-0.5px",
        };
      case "display":
        return {
          fontWeight: 800,
          color: "#0d1b2a",
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "-1px",
          fontSize: "3rem",
        };
      case "subtitle":
        return {
          fontWeight: 500,
          color: "#3f51b5",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "1.1rem",
        };
      case "overline":
        return {
          fontWeight: 700,
          color: "#666",
          letterSpacing: "1.5px",
          fontSize: "0.75rem",
          textTransform: "uppercase",
        };
      case "body":
        return {
          color: "#333",
          fontSize: "1rem",
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.5,
        };
      case "longtext":
        return {
          color: "#333",
          fontSize: "1rem",
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.8,
          letterSpacing: "0.3px",
        };
      case "caption":
        return {
          fontSize: "0.8rem",
          color: "#666",
          fontStyle: "italic",
          fontFamily: "'Inter', sans-serif",
        };
      case "label":
        return {
          fontWeight: 600,
          fontSize: "0.875rem",
          color: "#333",
          fontFamily: "'Inter', sans-serif",
        };
      case "helper":
        return {
          fontSize: "0.75rem",
          color: "#999",
          fontFamily: "'Inter', sans-serif",
        };
      case "tag":
        return {
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "#1976d2",
          backgroundColor: "#e3f2fd",
          padding: "4px 8px",
          borderRadius: "12px",
          display: "inline-block",
          textTransform: "uppercase",
        };
      case "code":
        return {
          fontFamily: "'Source Code Pro', monospace",
          background: "#f4f4f4",
          padding: "2px 6px",
          borderRadius: "6px",
          color: "#e53935",
          fontSize: "0.9rem",
          fontWeight: 500,
        };
      case "codeblock":
        return {
          fontFamily: "'Source Code Pro', monospace",
          background: "#1e1e1e",
          color: "#d4d4d4",
          padding: "12px 16px",
          borderRadius: "8px",
          fontSize: "0.85rem",
          lineHeight: 1.6,
          overflow: "auto",
          display: "block",
          whiteSpace: "pre-wrap" as const,
        };
      case "monospace":
        return {
          fontFamily: "'Courier New', monospace",
          color: "#2c3e50",
          fontSize: "0.95rem",
          backgroundColor: "#f8f9fa",
          padding: "1px 4px",
          borderRadius: "4px",
        };
      case "highlight":
        return {
          backgroundColor: "#fff3cd",
          color: "#856404",
          padding: "2px 8px",
          borderRadius: "4px",
          fontWeight: 500,
        };
      case "bold":
        return {
          fontWeight: 700,
          color: "#1a237e",
        };
      case "italic":
        return {
          fontStyle: "italic",
          color: "#555",
        };
      case "underline":
        return {
          textDecoration: "underline",
          textDecorationColor: "#1976d2",
          textDecorationThickness: "2px",
          textUnderlineOffset: "4px",
        };
      case "strikethrough":
        return {
          textDecoration: "line-through",
          color: "#999",
          fontSize: "0.95rem",
        };
      case "success":
        return {
          color: "#2e7d32",
          fontWeight: 500,
          backgroundColor: "#e8f5e9",
          padding: "4px 8px",
          borderRadius: "4px",
          display: "inline-block",
        };
      case "error":
        return {
          color: "#c62828",
          fontWeight: 500,
          backgroundColor: "#ffebee",
          padding: "4px 8px",
          borderRadius: "4px",
          display: "inline-block",
        };
      case "warning":
        return {
          color: "#f57f17",
          fontWeight: 500,
          backgroundColor: "#fff3e0",
          padding: "4px 8px",
          borderRadius: "4px",
          display: "inline-block",
        };
      case "info":
        return {
          color: "#0277bd",
          fontWeight: 500,
          backgroundColor: "#e1f5fe",
          padding: "4px 8px",
          borderRadius: "4px",
          display: "inline-block",
        };
      case "muted":
        return {
          color: "#999",
          fontWeight: 400,
          fontSize: "0.95rem",
          opacity: 0.8,
        };
      case "quote":
        return {
          fontStyle: "italic",
          color: "#555",
          borderLeft: "4px solid #1976d2",
          paddingLeft: "16px",
          marginLeft: "0",
          lineHeight: 1.7,
        };
      case "link":
        return {
          color: "#1976d2",
          textDecoration: "underline",
          cursor: "pointer",
          fontWeight: 500,
          "&:hover": {
            color: "#1565c0",
          },
        };
      case "accent":
        return {
          color: "#7e57c2",
          fontWeight: 600,
          fontSize: "1.05rem",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        };
      case "gradient":
        return {
          background: "linear-gradient(45deg, #1976d2 0%, #7e57c2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 700,
          fontSize: "1.5rem",
        };
      default:
        return {
          color: "#333",
          fontSize: "1rem",
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.5,
        };
    }
  };

  const variantStyle = getStyleByVariant(variantType);

  return (
    <Typography
      sx={{
        ...variantStyle,
        ...(sx as any),
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default BaseTypography;