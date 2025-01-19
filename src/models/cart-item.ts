class CartItem {
  id: number;
  quantity: number;

  constructor(id: number, quantity: number) {
    this.id = id;
    this.quantity = quantity;
  }
  increment() {
    this.quantity++;
  }
  decrement() {
    this.quantity--;
  }
}

export default CartItem;
