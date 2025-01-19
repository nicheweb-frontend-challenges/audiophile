import Image from "./image";
import IncludedItem from "./included-item";
import Gallery from "./gallery";
import OtherProduct from "./other";
import Category from "./category";

// Main Product model
class Product {
  id?: 1 | 2 | 3 | 4 | 5 | 6;
  slug?:
    | "yx1-earphones"
    | "xx59-headphones"
    | "xx99-mark-one-headphones"
    | "xx99-mark-two-headphones"
    | "zx7-speaker"
    | "zx9-speaker";
  name?:
    | "YX1 Wireless Earphones"
    | "XX59 Headphones"
    | "XX99 Mark I Headphones"
    | "XX99 Mark II Headphones"
    | "ZX7 Speaker"
    | "ZX9 Speaker"
    | string;
  image?: Image;
  category?: Category["name"];
  categoryImage?: Image;
  new?: boolean;
  price?: number;
  description?: string;
  features?: string;
  includes?: IncludedItem[];
  gallery?: Gallery;
  others?: OtherProduct[];

  constructor(
    id: Product["id"],
    slug: Product["slug"],
    name: Product["name"],
    image: Image,
    category: Category["name"],
    categoryImage: Image,
    isNew: boolean,
    price: number,
    description: string,
    features: string,
    includes: IncludedItem[],
    gallery: Gallery,
    others: OtherProduct[]
  ) {
    this.id = id;
    this.slug = slug;
    this.name = name;
    this.image = image;
    this.category = category;
    this.categoryImage = categoryImage;
    this.new = isNew;
    this.price = price;
    this.description = description;
    this.features = features;
    this.includes = includes;
    this.gallery = gallery;
    this.others = others;
  }
}

export default Product;
