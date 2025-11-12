// src/pages/CardDemo.tsx
import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { Cards } from "../../../src/components";

// ========================================
// Categories for Card Components
// ========================================

const cardCategories: DemoCategory[] = [
  {
    title: "Basic Card Styles",
    description: "Fundamental card components with different styling approaches.",
    items: [
      {
        id: "default-card",
        name: "DefaultCard",
        component: <Cards.Default />,
        description: "A simple card with base styling.",
      },
      {
        id: "outlined-card",
        name: "OutlinedCard",
        component: <Cards.Outlined />,
        description: "A bordered card with clean outline.",
      },
      {
        id: "elevated-card",
        name: "ElevatedCard",
        component: <Cards.Elevated />,
        description: "A card with shadow and elevation.",
      },
      {
        id: "minimal-card",
        name: "MinimalCard",
        component: <Cards.Minimal />,
        description: "Lightweight and compact card design.",
      },
    ],
  },
  {
    title: "Status Alert Cards",
    description: "Cards designed to display status messages and alerts with different severity levels.",
    items: [
      {
        id: "info-card",
        name: "InfoCard",
        component: <Cards.Info />,
        description: "Informational card with icon and dismissible option.",
      },
      {
        id: "warning-card",
        name: "WarningCard",
        component: <Cards.Warning />,
        description: "Warning alert card to caution users.",
      },
      {
        id: "success-card",
        name: "SuccessCard",
        component: <Cards.Success />,
        description: "Success message card for confirmations.",
      },
      {
        id: "error-card",
        name: "ErrorCard",
        component: <Cards.Error />,
        description: "Error notification card with dismissible option.",
      },
    ],
  },
  {
    title: "Premium & Specialty Cards",
    description: "Advanced card designs with gradients and special styling for highlighted content.",
    items: [
      {
        id: "highlight-card",
        name: "HighlightCard",
        component: <Cards.Highlight />,
        description: "Premium card with vibrant gradient and elevated appearance.",
      },
      {
        id: "gradient-card",
        name: "GradientCard",
        component: <Cards.Gradient />,
        description: "Beautiful gradient background for elegant presentation.",
      },
      {
        id: "bordered-card",
        name: "BorderedCard",
        component: <Cards.Bordered />,
        description: "Clean card with prominent colored border.",
      },
      {
        id: "registration-card",
        name: "RegistrationCard",
        component: <Cards.Registration />,
        description: "Styled card with gradient header for registration forms.",
      },
    ],
  },
];

// ========================================
// Card Demo Component
// ========================================

const CardDemo: React.FC = () => {
  return <ComponentDemo categories={cardCategories} packageName="design-bundle" />;
};

export default CardDemo;