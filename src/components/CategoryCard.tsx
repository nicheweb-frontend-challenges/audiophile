import { Link } from "react-router-dom";
import Product from "models/product";
import * as styles from "./CategoryCard.module.scss";
import RightArrow from "../assets/icons/icon-arrow-right.svg";

type CategoryProps = {
  category: Product["category"];
  classes?: string;
};

const CategoryCard = ({ category, classes }: CategoryProps) => {
  return (
    <li className={styles.categoryCard}>
      <div className={styles.categoryCard__content}>
        <img
          src={`/assets/images/shared/desktop/image-category-thumbnail-${category}.png`}
          alt={`${category} tumbnail image`}
        />
        <h6>{category}</h6>
        <Link to={`/${category}`}>
          <span>shop</span>{" "}
          <span>
            <RightArrow />
          </span>
        </Link>
      </div>
      <div className={styles.categoryCard__background}>&nbsp;</div>
    </li>
  );
};

export default CategoryCard;
