// components/Dividers/DividerVariants.tsx
import React from "react";
import BaseDivider from "./BaseDivider";

/**
 * ============================================
 * BASIC DIVIDERS
 * ============================================
 */

export const SimpleDivider = () => (
  <BaseDivider variantType="simple" />
);

export const SolidDivider = () => (
  <BaseDivider variantType="solid" />
);

export const DashedDivider = () => (
  <BaseDivider variantType="dashed" />
);

export const DottedDivider = () => (
  <BaseDivider variantType="dotted" />
);

export const DoubleDivider = () => (
  <BaseDivider variantType="double" />
);

/**
 * ============================================
 * COLORED DIVIDERS
 * ============================================
 */

export const PrimaryDivider = () => (
  <BaseDivider variantType="primary" />
);

export const SecondaryDivider = () => (
  <BaseDivider variantType="secondary" />
);

export const SuccessDivider = () => (
  <BaseDivider variantType="success" />
);

export const ErrorDivider = () => (
  <BaseDivider variantType="error" />
);

export const WarningDivider = () => (
  <BaseDivider variantType="warning" />
);

export const InfoDivider = () => (
  <BaseDivider variantType="info" />
);

/**
 * ============================================
 * TEXT DIVIDERS
 * ============================================
 */

export const TextDivider = ({ text = "OR" }: { text?: string }) => (
  <BaseDivider variantType="text" text={text} />
);

export const TextLeftDivider = ({ text = "Section" }: { text?: string }) => (
  <BaseDivider variantType="textLeft" text={text} />
);

export const TextRightDivider = ({ text = "Continue" }: { text?: string }) => (
  <BaseDivider variantType="textRight" text={text} />
);

/**
 * ============================================
 * THICKNESS VARIANTS
 * ============================================
 */

export const ThinDivider = () => (
  <BaseDivider variantType="thin" />
);

export const StandardDivider = () => (
  <BaseDivider variantType="standard" />
);

export const ThickDivider = () => (
  <BaseDivider variantType="thick" />
);

export const ExtraThickDivider = () => (
  <BaseDivider variantType="extrathick" />
);

/**
 * ============================================
 * SPACED DIVIDERS
 * ============================================
 */

export const CompactDivider = () => (
  <BaseDivider variantType="compact" />
);

export const SpacedDivider = () => (
  <BaseDivider variantType="spaced" />
);

export const LargeSpacedDivider = () => (
  <BaseDivider variantType="largeSpaced" />
);

/**
 * ============================================
 * DECORATIVE DIVIDERS
 * ============================================
 */

export const IconDivider = ({ icon = "✦" }: { icon?: string }) => (
  <BaseDivider variantType="icon" icon={icon} />
);

export const GradientDivider = () => (
  <BaseDivider variantType="gradient" />
);

export const ShadowDivider = () => (
  <BaseDivider variantType="shadow" />
);

export const WavyDivider = () => (
  <BaseDivider variantType="wavy" />
);

export const ZigzagDivider = () => (
  <BaseDivider variantType="zigzag" />
);

/**
 * ============================================
 * VERTICAL DIVIDERS
 * ============================================
 */

export const VerticalDivider = () => (
  <BaseDivider variantType="vertical" />
);

export const VerticalDashedDivider = () => (
  <BaseDivider variantType="verticalDashed" />
);

export const VerticalColoredDivider = () => (
  <BaseDivider variantType="verticalColored" />
);

/**
 * ============================================
 * ANIMATED DIVIDERS
 * ============================================
 */

export const AnimatedDivider = () => (
  <BaseDivider variantType="animated" />
);

export const PulseDivider = () => (
  <BaseDivider variantType="pulse" />
);

export const SlideDivider = () => (
  <BaseDivider variantType="slide" />
);

/**
 * ============================================
 * SPECIAL DIVIDERS
 * ============================================
 */

export const RoundedDivider = () => (
  <BaseDivider variantType="rounded" />
);

export const BlurredDivider = () => (
  <BaseDivider variantType="blurred" />
);

export const FlexibleDivider = () => (
  <BaseDivider variantType="flexible" />
);

export const NeonDivider = () => (
  <BaseDivider variantType="neon" />
);

export const GlassmorphismDivider = () => (
  <BaseDivider variantType="glassmorphism" />
);

/**
 * ============================================
 * ALL DIVIDERS OBJECT
 * ============================================
 */

export const Dividers = {
  // Basic Dividers
  Simple: SimpleDivider,
  Solid: SolidDivider,
  Dashed: DashedDivider,
  Dotted: DottedDivider,
  Double: DoubleDivider,

  // Colored Dividers
  Primary: PrimaryDivider,
  Secondary: SecondaryDivider,
  Success: SuccessDivider,
  Error: ErrorDivider,
  Warning: WarningDivider,
  Info: InfoDivider,

  // Text Dividers
  Text: TextDivider,
  TextLeft: TextLeftDivider,
  TextRight: TextRightDivider,

  // Thickness Variants
  Thin: ThinDivider,
  Standard: StandardDivider,
  Thick: ThickDivider,
  ExtraThick: ExtraThickDivider,

  // Spaced Dividers
  Compact: CompactDivider,
  Spaced: SpacedDivider,
  LargeSpaced: LargeSpacedDivider,

  // Decorative Dividers
  Icon: IconDivider,
  Gradient: GradientDivider,
  Shadow: ShadowDivider,
  Wavy: WavyDivider,
  Zigzag: ZigzagDivider,

  // Vertical Dividers
  Vertical: VerticalDivider,
  VerticalDashed: VerticalDashedDivider,
  VerticalColored: VerticalColoredDivider,

  // Animated Dividers
  Animated: AnimatedDivider,
  Pulse: PulseDivider,
  Slide: SlideDivider,

  // Special Dividers
  Rounded: RoundedDivider,
  Blurred: BlurredDivider,
  Flexible: FlexibleDivider,
  Neon: NeonDivider,
  Glassmorphism: GlassmorphismDivider,
};

/**
 * ============================================
 * UTILITY FUNCTIONS
 * ============================================
 */

/**
 * Get all divider types
 */
export const getAllDividerTypes = (): string[] => {
  return Object.keys(Dividers);
};

/**
 * Get specific divider component by name
 */
export const getDividerByName = (
  name: keyof typeof Dividers
): React.FC<any> => {
  return Dividers[name];
};