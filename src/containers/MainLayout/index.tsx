import React, { FC, ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../helpers/queryClient";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default MainLayout;
