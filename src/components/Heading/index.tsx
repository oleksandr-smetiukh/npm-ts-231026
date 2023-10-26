import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { HeadingProps } from "./types";
import { HEADING_CLASSES } from "../../constants";

const Heading: FC<HeadingProps> = ({ tid, content, variant = "h6" }) => {
  const { t } = useTranslation();

  const CustomTag = variant as keyof JSX.IntrinsicElements;

  return (
    <CustomTag
      className={HEADING_CLASSES[variant]}
      dangerouslySetInnerHTML={{
        __html: content || t(tid),
      }}
    />
  );
};

export default Heading;
