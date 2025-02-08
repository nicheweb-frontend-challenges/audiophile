import { initStore } from "./store";
import { Actions } from "../models/store-types";
import CartItem from "../models/cart-item";
import { GlobalState } from "../models/store-types";

type ItemToUpdate = {
  newQuantity: number;
  itemToUpdate: CartItem;
};

const configureStore = () => {
  console.log("CONFIGURE CART");

  const actions: Actions = {
    CART_ADD_ITEM: (state: GlobalState, newItem: CartItem) => {
      const newCart = state.cart ? [...state.cart] : [];
      const cartItemIndex = newCart.findIndex(
        (item: CartItem) => item.id === newItem.id
      );
      if (cartItemIndex === -1) {
        newCart.push(newItem);
      } else {
        const prevQuantity = newCart[cartItemIndex].quantity;
        newCart[cartItemIndex].quantity = prevQuantity + newItem.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    },
    CART_DECREMENT_ITEM: (state: GlobalState, itemToDec: CartItem) => {
      let newCart = state.cart ? [...state.cart] : [];
      const cartItemIndex = newCart.findIndex(
        (item: CartItem) => item.id === itemToDec.id
      );
      if (newCart[cartItemIndex].quantity === 1) {
        newCart = newCart.filter((item: CartItem) => item.id !== itemToDec.id);
      } else {
        const prevQuantity = newCart[cartItemIndex].quantity;
        newCart[cartItemIndex].quantity = prevQuantity - 1;
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    },
    CART_INCREMENT_ITEM: (state: GlobalState, itemToInc: CartItem) => {
      let newCart = state.cart ? [...state.cart] : [];
      const cartItemIndex = newCart.findIndex(
        (item: CartItem) => item.id === itemToInc.id
      );
      const prevQuantity = newCart[cartItemIndex].quantity;
      newCart[cartItemIndex].quantity = prevQuantity + 1;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    },
    CART_UPDATE_QUANTITY_ITEM: (
      state: GlobalState,
      { newQuantity, itemToUpdate }: ItemToUpdate
    ) => {
      let newCart = state.cart ? [...state.cart] : [];
      const cartItemIndex = newCart.findIndex(
        (item: CartItem) => item.id === itemToUpdate.id
      );
      newCart[cartItemIndex].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    },

    CART_REMOVE_ALL_ITEMS: (state) => {
      localStorage.setItem("cart", JSON.stringify(null));
      return { ...state, cart: [] };
    },
  };

  const initialCartValue = (function () {
    const savedCart = localStorage.getItem("cart");
    const cartState = savedCart
      ? { cart: JSON.parse(savedCart) }
      : { cart: [] };
    return cartState;
  })();

  initStore(actions, initialCartValue);
};

export default configureStore;
