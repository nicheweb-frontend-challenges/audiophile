import Product from "./product";
class CartItem {
  id: Product["id"];
  quantity: number;
  name: Product["cartName"];
  imageUrl: string;

  constructor(quantity: number, product: Product) {
    this.id = product.id;
    this.quantity = quantity;
    this.name = product.cartName;
    this.imageUrl = `/assets/images/cart/${product.slug}`;
  }
}

export default CartItem;
