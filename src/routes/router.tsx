import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/Root";
import HomePage from "../pages/home/Home";
import CategoryPage from "../pages/Category";
import ProductPage from "../pages/Product";
import CheckoutPage from "../pages/Checkout";
import NotFoundPage from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/:categoryName", element: <CategoryPage /> },
      { path: "/:categoryName/:productSlug", element: <ProductPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
]);

export default routes;
