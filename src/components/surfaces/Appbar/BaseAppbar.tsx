// components/AppBars/BaseAppBar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export interface BaseAppBarProps {
  title?: string;
  color?: "default" | "primary" | "secondary" | "transparent";
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  elevation?: number;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
}

const BaseAppBar: React.FC<BaseAppBarProps> = ({
  title = "App Title",
  color = "primary",
  position = "static",
  elevation = 2,
  rightContent,
  leftContent,
  centerContent,
}) => {
  return (
    <AppBar position={position} color={color} elevation={elevation}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>{leftContent}</Box>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          {centerContent || (
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
          )}
        </Box>
        <Box>{rightContent}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default BaseAppBar;
