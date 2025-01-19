import React from "react";
import Button from "./Button";

export type ProductBoxProps = {
  isNew?: boolean;
  headingLevel: "primary" | "secondary" | "tertiary";
  title?: string;
  description?: string;
  theme: "dark" | "light";
};

const ProductBox = ({
  isNew,
  headingLevel,
  title,
  description,
  theme,
}: ProductBoxProps) => {
  let headingTag: string;

  switch (headingLevel) {
    case "primary":
      headingTag = "h1";
      break;
    case "secondary":
      headingTag = "h2";
      break;
    case "tertiary":
      headingTag = "h3";
      break;
  }

  return (
    <div>
      {isNew && <p>New product</p>}
      {React.createElement(headingTag, null, title)}
      {description && <p>{description}</p>}
      <Button linkTo="">See product</Button>
    </div>
  );
};

export default ProductBox;
