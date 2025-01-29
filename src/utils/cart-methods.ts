import CartItem from "../models/cart-item";

export const SHIPPING = 50;

export const total = (cart: CartItem[]): number => {
  const sum = cart.reduce((acc: number, cartItem: CartItem) => {
    return acc + (cartItem.price ?? 0) * cartItem.quantity;
  }, 0);

  return sum;
};

export const vat = (cart: CartItem[]): number => total(cart) * 0.2;

export const grandTotal = (cart: CartItem[]): number =>
  total(cart) + vat(cart) + SHIPPING;
