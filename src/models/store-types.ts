import Product from "./product";
import CartItem from "./cart-item";

export type Action = (...args: any[]) => any;

export type Actions = {
  [key: string]: Action | null;
};

export type Listener = React.Dispatch<React.SetStateAction<any>>;

export type GlobalState = {
  products?: Product[];
  cart?: CartItem[];
};
