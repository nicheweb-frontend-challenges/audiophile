import OtherProduct from "../models/other";
import OtherProductCard from "../components/OtherProductCard";

type OtherProductsProps = {
  otherProducts: OtherProduct[];
};

const OtherProducts = ({ otherProducts }: OtherProductsProps) => {
  return (
    <div>
      <h3>you may also like</h3>
      <ul>
        {otherProducts.map((otherProduct) => (
          <OtherProductCard otherProduct={otherProduct} />
        ))}
      </ul>
    </div>
  );
};

export default OtherProducts;
