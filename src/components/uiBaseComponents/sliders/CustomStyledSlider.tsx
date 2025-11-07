// src/components/Sliders/CustomStyledSlider.tsx
import React, { useState } from "react";
import { Slider, styled, Box, Typography } from "@mui/material";

const FancySlider = styled(Slider)({
  color: "#6a11cb",
  height: 8,
  "& .MuiSlider-thumb": {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "#bdbdbd",
  },
});

const CustomStyledSlider: React.FC = () => {
  const [value, setValue] = useState<number>(40);

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
        Custom Styled Slider
      </Typography>
      <FancySlider
        value={value}
        onChange={(_, newValue) => setValue(newValue as number)}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default CustomStyledSlider;
