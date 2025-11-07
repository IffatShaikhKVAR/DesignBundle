import React from "react";
import { Box, Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

const drawerWidth = 240;

const SidebarLayout: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { text: "Button", path: "/button" },
    { text: "Inputs", path: "/input" },
    { text: "Typography", path: "/typography" },
    { text: "Card", path: "/card" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* ✅ Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "background.paper",
          },
        }}
      >
        {/* ✅ Sidebar Header */}
        <Toolbar
          sx={{
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          <Typography variant="h6" noWrap>
            Design System
          </Typography>
        </Toolbar>

        {/* ✅ Navigation List */}
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* ✅ Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "background.default",
          minHeight: "100vh",
        }}
      >
        <Toolbar /> {/* Adds top spacing equal to sidebar toolbar height */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default SidebarLayout;
