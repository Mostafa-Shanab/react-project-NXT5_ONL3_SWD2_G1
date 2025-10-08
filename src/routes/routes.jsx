import { createBrowserRouter } from "react-router";
// Layouts
import MainLayout from "../Layout/MainLayout/MainLayout";
// Pages
import Home from "./../pages/Home/Home";
import Cart from "./../pages/Cart/Cart";
import Category from "./../pages/Category/Category";
import ProductDetails from "./../pages/ProductDetails/ProductDetails";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
import NotFound from "./../pages/NotFound/NotFound";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        Component: MainLayout,
        children: [
          {
            index: true,
            // element: <Home />,
            Component: Home,
          },
          {
            path: "cart",
            Component: Cart,
          },
          {
            path: "category",
            Component: Category,
          },
          {
            path: "product-details/:id",
            Component: ProductDetails,
          },
          {
            path: "*",
            Component: NotFound,
          },
        ],
      },
      {
        Component: MainLayout,
        children: [
          {
            path: "login",
            Component: Login,
          },
          {
            path: "register",
            Component: Register,
          },
        ],
      },
    ],
  },
]);

export default router;
