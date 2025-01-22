import { useParams } from "react-router-dom";
import Product from "../models/product";
import useStore from "../store/store";
import ProductRow from "../components/ProductRow";
import { sortProducts } from "../utils/productsOp";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products } = useStore(false)[0];

  const categoryProducts: Product[] | undefined = products?.filter(
    (product: Product) => product.category === categoryName
  );

  if (!categoryProducts) {
    throw Error(`This category: ${categoryName?.toUpperCase} doesn't exist`);
  }

  if (categoryProducts.length > 1) {
    sortProducts(categoryProducts);
  }

  return categoryProducts.map((product) => (
    <ProductRow product={product} level="secondary" theme="dark" />
  ));
};

export default CategoryPage;
