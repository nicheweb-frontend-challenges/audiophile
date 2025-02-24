import { Link } from "react-router-dom";
import Product from "../../models/product";
import { createElement } from "react";

export type HomeProductBoxProps = {
  product: Product;
  description?: string;
  classes?: string;
  isNew?: boolean;
  name?: string;
  id?: string;
};

const HomeProductBox = ({
  product,
  description,
  classes,
  isNew,
  name,
  id,
  ...otherProps
}: HomeProductBoxProps) => {
  return (
    <div className={classes} {...otherProps} id={id}>
      <div>
        {isNew && <p>{product.new && "New product"}</p>}
        <h2>{name ?? product.name}</h2>
        {description && <p>{description || product.description}</p>}
      </div>
      <Link to={`/${product.category}/${product.slug}`}>See product</Link>
    </div>
  );
};

export default HomeProductBox;
