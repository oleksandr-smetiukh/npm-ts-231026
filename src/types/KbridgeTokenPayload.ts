export interface KbridgeTokenPayload {
  grant_type: string;
  username: string;
  password: string;
  scope: string;
  client_id: string;
  client_secret: string;
  [key: string]: string;
}
