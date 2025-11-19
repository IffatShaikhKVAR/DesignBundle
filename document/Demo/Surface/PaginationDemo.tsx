// demo/PaginationDemo.tsx
import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { PaginationVariants } from "../../../src/components";

const paginationCategories: DemoCategory[] = [
  {
    title: "Pagination Variants",
    description: "Different styles and behaviors for paginated navigation.",
    items: [
      {
        id: "pagination-standard",
        name: "StandardPagination",
        component: <PaginationVariants.StandardPagination />,
        description: "Basic pagination component.",
      },
      {
        id: "pagination-rounded",
        name: "RoundedPagination",
        component: <PaginationVariants.RoundedPagination />,
        description: "Rounded pagination style for softer UI.",
      },
      {
        id: "pagination-button",
        name: "ButtonPagination",
        component: <PaginationVariants.ButtonPagination />,
        description: "Pagination using previous and next buttons only.",
      },
      {
        id: "pagination-compact",
        name: "CompactPagination",
        component: <PaginationVariants.CompactPagination />,
        description: "Minimal pagination, useful for dense layouts.",
      },
      {
        id: "pagination-load-more",
        name: "LoadMorePagination",
        component: <PaginationVariants.LoadMorePagination />,
        description: "Load more button-style pagination for continuous lists.",
      },
      {
        id: "pagination-dot",
        name: "DotPagination",
        component: <PaginationVariants.DotPagination />,
        description: "Dot-based pagination ideal for carousels or sliders.",
      },
      {
        id: "pagination-input",
        name: "InputPagination",
        component: <PaginationVariants.InputPagination />,
        description: "Allows direct page input for fast navigation.",
      },
      {
        id: "pagination-step",
        name: "StepPagination",
        component: <PaginationVariants.StepPagination />,
        description: "Step-based pagination to show progress or workflow.",
      },
      {
        id: "pagination-chip",
        name: "ChipPagination",
        component: <PaginationVariants.ChipPagination />,
        description: "Chip-style pagination with selectable page chips.",
      },
      {
        id: "pagination-gradient",
        name: "GradientPagination",
        component: <PaginationVariants.GradientPagination />,
        description: "Modern gradient pagination with smooth hover effects.",
      },
      {
        id: "pagination-table",
        name: "TableStylePagination",
        component: <PaginationVariants.TableStylePagination />,
        description:
          "Table-style pagination with rows-per-page dropdown and record range display.",
      },
    ],
  },
];

const PaginationDemo: React.FC = () => (
  <ComponentDemo categories={paginationCategories} packageName="design-bundle@latest" />
);

export default PaginationDemo;
