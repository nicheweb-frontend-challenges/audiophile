import HomeHeroSection from "../layout/HomeHeroSection";
import ProductRow from "../components/product/ProductRow";
import Image from "../models/image";
import Categories from "../layout/category/Categories";
import useStore from "../store/store";

const HomePage = () => {
  const { products } = useStore(false)[0];
  const firstProduct = products?.find(
    (product) => product.name === "ZX9 Speaker"
  );
  const secondProduct = products?.find(
    (product) => product.name === "ZX7 Speaker"
  );
  const thirdProduct = products?.find(
    (product) => product.name === "YX1 Wireless Earphones"
  );

  const firstDescription =
    "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.";
  const firstImage = new Image(
    "/assets/images/home/mobile/image-speaker-zx9.png",
    "/assets/images/home/tablet/image-speaker-zx9.png",
    "/assets/images/home/desktop/image-speaker-zx9.png"
  );
  const secondImage = new Image(
    "/assets/images/home/mobile/image-speaker-zx7.jpg",
    "/assets/images/home/tablet/image-speaker-zx7.jpg",
    "/assets/images/home/desktop/image-speaker-zx7.jpg"
  );
  const thirdImage = new Image(
    "/assets/images/home/mobile/image-earphones-yx1.jpg",
    "/assets/images/home/tablet/image-earphones-yx1.jpg",
    "/assets/images/home/desktop/image-earphones-yx1.jpg"
  );

  return (
    <>
      <HomeHeroSection />
      <Categories />
      {firstProduct && (
        <ProductRow
          product={firstProduct}
          level="primary"
          theme="light"
          customImage={firstImage}
          productDesc
          customDescription={firstDescription}
        />
      )}
      {secondProduct && (
        <ProductRow
          product={secondProduct}
          level="secondary"
          theme="dark"
          customImage={secondImage}
        />
      )}
      {thirdProduct && (
        <ProductRow
          product={thirdProduct}
          level="secondary"
          theme="dark"
          customImage={thirdImage}
          customName="YX1 Earphones"
        />
      )}
    </>
  );
};

export default HomePage;
