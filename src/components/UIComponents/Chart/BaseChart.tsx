// components/Charts/BaseChart.tsx
import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export interface BaseChartProps {
  title?: string;
  data: any[];
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
}

/**
 * BaseChart Component
 * Base wrapper for all chart components with title and styling
 */
export const BaseChart: React.FC<BaseChartProps & { children: React.ReactNode }> = ({
  title,
  height = 400,
  children,
}) => {
  return (
    <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 1 }}>
      {title && (
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
      )}
      <Box sx={{ width: "100%", height }}>
        {children}
      </Box>
    </Paper>
  );
};

export default BaseChart;