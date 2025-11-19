// ========================================
// 🎚️ CollapsibleSidebar - Reusable Component
// ========================================
// components/Sidebars/CollapsibleSidebar.tsx
import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Box,
  Collapse,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export interface SidebarItemConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: SidebarItemConfig[];
}

export interface CollapsibleSidebarProps {
  items: SidebarItemConfig[];
  logo?: string;
  logoText?: string;
  userName?: string;
  userAvatar?: string;
  width?: number;
  collapsedWidth?: number;
  backgroundColor?: string;
  textColor?: string;
  onItemClick?: (itemId: string) => void;
}

export const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({
  items,
  logo,
  logoText = "Design Bundle",
  userName = "admin",
  userAvatar,
  width = 280,
  collapsedWidth = 70,
  backgroundColor = "#1E293B",
  textColor = "#ffffff",
  onItemClick,
}) => {
  const [open, setOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleSidebar = () => setOpen(!open);

  const handleItemClick = (itemId: string) => {
    onItemClick?.(itemId);
  };

  const toggleExpand = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const renderMenuItems = (itemList: SidebarItemConfig[], depth = 0) => {
    return itemList.map((item) => (
      <React.Fragment key={item.id}>
        <ListItem
          disablePadding
          sx={{ pl: depth * 2 }}
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
              justifyContent: open ? "flex-start" : "center",
              px: 2,
              "&:hover": {
                backgroundColor: `${textColor}15`,
              },
            }}
          >
            {item.icon && (
              <ListItemIcon
                sx={{
                  color: textColor,
                  minWidth: open ? 40 : 0,
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
            )}
            {open && (
              <>
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    },
                  }}
                />
                {item.children && item.children.length > 0 && (
                  <Box sx={{ ml: "auto" }}>
                    {expandedItems.has(item.id) ? (
                      <ExpandLessIcon fontSize="small" />
                    ) : (
                      <ExpandMoreIcon fontSize="small" />
                    )}
                  </Box>
                )}
              </>
            )}
          </ListItemButton>
        </ListItem>

        {open && item.children && item.children.length > 0 && (
          <Collapse in={expandedItems.has(item.id)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderMenuItems(item.children, depth + 1)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));
  };

  return (
    <>
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: "fixed",
          top: 16,
          left: open ? width - 40 : collapsedWidth - 40,
          transition: "left 0.3s ease",
          zIndex: 1201,
          backgroundColor: backgroundColor,
          color: textColor,
          "&:hover": {
            backgroundColor: `${textColor}20`,
          },
        }}
      >
        {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>

      <Drawer
        variant="permanent"
        open={true}
        sx={{
          "& .MuiDrawer-paper": {
            width: open ? width : collapsedWidth,
            backgroundColor: backgroundColor,
            color: textColor,
            transition: "width 0.3s ease",
            overflowX: "hidden",
            borderRight: `1px solid ${textColor}15`,
          },
        }}
      >
        {/* Logo Section */}
        {open && (
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              borderBottom: `1px solid ${textColor}15`,
            }}
          >
            {logo && (
              <Avatar src={logo} sx={{ width: 32, height: 32 }} />
            )}
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1rem" }}>
              {logoText}
            </Typography>
          </Box>
        )}

        {/* Menu Items */}
        <List sx={{ flex: 1, mt: open ? 1 : 2, p: 1 }}>
          {renderMenuItems(items)}
        </List>

        <Divider sx={{ backgroundColor: `${textColor}15` }} />

        {/* User Profile Section */}
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: open ? 2 : 0,
            justifyContent: open ? "flex-start" : "center",
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "#0EA5E9",
              cursor: "pointer",
            }}
          >
            {userAvatar || userName.charAt(0).toUpperCase()}
          </Avatar>
          {open && (
            <Typography
              variant="body2"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {userName}
            </Typography>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CollapsibleSidebar;