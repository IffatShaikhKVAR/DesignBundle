// components/Sidebars/BasicSidebar.tsx
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";

const drawerWidth = 240;

const BasicSidebar: React.FC = () => {
  const items = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "User Settings", icon: <PersonIcon /> },
    { text: "Device Settings", icon: <DeviceHubIcon /> },
    { text: "Company Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: "#0d2340",
          color: "#fff",
          boxShadow: 3,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          KVAR Cloud
        </Typography>
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {items.map((item) => (
             <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default BasicSidebar;
