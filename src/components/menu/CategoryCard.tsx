import Button from "../Button";
import Category from "../../models/category";
import ResponsiveImg from "../ResponsiveImg";
import { CATEGORIES } from "../../utils/data";
import Image from "../../models/image";

export type CategoryCardProps = { category: Category["name"] };

const CategoryCard = ({ category }: CategoryCardProps) => {
  const image: Image | undefined = CATEGORIES.find(
    (cat) => cat.name === category
  )?.image;
  console.log(image);

  return (
    <li>
      <ResponsiveImg image={image} alt={`${category} tumbnail image`} />
      <h6>{category}</h6>
      <Button linkTo={`category/${category}`}>shop &gt;</Button>
    </li>
  );
};

export default CategoryCard;
