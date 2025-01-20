import { initStore } from "./store";
import { Actions } from "../models/store-types";

const configureStore = () => {
  const actions: Actions = {
    CART_INCREMENT_ITEM: (state, item) => {},
    CART_DECREMENT_ITEM: (state, itemId) => {},
  };
  initStore(actions, { cart: [] });
};

export default configureStore;
