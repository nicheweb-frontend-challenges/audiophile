import Image from "./image";

// Gallery type for reusable gallery objects
class Gallery {
  first: Image;
  second: Image;
  third: Image;
  constructor(first: Image, second: Image, third: Image) {
    this.first = first;
    this.second = second;
    this.third = third;
  }
}
export default Gallery;
