import { Outlet } from "react-router-dom";
import Header from "../../components/navigation/Header";

export default function MainLayout() {

    return (
        <div className="w-full min-h-svh flex items-center flex-col bg-main dark:bg-[#0a0a0a]">
            <Header/>
            <Outlet />
        </div>
    )
}