// components/ScrollableDropdown.tsx
import React from "react";
import BaseDropdown, {
 type BaseDropdownProps,
} from "./BaseDropdown";

/**
 * ScrollableDropdown — handles long option lists
 * Adds a scrollable menu area inside the dropdown
 */
const ScrollableDropdown: React.FC<BaseDropdownProps> = (props) => {
  return (
    <BaseDropdown
      {...props}
      // Style overrides for scroll behavior
      helperText={props.helperText || "Scroll to view more options"}
      // Use MenuProps to control menu styling
      // (passed directly to MUI Select via props)
      // @ts-ignore
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 200, // limit menu height
            overflowY: "auto",
          },
        },
      }}
    />
  );
};

export default ScrollableDropdown;
