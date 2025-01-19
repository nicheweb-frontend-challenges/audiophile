import ResponsiveImg from "../components/ResponsiveImg";
import Image from "../models/image";

const BestGearSection = () => {
  const image = new Image(
    "/assets/images/shared/mobile/image-best-gear.jpg",
    "/assets/images/shared/tablet/image-best-gear.jpg",
    "/assets/images/shared/desktop/image-best-gear.jpg"
  );

  return (
    <section>
      <div>
        <h2> Bringing you the best audio gear</h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <ResponsiveImg image={image} classes="" alt="Best Gear Image" />
    </section>
  );
};

export default BestGearSection;
