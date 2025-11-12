// components/Badges/BadgeVariants.tsx
import React from "react";
import BaseBadge from "./BaseBadge";

/**
 * ============================================
 * BASIC BADGES
 * ============================================
 */

export const SimpleBadge = ({ label = "Badge" }: { label?: string }) => (
  <BaseBadge variantType="simple" label={label} />
);

export const FilledBadge = ({ label = "Badge" }: { label?: string }) => (
  <BaseBadge variantType="filled" label={label} />
);

export const OutlinedBadge = ({ label = "Badge" }: { label?: string }) => (
  <BaseBadge variantType="outlined" label={label} />
);

export const SoftBadge = ({ label = "Badge" }: { label?: string }) => (
  <BaseBadge variantType="soft" label={label} />
);

/**
 * ============================================
 * COLORED BADGES
 * ============================================
 */

export const PrimaryBadge = ({ label = "Primary" }: { label?: string }) => (
  <BaseBadge variantType="primary" label={label} />
);

export const SecondaryBadge = ({ label = "Secondary" }: { label?: string }) => (
  <BaseBadge variantType="secondary" label={label} />
);

export const SuccessBadge = ({ label = "Success" }: { label?: string }) => (
  <BaseBadge variantType="success" label={label} />
);

export const ErrorBadge = ({ label = "Error" }: { label?: string }) => (
  <BaseBadge variantType="error" label={label} />
);

export const WarningBadge = ({ label = "Warning" }: { label?: string }) => (
  <BaseBadge variantType="warning" label={label} />
);

export const InfoBadge = ({ label = "Info" }: { label?: string }) => (
  <BaseBadge variantType="info" label={label} />
);

/**
 * ============================================
 * SIZE VARIANTS
 * ============================================
 */

export const SmallBadge = ({ label = "Small" }: { label?: string }) => (
  <BaseBadge variantType="small" label={label} />
);

export const MediumBadge = ({ label = "Medium" }: { label?: string }) => (
  <BaseBadge variantType="medium" label={label} />
);

export const LargeBadge = ({ label = "Large" }: { label?: string }) => (
  <BaseBadge variantType="large" label={label} />
);

export const ExtraLargeBadge = ({ label = "Extra Large" }: { label?: string }) => (
  <BaseBadge variantType="extralarge" label={label} />
);

/**
 * ============================================
 * SHAPE VARIANTS
 * ============================================
 */

export const RoundedBadge = ({ label = "Rounded" }: { label?: string }) => (
  <BaseBadge variantType="rounded" label={label} />
);

export const PillBadge = ({ label = "Pill" }: { label?: string }) => (
  <BaseBadge variantType="pill" label={label} />
);

export const SquareBadge = ({ label = "Square" }: { label?: string }) => (
  <BaseBadge variantType="square" label={label} />
);

export const CircleBadge = ({ label = "1" }: { label?: string }) => (
  <BaseBadge variantType="circle" label={label} />
);

/**
 * ============================================
 * ICON BADGES
 * ============================================
 */

export const IconBadge = ({ icon = "✓", label = "Done" }: { icon?: string; label?: string }) => (
  <BaseBadge variantType="icon" label={label} icon={icon} />
);

export const CheckBadge = ({ label = "Done" }: { label?: string }) => (
  <BaseBadge variantType="check" label={label} icon="✓" />
);

export const CloseBadge = ({ label = "Close" }: { label?: string }) => (
  <BaseBadge variantType="close" label={label} icon="✕" />
);

export const StarBadge = ({ label = "Featured" }: { label?: string }) => (
  <BaseBadge variantType="star" label={label} icon="★" />
);

/**
 * ============================================
 * STATUS BADGES
 * ============================================
 */

export const ActiveBadge = ({ label = "Active" }: { label?: string }) => (
  <BaseBadge variantType="active" label={label} />
);

export const InactiveBadge = ({ label = "Inactive" }: { label?: string }) => (
  <BaseBadge variantType="inactive" label={label} />
);

export const PendingBadge = ({ label = "Pending" }: { label?: string }) => (
  <BaseBadge variantType="pending" label={label} />
);

export const OnlineBadge = ({ label = "Online" }: { label?: string }) => (
  <BaseBadge variantType="online" label={label} />
);

export const OfflineBadge = ({ label = "Offline" }: { label?: string }) => (
  <BaseBadge variantType="offline" label={label} />
);

/**
 * ============================================
 * COUNTER BADGES
 * ============================================
 */

export const CounterBadge = ({ count = "5" }: { count?: string }) => (
  <BaseBadge variantType="counter" label={count} />
);

export const DotBadge = () => (
  <BaseBadge variantType="dot" label="" />
);

