import { useParams } from "react-router-dom";
import * as styles from "./Category.module.scss";
import useStore from "../store/store";
import { sortProducts } from "../utils/productsOp";
import Product from "../models/product";
import CategoryProductRow from "../components/product/CategoryProductRow";
import CategoryHeading from "../layout/category/CategoryHeading";
import Categories from "../layout/category/Categories";

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
      <CategoryHeading
        category={categoryName}
        classes={styles.category__heading}
      />
      <main className={styles.category__main}>
        <section className={`${styles.category__products} zpattern`}>
          {categoryProducts.map((product, index) => {
            if (index % 2 !== 0) {
              return <CategoryProductRow product={product} classes="row" />;
            }
            return (
              <CategoryProductRow product={product} invert classes="row" />
            );
          })}
        </section>
        <section className={styles.category__categories}>
          <Categories />
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
