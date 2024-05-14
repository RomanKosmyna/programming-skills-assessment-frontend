import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../providers/useAuth";
import ThemeChange from "@components/Theme/ThemeChange";

export default function Header() {
    const { isLoggedIn, logout } = useAuth();
    const user = localStorage.getItem("user");
    const { userName } = JSON.parse(user!) ?? {};

    return (
        <header className="w-full h-[64px] bg-mainWhite dark:bg-darkAccent1 
        px-6 flex justify-center shadow-light dark:shadow-dark fixed z-20">
            <div className="w-full min-h-full max-w-[1400px] flex items-center">
                <div>
                    <h1 className="font-medium text-[24px] mr-6 dark:text-mainWhite">Programming skills assessment</h1>
                </div>
                <nav className="flex justify-between flex-grow">
                    <div className="ml-8">
                        <ul className="flex gap-x-7">
                            <li>
                                <NavLink to={"/"} className={({ isActive }) =>
                                    isActive ? "text-[#0070f3] font-medium text-[14px]" :
                                        "text-[#666] hover:text-[#333] font-medium text-[14px]"
                                }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/test-categories"}
                                    className={({ isActive }) =>
                                        isActive ? "text-[#0070f3] font-medium text-[14px]" :
                                            "text-[#666] hover:text-[#333] font-medium text-[14px]"
                                    }>
                                    Tests
                                </NavLink>
                            </li>
                            {isLoggedIn() ? (
                                <li>
                                    <NavLink to={`/my-test-results/${userName}`}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#0070f3] font-medium text-[14px]" :
                                                "text-[#666] hover:text-[#333] font-medium text-[14px]"
                                        }>
                                        Saved results
                                    </NavLink>
                                </li>
                            ) : null}
                        </ul>
                    </div>
                    <div>
                        <ThemeChange />
                    </div>
                    <div>
                        {isLoggedIn() ? (
                            <button
                                onClick={logout}
                                className="bg-mainWhite dark:bg-[#191919] border dark:border-darkButtonBorder 
                                dark:text-mainWhite rounded-md px-4 py-1 transition-opacity
                                hover:dark:opacity-90"
                            >
                                Log Out
                            </button>
                        ) : (
                            <Link to={"/auth/login"}>Sign in</Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )
}