import CategoryCard from "./CategoryCard";

type MenuProps = {
  children: React.ReactNode;
};

const Menu = ({ children }: MenuProps) => {
  return <ul>{children}</ul>;
};

Menu.CategoryCard = CategoryCard;

export default Menu;
