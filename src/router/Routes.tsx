import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../features/auth/components/AuthLayout";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../features/home/components/Home";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainLayout />,
                children: [
                    {
                        path: "/",
                        element: <Home />
                    }
                ]
            },
            {
                path: "/auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "register",
                        element: <RegisterForm />
                    },
                    {
                        path: "login",
                        element: <LoginForm />
                    }
                ]
            }
        ]
    }
]);