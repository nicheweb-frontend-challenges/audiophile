import Image from "../models/image";
import * as styles from "./ResponsiveImg.module.scss";

type ImageProps = {
  image: Image | undefined;
  classes?: string;
  alt?: string;
  id?: string;
};
const ResponsiveImg = ({
  image,
  classes,
  alt,
  id,
  ...otherProps
}: ImageProps) => {
  const mobileSrc = image?.mobile;
  const tabletSrc = image?.tablet;
  const desktopSrc = image?.desktop;

  return (
    <picture
      id={id}
      className={`${styles.responsiveImg} ${classes ? classes : ""}`}
      {...otherProps}
    >
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
