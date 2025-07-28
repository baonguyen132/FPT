import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashBoardPage/DashboardPage";
import Login from "./pages/Login/login";
import ProductList from "./pages/ProductsPage/ProductsList";
import Categories from "./pages/Categories/Categories";
import Products from "./pages/ProductsPage/Products";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <DashboardPage />,
            children: [
                {
                    path: "/categories",
                    element: <Categories />
                },
                {
                    path: "/products/:idCategories",
                    element: <Products />,
                    loader: async ({params}) => {
                        return {idCategories: params.idCategories}
                    }
                }
            
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "*",
            element: <NotFoundPage />,
        }
    ]
);

function RouterCustom() {
    return RouterProvider({
        router: router
    });
}

export default RouterCustom;
