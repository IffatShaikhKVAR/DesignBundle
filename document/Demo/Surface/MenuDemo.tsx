// src/pages/MenuDemo.tsx
import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { Menu } from "../../../src/components";

/* ===============================================================
   📋 MENU DEMO PAGE
   Display different menu variants using the ComponentDemo layout
   =============================================================== */

const menuCategories: DemoCategory[] = [
  {
    title: "Basic & Icon Menus",
    description:
      "Simple and icon-triggered menus for quick user interactions.",
    items: [
      {
        id: "basic-menu",
        name: "BasicMenu",
        component: <Menu.BasicMenu />,
        description: "A standard dropdown menu triggered by a button.",
      },
      {
        id: "icon-menu",
        name: "IconMenu",
        component: <Menu.IconMenu />,
        description: "Menu triggered by an icon button (e.g. kebab menu).",
      },
    ],
  },
  {
    title: "Profile & Themed Menus",
    description:
      "Menus designed for user accounts or styled with custom themes.",
    items: [
      {
        id: "profile-menu",
        name: "ProfileMenu",
        component: <Menu.ProfileMenu />,
        description:
          "User menu with avatar and icons for profile, settings, and logout.",
      },
      {
        id: "themed-menu",
        name: "ThemedMenu",
        component: <Menu.ThemedMenu />,
        description:
          "A menu with custom background and border styling to match app themes.",
      },
    ],
  },
  {
    title: "File & Utility Menus",
    description:
      "Menus for file operations, contextual actions, and utilities.",
    items: [
      {
        id: "file-menu",
        name: "FileMenu",
        component: <Menu.FileMenu />,
        description: "Menu for basic file operations like open, save, and close.",
      },
    ],
  },
];

const MenuDemo: React.FC = () => {
  return (
    <ComponentDemo
      categories={menuCategories}
      packageName="design-bundle@latest"
    />
  );
};

export default MenuDemo;
