// src/sidebar/sidebarCategories.ts
import React from "react";
import FunctionsIcon from "@mui/icons-material/Functions";
import InputIcon from "@mui/icons-material/Input";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"; // 👈 for Alerts icon

export interface NavItem {
  text: string;
  path: string;
  icon: React.ReactNode;
  description?: string;
}

export interface Category {
  title: string;
  items: NavItem[];
}

export const categories: Category[] = [
  {
    title: "Base Components",
    items: [
      { text: "Buttons", path: "/button", icon: <FunctionsIcon /> },
      { text: "Inputs", path: "/input", icon: <InputIcon /> },
      { text: "Radio Buttons", path: "/radio", icon: <RadioButtonCheckedIcon /> },
      { text: "Checkboxes", path: "/checkbox", icon: <CheckBoxIcon /> },
      { text: "Dropdowns", path: "/dropdown", icon: <ArrowDropDownCircleIcon /> },
      { text: "Toggle", path: "/toggle", icon: <CardGiftcardIcon /> },
    ],
  },
  {
    title: "Data Display",
    items: [
      { text: "Typography", path: "/typography", icon: <TextFieldsIcon /> },
      { text: "Cards", path: "/card", icon: <CardGiftcardIcon /> },
      { text: "Table", path: "/table", icon: <TextFieldsIcon /> },
      { text: "Divider", path: "/divider", icon: <TextFieldsIcon /> },
      { text: "Badge", path: "/badge", icon: <TextFieldsIcon /> },
      { text: "Calender", path: "/calender", icon: <TextFieldsIcon /> },
    ],
  },
  {
    title: "Feedback",
    items: [
      { text: "Alerts", path: "/alerts", icon: <NotificationsActiveIcon /> },
      { text: "Progress Indicator", path: "/progress", icon: <NotificationsActiveIcon /> },
    ],
  },

  {
    title: "Surface",
    items: [
      { text: "Modal", path: "/modal", icon: <NotificationsActiveIcon /> },
      { text: "App Bar", path: "/appBar", icon: <NotificationsActiveIcon /> },
      { text: "Side Bar", path: "/sideBar", icon: <NotificationsActiveIcon /> },
       { text: "Pagination", path: "/pagination", icon: <NotificationsActiveIcon /> },
    ],
  },
];
