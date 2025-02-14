import Image from "../models/image";
import Card from "./UI/Card";
import * as styles from "./ResponsiveImg.module.scss";

type ImageProps = {
  image: Image | undefined;
  classes?: string;
  alt?: string;
};
const ResponsiveImg = ({ image, classes, alt }: ImageProps) => {
  const mobileSrc = image?.mobile;
  const tabletSrc = image?.tablet;
  const desktopSrc = image?.desktop;

  return (
    <picture className={`${styles.responsiveImg} ${classes ? classes : ""}`}>
      <source media="(min-width: 961px)" srcSet={desktopSrc} />
      <source
        media="(min-width: 661px) and (max-width: 960px)"
        srcSet={tabletSrc}
      />
      <source media="(max-width: 660px)" srcSet={mobileSrc} />
      <img src={desktopSrc} alt={alt} />
    </picture>
  );
};

export default ResponsiveImg;
