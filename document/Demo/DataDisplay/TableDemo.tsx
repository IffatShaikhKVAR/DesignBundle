import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { Tables } from "../../../src/components";

/**
 * Mock Table Data
 */
const sampleColumns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "email", headerName: "Email" },
  { field: "role", headerName: "Role" },
];

const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Michael Lee", email: "michael@example.com", role: "Editor" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Viewer" },
];

/**
 * Categories for Table Components
 */
const tableCategories: DemoCategory[] = [
  {
    title: "Basic Table Variants",
    description:
      "Essential table styles that cover common layout and interaction needs.",
    items: [
      {
        id: "table-simple",
        name: "SimpleTable",
        component: (
          <Tables.Simple columns={sampleColumns} data={sampleData} />
        ),
        description: "Clean and minimal table layout.",
      },
      {
        id: "table-striped",
        name: "StripedTable",
        component: (
          <Tables.Striped columns={sampleColumns} data={sampleData} />
        ),
        description: "Alternating row colors for readability.",
      },
      {
        id: "table-bordered",
        name: "BorderedTable",
        component: (
          <Tables.Bordered columns={sampleColumns} data={sampleData} />
        ),
        description: "Adds borders around all table cells.",
      },
      {
        id: "table-hover",
        name: "HoverTable",
        component: <Tables.Hover columns={sampleColumns} data={sampleData} />,
        description: "Highlights rows on hover for better UX.",
      },
      {
        id: "table-compact",
        name: "CompactTable",
        component: (
          <Tables.Compact columns={sampleColumns} data={sampleData} />
        ),
        description: "Reduced padding for tighter layouts.",
      },
      {
        id: "table-action",
        name: "ActionTable",
        component: <Tables.Action columns={sampleColumns} data={sampleData} />,
        description: "Includes action buttons for CRUD operations.",
      },
    ],
  },
  {
    title: "Advanced Table Variants",
    description:
      "Enhanced table designs for better presentation and responsiveness.",
    items: [
      {
        id: "table-striped-action",
        name: "StripedActionTable",
        component: (
          <Tables.StripedAction columns={sampleColumns} data={sampleData} />
        ),
        description: "Striped table with action buttons.",
      },
      {
        id: "table-bordered-action",
        name: "BorderedActionTable",
        component: (
          <Tables.BorderedAction columns={sampleColumns} data={sampleData} />
        ),
        description: "Bordered table with interactive actions.",
      },
      {
        id: "table-hover-compact",
        name: "HoverCompactTable",
        component: (
          <Tables.HoverCompact columns={sampleColumns} data={sampleData} />
        ),
        description: "Compact table with hover effects.",
      },
      {
        id: "table-striped-bordered",
        name: "StripedBorderedTable",
        component: (
          <Tables.StripedBordered columns={sampleColumns} data={sampleData} />
        ),
        description: "Combines striped rows and borders for clarity.",
      },
      {
        id: "table-dark",
        name: "DarkTable",
        component: <Tables.Dark columns={sampleColumns} data={sampleData} />,
        description: "Dark-themed table for contrast or dashboards.",
      },
      {
        id: "table-minimal",
        name: "MinimalTable",
        component: (
          <Tables.Minimal columns={sampleColumns} data={sampleData} />
        ),
        description: "Lightweight and borderless table.",
      },
      {
        id: "table-fullwidth",
        name: "FullWidthTable",
        component: (
          <Tables.FullWidth columns={sampleColumns} data={sampleData} />
        ),
        description: "Spans the full container width.",
      },
      {
        id: "table-responsive",
        name: "ResponsiveTable",
        component: (
          <Tables.Responsive columns={sampleColumns} data={sampleData} />
        ),
        description: "Scrolls horizontally on smaller screens.",
      },
      {
        id: "table-shadow",
        name: "ShadowTable",
        component: <Tables.Shadow columns={sampleColumns} data={sampleData} />,
        description: "Adds soft shadow for subtle depth.",
      },
      {
        id: "table-rounded",
        name: "RoundedTable",
        component: (
          <Tables.Rounded columns={sampleColumns} data={sampleData} />
        ),
        description: "Rounded edges for a smooth visual appeal.",
      },
    ],
  },
  {
    title: "Specialty Tables",
    description:
      "Purpose-built table layouts tailored for specific use cases.",
    items: [
      {
        id: "table-stats",
        name: "StatsTable",
        component: <Tables.Stats columns={sampleColumns} data={sampleData} />,
        description: "Tabular format for data metrics and KPIs.",
      },
      {
        id: "table-data",
        name: "DataTable",
        component: <Tables.Data columns={sampleColumns} data={sampleData} />,
        description: "Interactive table for data visualization and search.",
      },
      {
        id: "table-report",
        name: "ReportTable",
        component: <Tables.Report columns={sampleColumns} data={sampleData} />,
        description: "Formatted layout for reports and summaries.",
      },
      {
        id: "table-inventory",
        name: "InventoryTable",
        component: (
          <Tables.Inventory columns={sampleColumns} data={sampleData} />
        ),
        description: "Optimized for managing product or stock data.",
      },
      {
        id: "table-user",
        name: "UserTable",
        component: <Tables.User columns={sampleColumns} data={sampleData} />,
        description: "Shows user details and actions.",
      },
      {
        id: "table-product",
        name: "ProductTable",
        component: (
          <Tables.Product columns={sampleColumns} data={sampleData} />
        ),
        description: "Product-focused table with interactive columns.",
      },
    ],
  },
];

/**
 * Table Demo Component
 */
const TableDemo: React.FC = () => {
  return (
    <ComponentDemo categories={tableCategories} packageName="design-bundle@latest" />
  );
};

export default TableDemo;
