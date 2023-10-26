import { KBridgeStore } from "../types/KBridgeStore";

export function getEmptyKBStore(): KBridgeStore {
  return { accessToken: "", sessionId: "", state: { isReady: false } };
}
