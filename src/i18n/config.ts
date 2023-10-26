import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import { LANGUAGE_FALLBACK } from "../constants";

const getLanguage = () => {
  // get application language
  return LANGUAGE_FALLBACK;
};

i18next.use(initReactI18next).init({
  lng: getLanguage(),
  fallbackLng: LANGUAGE_FALLBACK,
  debug: true,
  resources: {
    en: {
      translation: enCommon,
    },
  },
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});
