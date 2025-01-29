import { Outlet } from "react-router-dom";
import Categories from "./Categories";

const CategoryLayout = () => {
  return (
    <>
      <Outlet />
      <Categories />
    </>
  );
};

export default CategoryLayout;
