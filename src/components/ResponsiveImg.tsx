import Image from "../models/image";

type ImageProps = {
  image: Image | undefined;
  classes?: string;
  alt?: string;
};
const ResponsiveImg = ({ image, classes, alt }: ImageProps) => {
  const mobileSrc = image?.mobile;
  const tabletSrc = image?.tablet;
  const desktopSrc = image?.desktop;

  console.log("mobile:", mobileSrc);
  console.log("tablet:", tabletSrc);
  console.log("desktop:", desktopSrc);

  return (
    <picture className={classes}>
      <source media="(min-width: 1024px)" srcSet={desktopSrc} />
      <source
        media="(min-width: 650px) and (max-width: 1023px)"
        srcSet={tabletSrc}
      />
      <source media="(max-width: 649px)" srcSet={mobileSrc} />
      <img src={desktopSrc} alt={alt} />
    </picture>
  );
};

export default ResponsiveImg;
