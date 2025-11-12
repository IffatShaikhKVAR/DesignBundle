// components/AppBars/CustomAppBars.tsx
import React from "react";
import {
  IconButton,
  InputBase,
  Avatar,
  Badge,
  Box,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  Search,
  AccountCircle,
} from "@mui/icons-material";
import BaseAppBar from "./BaseAppbar";

/* ----------------------------------------------------
   1️⃣ Minimal App Bar
---------------------------------------------------- */
export const MinimalAppBar: React.FC = () => (
  <BaseAppBar
    title="Minimal App Bar"
    color="default"
    elevation={1}
    leftContent={<Typography variant="h6">Design UI</Typography>}
  />
);

/* ----------------------------------------------------
   2️⃣ App Bar with Menu and Notifications
---------------------------------------------------- */
export const ActionAppBar: React.FC = () => (
  <BaseAppBar
    title="Dashboard"
    color="primary"
    leftContent={
      <IconButton color="inherit">
        <MenuIcon />
      </IconButton>
    }
    rightContent={
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Badge badgeContent={4} color="error">
          <Notifications />
        </Badge>
        <Avatar alt="User" src="https://mui.com/static/images/avatar/1.jpg" />
      </Box>
    }
  />
);

/* ----------------------------------------------------
   3️⃣ App Bar with Search Field
---------------------------------------------------- */
export const SearchAppBar: React.FC = () => (
  <BaseAppBar
    color="secondary"
    centerContent={
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "white",
          borderRadius: 2,
          px: 2,
          py: 0.5,
          width: "60%",
          mx: "auto",
        }}
      >
        <Search sx={{ color: "text.secondary" }} />
        <InputBase
          placeholder="Search..."
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
    }
  />
);

/* ----------------------------------------------------
   4️⃣ App Bar with Profile Info
---------------------------------------------------- */
export const ProfileAppBar: React.FC = () => (
  <BaseAppBar
    color="default"
    leftContent={<Typography variant="h6">MyApp</Typography>}
    rightContent={
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar alt="User" src="https://mui.com/static/images/avatar/2.jpg" />
        <Typography variant="body1">ABC</Typography>
      </Box>
    }
  />
);

/* ----------------------------------------------------
   5️⃣ Gradient App Bar (custom style)
---------------------------------------------------- */
export const GradientAppBar: React.FC = () => (
  <BaseAppBar
    title="Gradient App Bar"
    color="transparent"
    position="sticky"
    elevation={0}
    centerContent={
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          background: "linear-gradient(45deg, #42a5f5, #478ed1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Gradient Navbar
      </Typography>
    }
  />
);

/* ----------------------------------------------------
   Export all
---------------------------------------------------- */
export const AppBars = {
  MinimalAppBar,
  ActionAppBar,
  SearchAppBar,
  ProfileAppBar,
  GradientAppBar,
};

export default AppBars;
