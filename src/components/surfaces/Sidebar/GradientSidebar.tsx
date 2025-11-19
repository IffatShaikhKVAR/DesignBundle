// ========================================
// 🌈 GradientSidebar - Reusable Component
// ========================================
// components/Sidebars/GradientSidebar.tsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Typography,
  Collapse,
  Chip,
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

export interface GradientSidebarProps {
  items: SidebarItemConfig[];
  gradient?: string;
  logoText?: string;
  width?: number;
  onItemClick?: (itemId: string) => void;
}

export const GradientSidebar: React.FC<GradientSidebarProps> = ({
  items,
  gradient = "linear-gradient(180deg, #1CB5E0 0%, #000851 100%)",
  logoText = "Design Bundle",
  width = 280,
  onItemClick,
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
            my: 0.5,
            mx: 1,
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
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
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              {item.icon && (
                <ListItemIcon
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
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
                    color: "white",
                  },
                }}
              />
            </Box>
            {item.badge && (
              <Chip
                label={item.badge}
                size="small"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  color: "white",
                  height: 20,
                  mr: 1,
                }}
              />
            )}
            {item.children && item.children.length > 0 && (
              <Box>
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
      variant="permanent"
      sx={{
        width,
        "& .MuiDrawer-paper": {
          width,
          background: gradient,
          color: "white",
          boxShadow: "2px 0 12px rgba(0, 0, 0, 0.2)",
          border: "none",
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: "1.1rem",
            color: "white",
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

export default GradientSidebar;