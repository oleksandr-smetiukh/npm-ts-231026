import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { TEXT_CLASSES } from "../../constants";
import { TextProps } from "./types";

const Text: FC<TextProps> = ({ tid, content, variant = "regular" }) => {
  const { t } = useTranslation();

  return (
    <p
      className={TEXT_CLASSES[variant]}
      dangerouslySetInnerHTML={{
        __html: content || t(tid),
      }}
    />
  );
};

export default Text;
