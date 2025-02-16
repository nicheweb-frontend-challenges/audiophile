import "./assets/styles/main.scss";
import routes from "./routes/router";
import { RouterProvider } from "react-router";
import configureProductsStore from "./store/products-store";
import configureCartStore from "./store/cart-store";
import configureModalStore from "./store/modal-store";
import configureMenuStore from "./store/menu-store";

const App = () => {
  configureProductsStore();
  configureCartStore();
  configureModalStore();
  configureMenuStore();
  return <RouterProvider router={routes} />;
};

export default App;
