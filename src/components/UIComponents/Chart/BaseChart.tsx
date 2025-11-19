// components/Charts/BaseChart.tsx
import React from "react";
import { Paper, Typography, Box } from "@mui/material";

export interface BaseChartProps {
  title?: string;
  data?: any[];
  height?: number;
  width?: string | number;
  showLegend?: boolean;
  showGrid?: boolean;
  children?: React.ReactNode;
}

const BaseChart: React.FC<BaseChartProps> = ({
  title,
  children,
  height = 400,
  width = "100%",
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        width,
        // Remove maxWidth constraint - let it expand
        mx: "auto",
        my: 2,
      }}
    >
      {title && (
        <Typography variant="h6" textAlign="center" mb={2}>
          {title}
        </Typography>
      )}
      <Box sx={{ width: "100%", height, overflow: "visible" }}>
        {children}
      </Box>
    </Paper>
  );
};

export default BaseChart;