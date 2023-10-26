import { createContext } from "react";
import { getEmptyKBStore } from "../utils/kbridge";

export const KBridgeContext = createContext(getEmptyKBStore());
