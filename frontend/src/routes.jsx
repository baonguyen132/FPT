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
                    path: "/",
                    element: <CategoriesList />
                },
                {
                    path: "/page1",
                    element: <h1>Page1</h1>
                },
                {
                    path: "/page2",
                    element: <h1>Page2</h1>
                },
                {
                    path: "/page3",
                    element: <h1>Page3</h1>
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
