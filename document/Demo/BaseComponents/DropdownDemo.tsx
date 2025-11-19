// pages/DropdownDemo.tsx
import React, { useState } from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";

import {
  BaseDropdown,
  ScrollableDropdown,
  SearchableDropdown,
} from "../../../src/components";

export const DropdownDemo: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  // Common dropdown options
  const options = Array.from({ length: 20 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: i + 1,
  }));

  const dropdownCategories: DemoCategory[] = [
    {
      title: "Basic Dropdowns",
      description:
        "Standard dropdowns for simple selections in forms and filters.",
      items: [
        {
          id: "base-dropdown",
          name: "BaseDropdown",
          component: (
            <BaseDropdown
              label="Select Option"
              name="base"
              value={selectedValue}
              options={options.slice(0, 5)}
              onChange={(e) => setSelectedValue(e.target.value)}
              helperText="Basic dropdown with MUI styling."
            />
          ),
          description: "A simple dropdown with standard MUI select behavior.",
        },
      ],
    },
    {
      title: "Advanced Dropdowns",
      description:
        "Enhanced dropdowns with scrollable or searchable features for large datasets.",
      items: [
        {
          id: "scrollable-dropdown",
          name: "ScrollableDropdown",
          component: (
            <ScrollableDropdown
              label="Scrollable Dropdown"
              name="scrollable"
              value={selectedValue}
              options={options}
              onChange={(e) => setSelectedValue(e.target.value)}
              helperText="Scroll to view more options."
            />
          ),
          description:
            "A dropdown that supports long lists with internal scroll.",
        },
        {
          id: "searchable-dropdown",
          name: "SearchableDropdown",
          component: (
            <SearchableDropdown
              label="Searchable Dropdown"
              name="searchable"
              value={selectedValue}
              options={options}
              onChange={(e) => setSelectedValue(e.target.value)}
              helperText="Search inside the dropdown to find specific items."
            />
          ),
          description:
            "Includes a search box inside the dropdown for better filtering.",
        },
      ],
    },
  ];

  return (
    <ComponentDemo 
      categories={dropdownCategories}
      packageName="design-bundle@latest"
    />
  );
};

export default DropdownDemo;
