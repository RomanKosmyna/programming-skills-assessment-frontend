import { Link, NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header className="w-full h-[64px] bg-[#fff] px-6 flex justify-center shadow-light fixed z-20">
            <div className="w-full min-h-full max-w-[1400px] flex items-center">
                <div>
                    <h1 className="font-medium text-[24px] mr-6">Programming skills assessment</h1>
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
                        </ul>
                    </div>
                    <div>
                        <Link to={"/auth"}>Sign in</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}