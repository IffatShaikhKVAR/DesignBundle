// ========================================
// 📦 BasicSidebar - Reusable Component
// ========================================
// components/Sidebars/BasicSidebar.tsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Box,
  Collapse,
  Chip,
  Avatar,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export interface SidebarItemConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  badge?: string | number;
  children?: SidebarItemConfig[];
}

export interface BasicSidebarProps {
  items: SidebarItemConfig[];
  logo?: string;
  logoText?: string;
  width?: number;
  backgroundColor?: string;
  textColor?: string;
  onItemClick?: (itemId: string) => void;
  showBorder?: boolean;
}

export const BasicSidebar: React.FC<BasicSidebarProps> = ({
  items,
  logo,
  logoText = "Design Bundle",
  width = 280,
  backgroundColor = "#f7f9fcff",
  textColor = "#6caedaff",
  onItemClick,
  showBorder = true,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const handleItemClick = (itemId: string) => {
    onItemClick?.(itemId);
  };

  const renderItems = (itemList: SidebarItemConfig[], depth = 0) => {
    return itemList.map((item) => (
      <React.Fragment key={item.id}>
        <ListItem
          disablePadding
          sx={{
            pl: depth * 2,
            "&:hover": {
              backgroundColor: `${textColor}15`,
            },
          }}
        >
          <ListItemButton
            onClick={() => {
              if (item.children && item.children.length > 0) {
                toggleExpand(item.id);
              } else {
                handleItemClick(item.id);
              }
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              transition: "all 0.2s ease",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              {item.icon && (
                <ListItemIcon
                  sx={{
                    color: `${textColor}cc`,
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: textColor,
                  },
                }}
              />
            </Box>
            {item.badge && (
              <Chip
                label={item.badge}
                size="small"
                sx={{
                  backgroundColor: "#ff5252",
                  color: "white",
                  height: 20,
                  fontSize: "0.75rem",
                  mr: 1,
                }}
              />
            )}
            {item.children && item.children.length > 0 && (
              <Box sx={{ color: `${textColor}99` }}>
                {expandedItems.has(item.id) ? (
                  <ExpandLessIcon fontSize="small" />
                ) : (
                  <ExpandMoreIcon fontSize="small" />
                )}
              </Box>
            )}
          </ListItemButton>
        </ListItem>

        {item.children && item.children.length > 0 && (
          <Collapse in={expandedItems.has(item.id)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderItems(item.children, depth + 1)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));
  };

  return (
    <Drawer
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          backgroundColor,
          color: textColor,
          boxShadow: "2px 0 8px rgba(0, 0, 0, 0.15)",
          border: showBorder ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderBottom: `1px solid ${textColor}15`,
        }}
      >
        {logo && <Avatar src={logo} sx={{ width: 32, height: 32 }} />}
        <Typography
          variant="h6"
          sx={{
            color: textColor,
            fontWeight: 600,
            fontSize: "1.1rem",
          }}
        >
          {logoText}
        </Typography>
      </Box>
      <Box sx={{ overflow: "auto", flex: 1, p: 1 }}>
        <List>{renderItems(items)}</List>
      </Box>
    </Drawer>
  );
};

export default BasicSidebar;