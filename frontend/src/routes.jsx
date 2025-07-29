import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashBoardPage/DashboardPage";
import Login from "./pages/Login/login";
import ProductList from "./pages/ProductsPage/ProductsList";
import Categories from "./pages/Categories/Categories";
import Products from "./pages/ProductsPage/Products";
import CategoriesUpdate from "./pages/Categories/CategoresUpdate";
import ProductsUpdate from "./pages/ProductsPage/ProductsUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    children: [
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/update/:idCategories/:name/:description",
        element: <CategoriesUpdate />,
        loader: async ({ params }) => {
          return {
            idCategories: params.idCategories,
            name: params.name,
            description: params.description,
          };
        },
      },
      {
        path: "/products/:idCategories",
        element: <Products />,
        loader: async ({ params }) => {
          return { idCategories: params.idCategories };
        },
      },
      {
        path: "/products/:idProduct/:name/:description/:quantity/:price/:idCategories",
        element: <ProductsUpdate />,
        loader: async ({ params }) => {
          return {
            idProduct: params.idProduct,
            name: params.name,
            description: params.description,
            quantity: params.quantity,
            price: params.price,
            idCategories: params.idCategories
          };
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function RouterCustom() {
  return RouterProvider({
    router: router,
  });
}

export default RouterCustom;
