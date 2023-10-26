import axios from "axios";
import { KBRIDGE_API_URL_TOKEN } from "../constants";

const kbridgeAuthApi = axios.create({
  baseURL: KBRIDGE_API_URL_TOKEN,
  headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" },
});

export default kbridgeAuthApi;
