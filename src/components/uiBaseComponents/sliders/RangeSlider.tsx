// src/components/Sliders/RangeSlider.tsx
import React, { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";

const RangeSlider: React.FC = () => {
  const [value, setValue] = useState<number[]>([20, 80]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
        Range Slider ({value[0]} - {value[1]})
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={100}
        color="secondary"
      />
    </Box>
  );
};

export default RangeSlider;
