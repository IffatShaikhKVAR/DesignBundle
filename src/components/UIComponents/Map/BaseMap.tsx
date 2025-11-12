// components/Maps/BaseMap.tsx
import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export interface BaseMapProps {
  title?: string;
  height?: number;
  children: React.ReactNode;
}

/**
 * BaseMap Component
 * Base wrapper for all map components with title and styling
 */
export const BaseMap: React.FC<BaseMapProps> = ({
  title,
  height = 500,
  children,
}) => {
  return (
    <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
      {title && (
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
      )}
      <Box sx={{ width: "100%", height, borderRadius: 1, overflow: "hidden" }}>
        {children}
      </Box>
    </Paper>
  );
};

export default BaseMap;