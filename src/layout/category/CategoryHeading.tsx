import Product from "../../models/product";
import * as styles from "./CategoryHeading.module.scss";

type CategoryHeadingProps = {
  category: Product["category"];
  classes?: string;
};

const CategoryHeading = ({ category, classes }: CategoryHeadingProps) => {
  return (
    <div className={`${styles.categoryHeading} ${classes ? classes : ""}`}>
      <h2>{category}</h2>
    </div>
  );
};

export default CategoryHeading;
