import Product from "../models/product";

type CategoryHeadingProps = {
  category: Product["category"];
};

const CategoryHeading = ({ category }: CategoryHeadingProps) => {
  return (
    <>
      <div></div>
      <div>{category}</div>
    </>
  );
};

export default CategoryHeading;
