import ProductBox, { ProductBoxProps } from "./ProductBox";
import ResponsiveImg from "../ResponsiveImg";
import Product from "models/product";

type ProductRowProps = {
  product: Product;
  level: ProductBoxProps["level"];
  theme: ProductBoxProps["boxTheme"];
  customImage?: Product["image"];
  customName?: Product["name"];
  customDescription?: string;
  imgClasses?: string;
  invert?: boolean;
  productDesc?: boolean;
  classes?: string;
};

const ProductRow = ({
  product,
  level,
  theme,
  imgClasses,
  productDesc,
  customDescription,
  customImage,
  customName,
  classes,
}: ProductRowProps) => {
  return (
    <div className={classes}>
      <ProductBox
        boxProduct={product}
        level={level}
        boxTheme={theme}
        hasBoxDescription={productDesc}
        boxDescription={customDescription}
        boxName={customName}
      />
      <ResponsiveImg
        image={customImage || product.image}
        classes={imgClasses}
        alt={product.name}
      />
    </div>
  );
};

export default ProductRow;
