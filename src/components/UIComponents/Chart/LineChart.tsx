// components/Charts/LineChart.tsx
import React, { useState } from "react";
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
      <ResponsiveContainer width="95%" height="100%">
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
      <ResponsiveContainer width="95%" height="100%">
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

// -------------------------------
// 🎚️ Interactive Multi Line Chart Component (with toggle)
// -------------------------------
export interface InteractiveMultiLineChartProps extends BaseChartProps {
  dataKeys: string[];
  colors?: string[];
}

/**
 * InteractiveMultiLineChart Component
 * Multiple lines with clickable legend to toggle data visibility
 * Click on any legend item to hide/show that line
 */
export const InteractiveMultiLineChartComponent: React.FC<
  InteractiveMultiLineChartProps
> = ({
  title,
  data,
  dataKeys,
  height = 400,
  colors = ["#ef4444", "#f97316", "#2575fc", "#22c55e"],
  showLegend = true,
  showGrid = true,
}) => {
  const [visibleLines, setVisibleLines] = useState<Set<string>>(
    new Set(dataKeys)
  );

  const handleLegendClick = (e: any) => {
    const newVisible = new Set(visibleLines);
    if (newVisible.has(e.dataKey)) {
      newVisible.delete(e.dataKey);
    } else {
      newVisible.add(e.dataKey);
    }
    setVisibleLines(newVisible);
  };

  return (
    <BaseChart title={title} data={data} height={height}>
      <ResponsiveContainer width="95%" height="100%">
        <LineChart data={data}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {showLegend && (
            <Legend
              onClick={handleLegendClick}
              wrapperStyle={{ cursor: "pointer" }}
            />
          )}
          {dataKeys.map((key, index) => {
            // Only render line if it's in the visible set
            if (!visibleLines.has(key)) return null;

            return (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index % colors.length]}
                strokeWidth={2}
                dot={true}
                isAnimationActive={true}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export const LineCharts = {
  MultiLineChartComponent,
  LineChartComponent,
  InteractiveMultiLineChartComponent,
};