// src/components/Sliders/ColorSlider.tsx
import React, { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";

const ColorSlider: React.FC = () => {
  const [value, setValue] = useState<number>(50);

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
        Color Intensity: {value}%
      </Typography>
      <Slider
        value={value}
        onChange={(_, newValue) => setValue(newValue as number)}
        min={0}
        max={100}
        sx={{
          height: 8,
          borderRadius: 2,
          background:
            "linear-gradient(90deg, #ff0000, #ffa500, #ffff00, #00ff00, #00ffff, #0000ff, #8b00ff)",
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            border: "2px solid #555",
          },
        }}
      />
    </Box>
  );
};

export default ColorSlider;
