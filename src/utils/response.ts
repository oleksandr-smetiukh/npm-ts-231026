import { Field } from "../types/Field";
import { FieldOption } from "../types/FieldOption";
import { LogikResponse } from "../types/LogikResponse";
import { LogikResponseField } from "../types/LogikResponseField";
import { LogikResponseOption } from "../types/LogikResponseOption";
import { Fields, Store } from "../types/Store";
import { sortByNumberAttr } from "./common";

export function getFormId(data: LogikResponse) {
  return data.uuid;
}

export function performOption(data: LogikResponseOption): FieldOption {
  return {
    label: data.label,
    value: data.value,
    isVisible: data.state === "visible",
    disabled: data.state === "disabled",
    index: data.orderNumber,
  };
}

export function performOptions(data: LogikResponseField): FieldOption[] {
  const options = data?.optionSet?.options || [];

  return options.map((option) => performOption(option)).sort(sortByNumberAttr);
}

export function perfomField(data: LogikResponseField): Field {
  return {
    name: data.variableName,
    value: data.value,
    type: data.dataType,
    isVisible: data.visibilityState === "visible",
    disabled: data.editable === "false",
    options: performOptions(data),
  };
}

export function isSystemField(data: Field): boolean {
  return (data.name || "").startsWith("sys.");
}

export function getFields(data: LogikResponse): Fields {
  return data.fields
    .map((field) => perfomField(field))
    .filter((field) => !isSystemField(field))
    .reduce((res: Fields, item: Field) => {
      res[item.name] = item;

      return res;
    }, {});
}

export function getTotal(data: LogikResponse): number {
  return data.total || 0;
}

export function getStore(raw: LogikResponse): Store {
  return {
    formId: getFormId(raw),
    total: getTotal(raw),
    fields: getFields(raw),

    state: {
      isLoaded: true,
    },
  };
}

export function getEmptyStore(): Store {
  return {
    formId: "",
    total: 0,
    fields: {},

    state: {
      isLoaded: false,
    },
  };
}
