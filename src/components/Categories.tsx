import Product from "models/product";
import Category from "./Category";

const categories: Product["category"][] = [
  "headphones",
  "speakers",
  "earphones",
];

const Categories = () => {
  return (
    <ul>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </ul>
  );
};

export default Categories;
