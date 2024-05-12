import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../features/auth/components/AuthLayout";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../features/home/components/Home";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import TestsByCategoryList from "../features/testsByCategory/components/TestsByCategoryList";
import SpecificTest from "../features/specificTest/components/SpecificTest";
import ActiveTest from "../features/activeTest/components/ActiveTest";
import ProtectectedRoute from "./ProtectedRoute";
import SavedTestResultsPage from "../features/savedTestResults/components/SavedTestResultsPage";
import TestResultInformation from "../features/savedTestResults/components/TestResultInformation";
import TestCategoriesPage from "../features/testCategories/components/TestCategoriesPage";

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
                        element: <TestCategoriesPage />
                    },
                    {
                        path: "test-categories/:testCategoryId",
                        element: <TestsByCategoryList />
                    },
                    {
                        path: "test/:specificTestId",
                        element: <SpecificTest />
                    },
                    {
                        path: "test/active/:activeTestId",
                        element: <ActiveTest />
                    },
                    {
                        path: "my-test-results/:username",
                        element: (
                            <ProtectectedRoute>
                                <SavedTestResultsPage />
                            </ProtectectedRoute>
                        )
                    },
                    {
                        path: "my-test-results/result/:userTestResultId",
                        element: (
                            <ProtectectedRoute>
                                <TestResultInformation />
                            </ProtectectedRoute>
                        )
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