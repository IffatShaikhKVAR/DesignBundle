// demo/AppBarDemo.tsx
import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { AppBars } from "../../../src/components";
import { CustomAppBar } from "../../../src/components";

const appBarCategories: DemoCategory[] = [
  {
    title: "App Bar Variants",
    description: "Different navigation bar styles for headers and toolbars.",
    items: [
      {
        id: "minimal-appbar",
        name: "MinimalAppBar",
        component: <AppBars.MinimalAppBar />,
        description: "Clean and minimal top bar with title only.",
      },
      {
        id: "action-appbar",
        name: "ActionAppBar",
        component: <AppBars.ActionAppBar />,
        description: "Includes menu and notification icons for dashboards.",
      },
      {
        id: "search-appbar",
        name: "SearchAppBar",
        component: <AppBars.SearchAppBar />,
        description: "Includes a centered search field for navigation.",
      },
      {
        id: "profile-appbar",
        name: "ProfileAppBar",
        component: <AppBars.ProfileAppBar />,
        description: "Shows user avatar and name on the right side.",
      },
      {
        id: "gradient-appbar",
        name: "GradientAppBar",
        component: <AppBars.GradientAppBar />,
        description: "Modern gradient title style for branding pages.",
      },
       {
        id: "kvar-appbar", // ✅ New demo entry
        name: "KvarAppBar",
        component: (
          <CustomAppBar.GoldAppBar
            companyName="KVAR Technologies Pvt. Ltd."
            onMenuClick={() => alert("Sidebar toggled!")}
            onLogout={() => alert("Logged out!")}
          />
        ),
        description:
          "Custom KVAR-style app bar with date-time, logo, and power button.",
      },
    ],
  },
];

const AppBarDemo: React.FC = () => (
  <ComponentDemo categories={appBarCategories} packageName="design-bundle@latest" />
);

export default AppBarDemo;
