export type TFilterField = {
  label: string;
  name: string;
  type: "text" | "select" | "dateRange";
  placeholder?: string;
  options?: string[]; // For select type
};
