import { LogikValue } from "./LogikValue";

export interface FieldOption {
  label: string;
  value: LogikValue;
  isVisible: boolean;
  disabled: boolean;
  index: number;
}
