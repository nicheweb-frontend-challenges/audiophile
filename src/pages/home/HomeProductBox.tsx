import { Link } from "react-router-dom";
import Product from "../../models/product";
import { createElement } from "react";

export type HomeProductBoxProps = {
  product: Product;
  description?: string;
  classes?: string;
  isNew?: boolean;
  isFirstLevel?: boolean;
  name?: string;
};

const HomeProductBox = ({
  product,
  description,
  classes,
  isNew,
  isFirstLevel,
  name,
  ...otherProps
}: HomeProductBoxProps) => {
  let header = isFirstLevel ? "h1" : "h2";

  return (
    <div className={classes} {...otherProps}>
      <div>
        {isNew && <p>{product.new && "New product"}</p>}
        {createElement(header, null, name ?? product.name)}
        {description && <p>{description || product.description}</p>}
      </div>
      <Link to={`/${product.category}/${product.slug}`}>See product</Link>
    </div>
  );
};

export default HomeProductBox;
