import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layouts/Auth/AuthLayout";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

export const router = createBrowserRouter([
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
                path: "signup", element: <SignUp/>
            }
        ]
    }
]);