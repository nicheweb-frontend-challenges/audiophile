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
        {otherProducts.map((otherProduct, index) => (
          <OtherProductCard otherProduct={otherProduct} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default OtherProducts;
