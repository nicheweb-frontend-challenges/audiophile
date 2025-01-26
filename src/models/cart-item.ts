import Product from "./product";
class CartItem {
  id: Product["id"];
  quantity: number;
  name: Product["cartName"];
  imageUrl: string;
  price: Product["price"];

  constructor(quantity: number, product: Product) {
    this.id = product.id;
    this.quantity = quantity;
    this.name = product.cartName;
    this.imageUrl = `/assets/images/cart/image-${product.slug}.jpg`;
    this.price = product.price;
  }
}

export default CartItem;
