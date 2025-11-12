// components/Charts/PieChart.tsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import BaseChart, {type BaseChartProps } from "./BaseChart";

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
  data,
  dataKey,
  height = 400,
  colors = ["#2575fc", "#6a11cb", "#4caf50", "#ff9800", "#f44336"],
  showLabel = true,
  showLegend = true,
}) => {
  return (
    <BaseChart title={title} data={data} height={height}>
      <ResponsiveContainer width="100%" height="100%">
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

export default PieChartComponent;