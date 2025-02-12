import ResponsiveImg from "../../components/ResponsiveImg";
import PurchaseInfo from "../../components/product/PurchaseInfo";
import ProductPurchase from "../../components/product/ProductPurchase";
import Product from "../../models/product";
import Features from "../../components/product/Features";
import IncludedItems from "../../components/IncludedItems";
import * as styles from "./ProductDetail.module.scss";

type ProductDetailProps = {
  product: Product;
  classes?: string;
};

const ProductDetail = ({ product, classes }: ProductDetailProps) => {
  return (
    <section className={styles.prodDetail}>
      <ResponsiveImg image={product?.image} classes={styles.prodDetail_image} />
      <div className={styles.prodDetail_desc}>
        {product && <PurchaseInfo product={product} />}
        {product && <ProductPurchase product={product} />}
      </div>
      <Features
        features={product.features}
        classes={styles.prodDetail__features}
      />
      {product.includes && (
        <IncludedItems
          includedItems={product.includes}
          classes={styles.prodDetail__list}
        />
      )}
    </section>
  );
};

export default ProductDetail;
