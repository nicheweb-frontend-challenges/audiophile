import { useState, useEffect } from "react";
import { Action, Actions, Listener } from "../models/store-types";

let globalState: {} = {};
let listeners: Listener[] = [];
let actions: Actions = {};

const useStore = (shouldListen: boolean) => {
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