export const NewBadge = ({ label = "NEW" }: { label?: string }) => (
  <BaseBadge variantType="new" label={label} />
);

/**
 * ============================================
 * SPECIAL BADGES
 * ============================================
 */

export const GradientBadge = ({ label = "Gradient" }: { label?: string }) => (
  <BaseBadge variantType="gradient" label={label} />
);

export const GlassmorphismBadge = ({ label = "Glass" }: { label?: string }) => (
  <BaseBadge variantType="glassmorphism" label={label} />
);

export const ShadowBadge = ({ label = "Shadow" }: { label?: string }) => (
  <BaseBadge variantType="shadow" label={label} />
);

export const NeonBadge = ({ label = "Neon" }: { label?: string }) => (
  <BaseBadge variantType="neon" label={label} />
);

export const AnimatedBadge = ({ label = "Animated" }: { label?: string }) => (
  <BaseBadge variantType="animated" label={label} />
);

export const PulseBadge = ({ label = "Pulse" }: { label?: string }) => (
  <BaseBadge variantType="pulse" label={label} />
);

/**
 * ============================================
 * BADGE GROUPS / SETS
 * ============================================
 */

export const TagBadge = ({ label = "Tag" }: { label?: string }) => (
  <BaseBadge variantType="tag" label={label} />
);

export const LabelBadge = ({ label = "Label" }: { label?: string }) => (
  <BaseBadge variantType="label" label={label} />
);

export const CategoryBadge = ({ label = "Category" }: { label?: string }) => (
  <BaseBadge variantType="category" label={label} />
);

export const TypeBadge = ({ label = "Type" }: { label?: string }) => (
  <BaseBadge variantType="type" label={label} />
);

/**
 * ============================================
 * PREMIUM / SPECIAL BADGES
 * ============================================
 */

export const PremiumBadge = ({ label = "PREMIUM" }: { label?: string }) => (
  <BaseBadge variantType="premium" label={label} />
);

export const VerifiedBadge = ({ label = "Verified" }: { label?: string }) => (
  <BaseBadge variantType="verified" label={label} icon="✓" />
);

export const OfficialBadge = ({ label = "Official" }: { label?: string }) => (
  <BaseBadge variantType="official" label={label} icon="★" />
);

export const ExclusiveBadge = ({ label = "Exclusive" }: { label?: string }) => (
  <BaseBadge variantType="exclusive" label={label} />
);

export const LimitedBadge = ({ label = "Limited" }: { label?: string }) => (
  <BaseBadge variantType="limited" label={label} />
);

/**
 * ============================================
 * ALL BADGES OBJECT
 * ============================================
 */

export const Badges = {
  // Basic Badges
  Simple: SimpleBadge,
  Filled: FilledBadge,
  Outlined: OutlinedBadge,
  Soft: SoftBadge,

  // Colored Badges
  Primary: PrimaryBadge,
  Secondary: SecondaryBadge,
  Success: SuccessBadge,
  Error: ErrorBadge,
  Warning: WarningBadge,
  Info: InfoBadge,

  // Size Variants
  Small: SmallBadge,
  Medium: MediumBadge,
  Large: LargeBadge,
  ExtraLarge: ExtraLargeBadge,

  // Shape Variants
  Rounded: RoundedBadge,
  Pill: PillBadge,
  Square: SquareBadge,
  Circle: CircleBadge,

  // Icon Badges
  Icon: IconBadge,
  Check: CheckBadge,
  Close: CloseBadge,
  Star: StarBadge,

  // Status Badges
  Active: ActiveBadge,
  Inactive: InactiveBadge,
  Pending: PendingBadge,
  Online: OnlineBadge,
  Offline: OfflineBadge,

  // Counter Badges
  Counter: CounterBadge,
  Dot: DotBadge,
  New: NewBadge,

  // Special Badges
  Gradient: GradientBadge,
  Glassmorphism: GlassmorphismBadge,
  Shadow: ShadowBadge,
  Neon: NeonBadge,
  Animated: AnimatedBadge,
  Pulse: PulseBadge,

  // Badge Groups
  Tag: TagBadge,
  Label: LabelBadge,
  Category: CategoryBadge,
  Type: TypeBadge,

  // Premium / Special
  Premium: PremiumBadge,
  Verified: VerifiedBadge,
  Official: OfficialBadge,
  Exclusive: ExclusiveBadge,
  Limited: LimitedBadge,
};

/**
 * ============================================
 * UTILITY FUNCTIONS
 * ============================================
 */

/**
 * Get all badge types
 */
export const getAllBadgeTypes = (): string[] => {
  return Object.keys(Badges);
};

/**
 * Get specific badge component by name
 */
export const getBadgeByName = (
  name: keyof typeof Badges
): React.FC<any> => {
  return Badges[name];
};