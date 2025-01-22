import HomeHeroSection from "../layout/HomeHeroSection";
import ProductRow from "../components/ProductRow";
import Product from "../models/product";
import Image from "../models/image";
import Categories from "../components/Categories";

const HomePage = () => {
  const product1: Product = {
    new: false,
    name: "ZX9 Speaker",
    description:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    image: new Image(
      "/assets/images/home/mobile/image-speaker-zx9.png",
      "/assets/images/home/tablet/image-speaker-zx9.png",
      "/assets/images/home/desktop/image-speaker-zx9.png"
    ),
  };
  const product2: Product = {
    new: false,
    name: "ZX7 Speaker",
    image: new Image(
      "/assets/images/home/mobile/image-speaker-zx7.jpg",
      "/assets/images/home/tablet/image-speaker-zx7.jpg",
      "/assets/images/home/desktop/image-speaker-zx7.jpg"
    ),
  };
  const product3: Product = {
    new: false,
    name: "YX1 Earphones",
    image: new Image(
      "/assets/images/home/mobile/image-earphones-yx1.jpg",
      "/assets/images/home/tablet/image-earphones-yx1.jpg",
      "/assets/images/home/desktop/image-earphones-yx1.jpg"
    ),
  };

  return (
    <>
      <HomeHeroSection />
      <Categories />
      <ProductRow product={product1} level="primary" theme="light" />
      <ProductRow product={product2} level="secondary" theme="dark" />
      <ProductRow product={product3} level="secondary" theme="dark" />
    </>
  );
};

export default HomePage;
