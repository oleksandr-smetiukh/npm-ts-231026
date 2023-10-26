export interface KBridgeStore {
  sessionId: string;
  accessToken: string;
  state: {
    isReady: boolean;
  };
}
