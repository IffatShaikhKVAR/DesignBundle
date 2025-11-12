// components/Sidebars/GradientSidebar.tsx
import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemButton } from "@mui/material";

const GradientSidebar: React.FC = () => {
  const items = ["Dashboard", "Reports", "Settings", "Profile"];

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          width: 240,
          background:
            "linear-gradient(180deg, #1CB5E0 0%, #000851 100%)",
          color: "white",
        },
      }}
    >
      <List>
        {items.map((text) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default GradientSidebar;
