// components/Menus/MenuVariants.tsx
import React, { useState } from "react";
import {
  Button,
  IconButton,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FolderIcon from "@mui/icons-material/Folder";
import StarIcon from "@mui/icons-material/Star";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import BaseMenu from "./BaseMenu";

/* ==============================================================
   1️⃣ BasicMenu — simple list of options
   ============================================================== */
export const BasicMenu: React.FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  return (
    <>
      <Button variant="contained" onClick={(e) => setAnchor(e.currentTarget)}>
        Open Menu
      </Button>
      <BaseMenu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        items={[
          { label: "Profile" },
          { label: "My Account" },
          { label: "Logout", dividerAfter: true },
        ]}
      />
    </>
  );
};

/* ==============================================================
   2️⃣ IconMenu — triggered by icon button
   ============================================================== */
export const IconMenu: React.FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  return (
    <>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <MoreVertIcon />
      </IconButton>
      <BaseMenu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        items={[
          { label: "Edit" },
          { label: "Duplicate" },
          { label: "Delete" },
        ]}
      />
    </>
  );
};

/* ==============================================================
   3️⃣ ProfileMenu — user menu with icons
   ============================================================== */
export const ProfileMenu: React.FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<Avatar src="/user.png" />}
        onClick={(e) => setAnchor(e.currentTarget)}
      >
        John Doe
      </Button>

      <BaseMenu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        items={[
          { label: "Profile", icon: <AccountCircleIcon /> },
          { label: "Settings", icon: <SettingsIcon /> },
          {
            label: "Logout",
            icon: <LogoutIcon color="error" />,
            dividerAfter: true,
          },
        ]}
      />
    </>
  );
};

/* ==============================================================
   4️⃣ ThemedMenu — styled/colored menu
   ============================================================== */
export const ThemedMenu: React.FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  return (
    <>
      <Button color="secondary" variant="contained" onClick={(e) => setAnchor(e.currentTarget)}>
        Themed Menu
      </Button>
      <BaseMenu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        paperSx={{ bgcolor: "#F8F6E9", border: "1px solid #D9C07C" }}
        items={[
          { label: "Dark Mode", icon: <DarkModeIcon /> },
          { label: "Help" },
          { label: "About", dividerAfter: true },
        ]}
      />
    </>
  );
};

/* ==============================================================
   5️⃣ FileMenu — file operations menu
   ============================================================== */
export const FileMenu: React.FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  return (
    <>
      <Button variant="contained" onClick={(e) => setAnchor(e.currentTarget)}>
        File Menu
      </Button>
      <BaseMenu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        items={[
          { label: "Open", icon: <FolderIcon /> },
          { label: "Save", icon: <StarIcon /> },
          { label: "Close" },
        ]}
      />
    </>
  );
};

export const Menu = {
  FileMenu,
  ThemedMenu,
  ProfileMenu,
  IconMenu,
  BasicMenu
}
