import i18nextResources from "./i18nextResources";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof i18nextResources;
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next init options)
    // returnNull: false;
  }
}
