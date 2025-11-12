// components/Maps/LocationPinMap.tsx
import React, { useState } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import BaseMap, {type BaseMapProps } from "./BaseMap";

export interface LocationPin {
  id: string;
  lat: number;
  lng: number;
  label?: string;
  color?: "red" | "green" | "blue" | "yellow" | "purple";
  info?: string;
}

export interface LocationPinMapProps extends BaseMapProps {
  pins: LocationPin[];
  center?: { lat: number; lng: number };
  onPinClick?: (pin: LocationPin) => void;
}

/**
 * LocationPinMap Component
 * Interactive map with location pins/markers
 * Extends BaseMap for consistent styling
 */
export const LocationPinMapComponent: React.FC<LocationPinMapProps> = ({
  title = "Location Map",
  height = 500,
  pins,
  center = { lat: 19.0760, lng: 72.8777 }, // Mumbai default
  onPinClick,
}) => {
  const [zoom, setZoom] = useState(12);
  const [selectedPin, setSelectedPin] = useState<LocationPin | null>(null);

  const colorMap = {
    red: "#f44336",
    green: "#4caf50",
    blue: "#2575fc",
    yellow: "#fbc02d",
    purple: "#9c27b0",
  };

  // Simple grid-based map visualization
  const mapWidth = 800;
  const mapHeight = 500;

  // Calculate pin positions (simplified)
  const getPinPosition = (pin: LocationPin) => {
    const latRange = 0.5;
    const lngRange = 0.5;
    const x = ((pin.lng - center.lng + lngRange / 2) / lngRange) * mapWidth;
    const y = ((center.lat + latRange / 2 - pin.lat) / latRange) * mapHeight;
    return { x: Math.max(0, Math.min(mapWidth, x)), y: Math.max(0, Math.min(mapHeight, y)) };
  };

  return (
    <BaseMap title={title} height={height}>
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Map Background */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#e8f4f8",
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(100, 150, 200, 0.05) 25%, rgba(100, 150, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(100, 150, 200, 0.05) 75%, rgba(100, 150, 200, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(100, 150, 200, 0.05) 25%, rgba(100, 150, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(100, 150, 200, 0.05) 75%, rgba(100, 150, 200, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
            position: "relative",
          }}
        >
          {/* Map Overlay Text */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              backgroundColor: "rgba(255,255,255,0.9)",
              p: 1,
              borderRadius: 1,
              fontSize: "12px",
              fontWeight: 600,
              pointerEvents: "none",
            }}
          >
            Zoom: {zoom}x
          </Box>

          {/* Zoom Controls */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 100,
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              backgroundColor: "white",
              borderRadius: 1,
              boxShadow: 2,
            }}
          >
            <IconButton
              size="small"
              onClick={() => setZoom(Math.min(zoom + 1, 20))}
              sx={{ p: 0.5 }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => setZoom(Math.max(zoom - 1, 1))}
              sx={{ p: 0.5 }}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Location Pins */}
          {pins.map((pin) => {
            const pos = getPinPosition(pin);
            return (
              <Box key={pin.id}>
                {/* Pin Marker */}
                <Box
                  onClick={() => {
                    setSelectedPin(pin);
                    onPinClick?.(pin);
                  }}
                  sx={{
                    position: "absolute",
                    left: `${(pos.x / mapWidth) * 100}%`,
                    top: `${(pos.y / mapHeight) * 100}%`,
                    transform: "translate(-50%, -100%)",
                    cursor: "pointer",
                    fontSize: "30px",
                    filter: selectedPin?.id === pin.id ? "drop-shadow(0 0 8px rgba(0,0,0,0.5))" : "none",
                    transition: "all 0.2s",
                    "&:hover": {
                      transform: "translate(-50%, -110%)",
                      filter: "drop-shadow(0 0 8px rgba(0,0,0,0.5))",
                    },
                  }}
                >
                  📍
                </Box>

                {/* Pin Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: `${(pos.x / mapWidth) * 100}%`,
                    top: `${(pos.y / mapHeight) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: colorMap[pin.color || "red"],
                    border: "2px solid white",
                    boxShadow: `0 0 4px ${colorMap[pin.color || "red"]}`,
                  }}
                />
              </Box>
            );
          })}
        </Box>

        {/* Selected Pin Info */}
        {selectedPin && (
          <Paper
            sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              p: 2,
              maxWidth: 250,
              backgroundColor: "white",
              boxShadow: 3,
              zIndex: 10,
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              {selectedPin.label || "Location"}
            </Typography>
            {selectedPin.info && (
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                {selectedPin.info}
              </Typography>
            )}
            <Typography variant="caption" color="textSecondary">
              Lat: {selectedPin.lat.toFixed(4)}, Lng: {selectedPin.lng.toFixed(4)}
            </Typography>
          </Paper>
        )}

        {/* Map Attribution */}
        <Box
          sx={{
            position: "absolute",
            bottom: 5,
            right: 5,
            fontSize: "10px",
            color: "#666",
            pointerEvents: "none",
          }}
        >
          Map © OpenStreetMap
        </Box>
      </Box>
    </BaseMap>
  );
};

export default LocationPinMapComponent;