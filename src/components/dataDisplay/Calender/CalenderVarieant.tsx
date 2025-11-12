import React, { useState } from "react";
import { Box, Stack, TextField } from "@mui/material";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import BaseCalendar from "./BaseCalender";

/**
 * ============================================
 * BASIC CALENDARS
 * ============================================
 */

export const SimpleCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return <BaseCalendar label="Simple Calendar" value={value} onChange={setValue} />;
};

export const OutlinedCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <BaseCalendar
      label="Outlined Calendar"
      variant="outlined"
      value={value}
      onChange={setValue}
    />
  );
};

export const FilledCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <BaseCalendar
      label="Filled Calendar"
      variant="filled"
      value={value}
      onChange={setValue}
    />
  );
};

export const StandardCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <BaseCalendar
      label="Standard Calendar"
      variant="standard"
      value={value}
      onChange={setValue}
    />
  );
};

export const DisabledCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <BaseCalendar label="Disabled Calendar" value={value} onChange={setValue} disabled />
  );
};

/**
 * ============================================
 * DATE TIME CALENDARS
 * ============================================
 */

export const DateTimeCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Date & Time"
        value={value}
        onChange={setValue}
        enableAccessibleFieldDOMStructure={false}
        slots={{ textField: TextField }}
        slotProps={{
          textField: {
            variant: "outlined",
            fullWidth: true,
            sx: { "& .MuiOutlinedInput-root": { borderRadius: 2 } },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export const FilledDateTimeCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Date & Time (Filled)"
        value={value}
        onChange={setValue}
        enableAccessibleFieldDOMStructure={false}
        slots={{ textField: TextField }}
        slotProps={{
          textField: {
            variant: "filled",
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  );
};

/**
 * ============================================
 * RANGE CALENDARS (Simulated)
 * ============================================
 */

export const RangeCalendar = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(7, "day"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="row" spacing={2}>
        <DatePicker
          label="Start date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          enableAccessibleFieldDOMStructure={false}
          slots={{ textField: TextField }}
          slotProps={{
            textField: {
              variant: "outlined",
              fullWidth: true,
            },
          }}
        />
        <DatePicker
          label="End date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          enableAccessibleFieldDOMStructure={false}
          slots={{ textField: TextField }}
          slotProps={{
            textField: {
              variant: "outlined",
              fullWidth: true,
            },
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export const FilledRangeCalendar = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(7, "day"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="row" spacing={2}>
        <DatePicker
          label="Start date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          enableAccessibleFieldDOMStructure={false}
          slots={{ textField: TextField }}
          slotProps={{
            textField: {
              variant: "filled",
              fullWidth: true,
            },
          }}
        />
        <DatePicker
          label="End date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          enableAccessibleFieldDOMStructure={false}
          slots={{ textField: TextField }}
          slotProps={{
            textField: {
              variant: "filled",
              fullWidth: true,
            },
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
};

/**
 * ============================================
 * PRESET DATE CALENDARS
 * ============================================
 */

export const TodayCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return <BaseCalendar label="Today" value={value} onChange={setValue} />;
};

export const WeekFromNowCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs().add(7, "day"));
  return <BaseCalendar label="Next Week" value={value} onChange={setValue} />;
};

export const MonthFromNowCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs().add(1, "month"));
  return <BaseCalendar label="Next Month" value={value} onChange={setValue} />;
};

/**
 * ============================================
 * SPECIAL DATE CALENDARS
 * ============================================
 */

export const DeadlineCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  return <BaseCalendar label="Deadline" value={value} onChange={setValue} />;
};

/**
 * ============================================
 * MOBILE & COMPACT CALENDARS
 * ============================================
 */

export const MobileCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <Box sx={{ width: "100%", maxWidth: 300 }}>
      <BaseCalendar label="Mobile Calendar" value={value} onChange={setValue} />
    </Box>
  );
};

export const CompactCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <Box sx={{ width: "100%", maxWidth: 250 }}>
      <BaseCalendar label="Compact" value={value} onChange={setValue} />
    </Box>
  );
};

export const FullWidthCalendar = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return <BaseCalendar label="Full Width Calendar" value={value} onChange={setValue} />;
};

/**
 * ============================================
 * EXPORT ALL CALENDARS
 * ============================================
 */

export const Calender = {
  SimpleCalendar,
  OutlinedCalendar,
  FilledCalendar,
  StandardCalendar,
  DisabledCalendar,
  DateTimeCalendar,
  FilledDateTimeCalendar,
  RangeCalendar,
  FilledRangeCalendar,
  TodayCalendar,
  WeekFromNowCalendar,
  MonthFromNowCalendar,
  DeadlineCalendar,
  MobileCalendar,
  CompactCalendar,
  FullWidthCalendar,
};

export const getAllCalendarTypes = (): string[] => Object.keys(Calender);
export const getCalendarByName = (name: keyof typeof Calender) => Calender[name];
