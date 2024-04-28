import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/Auth/AuthLayout";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home/Home";
import TestCategoriesList from "../features/testCategories/components/TestCategoriesList";
import TestsByCategoryList from "../features/testsByCategory/components/TestsByCategoryList";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/", element: <Home />
            },
            {
                path: "tests", element: <TestCategoriesList />
            },
            {
                path: "tests/:testCategoryId", element: <TestsByCategoryList />
            },
            // {
            //     path: "test/:testId", element: <Test />
            // },
            // {
            //     path: "test/testing/:testId", element: <ActiveTest />
            // }
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