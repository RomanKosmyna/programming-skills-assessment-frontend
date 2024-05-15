import { Outlet } from "react-router-dom";

const AuthLayout = () => {

    return (
        <main className="w-full min-h-svh flex justify-center bg-mainWhite dark:bg-mainDark">
            <Outlet />
        </main>
    )
};

export default AuthLayout;