// pages/TypographyDemo.tsx
import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";

import {
  // Heading Typography
  Heading1,
  Heading2,
  Heading3,
  DisplayLarge,
  DisplaySmall,
  
  // Subtitle & Overline Typography
  Subtitle,
  SubtitleSmall,
  Overline,
  
  // Body Text Typography
  BodyText,
  BodyLarge,
  BodySmall,
  LongText,
  
  // Caption & Label Typography
  CaptionText,
  Label,
  Helper,
  Tag,
  
  // Code & Technical Typography
  CodeText,
  CodeBlock,
  Monospace,
  
  // Emphasis & Highlight Typography
  HighlightText,
  BoldText,
  ItalicText,
  UnderlineText,
  StrikethroughText,
  
  // Status & Semantic Typography
  SuccessText,
  ErrorText,
  WarningText,
  InfoText,
  MutedText,
  
  // Special & Decorative Typography
  QuoteText,
  LinkText,
  AccentText,
  GradientText,
} from "../../../src/components";

export const TypographyDemo: React.FC = () => {
  const typographyCategories: DemoCategory[] = [
    {
      title: "Heading Typography",
      description: "Large text for page titles and main sections.",
      items: [
        {
          id: "heading1",
          name: "Heading1",
          component: <Heading1>This is Heading 1</Heading1>,
          description: "Primary heading (H3)",
        },
        {
          id: "heading2",
          name: "Heading2",
          component: <Heading2>This is Heading 2</Heading2>,
          description: "Secondary heading (H5)",
        },
        {
          id: "heading3",
          name: "Heading3",
          component: <Heading3>This is Heading 3</Heading3>,
          description: "Tertiary heading (H6)",
        },
        {
          id: "display-large",
          name: "DisplayLarge",
          component: <DisplayLarge>Display Large</DisplayLarge>,
          description: "Large display text (H1)",
        },
        {
          id: "display-small",
          name: "DisplaySmall",
          component: <DisplaySmall>Display Small</DisplaySmall>,
          description: "Small display text (H4)",
        },
      ],
    },
    {
      title: "Subtitle & Overline Typography",
      description: "Supporting text for headings and labels.",
      items: [
        {
          id: "subtitle",
          name: "Subtitle",
          component: <Subtitle>This is a subtitle</Subtitle>,
          description: "Primary subtitle",
        },
        {
          id: "subtitle-small",
          name: "SubtitleSmall",
          component: <SubtitleSmall>This is a small subtitle</SubtitleSmall>,
          description: "Secondary subtitle",
        },
        {
          id: "overline",
          name: "Overline",
          component: <Overline>OVERLINE TEXT</Overline>,
          description: "Uppercase overline text",
        },
      ],
    },
    {
      title: "Body Text Typography",
      description: "Standard text for content and paragraphs.",
      items: [
        {
          id: "body-text",
          name: "BodyText",
          component: <BodyText>This is regular body text with standard line height.</BodyText>,
          description: "Default body text",
        },
        {
          id: "body-large",
          name: "BodyLarge",
          component: <BodyLarge>This is large body text for emphasis.</BodyLarge>,
          description: "Large body text",
        },
        {
          id: "body-small",
          name: "BodySmall",
          component: <BodySmall>This is small body text.</BodySmall>,
          description: "Small body text",
        },
        {
          id: "long-text",
          name: "LongText",
          component: (
            <LongText>
              This is long text with increased line height for better readability. It's perfect for articles, blog posts, and lengthy content that needs to be easy to read.
            </LongText>
          ),
          description: "Long-form text",
        },
      ],
    },
    {
      title: "Caption & Label Typography",
      description: "Small text for labels, captions, and helpers.",
      items: [
        {
          id: "caption",
          name: "CaptionText",
          component: <CaptionText>This is a caption with italic styling</CaptionText>,
          description: "Italic caption text",
        },
        {
          id: "label",
          name: "Label",
          component: <Label>Label Text</Label>,
          description: "Form label",
        },
        {
          id: "helper",
          name: "Helper",
          component: <Helper>Helper text for additional context</Helper>,
          description: "Helper text",
        },
        {
          id: "tag",
          name: "Tag",
          component: <Tag>TAG</Tag>,
          description: "Inline tag with background",
        },
      ],
    },
    {
      title: "Code & Technical Typography",
      description: "Monospace text for code and technical content.",
      items: [
        {
          id: "code",
          name: "CodeText",
          component: <CodeText>const variable = "Hello";</CodeText>,
          description: "Inline code",
        },
        {
          id: "code-block",
          name: "CodeBlock",
          component: (
            <CodeBlock>
{`function greeting() {
  console.log("Hello World");
  return true;
}`}
            </CodeBlock>
          ),
          description: "Code block",
        },
        {
          id: "monospace",
          name: "Monospace",
          component: <Monospace>Monospace text in fixed-width font</Monospace>,
          description: "Monospace text",
        },
      ],
    },
    {
      title: "Emphasis & Highlight Typography",
      description: "Text with emphasis and highlighting effects.",
      items: [
        {
          id: "highlight",
          name: "HighlightText",
          component: <HighlightText>Highlighted Text</HighlightText>,
          description: "Highlighted text with background",
        },
        {
          id: "bold",
          name: "BoldText",
          component: <BoldText>Bold Text</BoldText>,
          description: "Bold text",
        },
        {
          id: "italic",
          name: "ItalicText",
          component: <ItalicText>Italic Text</ItalicText>,
          description: "Italic text",
        },
        {
          id: "underline",
          name: "UnderlineText",
          component: <UnderlineText>Underlined Text</UnderlineText>,
          description: "Underlined text",
        },
        {
          id: "strikethrough",
          name: "StrikethroughText",
          component: <StrikethroughText>Strikethrough Text</StrikethroughText>,
          description: "Strikethrough text",
        },
      ],
    },
    {
      title: "Status & Semantic Typography",
      description: "Color-coded text for different status messages.",
      items: [
        {
          id: "success",
          name: "SuccessText",
          component: <SuccessText>✓ Success Message</SuccessText>,
          description: "Success status text",
        },
        {
          id: "error",
          name: "ErrorText",
          component: <ErrorText>✕ Error Message</ErrorText>,
          description: "Error status text",
        },
        {
          id: "warning",
          name: "WarningText",
          component: <WarningText>⚠ Warning Message</WarningText>,
          description: "Warning status text",
        },
        {
          id: "info",
          name: "InfoText",
          component: <InfoText>ℹ Information Message</InfoText>,
          description: "Info status text",
        },
        {
          id: "muted",
          name: "MutedText",
          component: <MutedText>Muted or disabled text</MutedText>,
          description: "Muted text",
        },
      ],
    },
    {
      title: "Special & Decorative Typography",
      description: "Special text effects and decorative styles.",
      items: [
        {
          id: "quote",
          name: "QuoteText",
          component: <QuoteText>A great design is not just how it looks, but how it feels.</QuoteText>,
          description: "Quote text with border",
        },
        {
          id: "link",
          name: "LinkText",
          component: <LinkText>This is a link text</LinkText>,
          description: "Styled link text",
        },
        {
          id: "accent",
          name: "AccentText",
          component: <AccentText>Accent Text</AccentText>,
          description: "Accent text with uppercase",
        },
        {
          id: "gradient",
          name: "GradientText",
          component: <GradientText>Gradient Text</GradientText>,
          description: "Gradient text effect",
        },
      ],
    },
  ];

  return (
    <ComponentDemo
      categories={typographyCategories}
      packageName="design-bundle"
    />
  );
};

export default TypographyDemo;