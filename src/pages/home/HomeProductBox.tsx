import { Link } from "react-router-dom";
import Product from "../../models/product";
import { createElement } from "react";

export type HomeProductBoxProps = {
  product: Product;
  description?: string;
  classes?: string;
  isNew?: boolean;
  isFirstLevel?: boolean;
};

const HomeProductBox = ({
  product,
  description,
  classes,
  isNew,
  isFirstLevel,
}: HomeProductBoxProps) => {
  let header = isFirstLevel ? "h1" : "h2";

  return (
    <div className={classes}>
      <div>
        {isNew && <p className="overline">{product.new && "New product"}</p>}
        {createElement(header, null, product.name)}
        {description && <p>{description || product.description}</p>}
      </div>
      <Link to={`/${product.category}/${product.slug}`}>See product</Link>
    </div>
  );
};

export default HomeProductBox;
