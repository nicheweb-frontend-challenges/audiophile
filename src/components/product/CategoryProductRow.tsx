import CategoryProductBox from "./CategoryProductBox";
import ResponsiveImg from "../ResponsiveImg";
import Product from "models/product";

type ProductRowProps = {
  product: Product;
  invert?: boolean;
  classes?: string;
};

const CategoryProductRow = ({ product, invert, classes }: ProductRowProps) => {
  return (
    <div className={classes}>
      <ResponsiveImg
        image={product.image}
        alt={product.name}
        classes={invert ? "box2" : "box1"}
      />
      <CategoryProductBox
        product={product}
        classes={invert ? "box1" : "box2"}
      />
    </div>
  );
};

export default CategoryProductRow;
