import OtherProduct from "../../models/other";
import OtherProductCard from "../../components/product/OtherProductCard";
import * as styles from "./OtherProducts.module.scss";

type OtherProductsProps = {
  otherProducts: OtherProduct[];
  classes?: string;
};

const OtherProducts = ({ otherProducts, classes }: OtherProductsProps) => {
  return (
    <section>
      <h3 className={styles.otherProducts__heading}>you may also like</h3>
      <ul className={styles.otherProducts__list}>
        {otherProducts.map((otherProduct, index) => (
          <OtherProductCard otherProduct={otherProduct} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default OtherProducts;
