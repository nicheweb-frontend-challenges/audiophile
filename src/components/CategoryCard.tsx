import Button from "./Button";
import Product from "models/product";

type CategoryProps = {
  category: Product["category"];
};

const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <li>
      <img
        src={`/assets/images/shared/desktop/image-category-thumbnail-${category}.png`}
        alt={`${category} tumbnail image`}
      />
      <h6>{category}</h6>
      <Button linkTo={`/${category}`}>shop &gt;</Button>
    </li>
  );
};

export default CategoryCard;
