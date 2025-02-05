import Product from "../../models/product";
import * as styles from "./PurchaseInfo.module.scss";
import { USDollar, formatDollar } from "../../utils/formatter";

type PurchaseInfoProps = {
  product: Product;
  classes?: string;
};

const PurchaseInfo = ({ product, classes }: PurchaseInfoProps) => {
  const price = formatDollar(product?.price ?? 0);

  return (
    <div className={`${styles.productPurchase} ${classes ? classes : ""}`}>
      {product.new && <p className="overline">new product</p>}
      <h2 className={styles.productPurchase__heading}>{product.name}</h2>
      <p className={styles.productPurchase__desc}>{product.description}</p>
      <p className={styles.productPurchase__price}>{price}</p>
    </div>
  );
};

export default PurchaseInfo;
