import { initStore } from "./store";
import { Actions } from "../models/store-types";
import { GlobalState } from "../models/store-types";

const configureStore = () => {
  const actions: Actions = {
    OPEN_MENU: (state: GlobalState) => {
      return { ...state, openMenu: true };
    },
    CLOSE_MENU: (state: GlobalState) => {
      return { ...state, openMenu: false };
    },
    TOGGLE_MENU: (state: GlobalState) => {
      let prevOpenMenu = state.openMenu;
      return { ...state, openMenu: !prevOpenMenu };
    },
  };

  initStore(actions, { openMenu: false });
};

export default configureStore;
