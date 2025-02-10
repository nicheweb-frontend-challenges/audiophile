import Product from "../../models/product";
import * as styles from "./ProductInfo.module.scss";

type ProductInfoProps = {
  product: Product;
  classes?: string;
};

const ProductInfo = ({ product, classes }: ProductInfoProps) => {
  return (
    <div className={`${styles.productInfo} ${classes ? classes : ""}`}>
      {product.new && <p className="overline">new product</p>}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductInfo;
