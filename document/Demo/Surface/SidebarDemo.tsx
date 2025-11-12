// pages/SidebarDemo.tsx
import React, { useState } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import {BasicSidebar} from "../../../src/components";
import {CollapsibleSidebar} from "../../../src/components";
import {MiniSidebar} from "../../../src/components";
import {GradientSidebar} from "../../../src/components";

const SidebarDemo: React.FC = () => {
  const [selectedSidebar, setSelectedSidebar] = useState<string>("basic");

  const sidebars = [
    {
      id: "basic",
      name: "Basic Sidebar",
      description: "Standard static sidebar with items",
      component: <BasicSidebar />,
    },
    {
      id: "collapsible",
      name: "Collapsible Sidebar",
      description: "Sidebar that expands and collapses",
      component: <CollapsibleSidebar />,
    },
    {
      id: "mini",
      name: "Mini Sidebar",
      description: "Compact icon-only sidebar",
      component: <MiniSidebar />,
    },
    {
      id: "gradient",
      name: "Gradient Sidebar",
      description: "Modern gradient background sidebar",
      component: <GradientSidebar />,
    },
  ];

  const currentSidebar = sidebars.find((s) => s.id === selectedSidebar);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar Preview */}
      <Box sx={{ flex: 1 }}>
        {currentSidebar?.component}
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          flex: 1,
          p: 4,
          backgroundColor: "#f5f5f5",
          overflow: "auto",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Sidebar Components
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            Select a sidebar variant to preview it on the left side.
          </Typography>

          {/* Sidebar Selection Buttons */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
            {sidebars.map((sidebar) => (
              <Button
                key={sidebar.id}
                variant={selectedSidebar === sidebar.id ? "contained" : "outlined"}
                onClick={() => setSelectedSidebar(sidebar.id)}
                fullWidth
                sx={{
                  p: 2,
                  textAlign: "left",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {sidebar.name}
                </Typography>
                <Typography variant="caption" sx={{ mt: 0.5 }}>
                  {sidebar.description}
                </Typography>
              </Button>
            ))}
          </Box>

          {/* Current Sidebar Info */}
          {/* {currentSidebar && (
            <Box sx={{ p: 2, backgroundColor: "white", borderRadius: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                {currentSidebar.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {currentSidebar.description}
              </Typography>
            </Box>
          )} */}
        </Container>
      </Box>
    </Box>
  );
};

export default SidebarDemo;