import HomeHeroSection from "./HomeHeroSection";
import HomeProductBox from "./HomeProductBox";
import ResponsiveImg from "../../components/ResponsiveImg";
import Image from "../../models/image";
import Categories from "../../layout/category/Categories";
import useStore from "../../store/store";
import * as styles from "./Home.module.scss";
import Card from "../../components/UI/Card";

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
      <main className={styles.home__main}>
        <section className={styles.home__categories}>
          <Categories />
        </section>
        <section className={styles.home__products}>
          {firstProduct && (
            <Card className={styles.home__firstProduct}>
              <ResponsiveImg
                image={firstImage}
                classes={styles.home__firstProduct_img}
                alt="Image Speaker ZX9"
              />
              <HomeProductBox
                product={firstProduct}
                description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
                classes={styles.home__firstProduct_box}
                isFirstLevel
                aria-label="First Product"
              />
            </Card>
          )}
          {secondProduct && (
            <Card className={styles.home__secondProduct}>
              <HomeProductBox
                product={secondProduct}
                classes={styles.home__secondProduct_box}
                aria-label="Second Product"
              />
              <ResponsiveImg
                image={secondImage}
                classes={styles.home__secondProduct_img}
                alt="Image Speaker ZX7"
              />
            </Card>
          )}
          {thirdProduct && (
            <div className={styles.home__thirdProduct}>
              <HomeProductBox
                product={thirdProduct}
                classes={styles.home__thirdProduct_box}
                name="yx1 earphones"
                aria-label="Third Product"
              />
              <ResponsiveImg
                image={thirdImage}
                classes={styles.home__thirdProduct_img}
                alt="Image YX1 Earphones"
              />
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default HomePage;
