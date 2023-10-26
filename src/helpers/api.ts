import axios from "axios";
import { LOGIK_API_URL, LOGIK_TOKEN } from "../utils/constants";

const api = axios.create({
  baseURL: LOGIK_API_URL,
});

api.defaults.headers.common["Authorization"] = `Bearer ${LOGIK_TOKEN}`;

export default api;
