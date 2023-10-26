import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/config";
import "./index.css";

import Core from "./containers/Core";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Core />
  </React.StrictMode>,
);
