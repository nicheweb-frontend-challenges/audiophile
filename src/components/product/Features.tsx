import Product from "../../models/product";
import * as styles from "./Features.module.scss";

type FeaturesProps = {
  features: Product["features"];
  classes?: string;
};

const Features = ({ features, classes }: FeaturesProps) => {
  return (
    <div className={`${styles.features} ${classes}`}>
      <h3>Features</h3>
      <p>{features}</p>
    </div>
  );
};

export default Features;
