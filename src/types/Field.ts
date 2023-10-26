import { FieldOption } from "./FieldOption";
import { LogikValue } from "./LogikValue";

export interface Field {
  name: string;
  value: LogikValue;
  type: string;
  isVisible: boolean;
  disabled: boolean;
  options: FieldOption[];
}
