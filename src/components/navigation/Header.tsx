import { Link } from "react-router-dom";
import { useAuth } from "src/providers/useAuth";
import ThemeChange from "@components/Theme/ThemeChange";
import HeaderNavigation from "./HeaderNavigation";

export default function Header() {
    const { isLoggedIn, logout } = useAuth();
    const user = localStorage.getItem("user");
    const { userName } = JSON.parse(user!) ?? {};

    return (
        <header className="w-full h-[64px] bg-mainWhite dark:bg-darkAccent1 
        px-6 flex justify-center shadow-light dark:shadow-dark fixed z-20">
            <div className="w-full min-h-full max-w-[1400px] flex items-center">
                <div>
                    <h1 className="font-medium text-[24px] mr-6 dark:text-mainWhite">Application Name</h1>
                </div>
                <div className="flex-grow flex justify-between">
                    <HeaderNavigation isLoggedIn={isLoggedIn} userName={userName} />
                    <div className="flex gap-5 items-center">
                        <ThemeChange />
                        {isLoggedIn() ? (
                            <button
                                onClick={logout}
                                className="bg-red-700 text-mainWhite 
                                font-medium rounded-md px-4 py-1 transition-opacity
                                hover:dark:opacity-90"
                            >
                                Log Out
                            </button>
                        ) : (
                            <Link
                                to={"/auth/login"}
                                className="bg-green-700 text-mainWhite 
                                font-medium rounded-md px-4 py-1 transition-opacity
                                hover:dark:opacity-90"
                            >
                                Sign in
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}