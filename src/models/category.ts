import Image from "./image";

class Category {
  name: "earphones" | "headphones" | "speakers" | string;
  image: Image | undefined;
  constructor(name: Category["name"], image: Category["image"]) {
    this.name = name;
    this.image = image;
  }
}

export default Category;
