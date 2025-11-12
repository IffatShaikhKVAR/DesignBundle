// components/Sidebars/MiniSidebar.tsx
import React from "react";
import { Drawer, IconButton, Tooltip, List, ListItem } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const MiniSidebar: React.FC = () => {
  const items = [
    { icon: <DashboardIcon />, label: "Dashboard" },
    { icon: <DevicesIcon />, label: "Devices" },
    { icon: <SettingsIcon />, label: "Settings" },
    { icon: <ExitToAppIcon />, label: "Logout" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          width: 70,
          background: "#001F3F",
          color: "white",
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <List>
        {items.map((item, i) => (
          <Tooltip key={i} title={item.label} placement="right">
            <ListItem>
              <IconButton sx={{ color: "white" }}>{item.icon}</IconButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default MiniSidebar;
