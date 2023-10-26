import { createContext } from "react";
import { getEmptyStore } from "../utils/response";

export const StoreContext = createContext(getEmptyStore());
