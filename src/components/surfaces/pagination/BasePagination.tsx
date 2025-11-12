// components/Pagination/BasePagination.tsx
import React from "react";
import { Pagination, Stack, Typography } from "@mui/material";

export interface BasePaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  variant?: "text" | "outlined";
  color?: "primary" | "secondary" | "standard";
  shape?: "rounded" | "circular";
  size?: "small" | "medium" | "large";
  showLabel?: boolean;
  label?: string;
}

const BasePagination: React.FC<BasePaginationProps> = ({
  count,
  page,
  onChange,
  variant = "outlined",
  color = "primary",
  shape = "rounded",
  size = "medium",
  showLabel = true,
  label = "Page Navigation",
}) => {
  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 2 }}>
      {showLabel && (
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      )}
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        variant={variant}
        color={color}
        shape={shape}
        size={size}
      />
    </Stack>
  );
};

export default BasePagination;
