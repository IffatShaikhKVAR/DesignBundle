// src/components/Sliders/BaseSlider.tsx
import React from "react";
import { Slider, Box, Typography } from "@mui/material";

export interface BaseSliderProps {
  label?: string;
  value: number | number[];
  onChange: (event: Event, value: number | number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

const BaseSlider: React.FC<BaseSliderProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  color = "primary",
}) => {
  return (
    <Box sx={{ width: 300 }}>
      {label && (
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
          {label}
        </Typography>
      )}
      <Slider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        color={color}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default BaseSlider;
