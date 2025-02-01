import Product from "models/product";
import Category from "../../components/CategoryCard";
import * as styles from "./Categories.module.scss";

const categories: Product["category"][] = [
  "headphones",
  "speakers",
  "earphones",
];
type CategoriesProps = {
  classes?: string;
};

const Categories = ({ classes }: CategoriesProps) => {
  return (
    <ul className={`${styles.categories} ${classes ? classes : ""}`}>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </ul>
  );
};

export default Categories;
