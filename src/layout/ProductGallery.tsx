import Gallery from "../models/gallery";
import ResponsiveImg from "../components/ResponsiveImg";

type ProductGalleryProps = {
  gallery: Gallery;
};

const ProductGallery = ({ gallery }: ProductGalleryProps) => {
  const imagesKeys = Object.keys(gallery) as ("first" | "second" | "third")[];

  return (
    <div>
      {imagesKeys.map((imageKey, index) => (
        <ResponsiveImg image={gallery[imageKey]} key={index} />
      ))}
    </div>
  );
};

export default ProductGallery;
