import ResponsiveImg from "../components/ResponsiveImg";
import Image from "../models/image";
import * as styles from "./BestGearSection.module.scss";
import { useLocation } from "react-router-dom";

type BestGearProps = {
  classes?: string;
};

const BestGearSection = ({ classes }: BestGearProps) => {
  const location = useLocation();
  const image = new Image(
    "/assets/images/shared/mobile/image-best-gear.jpg",
    "/assets/images/shared/tablet/image-best-gear.jpg",
    "/assets/images/shared/desktop/image-best-gear.jpg"
  );

  return (
    <section
      className={`${styles.bestGear} ${classes ? classes : ""} ${
        location.pathname !== "/" ? styles.bestGear__outHome : {}
      }`}
      aria-labelledby="audiophile's shop advertising"
    >
      <div className={styles.bestGear__textBox}>
        <h2 className={styles.bestGear__textBox_heading}>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p className={styles.bestGear__textBox_text}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <ResponsiveImg
        image={image}
        alt="Best Gear Image"
        classes={styles.bestGear__img}
      />
    </section>
  );
};

export default BestGearSection;
