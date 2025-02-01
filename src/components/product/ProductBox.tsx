import { Link } from "react-router-dom";
import Product from "../../models/product";
import ProductInfo from "./ProductInfo";
import * as styles from "./ProductBox.module.scss";

export type ProductBoxProps = {
  boxProduct: Product;
  level: "primary" | "secondary" | "tertiary";
  boxTheme: "dark" | "light";
  hasBoxDescription?: boolean;
  boxDescription?: string;
  boxName?: string;
  classes?: string;
};

const ProductBox = ({
  boxProduct,
  level,
  boxTheme = "dark",
  hasBoxDescription,
  boxDescription,
  boxName,
  classes,
}: ProductBoxProps) => {
  return (
    <div className={styles.productBox + " " + classes}>
      <ProductInfo
        product={boxProduct}
        headingLevel={level}
        theme={boxTheme}
        hasDescription={hasBoxDescription}
        description={boxDescription}
        newName={boxName}
      />
      <Link to={`/${boxProduct.category}/${boxProduct.slug}`}>See product</Link>
    </div>
  );
};

export default ProductBox;
