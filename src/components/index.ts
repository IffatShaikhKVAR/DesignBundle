// src/components/index.ts

// ============================================
// BUTTONS
// ============================================
export { default as BaseButton } from "./uiBaseComponents/Button/Button";
export * from "./uiBaseComponents/Button/LoginButton";
export * from "./uiBaseComponents/Button/SubmitButton";
export * from "./uiBaseComponents/Button/RegisterButton";
export * from "./uiBaseComponents/Button/IconButtons";

// ============================================
// INPUTS
// ============================================
export { default as BaseInput } from "./uiBaseComponents/Inputs/BaseInput";
export * from "./uiBaseComponents/Inputs/Inputs";
export * from "./uiBaseComponents/Inputs/VariantSpecific";
export * from "./uiBaseComponents/Inputs/TextAreaInputs";
export * from "./uiBaseComponents/Inputs/FileInputs";
export { default as AutoFilledInput } from "./uiBaseComponents/Inputs/AutofilledInput";
export { default as ReadOnlyInput } from "./uiBaseComponents/Inputs/ReadonlyInput";

// ============================================
// CHECKBOXES
// ============================================
export { default as BaseCheckbox } from "./uiBaseComponents/Checkboxes/BaseCheckbox";
export * from "./uiBaseComponents/Checkboxes/CheckboxVariants";
export { default as CheckboxGroup } from "./uiBaseComponents/Checkboxes/CheckboxGroup";

// ============================================
// DROPDOWNS
// ============================================
export { default as BaseDropdown } from "./uiBaseComponents/Dropdowns/BaseDropdown";
export * from "./uiBaseComponents/Dropdowns/DropdownVariants";
export { default as ScrollableDropdown } from "./uiBaseComponents/Dropdowns/ScrollDropdown";
export { default as SearchableDropdown } from "./uiBaseComponents/Dropdowns/SearchDropdown";

// ============================================
// TOGGLES
// ============================================
export { default as BaseToggle } from "./uiBaseComponents/Toggles/BaseToggle";
export * from "./uiBaseComponents/Toggles/ToggleVariant";
export { default as IconToggle } from "./uiBaseComponents/Toggles/IconToggle";
export { default as ThemedToggle } from "./uiBaseComponents/Toggles/ThemedToggle";

// ============================================
// PROGRESS INDICATORS
// ============================================
export { default as BaseProgress } from "./feedbacks/progressIndicator/BaseProgress";
export * from "./feedbacks/progressIndicator/LinearProgress";
export * from "./feedbacks/progressIndicator/CircularProgress";
export { default as GradientProgress } from "./feedbacks/progressIndicator/GradientProgress";
export * from "./feedbacks/progressIndicator/LabeledProgress";
export * from "./feedbacks/progressIndicator/AdvancedProgress";

// ============================================
// SLIDERS
// ============================================
export { default as BaseSlider } from "./uiBaseComponents/sliders/BaseSlider";
export { default as RangeSlider } from "./uiBaseComponents/sliders/RangeSlider";
export { default as ColorSlider } from "./uiBaseComponents/sliders/ColorSlider";
export { default as CustomStyledSlider } from "./uiBaseComponents/sliders/CustomStyledSlider";
export { default as IconSlider } from "./uiBaseComponents/sliders/IconSlider";

// ============================================
// TYPOGRAPHY - Export Everything at Once
// ============================================
export { default as BaseTypography } from "./dataDisplay/typography/BaseTypography";
export type { BaseTypographyProps } from "./dataDisplay/typography/BaseTypography";
export * from "./dataDisplay/typography/TypographyVariant";

// ============================================
// CARDS - Export Everything at Once
// ============================================
export { default as BaseCard } from "./surfaces/Card/BaseCards";
export type { BaseCardProps } from "./surfaces/Card/BaseCards";
export * from "./surfaces/Card/CardVariant";

// ============================================
// Modals
// ============================================
export { default as BaseModal } from "./surfaces/Modal/BaseModal";
export type { BaseModalProps } from "./surfaces/Modal/BaseModal";
export * from "./surfaces/Modal/ModalVariant";
export { default as FullScreenModal } from "./surfaces/Modal/FullScreenModal";
export * from "./surfaces/Modal/TabsModal";
export { default as AlertModal } from "./surfaces/Modal/AlertModal";

// ============================================
// Appbar
// ============================================
export { default as Appbar } from "./surfaces/Appbar/BaseAppbar";
export type { BaseAppBarProps } from "./surfaces/Appbar/BaseAppbar";
export * from "./surfaces/Appbar/AppbarVariant";
export * from "./surfaces/Appbar/CustomAppbar";

// ============================================
// Sidebar
// ============================================
export { default as BasicSidebar } from "./surfaces/Sidebar/BaseSidebar";
// export type { BaseSidebarProps } from "./surfaces/Sidebar/BaseSidebar";
export { default as CollapsibleSidebar } from "./surfaces/Sidebar/CollapsibleSidebar";
export { default as MiniSidebar } from "./surfaces/Sidebar/MiniSidebar";
export { default as GradientSidebar } from "./surfaces/Sidebar/GradientSidebar";

// ============================================
// Pagination
// ============================================
export { default as BasePagination } from "./surfaces/pagination/BasePagination";
export type { BasePaginationProps } from "./surfaces/pagination/BasePagination";
export * from "./surfaces/pagination/PginationVariants";
// ============================================
// Alerts
// ============================================
export * from "./feedbacks/alerts/DismissibleAlert";
export * from "./feedbacks/alerts/OutlinedAlert";
export * from "./feedbacks/alerts/IconAlert";
export * from "./feedbacks/alerts/FilledAlert";

// ============================================
// Table - Export Everything at Once
// ============================================
export { default as BaseTable } from "./dataDisplay/Tables/BaseTable";
export type { TableBaseProps } from "./dataDisplay/Tables/BaseTable";
export * from "./dataDisplay/Tables/TableVariant";

// ============================================
// Divider - Export Everything at Once
// ============================================
export { default as BaseDivider } from "./dataDisplay/divider/BaseDivider";
export type { BaseDividerProps } from "./dataDisplay/divider/BaseDivider";
export * from "./dataDisplay/divider/DividerVariant";

// ============================================
// Badge - Export Everything at Once
// ============================================
export { default as BaseBadge } from "./dataDisplay/badges/BaseBadge";
export type { BaseBadgeProps } from "./dataDisplay/badges/BaseBadge";
export * from "./dataDisplay/badges/BadgeVariant";

// ============================================
// Calender - Export Everything at Once
// ============================================
export { default as BaseCalendar } from "./dataDisplay/Calender/BaseCalender";
export type { BaseCalendarProps } from "./dataDisplay/Calender/BaseCalender";
export * from "./dataDisplay/Calender/CalenderVarieant";

// ============================================
// Charts
// ============================================
export { default as BaseChart } from "./UIComponents/Chart/BaseChart";
export type { BaseChartProps } from "./UIComponents/Chart/BaseChart";
export * from "./UIComponents/Chart/BarChart";
export * from "./UIComponents/Chart/LineChart";
export { PieChartComponent } from "./UIComponents/Chart/PieChart";

// ============================================
// Map
// ============================================
export { default as BaseMap } from "./UIComponents/Map/BaseMap";
export type { BaseMapProps } from "./UIComponents/Map/BaseMap";
export { LocationPinMapComponent } from "./UIComponents/Map/LocationPinMap";

