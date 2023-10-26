import axios from "axios";
import { KBRIDGE_API_URL } from "../constants";

const kbridgeApi = axios.create({
  baseURL: KBRIDGE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const injectAccessToken = (accessToken: string) => {
  kbridgeApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export const injectSessionId = (sessionId: string) => {
  kbridgeApi.defaults.headers.common["session-id"] = `${sessionId}`;
};
export default kbridgeApi;
