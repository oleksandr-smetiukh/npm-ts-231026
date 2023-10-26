import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Configurator from "./Configurator";
import Components from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Configurator />,
  },
  {
    path: "/components",
    element: <Components />,
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
