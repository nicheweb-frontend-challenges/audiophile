import { initStore } from "./store";
import { Actions } from "../models/store-types";
import CartItem from "../models/cart-item";

const configureStore = () => {
  const actions: Actions = {
    CART_INCREMENT_ITEM: (state, newItem) => {
      const newCart = [...state.cart];
      const cartItemIndex = newCart.findIndex(
        (item: CartItem) => item.id === newItem.id
      );
      if (cartItemIndex === -1) {
        newCart.push(newItem);
      } else {
        const prevQuantity = newCart[cartItemIndex].quantity;
        newCart[cartItemIndex].quantity = prevQuantity + newItem.quantity;
      }
      return { ...state, cart: newCart };
    },
    CART_DECREMENT_ITEM: (state, newItem) => {
      let newCart = [...state.cart];
      const cartItemIndex = newCart.findIndex(
        (item: CartItem) => item.id === newItem.id
      );
      if (newCart[cartItemIndex].quantity === 1) {
        newCart = newCart.filter((item: CartItem) => item.id !== newItem.id);
      } else {
        const prevQuantity = newCart[cartItemIndex].quantity;
        newCart[cartItemIndex].quantity = prevQuantity - 1;
      }
      return { ...state, cart: newCart };
    },
    REMOVE_ALL_ITEMS: (state) => {
      return { ...state, cart: [] };
    },
  };
  initStore(actions, { cart: [] });
};

export default configureStore;
