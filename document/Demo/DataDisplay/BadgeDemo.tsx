import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { Badges } from "../../../src/components";

// ========================================
// Categories for Badge Components
// ========================================

const badgeCategories: DemoCategory[] = [
  {
    title: "Basic Badges",
    description: "Essential badge styles for general labeling and tagging.",
    items: [
      { id: "badge-simple", name: "SimpleBadge", component: <Badges.Simple /> },
      { id: "badge-filled", name: "FilledBadge", component: <Badges.Filled /> },
      { id: "badge-outlined", name: "OutlinedBadge", component: <Badges.Outlined /> },
      { id: "badge-soft", name: "SoftBadge", component: <Badges.Soft /> },
    ],
  },
  {
    title: "Colored Badges",
    description: "Themed badges to represent different states or categories.",
    items: [
      { id: "badge-primary", name: "PrimaryBadge", component: <Badges.Primary /> },
      { id: "badge-secondary", name: "SecondaryBadge", component: <Badges.Secondary /> },
      { id: "badge-success", name: "SuccessBadge", component: <Badges.Success /> },
      { id: "badge-error", name: "ErrorBadge", component: <Badges.Error /> },
      { id: "badge-warning", name: "WarningBadge", component: <Badges.Warning /> },
      { id: "badge-info", name: "InfoBadge", component: <Badges.Info /> },
    ],
  },
  {
    title: "Size Variants",
    description: "Adjustable badge sizes for responsive UI designs.",
    items: [
      { id: "badge-small", name: "SmallBadge", component: <Badges.Small /> },
      { id: "badge-medium", name: "MediumBadge", component: <Badges.Medium /> },
      { id: "badge-large", name: "LargeBadge", component: <Badges.Large /> },
      { id: "badge-extralarge", name: "ExtraLargeBadge", component: <Badges.ExtraLarge /> },
    ],
  },
  {
    title: "Shape Variants",
    description: "Different badge shapes for various design contexts.",
    items: [
      { id: "badge-rounded", name: "RoundedBadge", component: <Badges.Rounded /> },
      { id: "badge-pill", name: "PillBadge", component: <Badges.Pill /> },
      { id: "badge-square", name: "SquareBadge", component: <Badges.Square /> },
      { id: "badge-circle", name: "CircleBadge", component: <Badges.Circle /> },
    ],
  },
  {
    title: "Icon Badges",
    description: "Badges that include icons to enhance clarity and recognition.",
    items: [
      { id: "badge-icon", name: "IconBadge", component: <Badges.Icon /> },
      { id: "badge-check", name: "CheckBadge", component: <Badges.Check /> },
      { id: "badge-close", name: "CloseBadge", component: <Badges.Close /> },
      { id: "badge-star", name: "StarBadge", component: <Badges.Star /> },
    ],
  },
  {
    title: "Status Badges",
    description: "Used to represent the current status or activity state.",
    items: [
      { id: "badge-active", name: "ActiveBadge", component: <Badges.Active /> },
      { id: "badge-inactive", name: "InactiveBadge", component: <Badges.Inactive /> },
      { id: "badge-pending", name: "PendingBadge", component: <Badges.Pending /> },
      { id: "badge-online", name: "OnlineBadge", component: <Badges.Online /> },
      { id: "badge-offline", name: "OfflineBadge", component: <Badges.Offline /> },
    ],
  },
  {
    title: "Counter Badges",
    description: "Badges for notifications and counters.",
    items: [
      { id: "badge-counter", name: "CounterBadge", component: <Badges.Counter /> },
      { id: "badge-dot", name: "DotBadge", component: <Badges.Dot /> },
      { id: "badge-new", name: "NewBadge", component: <Badges.New /> },
    ],
  },
  {
    title: "Special Badges",
    description: "Eye-catching badges for unique or premium visual styles.",
    items: [
      { id: "badge-gradient", name: "GradientBadge", component: <Badges.Gradient /> },
      { id: "badge-glass", name: "GlassmorphismBadge", component: <Badges.Glassmorphism /> },
      { id: "badge-shadow", name: "ShadowBadge", component: <Badges.Shadow /> },
      { id: "badge-neon", name: "NeonBadge", component: <Badges.Neon /> },
      { id: "badge-animated", name: "AnimatedBadge", component: <Badges.Animated /> },
      { id: "badge-pulse", name: "PulseBadge", component: <Badges.Pulse /> },
    ],
  },
  {
    title: "Badge Groups",
    description: "Grouped badges for categories, labels, and tags.",
    items: [
      { id: "badge-tag", name: "TagBadge", component: <Badges.Tag /> },
      { id: "badge-label", name: "LabelBadge", component: <Badges.Label /> },
      { id: "badge-category", name: "CategoryBadge", component: <Badges.Category /> },
      { id: "badge-type", name: "TypeBadge", component: <Badges.Type /> },
    ],
  },
  {
    title: "Premium Badges",
    description: "Special badges for verified, exclusive, or premium tags.",
    items: [
      { id: "badge-premium", name: "PremiumBadge", component: <Badges.Premium /> },
      { id: "badge-verified", name: "VerifiedBadge", component: <Badges.Verified /> },
      { id: "badge-official", name: "OfficialBadge", component: <Badges.Official /> },
      { id: "badge-exclusive", name: "ExclusiveBadge", component: <Badges.Exclusive /> },
      { id: "badge-limited", name: "LimitedBadge", component: <Badges.Limited /> },
    ],
  },
];

// ========================================
// Badge Demo Component
// ========================================

const BadgeDemo: React.FC = () => {
  return (
    <ComponentDemo categories={badgeCategories} packageName="design-bundle" />
  );
};

export default BadgeDemo;
