import React from "react";
import Button from "../../components/Button";
import { ButtonComponent, ButtonVariant } from "../../components/Button/types";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { HeadingVariant } from "../../components/Heading/types";
import { TextVariant } from "../../components/Text/types";

const Components: React.FC = () => {
  const onClick = () => {
    console.log("Hallo, btn");
  };

  return (
    <div className="p-10">
      <Button titleId="buttonPrimaryText" onClick={onClick} />
      <Button variant={ButtonVariant.secondary} titleId="buttonSecondaryText" onClick={onClick} />
      <Button
        variant={ButtonVariant.link}
        component={ButtonComponent.a}
        titleId="buttonLinkText"
        href="#"
        onClick={onClick}
      />

      <br />
      <Heading content="Heading Style 1" variant={HeadingVariant.h1} />
      <Heading content="Heading Style 2" variant={HeadingVariant.h2} />
      <Heading content="Heading Style 3" variant={HeadingVariant.h3} />
      <Heading content="Heading Style 4" variant={HeadingVariant.h4} />
      <Heading content="Heading Style 5" variant={HeadingVariant.h5} />
      <Heading content="Heading Style 6" variant={HeadingVariant.h6} />
      <Text content="Large Body Copy" variant={TextVariant.large} />
      <Text content="Regular Body Copy" variant={TextVariant.regular} />
      <br />
      <p className="text-heading_h1" dangerouslySetInnerHTML={{ __html: "Heading Style 1" }}></p>
      <p className="text-heading_h2" dangerouslySetInnerHTML={{ __html: "Heading Style 2" }}></p>
      <p className="text-heading_h3" dangerouslySetInnerHTML={{ __html: "Heading Style 3" }}></p>
      <p className="text-heading_h4" dangerouslySetInnerHTML={{ __html: "Heading Style 4" }}></p>
      <p className="text-heading_h5" dangerouslySetInnerHTML={{ __html: "Heading Style 5" }}></p>
      <p className="text-heading_h6" dangerouslySetInnerHTML={{ __html: "Heading Style 6" }}></p>
      <p className="text-large" dangerouslySetInnerHTML={{ __html: "Large Body Copy" }}></p>
      <p className="text-regular" dangerouslySetInnerHTML={{ __html: "Regular Body Copy" }}></p>
    </div>
  );
};

export default Components;
