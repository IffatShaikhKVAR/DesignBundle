// components/Tables/TableVariants.tsx
import React from "react";
import BaseTable, { type TableBaseProps } from "./BaseTable";

/**
 * BASIC TABLE VARIANTS
 */

export const SimpleTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="simple" />
);

export const StripedTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="striped" />
);

export const BorderedTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="bordered" />
);

export const HoverTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="hover" />
);

export const CompactTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="compact" />
);

export const ActionTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="action" />
);

/**
 * ADVANCED TABLE VARIANTS
 */

export const StripedActionTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="striped" />
);

export const BorderedActionTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="bordered" />
);

export const HoverCompactTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="compact" />
);

export const StripedBorderedTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="striped" />
);

export const DarkTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="simple" />
);

export const MinimalTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="simple" />
);

export const FullWidthTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="simple" />
);

export const ResponsiveTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="simple" />
);

export const ShadowTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="simple" />
);

export const RoundedTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="simple" />
);

/**
 * SPECIALTY TABLES
 */

export const StatsTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="striped" />
);

export const DataTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="hover" />
);

export const ReportTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="bordered" />
);

export const InventoryTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="action" />
);

export const UserTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="action" />
);

export const ProductTable = (props: TableBaseProps) => (
  <BaseTable {...props} variant="action" />
);

/**
 * ALL TABLES OBJECT - Easy Export and Import
 */

export const Tables = {
  // Basic Variants
  Simple: SimpleTable,
  Striped: StripedTable,
  Bordered: BorderedTable,
  Hover: HoverTable,
  Compact: CompactTable,
  Action: ActionTable,

  // Advanced Variants
  StripedAction: StripedActionTable,
  BorderedAction: BorderedActionTable,
  HoverCompact: HoverCompactTable,
  StripedBordered: StripedBorderedTable,
  Dark: DarkTable,
  Minimal: MinimalTable,
  FullWidth: FullWidthTable,
  Responsive: ResponsiveTable,
  Shadow: ShadowTable,
  Rounded: RoundedTable,

  // Specialty Tables
  Stats: StatsTable,
  Data: DataTable,
  Report: ReportTable,
  Inventory: InventoryTable,
  User: UserTable,
  Product: ProductTable,
};

/**
 * Get All Table Names
 */
export const getAllTableTypes = (): string[] => {
  return Object.keys(Tables);
};

/**
 * Get Specific Table by Name
 */
export const getTableByName = (
  name: keyof typeof Tables
): React.FC<TableBaseProps> => {
  return Tables[name];
};