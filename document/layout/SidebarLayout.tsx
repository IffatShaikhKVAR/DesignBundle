import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Collapse,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FunctionsIcon from "@mui/icons-material/Functions";
import InputIcon from "@mui/icons-material/Input";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "../../src/theme/AppTheme";

const drawerWidth = 260;

interface NavItem {
  text: string;
  path: string;
  icon: React.ReactNode;
  description?: string;
}

interface Category {
  title: string;
  items: NavItem[];
}

const SidebarLayout: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeMode();

  // --- Categories with Nested Items ---
  const categories: Category[] = [
    {
      title: "Base Components",
      items: [
        { text: "Buttons", path: "/button", icon: <FunctionsIcon /> },
        { text: "Inputs", path: "/input", icon: <InputIcon /> },
        { text: "Radio Buttons", path: "/radio", icon: <RadioButtonCheckedIcon /> },
        { text: "Checkboxes", path: "/checkbox", icon: <CheckBoxIcon /> },
        { text: "Dropdowns", path: "/dropdown", icon: <ArrowDropDownCircleIcon /> },
        { text: "Typography", path: "/typography", icon: <TextFieldsIcon /> },
        { text: "Cards", path: "/card", icon: <CardGiftcardIcon /> },
        { text: "Toggle", path: "/toggle", icon: <CardGiftcardIcon /> },
        // { text: "Progress Indicatior", path: "/progress", icon: <CardGiftcardIcon /> }
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState<string | null>("Create Components");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCategoryToggle = (title: string) => {
    setOpenCategory((prev) => (prev === title ? null : title));
  };

  // Sidebar Content
  const drawerContent = (
    <>
      {/* Header */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: theme.palette.primary.contrastText,
          p: 2,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1,
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            🎨
          </Box>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 18 }}>
          Design System
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.9 }}>
          Component Library 
        </Typography>
      </Box>

      <Divider />

      {/* Category Section */}
      <List sx={{ p: 1 }}>
        {categories.map((category) => (
          <Box key={category.title}>
            <ListItemButton
              onClick={() => handleCategoryToggle(category.title)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <ListItemText
                primary={category.title}
                primaryTypographyProps={{
                  variant: "subtitle2",
                  fontWeight: 600,
                }}
              />
              {openCategory === category.title ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openCategory === category.title} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {category.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <ListItemButton
                      key={item.text}
                      component={Link}
                      to={item.path}
                      onClick={() => isMobile && setMobileOpen(false)}
                      selected={isActive}
                      sx={{
                        pl: 4,
                        mb: 0.5,
                        borderRadius: 1,
                        transition: "all 0.3s ease",
                        color: isActive ? "primary.main" : "text.primary",
                        backgroundColor: isActive ? "action.selected" : "transparent",
                        "&:hover": {
                          backgroundColor: "action.hover",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          color: isActive ? "primary.main" : "inherit",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          variant: "body2",
                          fontWeight: isActive ? 600 : 500,
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Theme Toggle */}
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 1.5,
            backgroundColor: "action.hover",
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {isDark ? "Dark" : "Light"}
          </Typography>
          <IconButton
            onClick={toggleTheme}
            size="small"
            sx={{
              color: "primary.main",
              "&:hover": { transform: "rotate(20deg)" },
            }}
          >
            {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="caption" sx={{ textAlign: "center", display: "block" }}>
          🚀 v1.0.0
        </Typography>
        <Typography
          variant="caption"
          sx={{ textAlign: "center", display: "block", mt: 0.5 }}
        >
          Made with ❤️
        </Typography>
      </Box>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
            backgroundColor: "background.paper",
            boxShadow: 1,
            "&:hover": { backgroundColor: "action.hover" },
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: `1px solid ${theme.palette.divider}`,
            position: isMobile ? "fixed" : "relative",
            height: "100%",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "background.default",
          minHeight: "100vh",
          width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
          transition: "all 0.3s ease",
        }}
      >
        {!isMobile && <Toolbar />}
        <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: "1600px", mx: "auto" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarLayout;
