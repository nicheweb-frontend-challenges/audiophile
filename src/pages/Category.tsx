import { useParams } from "react-router-dom";
import Product from "../models/product";
import useStore from "../store/store";
import ProductRow from "../components/product/ProductRow";
import { sortProducts } from "../utils/productsOp";
import CategoryHeading from "../layout/category/CategoryHeading";

const CategoryPage = () => {
  interface Params extends Record<string, string | undefined> {
    categoryName: Product["category"];
  }
  const { categoryName } = useParams<Params>();
  const { products } = useStore(false)[0];

  const categoryProducts: Product[] | undefined = products?.filter(
    (product: Product) => product.category === categoryName
  );

  if (!categoryProducts) {
    throw Error(`This category: ${categoryName?.toUpperCase()} doesn't exist`);
  }

  if (categoryProducts.length > 1) {
    sortProducts(categoryProducts);
  }

  return (
    <>
      <CategoryHeading category={categoryName} />
      {categoryProducts.map((product) => (
        <ProductRow
          product={product}
          level="secondary"
          theme="dark"
          productDesc
        />
      ))}
    </>
  );
};

export default CategoryPage;
