import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layouts/Auth/AuthLayout";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import MainLayout from "../../layouts/Main/MainLayout";
import Home from "../../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/", element: <Home />
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "", element: <SignIn />
            },
            {
                path: "signin", element: <SignIn />
            },
            {
                path: "signup", element: <SignUp />
            }
        ]
    }
]);