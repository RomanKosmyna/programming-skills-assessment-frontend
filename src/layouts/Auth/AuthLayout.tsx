import { Outlet } from "react-router-dom";

const AuthLayout = () => {

    return (
        <main className="w-full min-h-svh bg-[#F6F5F2] flex items-center flex-col">
            <h1 className="mt-12 text-[34px]">Programming skills assessment</h1>
            <Outlet />
        </main>
    )
};

export default AuthLayout;