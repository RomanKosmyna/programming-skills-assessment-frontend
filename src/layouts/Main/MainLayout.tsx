import { Outlet } from "react-router-dom";
import Header from "../../components/navigation/Header";

export default function MainLayout() {

    return (
        <main className="w-full min-h-svh bg-[#fff] flex items-center flex-col">
            <Header/>
            <Outlet />
        </main>
    )
}