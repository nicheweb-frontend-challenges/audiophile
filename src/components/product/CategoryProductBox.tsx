import { Link } from "react-router-dom";
import Product from "../../models/product";
import ProductInfo from "./ProductInfo";
import * as styles from "./CategoryProductBox.module.scss";

export type ProductBoxProps = {
  product: Product;
  classes?: string;
};

const CategoryProductBox = ({ product, classes }: ProductBoxProps) => {
  return (
    <div className={`${styles.productBox} ${classes ? classes : ""}`}>
      <ProductInfo product={product} classes={styles.productBox__info} />
      <Link to={`/${product.category}/${product.slug}`}>See product</Link>
    </div>
  );
};

export default CategoryProductBox;
