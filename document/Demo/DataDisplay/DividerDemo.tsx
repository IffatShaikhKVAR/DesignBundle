import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { Dividers } from "../../../src/components";

/**
 * Divider Categories
 */
const dividerCategories: DemoCategory[] = [
  {
    title: "Basic Dividers",
    description: "Simple horizontal lines for separating content sections.",
    items: [
      { id: "divider-simple", name: "SimpleDivider", component: <Dividers.Simple /> },
      { id: "divider-solid", name: "SolidDivider", component: <Dividers.Solid /> },
      { id: "divider-dashed", name: "DashedDivider", component: <Dividers.Dashed /> },
      { id: "divider-dotted", name: "DottedDivider", component: <Dividers.Dotted /> },
      { id: "divider-double", name: "DoubleDivider", component: <Dividers.Double /> },
    ],
  },
  {
    title: "Colored Dividers",
    description: "Dividers with themed color variants.",
    items: [
      { id: "divider-primary", name: "PrimaryDivider", component: <Dividers.Primary /> },
      { id: "divider-secondary", name: "SecondaryDivider", component: <Dividers.Secondary /> },
      { id: "divider-success", name: "SuccessDivider", component: <Dividers.Success /> },
      { id: "divider-error", name: "ErrorDivider", component: <Dividers.Error /> },
      { id: "divider-warning", name: "WarningDivider", component: <Dividers.Warning /> },
      { id: "divider-info", name: "InfoDivider", component: <Dividers.Info /> },
    ],
  },
  {
    title: "Text Dividers",
    description: "Dividers with embedded text labels.",
    items: [
      { id: "divider-text", name: "TextDivider", component: <Dividers.Text text="OR" /> },
      { id: "divider-text-left", name: "TextLeftDivider", component: <Dividers.TextLeft text="Section" /> },
      { id: "divider-text-right", name: "TextRightDivider", component: <Dividers.TextRight text="Continue" /> },
    ],
  },
  {
    title: "Thickness Variants",
    description: "Control line thickness for better visual emphasis.",
    items: [
      { id: "divider-thin", name: "ThinDivider", component: <Dividers.Thin /> },
      { id: "divider-standard", name: "StandardDivider", component: <Dividers.Standard /> },
      { id: "divider-thick", name: "ThickDivider", component: <Dividers.Thick /> },
      { id: "divider-extrathick", name: "ExtraThickDivider", component: <Dividers.ExtraThick /> },
    ],
  },
  {
    title: "Decorative Dividers",
    description: "Dividers with icons, gradients, and creative styling.",
    items: [
      { id: "divider-icon", name: "IconDivider", component: <Dividers.Icon icon="★" /> },
      { id: "divider-gradient", name: "GradientDivider", component: <Dividers.Gradient /> },
      { id: "divider-shadow", name: "ShadowDivider", component: <Dividers.Shadow /> },
      { id: "divider-wavy", name: "WavyDivider", component: <Dividers.Wavy /> },
      { id: "divider-zigzag", name: "ZigzagDivider", component: <Dividers.Zigzag /> },
    ],
  },
  {
    title: "Vertical Dividers",
    description: "Vertical variants used for side-by-side layouts.",
    items: [
      { id: "divider-vertical", name: "VerticalDivider", component: <Dividers.Vertical /> },
      { id: "divider-vertical-dashed", name: "VerticalDashedDivider", component: <Dividers.VerticalDashed /> },
      { id: "divider-vertical-colored", name: "VerticalColoredDivider", component: <Dividers.VerticalColored /> },
    ],
  },
  {
    title: "Animated Dividers",
    description: "Dynamic dividers with movement and transition effects.",
    items: [
      { id: "divider-animated", name: "AnimatedDivider", component: <Dividers.Animated /> },
      { id: "divider-pulse", name: "PulseDivider", component: <Dividers.Pulse /> },
      { id: "divider-slide", name: "SlideDivider", component: <Dividers.Slide /> },
    ],
  },
  {
    title: "Special Dividers",
    description: "Advanced styles for unique or modern designs.",
    items: [
      { id: "divider-rounded", name: "RoundedDivider", component: <Dividers.Rounded /> },
      { id: "divider-blurred", name: "BlurredDivider", component: <Dividers.Blurred /> },
      { id: "divider-flexible", name: "FlexibleDivider", component: <Dividers.Flexible /> },
      { id: "divider-neon", name: "NeonDivider", component: <Dividers.Neon /> },
      { id: "divider-glassmorphism", name: "GlassmorphismDivider", component: <Dividers.Glassmorphism /> },
    ],
  },
];

/**
 * Divider Demo Page
 */
const DividerDemo: React.FC = () => {
  return <ComponentDemo categories={dividerCategories} packageName="design-bundle" />;
};

export default DividerDemo;
