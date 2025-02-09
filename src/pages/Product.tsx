import { useParams } from "react-router-dom";
import useStore from "../store/store";
import ProductDetail from "../layout/product/ProductDetail";
import ProductGallery from "../layout/product/ProductGallery";
import OtherProducts from "../layout/product/OtherProducts";
import Categories from "../layout/category/Categories";
import Product from "../models/product";
import GoBackButton from "../components/GoBackButton";
import * as styles from "./Product.module.scss";

const ProductPage = () => {
  interface productParams extends Record<string, string | undefined> {
    productSlug: Product["slug"];
  }

  const { productSlug, categoryName } = useParams<productParams>();

  const { products } = useStore(false)[0];

  //Validating product routes
  const productSlugs = new Set(products.map((product) => product.slug));
  const categories = new Set(products.map((product) => product.category));

  if (!productSlugs.has(productSlug) || !categories.has(categoryName)) {
    throw new Response("Not Found", { status: 404 });
  }

  const product: Product =
    products?.find((product) => product.slug === productSlug) || {};

  return (
    <>
      <div className={styles.product__headerBackground}>&nbsp;</div>
      <main className={styles.product__main}>
        <GoBackButton classes={styles.product__gobackbutton} />
        {product && <ProductDetail product={product} />}
        {product?.gallery && <ProductGallery gallery={product.gallery} />}
        {product?.others && <OtherProducts otherProducts={product?.others} />}
        <Categories />
      </main>
    </>
  );
};

export default ProductPage;
