import OtherProduct from "../../models/other";
import ResponsiveImg from "../ResponsiveImg";
import { Link } from "react-router-dom";
import useStore from "../../store/store";
import * as styles from "./OtherProductCard.module.scss";

type OtherProductCardProps = { otherProduct: OtherProduct };

const OtherProductCard = ({ otherProduct }: OtherProductCardProps) => {
  const { products } = useStore(false)[0];
  const product = products?.find(
    (product) => product.name === otherProduct.name
  );
  const category = product?.category;

  return (
    <li className={styles.otherProduct}>
      <ResponsiveImg image={otherProduct.image} />
      <h5 className={styles.otherProduct__name}>{otherProduct.name}</h5>
      <Link to={`/${category}/${otherProduct.slug}`}>see product</Link>
    </li>
  );
};

export default OtherProductCard;
