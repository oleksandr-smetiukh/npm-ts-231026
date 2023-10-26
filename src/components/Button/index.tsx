import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { ButtonComponent, ButtonProps, ButtonVariant } from "./types";

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.primary,
  component = ButtonComponent.button,
  title,
  onClick,
  titleId,
  href,
}) => {
  const { t } = useTranslation();
  const titleValue = titleId ? t(titleId) : title;

  const buttonStyle = classNames(
    variant,
    "block",
    "text-custom",
    "my-10",
    "font-aktiv",
    "uppercase",
    "font-semibold",
    "px-3.5",
    "py-2.5",
    "border-double",
    "border-8",
  );

  let content = null;
  if (component === ButtonComponent.a || !!href) {
    content = (
      <div className="flex items-center">
        <a className={buttonStyle} href={href} dangerouslySetInnerHTML={{ __html: titleValue }}></a>
      </div>
    );
  } else {
    content = (
      <button
        type="submit"
        className={buttonStyle}
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: titleValue }}
      />
    );
  }

  return <div className="flex items-center">{content}</div>;
};

export default Button;
