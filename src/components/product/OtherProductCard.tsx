import OtherProduct from "../../models/other";
import ResponsiveImg from "../ResponsiveImg";
import { Link } from "react-router-dom";
import useStore from "../../store/store";
import * as styles from "./OtherProductCard.module.scss";

type OtherProductCardProps = { otherProduct: OtherProduct; classes?: string };

const OtherProductCard = ({ otherProduct, classes }: OtherProductCardProps) => {
  const { products } = useStore(false)[0];
  const product = products?.find(
    (product) => product.slug === otherProduct.slug
  );
  const category = product?.category;

  console.log("other product:", otherProduct.name);
  console.log("product:", product?.name);

  return (
    <li className={`${styles.otherProduct} ${classes ? classes : ""}`}>
      <ResponsiveImg image={otherProduct.image} />
      <h5 className={styles.otherProduct__name}>{otherProduct.name}</h5>
      <Link to={`/${category}/${otherProduct.slug}`}>see product</Link>
    </li>
  );
};

export default OtherProductCard;
