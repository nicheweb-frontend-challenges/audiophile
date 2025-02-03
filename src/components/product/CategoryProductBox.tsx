import { Link } from "react-router-dom";
import Product from "../../models/product";
import * as styles from "./CategoryProductBox.module.scss";
import ProductInfo from "./ProductInfo";

export type ProductBoxProps = {
  product: Product;
  classes?: string;
};

const CategoryProductBox = ({ product, classes }: ProductBoxProps) => {
  return (
    <div className={`${styles.productBox} ${classes ? classes : ""}`}>
      <ProductInfo product={product} />
      <Link to={`/${product.category}/${product.slug}`}>See product</Link>
    </div>
  );
};

export default CategoryProductBox;
