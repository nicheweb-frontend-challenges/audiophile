import Product from "./product";
class CartItem {
  id: Product["id"];
  quantity: number;
  name: Product["cartName"];
  imageUrl: string;

  constructor(quantity: number, item: Product) {
    this.id = item.id;
    this.quantity = quantity;
    this.name = item.cartName;
    this.imageUrl = `/assets/images/cart/${item.slug}`;
  }
}

export default CartItem;
