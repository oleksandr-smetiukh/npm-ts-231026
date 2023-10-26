import { FieldValue } from "../types/FieldValue";
import { LogikPayload } from "../types/LogikPayload";
import { LogikPayloadField } from "../types/LogikPayloadField";
import { LOGIK_PRODUCT_ID } from "./constants";

export function getPayload(fields: LogikPayloadField[]): LogikPayload {
  return {
    sessionContext: {
      stateful: true,
    },
    partnerData: {
      product: {
        configuredProductId: LOGIK_PRODUCT_ID,
      },
    },
    fields,
  };
}

export function getUpdatePayload(data: FieldValue[]) {
  const values = data.map((item) => ({
    variableName: item.name,
    value: item.value,
  }));

  return getPayload(values);
}
