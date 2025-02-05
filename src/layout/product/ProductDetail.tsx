import ResponsiveImg from "../../components/ResponsiveImg";
import PurchaseInfo from "../../components/product/PurchaseInfo";
import ProductPurchase from "../../components/product/ProductPurchase";
import Product from "../../models/product";
import Features from "../../components/product/Features";
import IncludedItems from "../../components/IncludedItems";
import * as styles from "./ProductDetail.module.scss";

type ProductDetailProps = {
  product: Product;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <section className={styles.prodDetail}>
      <div className={`${styles.prodDetail__prodMain} row`}>
        <ResponsiveImg image={product?.categoryImage} classes="box1" />
        <div className={`${styles.prodDetail__desc} box2`}>
          {product && <PurchaseInfo product={product} />}
          {product && <ProductPurchase product={product} />}
        </div>
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
