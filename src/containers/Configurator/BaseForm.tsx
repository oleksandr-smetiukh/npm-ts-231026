import React, { useEffect } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import useStore from "../../hooks/useStore";
import useKBridge from "../../hooks/useKBridge";
import { useTranslation } from "react-i18next";
import { KBridgeStore } from "../../types/KBridgeStore";
import { KBridgeContext } from "../../contexts/KBridgeContext";
import { updateKBridgeState } from "../../helpers/kBridgeRequest";
import component from "../../default-data";

const BaseForm = () => {
  const store = useStore();
  const { t } = useTranslation();
  const kbStore: KBridgeStore = useKBridge();

  useEffect(() => {
    if (kbStore.state.isReady) {
      updateKBridgeState(component);
    }
  }, [kbStore]);

  return (
    <StoreContext.Provider value={store}>
      <KBridgeContext.Provider value={kbStore}>
        <div className="text-h1">{t("configuratorTest")}</div>
      </KBridgeContext.Provider>
    </StoreContext.Provider>
  );
};

export default BaseForm;
