import React from "react";
import Product from "../models/product";

type ProductInfoProps = {
  product: Product;
  headingLevel: "primary" | "secondary" | "tertiary";
  theme: "dark" | "light";
  hasDescription?: boolean;
  description?: Product["description"];
  showPrice?: boolean;
  newName?: string;
};

const ProductInfo = ({
  product,
  headingLevel,
  theme,
  hasDescription,
  description,
  showPrice,
  newName,
}: ProductInfoProps) => {
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
      {product.new && <p>New product</p>}
      {React.createElement(headingTag, null, newName || product.name)}
      {hasDescription && <p>{description || product.description}</p>}
      {showPrice && <p>{product.price}</p>}
    </div>
  );
};

export default ProductInfo;
