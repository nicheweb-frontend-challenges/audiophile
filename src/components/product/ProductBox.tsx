import Button from "../Button";
import Product from "../../models/product";
import ProductInfo from "./ProductInfo";

export type ProductBoxProps = {
  boxProduct: Product;
  level: "primary" | "secondary" | "tertiary";
  boxTheme: "dark" | "light";
  hasBoxDescription?: boolean;
  boxDescription?: string;
  boxName?: string;
};

const ProductBox = ({
  boxProduct,
  level,
  boxTheme,
  hasBoxDescription,
  boxDescription,
  boxName,
}: ProductBoxProps) => {
  return (
    <div>
      <ProductInfo
        product={boxProduct}
        headingLevel={level}
        theme={boxTheme}
        hasDescription={hasBoxDescription}
        description={boxDescription}
        newName={boxName}
      />
      <Button linkTo={`/${boxProduct.category}/${boxProduct.slug}`}>
        See product
      </Button>
    </div>
  );
};

export default ProductBox;
