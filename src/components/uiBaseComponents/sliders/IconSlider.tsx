// src/components/Sliders/IconSlider.tsx
import React, { useState } from "react";
import { Slider, Box, Typography, IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

const IconSlider: React.FC = () => {
  const [volume, setVolume] = useState<number>(50);

  return (
    <Box sx={{ width: 320, display: "flex", alignItems: "center", gap: 2 }}>
      <IconButton onClick={() => setVolume(Math.max(0, volume - 10))}>
        <VolumeDownIcon />
      </IconButton>
      <Slider
        value={volume}
        onChange={(_, newValue) => setVolume(newValue as number)}
        min={0}
        max={100}
        color="success"
        valueLabelDisplay="auto"
      />
      <IconButton onClick={() => setVolume(Math.min(100, volume + 10))}>
        <VolumeUpIcon />
      </IconButton>
    </Box>
  );
};

export default IconSlider;
