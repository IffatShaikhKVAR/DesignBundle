// components/Sidebars/CollapsibleSidebar.tsx
import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";

const CollapsibleSidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      <IconButton onClick={toggleSidebar} sx={{ m: 1 }}>
        {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>

      <Drawer
        variant="persistent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            width: open ? 240 : 60,
            background: "#1E293B",
            color: "#fff",
            transition: "width 0.3s ease",
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#fff" }}>
              <DashboardIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
            </ListItemButton>
            
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#fff" }}>
              <SettingsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Settings" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default CollapsibleSidebar;
