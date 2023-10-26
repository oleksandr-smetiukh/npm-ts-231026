import React, { FC, ReactNode } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import { KBridgeContext } from "../../contexts/KBridgeContext";
import useStore from "../../hooks/useStore";
import { KBridgeStore } from "../../types/KBridgeStore";
import useKBridge from "../../hooks/useKBridge";
import { Store } from "../../types/Store";

interface Props {
  children: ReactNode;
}

const ContextProviders: FC<Props> = ({ children }) => {
  const store: Store = useStore();
  const kbStore: KBridgeStore = useKBridge();

  return (
    <StoreContext.Provider value={store}>
      <KBridgeContext.Provider value={kbStore}>{children}</KBridgeContext.Provider>
    </StoreContext.Provider>
  );
};

export default ContextProviders;
