import { Outlet } from "react-router-dom";

const AuthLayout = () => {

    return (
        <main className="w-full min-h-svh flex justify-center bg-gradient-to-br from-white to-gray-100">
            <Outlet />
        </main>
    )
};

export default AuthLayout;