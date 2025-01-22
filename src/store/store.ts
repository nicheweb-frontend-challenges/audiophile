import { useState, useEffect } from "react";
import { Actions, Listener, GlobalState } from "../models/store-types";

let globalState: GlobalState = {};
let listeners: Listener[] = [];
let actions: Actions = {};

const useStore = (
  shouldListen: boolean
): [GlobalState, (identifier: string, payload: any | undefined) => void] => {
  const setState = useState(globalState)[1];

  useEffect(() => {
    if (shouldListen) listeners.push(setState);

    return () => {
      if (shouldListen) listeners.filter((listener) => listener !== setState);
    };
  }, [setState, shouldListen]);

  const dispatch = (identifier: string, payload: any | undefined) => {
    const newState = actions[identifier]
      ? actions[identifier](globalState, payload)
      : {};
    globalState = { ...globalState, ...newState };

    listeners.forEach((listener: Listener) => {
      listener(globalState);
    });
  };
  return [globalState, dispatch];
};

export const initStore = (userActions: Actions, initialState?: {}) => {
  globalState = { ...globalState, ...initialState };
  actions = { ...actions, ...userActions };
};

export default useStore;
