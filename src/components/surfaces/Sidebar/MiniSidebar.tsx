// ========================================
// 🎯 MiniSidebar - Reusable Component
// ========================================
// components/Sidebars/MiniSidebar.tsx
import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Tooltip,
  List,
  ListItem,
  Badge,
  Box,
} from "@mui/material";

export interface SidebarItemConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  badge?: string | number;
  children?: SidebarItemConfig[];
}

export interface MiniSidebarProps {
  items: SidebarItemConfig[];
  backgroundColor?: string;
  activeColor?: string;
  onItemClick?: (itemId: string) => void;
}

export const MiniSidebar: React.FC<MiniSidebarProps> = ({
  items,
  backgroundColor = "#001F3F",
  activeColor = "#1CB5E0",
  onItemClick,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onItemClick?.(itemId);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          width: 80,
          background: backgroundColor,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "2px 0 8px rgba(0, 0, 0, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          pt: 2,
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        {items.map((item) => (
          <Tooltip key={item.id} title={item.label} placement="right">
            <ListItem
              disablePadding
              sx={{
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Badge
                badgeContent={item.badge}
                color="error"
                overlap="circular"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#ff5252",
                    color: "#ff5252",
                  },
                }}
              >
                <IconButton
                  onClick={() => handleItemClick(item.id)}
                  sx={{
                    color:
                      activeItem === item.id
                        ? activeColor
                        : "rgba(255, 255, 255, 0.7)",
                    width: 50,
                    height: 50,
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    backgroundColor:
                      activeItem === item.id
                        ? `${activeColor}15`
                        : "transparent",
                    "&:hover": {
                      color: activeColor,
                      backgroundColor: `${activeColor}15`,
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </Badge>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default MiniSidebar;