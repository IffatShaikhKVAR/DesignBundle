// components/Calendars/BaseCalendar.tsx
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

export interface BaseCalendarProps {
  label?: string;
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
  variant?: "outlined" | "filled" | "standard";
  disabled?: boolean;
  fullWidth?: boolean;
}

const BaseCalendar: React.FC<BaseCalendarProps> = ({
  label = "Select date",
  value,
  onChange,
  variant = "outlined",
  disabled = false,
  fullWidth = true,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
        // ✅ Fix for "sectionListRef" error (v7+)
        enableAccessibleFieldDOMStructure={false}
        slots={{
          textField: TextField,
        }}
        slotProps={{
          textField: {
            variant,
            fullWidth,
            sx: {
              "& .MuiOutlinedInput-root": { borderRadius: 2 },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default BaseCalendar;