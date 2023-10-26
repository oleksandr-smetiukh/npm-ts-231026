import kbridgeAuthApi from "./kbridgeAuthApi";
import kbridgeApi from "./kbridgeApi";
import { injectAccessToken, injectSessionId } from "./kbridgeApi";
import {
  KBRIDGE_REVISION_ID,
  KBRIDGE_CLIENT_SECRET,
  KBRIDGE_DESIGN_NAME,
  KBRIDGE_PASSWORD,
  KBRIDGE_USER_NAME,
  KBRIDGE_GRANT_TYPE,
  KBRIDGE_CLIENT_ID,
  KBRIDGE_SCOPE,
} from "../constants";
import { KBridgeStore } from "../types/KBridgeStore";
import { KbridgeTokenPayload } from "../types/KbridgeTokenPayload";
import { Bdata } from "../types/Bdata";
import { KBridgeBody } from "../types/KBridgeBody";

export function getAccessToken(): Promise<string> {
  const params: KbridgeTokenPayload = {
    grant_type: KBRIDGE_GRANT_TYPE,
    username: KBRIDGE_USER_NAME,
    password: KBRIDGE_PASSWORD,
    scope: KBRIDGE_SCOPE,
    client_id: KBRIDGE_CLIENT_ID,
    client_secret: KBRIDGE_CLIENT_SECRET,
  };

  const body = Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");

  return kbridgeAuthApi.post("", body).then((data) => {
    const accessToken = data.data.access_token;
    injectAccessToken(accessToken);
    return accessToken;
  });
}

export function initSession(accessToken: string): Promise<string> {
  const body = JSON.stringify({
    projectRevisionId: KBRIDGE_REVISION_ID,
    designName: KBRIDGE_DESIGN_NAME,
  });
  return kbridgeApi.post("runtime/session/init", body).then((data: any) => {
    const sessionId = data.data.sessionId;
    injectSessionId(sessionId);
    return sessionId;
  });
}

export async function updateKBridgeState(data: KBridgeBody) {
  const bdata: Bdata = {
    ruleName: "ShedInputJSON",
    refchain: "root",
    body: JSON.stringify(data),
  };

  return kbridgeApi.put(`runtime/model/rule/body`, bdata);
}

export async function initialiseKBridge(): Promise<KBridgeStore> {
  let state = {
    isReady: false,
  };
  const accessToken = await getAccessToken();
  const sessionId = await initSession(accessToken);

  if (sessionId) {
    state.isReady = true;
  }

  return { accessToken, sessionId, state };
}
