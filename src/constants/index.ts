import { TailwindClasses } from "./types";

export const KBRIDGE_REVISION_ID: string = process.env.REACT_APP_KBRIDGE_REVISION_ID as string;
export const KBRIDGE_DESIGN_NAME: string = process.env.REACT_APP_KBRIDGE_DESIGN_NAME as string;
export const KBRIDGE_USER_NAME: string = process.env.REACT_APP_KBRIDGE_USER_NAME as string;
export const KBRIDGE_CLIENT_SECRET: string = process.env.REACT_APP_KBRIDGE_CLIENT_SECRET as string;
export const KBRIDGE_PASSWORD: string = process.env.REACT_APP_KBRIDGE_PASSWORD as string;
export const KBRIDGE_API_URL = process.env.REACT_APP_KBRIDGE_API_URL as string;
export const KBRIDGE_API_URL_TOKEN = process.env.REACT_APP_KBRIDGE_API_URL_TOKEN as string;

export const KBRIDGE_GRANT_TYPE: string = "password";
export const KBRIDGE_SCOPE: string = "kBridge.WebApi.Public";
export const KBRIDGE_CLIENT_ID: string = "public.api.client";

export const LANGUAGE_FALLBACK = "en";

// tailwind class mapping
export const TEXT_CLASSES: TailwindClasses = {
  regular: "text-regular",
  large: "text-large",
};

export const HEADING_CLASSES: TailwindClasses = {
  h1: "text-heading_h1",
  h2: "text-heading_h2",
  h3: "text-heading_h3",
  h4: "text-heading_h4",
  h5: "text-heading_h5",
  h6: "text-heading_h6",
};
