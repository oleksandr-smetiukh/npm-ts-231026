import { LogikResponseField } from "./LogikResponseField";

export interface LogikResponse {
  uuid: string;
  total: number;
  fields: LogikResponseField[];
}
