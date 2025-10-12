import { createBrowserRouter } from "react-router";
// Layouts
import MainLayout from "@/Layout/MainLayout/MainLayout";
// Pages
import Home from "@/pages/Home/Home";
import Admin from "@/pages/Admin/Admin";
import Cart from "@/pages/Cart/Cart";
import Category from "@/pages/Category/Category";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import NotFound from "@/pages/NotFound/NotFound";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import authMiddleware from "./middlewares/authMiddleware";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        Component: MainLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "admin",
            Component: Admin,
            middleware: [authMiddleware],
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
            loader: async (parms) => {
              // for (let i = 0; i < 100000; i++) {
              //   console.log("Loeader", i);
              // }
              console.log("🚀 ~ parms:", parms);
            },
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
