import Gallery from "../models/gallery";
import ResponsiveImg from "../components/ResponsiveImg";

type ProductGalleryProps = {
  gallery: Gallery;
};

const ProductGallery = ({ gallery }: ProductGalleryProps) => {
  const imagesKeys = Object.keys(gallery) as ("first" | "second" | "third")[];

  return (
    <div>
      {imagesKeys.map((imageKey) => (
        <ResponsiveImg image={gallery[imageKey]} />
      ))}
    </div>
  );
};

export default ProductGallery;
