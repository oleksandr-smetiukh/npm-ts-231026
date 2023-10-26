import React, { FC, useContext, useEffect } from "react";
import { KBridgeStore } from "../../types/KBridgeStore";
import { KBridgeContext } from "../../contexts/KBridgeContext";
import { updateKBridgeState } from "../../helpers/kBridgeRequest";
import component from "../../default-data";

const BaseForm: FC = () => {
  const kbStore = useContext<KBridgeStore>(KBridgeContext);

  useEffect(() => {
    if (kbStore.state.isReady) {
      updateKBridgeState(component);
    }
  }, [kbStore]);

  return <div>Configurator</div>;
};

export default BaseForm;
