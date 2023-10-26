import { Field } from "./Field";

export interface Fields {
  [key: string]: Field;
}

export interface Store {
  formId: string;
  total: number;
  fields: Fields;

  state: {
    isLoaded: boolean;
  };
}
