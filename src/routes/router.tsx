import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/Root";
import HomePage from "../pages/Home";
import CategoryPage from "../pages/Category";
import ProductPage from "../pages/Product";
import CheckoutPage from "../pages/Checkout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:categoryName", element: <CategoryPage /> },
      { path: "product/:productSlug", element: <ProductPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
]);

export default routes;
