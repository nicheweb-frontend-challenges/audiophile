import { initStore } from "./store";
import { PRODUCTS } from "../utils/data";

const configureStore = () => {
  //In case of having a backend we use a fetching code instead.

  const actions = {};

  initStore(actions, { products: [...PRODUCTS] });
};

export default configureStore;
