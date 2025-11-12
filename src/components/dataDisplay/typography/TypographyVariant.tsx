// components/Typography/TypographyVariants.tsx
import React from "react";
import BaseTypography from "./BaseTypography";

/**
 * ============================================
 * HEADING TYPOGRAPHY
 * ============================================
 */

export const Heading1 = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="heading" variant="h3">
    {children}
  </BaseTypography>
);

export const Heading2 = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="heading" variant="h5">
    {children}
  </BaseTypography>
);

export const Heading3 = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="heading" variant="h6">
    {children}
  </BaseTypography>
);

export const DisplayLarge = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="display" variant="h1">
    {children}
  </BaseTypography>
);

export const DisplaySmall = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="display" variant="h4">
    {children}
  </BaseTypography>
);

/**
 * ============================================
 * SUBTITLE & OVERLINE TYPOGRAPHY
 * ============================================
 */

export const Subtitle = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="subtitle" variant="subtitle1">
    {children}
  </BaseTypography>
);

export const SubtitleSmall = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="subtitle" variant="subtitle2">
    {children}
  </BaseTypography>
);

export const Overline = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="overline" variant="overline">
    {children}
  </BaseTypography>
);

/**
 * ============================================
 * BODY TEXT TYPOGRAPHY
 * ============================================
 */

export const BodyText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="body">{children}</BaseTypography>
);

export const BodyLarge = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="body" variant="body1">
    {children}
  </BaseTypography>
);

export const BodySmall = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="body" variant="body2">
    {children}
  </BaseTypography>
);

export const LongText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="longtext">{children}</BaseTypography>
);

/**
 * ============================================
 * CAPTION & LABEL TYPOGRAPHY
 * ============================================
 */

export const CaptionText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="caption">{children}</BaseTypography>
);

export const Label = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="label">{children}</BaseTypography>
);

export const Helper = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="helper">{children}</BaseTypography>
);

export const Tag = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="tag">{children}</BaseTypography>
);

/**
 * ============================================
 * CODE & TECHNICAL TYPOGRAPHY
 * ============================================
 */

export const CodeText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="code">{children}</BaseTypography>
);

export const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="codeblock">{children}</BaseTypography>
);

export const Monospace = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="monospace">{children}</BaseTypography>
);

/**
 * ============================================
 * EMPHASIS & HIGHLIGHT TYPOGRAPHY
 * ============================================
 */

export const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="highlight">{children}</BaseTypography>
);

export const BoldText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="bold">{children}</BaseTypography>
);

export const ItalicText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="italic">{children}</BaseTypography>
);

export const UnderlineText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="underline">{children}</BaseTypography>
);

export const StrikethroughText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="strikethrough">{children}</BaseTypography>
);

/**
 * ============================================
 * STATUS & SEMANTIC TYPOGRAPHY
 * ============================================
 */

export const SuccessText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="success">{children}</BaseTypography>
);

export const ErrorText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="error">{children}</BaseTypography>
);

export const WarningText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="warning">{children}</BaseTypography>
);

export const InfoText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="info">{children}</BaseTypography>
);

export const MutedText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="muted">{children}</BaseTypography>
);

/**
 * ============================================
 * SPECIAL & DECORATIVE TYPOGRAPHY
 * ============================================
 */

export const QuoteText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="quote">{children}</BaseTypography>
);

export const LinkText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="link">{children}</BaseTypography>
);

export const AccentText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="accent">{children}</BaseTypography>
);

export const GradientText = ({ children }: { children: React.ReactNode }) => (
  <BaseTypography variantType="gradient">{children}</BaseTypography>
);

/**
 * ============================================
 * ALL TYPOGRAPHY TYPES OBJECT
 * ============================================
 */

export const Typography = {
  // Headings
  Heading1,
  Heading2,
  Heading3,
  DisplayLarge,
  DisplaySmall,

  // Subtitles & Overlines
  Subtitle,
  SubtitleSmall,
  Overline,

  // Body Text
  BodyText,
  BodyLarge,
  BodySmall,
  LongText,

  // Captions & Labels
  CaptionText,
  Label,
  Helper,
  Tag,

  // Code & Technical
  CodeText,
  CodeBlock,
  Monospace,

  // Emphasis
  HighlightText,
  BoldText,
  ItalicText,
  UnderlineText,
  StrikethroughText,

  // Status & Semantic
  SuccessText,
  ErrorText,
  WarningText,
  InfoText,
  MutedText,

  // Special & Decorative
  QuoteText,
  LinkText,
  AccentText,
  GradientText,
};

/**
 * ============================================
 * UTILITY FUNCTIONS
 * ============================================
 */

/**
 * Get all typography types
 */
export const getAllTypographyTypes = (): string[] => {
  return Object.keys(Typography);
};

/**
 * Get specific typography component by name
 */
export const getTypographyByName = (
  name: keyof typeof Typography
): React.FC<{ children: React.ReactNode }> => {
  return Typography[name];
};