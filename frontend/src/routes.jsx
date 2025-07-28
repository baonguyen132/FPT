import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashBoardPage/DashboardPage";
import CategoriesList from "./pages/Categories/CategoriesList";
import Login from "./pages/Login/login";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <DashboardPage />,
            children: [
                {
                    path: "/categories",
                    element: <CategoriesList />
                },
            
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
