import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const isRouteActive = (linkRoute: string) => {
        return location.pathname == linkRoute;
    };

    return (
        <header className="w-full h-[64px] bg-[#fff] px-6 flex justify-center shadow-light">
            <div className="w-full min-h-full max-w-[1400px] flex items-center">
                <div>
                    <h1 className="font-medium text-[24px] mr-6">Programming skills assessment</h1>
                </div>
                <nav className="flex justify-between flex-grow">
                    <div className="ml-8">
                        <ul className="flex gap-x-7">
                            <li>
                                <Link to={"/"}
                                    className={`${isRouteActive("/") ? "text-[#0070f3]" : "text-[#666666] hover:text-[#333]"} 
                                    font-medium text-[14px]`} aria-label="Home">Home</Link>
                            </li>
                            <li>
                                <Link to={"/tests"}
                                    className={`${isRouteActive("/tests") ? "text-[#0070f3]" : "text-[#666666] hover:text-[#333]"} 
                                    font-medium text-[14px]`}>Tests</Link>
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