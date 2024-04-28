import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/Auth/AuthLayout";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../pages/Home/Home";
import TestCategoriesList from "../features/testCategories/components/TestCategoriesList";
import TestsByCategoryList from "../features/testsByCategory/components/TestsByCategoryList";
import SpecificTest from "../features/specificTest/components/SpecificTest";
import ActiveTest from "../features/activeTest/components/ActiveTest";


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
                path: "signin", element: <SignIn />
            },
            {
                path: "signup", element: <SignUp />
            }
        ]
    }
]);