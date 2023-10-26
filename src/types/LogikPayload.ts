import { LogikPayloadField } from "./LogikPayloadField";

export interface LogikPayload {
  sessionContext: {
    stateful: boolean;
  };
  partnerData: {
    product: { configuredProductId: string };
  };
  fields: LogikPayloadField[];
}
