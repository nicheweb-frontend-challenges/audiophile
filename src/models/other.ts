import Image from "./image";

// "Others" recommendations type

class OtherProduct {
  slug: string;
  name: string;
  image: Image;
  constructor(slug: string, name: string, image: Image) {
    this.slug = slug;
    this.name = name;
    this.image = image;
  }
}

export default OtherProduct;
