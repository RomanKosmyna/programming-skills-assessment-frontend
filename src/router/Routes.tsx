import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../features/auth/components/AuthLayout";
import MainLayout from "../layouts/Main/MainLayout";
import Home from "../features/home/components/Home";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import ProtectectedRoute from "./ProtectedRoute";
import SavedTestResultsPage from "../features/savedTestResults/components/SavedTestResultsPage";
import TestResultInformation from "../features/savedTestResults/components/TestResultInformation";
import TestCategoriesPage from "../features/testCategories/components/TestCategoriesPage";
import TestsByCategoryPage from "@features/testsByCategory/components/TestsByCategoryPage";
import SpecificTestPage from "@features/specificTest/components/SpecificTestPage";
import ActiveTestPage from "@features/activeTest/components/ActiveTest/ActiveTestPage";

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
                        element: <TestsByCategoryPage />
                    },
                    {
                        path: "test/:specificTestId",
                        element: <SpecificTestPage />
                    },
                    {
                        path: "test/active/:activeTestId",
                        element: <ActiveTestPage />
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