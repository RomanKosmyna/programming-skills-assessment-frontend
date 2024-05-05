import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../features/auth/components/AuthLayout";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../features/home/components/Home";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import TestCategoriesList from "../features/testCategories/components/TestCategoriesList";
import TestsByCategoryList from "../features/testsByCategory/components/TestsByCategoryList";


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
                    },
                    {
                        path: "test-categories",
                        element: <TestCategoriesList />
                    },
                    {
                        path: "test-categories/:testCategoryId",
                        element: <TestsByCategoryList />
                    },
                    {
                        path: "test/:testId",
                        element: <div></div>
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