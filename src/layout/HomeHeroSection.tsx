import CallToAction from "../components/ProductBox";
import ResponsiveImg from "../components/ResponsiveImg";
import Image from "../models/image";

const HomeHeroSection = () => {
  const image = new Image(
    "/assets/images/home/mobile/image-header.jpg",
    "/assets/images/home/tablet/image-header.jpg",
    "/assets/images/home/desktop/image-header.jpg"
  );

  return (
    <>
      <CallToAction
        isNew={true}
        headingLevel="primary"
        title="XX99 Mark II Headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        theme="light"
      />
      <ResponsiveImg image={image} classes="" alt="home hero image" />
    </>
  );
};

export default HomeHeroSection;
