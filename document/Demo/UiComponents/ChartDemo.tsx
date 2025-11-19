import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { BarCharts } from "../../../src/components";
import { LineCharts } from "../../../src/components";
import { pieChart } from "../../../src/components";

// ========================================
// 📊 Sample Demo Data
// ========================================
const sampleData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

// ========================================
// 🧱 Chart Categories
// ========================================

const chartCategories: DemoCategory[] = [
  {
    title: "Bar Charts",
    description: "Visualize categorical data using vertical or stacked bars.",
    items: [
      {
        id: "bar-chart",
        name: "BarChartComponent",
        component: (
          <BarCharts.BarChartComponent
            title="Sales Overview"
            data={sampleData}
            dataKey="uv"
          />
        ),
        description:
          "Displays a standard bar chart with adjustable color and size.",
      },
      {
        id: "stacked-bar-chart",
        name: "StackedBarChartComponent",
        component: (
          <BarCharts.StackedBarChartComponent
            title="Revenue Breakdown"
            data={sampleData}
            dataKeys={["uv", "pv", "amt"]}
          />
        ),
        description:
          "Shows multiple datasets stacked on top of each other for comparison.",
      },
      {
        id: "interactive-stacked-bar-chart",
        name: "InteractiveStackedBarChartComponent",
        component: (
          <BarCharts.InteractiveStackedBarChartComponent
            title="Interactive Revenue Breakdown"
            data={sampleData}
            dataKeys={["uv", "pv", "amt"]}
          />
        ),
        description:
          "Stacked bar chart with clickable legend to toggle data visibility.",
      },
    ],
  },
  {
    title: "Line Charts",
    description:
      "Great for visualizing trends and changes over continuous time intervals.",
    items: [
      {
        id: "line-chart",
        name: "LineChartComponent",
        component: (
          <LineCharts.LineChartComponent
            title="Traffic Trend"
            data={sampleData}
            dataKey="pv"
            stroke="#2575fc"
          />
        ),
        description: "A smooth single-line chart showing performance trends.",
      },
      {
        id: "multi-line-chart",
        name: "MultiLineChartComponent",
        component: (
          <LineCharts.MultiLineChartComponent
            title="Comparative Trends"
            data={sampleData}
            dataKeys={["uv", "pv", "amt"]}
          />
        ),
        description:
          "Displays multiple line datasets for trend comparison in one chart.",
      },
      {
        id: "interactive-multi-line-chart",
        name: "InteractiveMultiLineChartComponent",
        component: (
          <LineCharts.InteractiveMultiLineChartComponent
            title="Interactive Comparative Trends"
            data={sampleData}
            dataKeys={["uv", "pv", "amt"]}
          />
        ),
        description:
          "Multiple lines with clickable legend to toggle line visibility.",
      },
    ],
  },
  {
    title: "Pie Charts",
    description: "Used for visualizing proportions and percentage distributions.",
    items: [
      {
        id: "pie-chart",
        name: "PieChartComponent",
        component: (
          <pieChart.PieChartComponent
            title="Market Share Distribution"
            data={[
              { name: "Product A", value: 400 },
              { name: "Product B", value: 300 },
              { name: "Product C", value: 300 },
              { name: "Product D", value: 200 },
            ]}
            dataKey="value"
          />
        ),
        description:
          "Displays proportional values as slices of a pie for easy comparison.",
      },
      {
        id: "interactive-pie-chart",
        name: "InteractivePieChartComponent",
        component: (
          <pieChart.InteractivePieChartComponent
            title="Interactive Market Share Distribution"
            data={[
              { name: "Product A", value: 400 },
              { name: "Product B", value: 300 },
              { name: "Product C", value: 300 },
              { name: "Product D", value: 200 },
            ]}
            dataKey="value"
          />
        ),
        description:
          "Pie chart with clickable legend to toggle segment visibility.",
      },
    ],
  },
];

// ========================================
// 🚀 Chart Demo Page
// ========================================

const ChartDemo: React.FC = () => {
  return (
    <ComponentDemo
      categories={chartCategories}
      packageName="design-bundle@latest"
    />
  );
};

export default ChartDemo;