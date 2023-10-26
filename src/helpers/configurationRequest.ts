import { Store } from "../types/Store";
import { getPayload, getUpdatePayload } from "../utils/request";
import { getStore } from "../utils/response";
import api from "./api";
import { CONFIGURATION_QUERY } from "../utils/constants";
import { FieldValue } from "../types/FieldValue";
import { queryClient } from "./queryClient";

export function getConfiguration(): Promise<Store> {
  return api.post("", getPayload([])).then(({ data }) => getStore(data));
}

export function updateConfiguration(data: FieldValue[]): Promise<Store> {
  console.log("UPDATE LOGIK CONFIGURATION");
  const { formId } = queryClient.getQueryData(CONFIGURATION_QUERY) as Store;

  return api.patch(`/${formId}?delta=false`, getUpdatePayload(data)).then(({ data }) => {
    const store = getStore(data);
    queryClient.setQueryData(CONFIGURATION_QUERY, store);

    return store;
  });
}
