import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layouts/Auth/AuthLayout";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import MainLayout from "../../layouts/Main/MainLayout";
import Home from "../../pages/Home/Home";
import TestTypeList from "../../features/testTypes/components/TestTypesList";
import TestsList from "../../features/tests/components/TestsList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/", element: <Home />
            },
            {
                path: "testTypes", element: <TestTypeList />
            },
            {
                path: "tests/:testTypeId", element: <TestsList />
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