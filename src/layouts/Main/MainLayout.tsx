import { Outlet } from "react-router-dom";
import Header from "../../components/navigation/Header";

export default function MainLayout() {

    return (
        <main className="w-full min-h-svh flex items-center flex-col bg-gradient-to-br from-white to-gray-100">
            <Header/>
            <Outlet />
        </main>
    )
}