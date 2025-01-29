import ResponsiveImg from "../../components/ResponsiveImg";
import ProductInfo from "../../components/product/ProductInfo";
import ProductPurchase from "../../components/product/ProductPurchase";
import Product from "../../models/product";
import Features from "../../components/product/Features";
import IncludedItems from "../../components/IncludedItems";

type ProductDetailProps = {
  product: Product;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div>
      <ResponsiveImg image={product?.categoryImage} />
      {product && (
        <ProductInfo
          product={product}
          headingLevel="secondary"
          theme="dark"
          hasDescription
          showPrice
        />
      )}
      {product && <ProductPurchase product={product} />}
      <Features features={product.features} />
      {product.includes && <IncludedItems includedItems={product.includes} />}
    </div>
  );
};

export default ProductDetail;
