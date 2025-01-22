import Product from "models/product";

const compareFn = (a: Product, b: Product) => {
  //convert booleans to number (true -> 1 | false -> 0)
  const bNew: number = b.new ? 1 : 0;
  const aNew: number = a.new ? 1 : 0;

  const aPrice: Product["price"] = a.price ?? 0;
  const bPrice: Product["price"] = b.price ?? 0;

  //order the newest products first
  if (aNew !== bNew) {
    return bNew - aNew;
    //order by price decreasing
  } else {
    return bPrice - aPrice;
  }
};

export const sortProducts = (productsList: Product[]) => {
  //Order the products in the list -> the new first and then by price.
  productsList.sort(compareFn);
};
