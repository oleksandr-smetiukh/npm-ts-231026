import { LogikResponseOption } from "./LogikResponseOption";
import { LogikValue } from "./LogikValue";

export interface LogikResponseField {
  variableName: string;
  value: LogikValue;
  dataType: string;
  visibilityState: string;
  editable: string;
  optionSet?: {
    options: LogikResponseOption[];
  };
}
