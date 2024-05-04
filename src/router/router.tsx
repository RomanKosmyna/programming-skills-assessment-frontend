import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../features/auth/components/AuthLayout";
import SignIn from "../pages/SignIn/SignIn";
import MainLayout from "../layouts/Main/MainLayout";
import TestCategoriesList from "../features/testCategories/components/TestCategoriesList";
import TestsByCategoryList from "../features/testsByCategory/components/TestsByCategoryList";
import SpecificTest from "../features/specificTest/components/SpecificTest";
import ActiveTest from "../features/activeTest/components/ActiveTest";
import Home from "../features/home/components/Home";
import RegisterForm from "../features/auth/components/RegisterForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/", element: <Home />
            },
            {
                path: "test-categories", element: <TestCategoriesList />
            },
            {
                path: "test-categories/:testCategoryId", element: <TestsByCategoryList />
            },
            {
                path: "test/:specificTestId", element: <SpecificTest />
            },
            {
                path: "test/active/:activeTestId", element: <ActiveTest />
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
                path: "login", element: <SignIn />
            },
            {
                path: "register", element: <RegisterForm />
            }
        ]
    }
]);