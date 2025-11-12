// components/AppBars/AppBarsCollection.tsx
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

interface AppBarProps {
  companyName?: string;
  onMenuClick?: () => void;
  onLogout?: () => void;
  logoSrc?: string;
}

// ============================================
// GOLD APP BAR (Original)
// ============================================
export const GoldAppBar: React.FC<AppBarProps> = ({
  companyName = "ABC",
  onMenuClick,
  onLogout,
  logoSrc = "/logo.png",
}) => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setDateTime(formatted.replace(",", ""));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#D9C07C",
        color: "#3A3A3A",
        height: 70,
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={logoSrc}
            alt="Company"
            sx={{
              bgcolor: "white",
              width: 40,
              height: 40,
              borderRadius: "10%",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3A3A3A" }}>
            KVAR Tech <span style={{ color: "#3A3A3A" }}>CLOUD</span>
          </Typography>
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon sx={{ color: "#3A3A3A" }} />
          </IconButton>
        </Box>

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontWeight: 700,
            color: "#3A3A3A",
          }}
        >
          {companyName}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#3A3A3A" }}>
            {dateTime}
          </Typography>
          <IconButton onClick={onLogout} color="inherit">
            <PowerSettingsNewIcon sx={{ color: "red", fontSize: 28 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// ============================================
// DARK BLUE APP BAR
// ============================================
export const DarkBlueAppBar: React.FC<AppBarProps> = ({
  companyName = "XYZ Corp",
  onMenuClick,
  onLogout,
  logoSrc = "/logo.png",
}) => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateTime(formatted.replace(",", ""));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "#fff",
        height: 70,
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={logoSrc}
            alt="Company"
            sx={{
              bgcolor: "#fff",
              width: 40,
              height: 40,
              borderRadius: "50%",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", letterSpacing: 1 }}>
            {companyName}
          </Typography>
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, color: "#e0e0e0" }}>
            📅 {dateTime}
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton onClick={onLogout} color="inherit">
            <PowerSettingsNewIcon sx={{ color: "#ff6b6b" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// ============================================
// GREEN APP BAR
// ============================================
export const GreenAppBar: React.FC<AppBarProps> = ({
  companyName = "GreenTech",
  onMenuClick,
  onLogout,
  logoSrc = "/logo.png",
}) => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateTime(formatted.replace(",", ""));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(to right, #11998e 0%, #38ef7d 100%)",
        color: "#fff",
        height: 70,
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={logoSrc}
            alt="Company"
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              width: 45,
              height: 45,
              borderRadius: "8px",
              border: "2px solid #fff",
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", lineHeight: 1 }}>
              {companyName}
            </Typography>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>
              Enterprise Solutions
            </Typography>
          </Box>
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#fff" }}>
            🕐 {dateTime}
          </Typography>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton onClick={onLogout} color="inherit">
            <PowerSettingsNewIcon sx={{ color: "#ffe0e0" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// ============================================
// PURPLE APP BAR
// ============================================
export const PurpleAppBar: React.FC<AppBarProps> = ({
  companyName = "Purple Systems",
  onMenuClick,
  onLogout,
  logoSrc = "/logo.png",
}) => {
  const [dateTime, setDateTime] = useState<string>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const time = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setDateTime(date);
      setTime(time);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar
      position="static"
      elevation={3}
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        height: 75,
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={logoSrc}
            alt="Company"
            sx={{
              bgcolor: "rgba(255,255,255,0.3)",
              width: 45,
              height: 45,
              borderRadius: "50%",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
            {companyName}
          </Typography>
          <IconButton color="inherit" onClick={onMenuClick} sx={{ ml: 1 }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
            {dateTime} | {time}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit">
            <NotificationsIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={onLogout} color="inherit">
            <PowerSettingsNewIcon sx={{ color: "#ffb3ba", fontSize: 24 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// ============================================
// ORANGE APP BAR
// ============================================
export const OrangeAppBar: React.FC<AppBarProps> = ({
  companyName = "OrangeCorp",
  onMenuClick,
  onLogout,
  logoSrc = "/logo.png",
}) => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        background: "linear-gradient(90deg, #f97316 0%, #fb923c 100%)",
        color: "#fff",
        height: 70,
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={logoSrc}
            alt="Company"
            sx={{
              bgcolor: "#fff",
              width: 40,
              height: 40,
              borderRadius: "12%",
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
              {companyName}
            </Typography>
          </Box>
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Typography variant="body2" sx={{ fontWeight: 600, color: "#fff" }}>
          ⏰ {dateTime}
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton onClick={onLogout} color="inherit">
            <PowerSettingsNewIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// ============================================
// RED APP BAR
// ============================================
export const RedAppBar: React.FC<AppBarProps> = ({
  companyName = "RedAlert",
  onMenuClick,
  onLogout,
  logoSrc = "/logo.png",
}) => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
        color: "#fff",
        height: 70,
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={logoSrc}
            alt="Company"
            sx={{
              bgcolor: "#fff",
              width: 40,
              height: 40,
              borderRadius: "50%",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", letterSpacing: 0.5 }}>
            {companyName}
          </Typography>
          <IconButton color="inherit" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#fecaca" }}>
            {dateTime}
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton onClick={onLogout} color="inherit">
            <PowerSettingsNewIcon sx={{ color: "#fca5a5" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export const CustomAppBar = {
  GoldAppBar,
  DarkBlueAppBar,
  GreenAppBar,
  PurpleAppBar,
  OrangeAppBar,
  RedAppBar,
};