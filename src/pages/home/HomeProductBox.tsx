import { Link } from "react-router-dom";
import Product from "../../models/product";

export type HomeProductBoxProps = {
  product: Product;
  description?: string;
  classes?: string;
};

const HomeProductBox = ({
  product,
  description,
  classes,
}: HomeProductBoxProps) => {
  return (
    <div className={classes}>
      <div>
        <p className="overline">{product.new && "New product"}</p>
        <h1>{product.name}</h1>
        {description && <p>{description || product.description}</p>}
      </div>
      <Link to={`/${product.category}/${product.slug}`}>See product</Link>
    </div>
  );
};

export default HomeProductBox;
