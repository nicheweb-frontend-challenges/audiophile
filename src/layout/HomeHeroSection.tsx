import ProductBox from "../components/ProductBox";
import ResponsiveImg from "../components/ResponsiveImg";
import Image from "../models/image";
import Product from "../models/product";
import useStore from "../store/store";

const HomeHeroSection = () => {
  const { products } = useStore(false)[0];

  const image = new Image(
    "/assets/images/home/mobile/image-header.jpg",
    "/assets/images/home/tablet/image-header.jpg",
    "/assets/images/home/desktop/image-header.jpg"
  );
  const product: Product | {} =
    products?.find((product) => product.name === "XX99 Mark II Headphones") ||
    {};
  return (
    <>
      <ProductBox
        boxProduct={product}
        level="primary"
        boxDescription="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        boxTheme="light"
        hasBoxDescription
      />
      <ResponsiveImg image={image} classes="" alt="home hero image" />
    </>
  );
};

export default HomeHeroSection;
