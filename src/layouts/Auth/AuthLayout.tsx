import { Outlet } from "react-router-dom";
import Heading from "../../components/auth/Heading";

const AuthLayout = () => {

    return (
        <main className="w-full min-h-svh bg-[#F6F5F2] flex items-center flex-col">
            <Heading marginTop={12} text="Sign in"/>
            <Outlet />
        </main>
    )
};

export default AuthLayout;