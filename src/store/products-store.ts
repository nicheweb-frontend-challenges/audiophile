import { initStore } from "./store";
import { PRODUCTS } from "../utils/data";
import { CATEGORIES } from "../utils/data";

const configureStore = () => {
  //In case of having a backend we use a fetching code instead.

  const actions = {};

  initStore(actions, { products: [...PRODUCTS], categories: [...CATEGORIES] });
};

export default configureStore;
