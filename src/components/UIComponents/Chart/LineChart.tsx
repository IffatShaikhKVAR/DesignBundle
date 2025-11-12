// components/Charts/LineChart.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import BaseChart, { type BaseChartProps } from "./BaseChart";

// -------------------------------
// 🎯 Single Line Chart Component
// -------------------------------
export interface LineChartProps extends BaseChartProps {
  dataKey: string;
  stroke?: string;
  strokeWidth?: number;
  dot?: boolean;
}

/**
 * LineChart Component
 * Single line chart with customizable stroke
 * Extends BaseChart for consistent styling
 */
export const LineChartComponent: React.FC<LineChartProps> = ({
  title,
  data,
  dataKey,
  height = 400,
  stroke = "#2575fc",
  strokeWidth = 2,
  dot = true,
  showLegend = true,
  showGrid = true,
}) => {
  return (
    <BaseChart title={title} data={data} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {showLegend && <Legend />}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={stroke}
            strokeWidth={strokeWidth}
            dot={dot}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

// -------------------------------
// 🌈 Multi Line Chart Component
// -------------------------------
export interface MultiLineChartProps extends BaseChartProps {
  dataKeys: string[];
  colors?: string[];
}

/**
 * MultiLineChart Component
 * Multiple lines in one chart for comparing datasets
 * Extends BaseChart for consistent styling
 */
export const MultiLineChartComponent: React.FC<MultiLineChartProps> = ({
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
        <LineChart data={data}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {showLegend && <Legend />}
          {dataKeys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={true}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export const LineCharts = {
MultiLineChartComponent,
LineChartComponent
}
