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
    ],
  },
];

const PaginationDemo: React.FC = () => (
  <ComponentDemo categories={paginationCategories} packageName="design-bundle" />
);

export default PaginationDemo;
