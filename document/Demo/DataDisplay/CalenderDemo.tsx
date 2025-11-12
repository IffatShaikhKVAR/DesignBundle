import React from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import { Calender } from "../../../src/components"; // ✅ adjust import path if needed

// ========================================
// Categories for Calendar Components
// ========================================

const calendarCategories: DemoCategory[] = [
  {
    title: "Basic Calendars",
    description: "Core calendar variants for general date selection.",
    items: [
      { id: "calendar-simple", name: "SimpleCalendar", component: <Calender.SimpleCalendar /> },
      { id: "calendar-outlined", name: "OutlinedCalendar", component: <Calender.OutlinedCalendar /> },
      { id: "calendar-filled", name: "FilledCalendar", component: <Calender.FilledCalendar /> },
      { id: "calendar-standard", name: "StandardCalendar", component: <Calender.StandardCalendar /> },
      // { id: "calendar-disabled", name: "DisabledCalendar", component: <Calender.DisabledCalendar /> },
    ],
  },
  {
    title: "Date-Time Calendars",
    description: "Calendars supporting both date and time selection.",
    items: [
      { id: "calendar-datetime", name: "DateTimeCalendar", component: <Calender.DateTimeCalendar /> },
      { id: "calendar-datetime-filled", name: "FilledDateTimeCalendar", component: <Calender.FilledDateTimeCalendar /> },
    ],
  },
  {
    title: "Range Calendars",
    description: "Calendars for selecting start and end date ranges.",
    items: [
      { id: "calendar-range", name: "RangeCalendar", component: <Calender.RangeCalendar /> },
      { id: "calendar-range-filled", name: "FilledRangeCalendar", component: <Calender.FilledRangeCalendar /> },
    ],
  },
  {
    title: "Preset Date Calendars",
    description: "Calendars with prefilled dates for convenience.",
    items: [
      { id: "calendar-today", name: "TodayCalendar", component: <Calender.TodayCalendar /> },
      { id: "calendar-week", name: "WeekFromNowCalendar", component: <Calender.WeekFromNowCalendar /> },
      { id: "calendar-month", name: "MonthFromNowCalendar", component: <Calender.MonthFromNowCalendar /> },
    ],
  },
  {
    title: "Special Calendars",
    description: "Specialized calendars for specific use cases.",
    items: [
      { id: "calendar-deadline", name: "DeadlineCalendar", component: <Calender.DeadlineCalendar /> },
    ],
  },
  {
    title: "Compact & Mobile Calendars",
    description: "Responsive calendars suitable for smaller screens or compact UIs.",
    items: [
      { id: "calendar-mobile", name: "MobileCalendar", component: <Calender.MobileCalendar /> },
      { id: "calendar-compact", name: "CompactCalendar", component: <Calender.CompactCalendar /> },
      { id: "calendar-fullwidth", name: "FullWidthCalendar", component: <Calender.FullWidthCalendar /> },
    ],
  },
];

// ========================================
// Calendar Demo Component
// ========================================

const CalendarDemo: React.FC = () => {
  return (
    <ComponentDemo categories={calendarCategories} packageName="design-bundle" />
  );
};

export default CalendarDemo;
