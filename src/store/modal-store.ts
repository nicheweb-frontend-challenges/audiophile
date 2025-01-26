import { initStore } from "./store";
import { Actions } from "../models/store-types";

const configureStore = () => {
  const actions: Actions = {
    OPEN_MODAL: (state, showModal: "cart" | "order") => {
      console.log("IN ACTION OPEN MODAL", showModal);

      return { ...state, modal: showModal };
    },
    CLOSE_MODAL: (state) => {
      return { ...state, modal: null };
    },
  };

  initStore(actions, { modal: null });
};

export default configureStore;
