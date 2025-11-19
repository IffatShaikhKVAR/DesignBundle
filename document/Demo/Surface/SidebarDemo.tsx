// ========================================
// 🎨 SidebarDemo.tsx
// ========================================
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
} from "@mui/material";
import {
  Dashboard,
  Settings,
  Notifications,
  People,
  Folder,
  Info,
} from "@mui/icons-material";

import { BasicSidebar } from "../../../src/components";
import { CollapsibleSidebar } from "../../../src/components";
import { MiniSidebar } from "../../../src/components";
import { GradientSidebar } from "../../../src/components";

const SidebarDemo: React.FC = () => {
  const [selectedSidebar, setSelectedSidebar] = useState<string>("basic");

  // ===========================
  // 🧭 Demo Sidebar Items
  // ===========================
  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Dashboard />,
      onClick: () => alert("Dashboard clicked"),
    },
    {
      id: "users",
      label: "Users",
      icon: <People />,
      children: [
        { id: "active-users", label: "Active Users" },
        { id: "pending-users", label: "Pending Requests" },
      ],
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Folder />,
      children: [
        { id: "ongoing", label: "Ongoing" },
        { id: "completed", label: "Completed" },
      ],
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Notifications />,
      badge: 5,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings />,
    },
    {
      id: "about",
      label: "About",
      icon: <Info />,
    },
  ];

  // ===========================
  // 🧩 Sidebar Variants
  // ===========================
  const sidebars = [
    {
      id: "basic",
      name: "Basic Sidebar",
      description: "Standard static sidebar with items",
      component: (
        <BasicSidebar
          items={sidebarItems}
          logoText="Basic Sidebar"
          onItemClick={(id) => console.log("Clicked:", id)}
        />
      ),
    },
    {
      id: "collapsible",
      name: "Collapsible Sidebar",
      description: "Sidebar that expands and collapses",
      component: (
        <CollapsibleSidebar
          items={sidebarItems}
          logoText="Collapsible"
          userName="Admin User"
          onItemClick={(id) => console.log("Clicked:", id)}
        />
      ),
    },
    {
      id: "mini",
      name: "Mini Sidebar",
      description: "Compact icon-only sidebar",
      component: (
        <MiniSidebar
          items={sidebarItems}
          onItemClick={(id) => console.log("Clicked:", id)}
        />
      ),
    },
    {
      id: "gradient",
      name: "Gradient Sidebar",
      description: "Modern gradient background sidebar",
      component: (
        <GradientSidebar
          items={sidebarItems}
          logoText="Gradient"
          onItemClick={(id) => console.log("Clicked:", id)}
        />
      ),
    },
  ];

  const currentSidebar = sidebars.find((s) => s.id === selectedSidebar);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar Preview */}
      <Box sx={{ flexShrink: 0 }}>{currentSidebar?.component}</Box>

      {/* Main Content Area */}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: 4,
            }}
          >
            {sidebars.map((sidebar) => (
              <Button
                key={sidebar.id}
                variant={
                  selectedSidebar === sidebar.id ? "contained" : "outlined"
                }
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
        </Container>
      </Box>
    </Box>
  );
};

export default SidebarDemo;
