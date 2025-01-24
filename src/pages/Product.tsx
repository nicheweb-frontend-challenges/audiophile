import { useParams } from "react-router-dom";
import useStore from "../store/store";
import ProductDetail from "../layout/ProductDetail";
import ProductGallery from "../layout/ProductGallery";
import OtherProducts from "../layout/OtherProducts";
import Product from "../models/product";
import GoBackButton from "../components/GoBackButton";

const ProductPage = () => {
  interface productParams extends Record<string, string | undefined> {
    producSlug: Product["slug"];
  }
  const { productSlug } = useParams<productParams>();
  const { products } = useStore(false)[0];
  const product: Product | undefined = products?.find(
    (product) => product.slug === productSlug
  );

  return (
    <div>
      <GoBackButton />
      {product && <ProductDetail product={product} />}
      {product?.gallery && <ProductGallery gallery={product.gallery} />}
      {product?.others && <OtherProducts otherProducts={product?.others} />}
    </div>
  );
};

export default ProductPage;
