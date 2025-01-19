// Type for included items
class IncludedItem {
  quantity: number;
  item: string;
  constructor(quantity: number, item: string) {
    this.quantity = quantity;
    this.item = item;
  }
}

export default IncludedItem;
