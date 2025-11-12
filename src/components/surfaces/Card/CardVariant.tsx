// src/components/Cards/CardVariants.tsx
import React, { useState } from "react";
import BaseCard from "./BaseCards";

export const DefaultCard = () => (
  <BaseCard title="Default Card" content="This is a simple card." />
);

export const OutlinedCard = () => (
  <BaseCard
    variantType="outlined"
    title="Outlined Card"
    content="Bordered and clean."
  />
);

export const ElevatedCard = () => (
  <BaseCard
    variantType="elevated"
    title="Elevated Card"
    content="Raised with shadow."
  />
);

export const RegistrationCard = ({
  title = "Device Registration",
  content = "Your registration form or content here.",
}: {
  title?: string;
  content?: string;
}) => (
  <BaseCard variantType="registration" title={title} content={content} />
);

export const InfoCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  return isVisible ? (
    <BaseCard
      variantType="info"
      title="Information"
      content="This is an informational message with helpful details."
      onClose={() => setIsVisible(false)}
    />
  ) : null;
};

export const WarningCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  return isVisible ? (
    <BaseCard
      variantType="warning"
      title="Warning"
      content="Please be careful with this action as it may have consequences."
      onClose={() => setIsVisible(false)}
    />
  ) : null;
};

export const SuccessCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  return isVisible ? (
    <BaseCard
      variantType="success"
      title="Success"
      content="Your operation completed successfully!"
      onClose={() => setIsVisible(false)}
    />
  ) : null;
};

export const ErrorCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  return isVisible ? (
    <BaseCard
      variantType="error"
      title="Error"
      content="An error occurred. Please try again or contact support."
      onClose={() => setIsVisible(false)}
    />
  ) : null;
};

export const MinimalCard = () => (
  <BaseCard
    variantType="minimal"
    title="Minimal Card"
    content="Lightweight and compact design."
  />
);

export const HighlightCard = () => (
  <BaseCard
    variantType="highlight"
    title="Highlight Card"
    content="This card stands out with a vibrant gradient and elevated styling."
  />
);

export const GradientCard = () => (
  <BaseCard
    variantType="gradient"
    title="Gradient Card"
    content="Beautiful gradient background for premium appearance."
  />
);

export const BorderedCard = () => (
  <BaseCard
    variantType="bordered"
    title="Bordered Card"
    content="Clean card with a prominent colored border."
  />
);

export const Cards = {
  Default: DefaultCard,
  Outlined: OutlinedCard,
  Elevated: ElevatedCard,
  Registration: RegistrationCard,
  Info: InfoCard,
  Warning: WarningCard,
  Success: SuccessCard,
  Error: ErrorCard,
  Minimal: MinimalCard,
  Highlight: HighlightCard,
  Gradient: GradientCard,
  Bordered: BorderedCard,
};