import OtherProduct from "../../models/other";
import ResponsiveImg from "../../components/ResponsiveImg";
import Button from "../../components/Button";

type OtherProductCardProps = { otherProduct: OtherProduct };

const OtherProductCard = ({ otherProduct }: OtherProductCardProps) => {
  return (
    <li>
      <ResponsiveImg image={otherProduct.image} />
      <h5>{otherProduct.name}</h5>
      <Button linkTo={`product/${otherProduct.slug}`}>see product</Button>
    </li>
  );
};

export default OtherProductCard;
