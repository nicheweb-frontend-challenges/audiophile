import HomeProductBox from "./HomeProductBox";
import ResponsiveImg from "../../components/ResponsiveImg";
import Image from "../../models/image";
import useStore from "../../store/store";
import * as styles from "./HomeHeroSection.module.scss";

const HomeHeroSection = () => {
  const { products } = useStore(false)[0];

  const image = new Image(
    "/assets/images/home/mobile/image-header.jpg",
    "/assets/images/home/tablet/image-header.jpg",
    "/assets/images/home/desktop/image-header.jpg"
  );
  const product = products?.find(
    (product) => product.name === "XX99 Mark II Headphones"
  );
  return (
    <>
      <ResponsiveImg
        image={image}
        classes={styles.homeHeroProduct__picture}
        alt="home hero image"
        id="hero-image"
        aria-label="Hero Image"
      />

      {product && (
        <HomeProductBox
          product={product}
          description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          classes={styles.homeHeroProduct__box}
          isNew
          isFirstLevel
          id="hero-description"
          aria-label="Hero Description"
        />
      )}
    </>
  );
};

export default HomeHeroSection;
