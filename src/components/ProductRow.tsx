import ProductBox, { ProductBoxProps } from "./ProductBox";
import ResponsiveImg from "./ResponsiveImg";
import Product from "models/product";

type ProductRowProps = {
  product: Product;
  level: ProductBoxProps["headingLevel"];
  theme: ProductBoxProps["theme"];
  imgClasses?: string;
  invert?: boolean;
};

const ProductRow = ({ product, level, theme, imgClasses }: ProductRowProps) => {
  return (
    <div>
      <ProductBox
        isNew={product.new}
        headingLevel={level}
        title={product.name}
        description={product.description}
        theme={theme}
      />
      <ResponsiveImg
        image={product.image}
        classes={imgClasses}
        alt={product.name}
      />
    </div>
  );
};

export default ProductRow;
