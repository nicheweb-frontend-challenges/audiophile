import Gallery from "../../models/gallery";
import ResponsiveImg from "../../components/ResponsiveImg";
import * as styles from "./ProductGallery.module.scss";

type ProductGalleryProps = {
  gallery: Gallery;
  classes?: string;
};

const ProductGallery = ({ gallery, classes }: ProductGalleryProps) => {
  return (
    <section className={`${styles.productGallery} ${classes ? classes : ""}`}>
      <ResponsiveImg
        image={gallery.first}
        classes={styles.productGallery__img1}
      />
      <ResponsiveImg
        image={gallery.second}
        classes={styles.productGallery__img2}
      />
      <ResponsiveImg
        image={gallery.third}
        classes={styles.productGallery__img3}
      />
    </section>
  );
};

export default ProductGallery;
