// components/Menus/BaseMenu.tsx
import React from "react";
import {
  Menu,
  MenuItem,
  type MenuProps,
  type MenuItemProps,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export interface BaseMenuItem extends Omit<MenuItemProps, "children"> {
  label: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  dividerAfter?: boolean;
}

export interface BaseMenuProps extends Omit<MenuProps, "open"> {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  items: BaseMenuItem[];
  paperSx?: object;
}

/**
 * BaseMenu Component
 * Generic reusable menu container for different variants.
 */
const BaseMenu: React.FC<BaseMenuProps> = ({
  anchorEl,
  open,
  onClose,
  items,
  paperSx = {},
  ...rest
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { minWidth: 180, borderRadius: 2, p: 1, ...paperSx },
      }}
      {...rest}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <MenuItem
            onClick={() => {
              item.onClick?.();
              onClose();
            }}
            {...item}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
          {item.dividerAfter && <Divider />}
        </React.Fragment>
      ))}
    </Menu>
  );
};

export default BaseMenu;
