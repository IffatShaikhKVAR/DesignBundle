// components/Charts/BarChart.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import BaseChart, { type BaseChartProps } from "./BaseChart";

// -------------------------------
// 📊 Standard Bar Chart Component
// -------------------------------
export interface BarChartProps extends BaseChartProps {
  dataKey: string;
  fill?: string;
  barSize?: number;
}

/**
 * BarChart Component
 * Standard bar chart with customizable colors
 * Extends BaseChart for consistent styling
 */
export const BarChartComponent: React.FC<BarChartProps> = ({
  title,
  data,
  dataKey,
  height = 400,
  fill = "#2575fc",
  barSize = 60,
  showLegend = true,
  showGrid = true,
}) => {
  return (
    <BaseChart title={title} data={data} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={barSize}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {showLegend && <Legend />}
          <Bar dataKey={dataKey} fill={fill} />
        </BarChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

// -------------------------------
// 🧱 Stacked Bar Chart Component
// -------------------------------
export interface StackedBarChartProps extends BaseChartProps {
  dataKeys: string[];
  colors?: string[];
}

/**
 * StackedBarChart Component
 * Stacked bars showing grouped data totals
 * Extends BaseChart for consistent styling
 */
export const StackedBarChartComponent: React.FC<StackedBarChartProps> = ({
  title,
  data,
  dataKeys,
  height = 400,
  colors = ["#2575fc", "#6a11cb", "#4caf50", "#ff9800"],
  showLegend = true,
  showGrid = true,
}) => {
  return (
    <BaseChart title={title} data={data} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {showLegend && <Legend />}
          {dataKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[index % colors.length]}
              stackId="stack"
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};


export const BarCharts = {
StackedBarChartComponent,
BarChartComponent
}
