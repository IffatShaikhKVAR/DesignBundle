// components/Charts/PieChart.tsx
import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import BaseChart, { type BaseChartProps } from "./BaseChart";

export interface PieChartProps extends BaseChartProps {
  dataKey: string;
  colors?: string[];
  showLabel?: boolean;
}

/**
 * PieChart Component
 * Pie chart with colors and labels
 * Extends BaseChart for consistent styling
 */
export const PieChartComponent: React.FC<PieChartProps> = ({
  title,
  data = [],
  dataKey,
  height = 400,
  colors = ["#2575fc", "#6a11cb", "#4caf50", "#ff9800", "#f44336"],
  showLabel = true,
  showLegend = true,
}) => {
  return (
    <BaseChart title={title} data={data} height={height}>
      <ResponsiveContainer width="95%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={showLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          {showLegend && <Legend />}
        </PieChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

// -------------------------------
// 🎚️ Interactive Pie Chart Component (with toggle)
// -------------------------------
export interface InteractivePieChartProps extends BaseChartProps {
  dataKey: string;
  colors?: string[];
  showLabel?: boolean;
}

/**
 * InteractivePieChart Component
 * Pie chart with clickable legend to toggle segment visibility
 * Click on any legend item to hide/show that pie segment
 */
export const InteractivePieChartComponent: React.FC<
  InteractivePieChartProps
> = ({
  title,
  data = [],
  dataKey,
  height = 400,
  colors = ["#2575fc", "#6a11cb", "#4caf50", "#ff9800", "#f44336"],
  showLabel = true,
  showLegend = true,
}) => {
  const [visibleSegments, setVisibleSegments] = useState<Set<string>>(
    new Set(data.map((item) => item.name))
  );

  const handleLegendClick = (e: any) => {
    const newVisible = new Set(visibleSegments);
    if (newVisible.has(e.name)) {
      newVisible.delete(e.name);
    } else {
      newVisible.add(e.name);
    }
    setVisibleSegments(newVisible);
  };

  // Filter data based on visible segments
  const filteredData = data.filter((item) => visibleSegments.has(item.name));

  return (
    <BaseChart title={title} data={data} height={height}>
      <ResponsiveContainer width="95%" height="100%">
        <PieChart>
          <Pie
            data={filteredData}
            dataKey={dataKey}
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={showLabel}
            isAnimationActive={true}
          >
            {filteredData.map((entry, index) => {
              const originalIndex = data.findIndex((item) => item.name === entry.name);
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[originalIndex % colors.length]}
                />
              );
            })}
          </Pie>
          <Tooltip />
          {showLegend && (
            <Legend
              onClick={handleLegendClick}
              wrapperStyle={{ cursor: "pointer" }}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </BaseChart>
  );
};

export const pieChart = {
InteractivePieChartComponent,
PieChartComponent
}