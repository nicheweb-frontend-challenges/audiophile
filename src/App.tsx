import React from "react";
import "./assets/styles/main.scss";
import routes from "./routes/router";
import { RouterProvider } from "react-router";
import configureProductsStore from "./store/products-store";
import configureCartStore from "./store/cart-store";
import configureModalStore from "./store/modal-store";

const App: React.FC = () => {
  configureProductsStore();
  configureCartStore();
  configureModalStore();
  return <RouterProvider router={routes} />;
};

export default App;
