import CategoryProductBox from "./CategoryProductBox";
import ResponsiveImg from "../ResponsiveImg";
import Product from "models/product";
import * as styles from "./CategoryProductRow.module.scss";

type ProductRowProps = {
  product: Product;
  invert?: boolean;
  classes?: string;
};

const CategoryProductRow = ({ product, invert, classes }: ProductRowProps) => {
  return (
    <div className={`${styles.productRow} ${classes ? classes : ""}`}>
      <ResponsiveImg
        image={product.categoryImage}
        alt={product.name}
        classes={`${
          invert ? styles.productRow__box2 : styles.productRow__box1
        }`}
      />
      <CategoryProductBox
        product={product}
        classes={`${
          invert ? styles.productRow__box1 : styles.productRow__box2
        }`}
      />
    </div>
  );
};

export default CategoryProductRow;
