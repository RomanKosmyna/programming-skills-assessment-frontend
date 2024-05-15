import { NavLink } from "react-router-dom";

type Props = {
    isLoggedIn: () => boolean;
    userName: string;
};

export default function HeaderNavigation({ isLoggedIn, userName }: Props) {

    return (
        <nav className="flex ml-8">
            <ul className="flex items-center gap-x-7">
                <li>
                    <NavLink to={"/"} className={({ isActive }) =>
                        isActive ? "text-lightBlue dark:text-mainWhite font-medium text-[14px]" :
                            "dark:text-darkText1 hover:underline hover:text-lightBlue dark:hover:text-mainWhite font-medium text-[14px]"
                    }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/test-categories"}
                        className={({ isActive }) =>
                            isActive ? "text-lightBlue dark:text-mainWhite font-medium text-[14px]" :
                                "dark:text-darkText1 hover:underline hover:text-lightBlue dark:hover:text-mainWhite font-medium text-[14px]"
                        }>
                        Tests
                    </NavLink>
                </li>
                {isLoggedIn() ? (
                    <li>
                        <NavLink to={`/my-test-results/${userName}`}
                            className={({ isActive }) =>
                                isActive ? "text-lightBlue dark:text-mainWhite font-medium text-[14px]" :
                                    "dark:text-darkText1 hover:underline hover:text-lightBlue dark:hover:text-mainWhite font-medium text-[14px]"
                            }>
                            Saved results
                        </NavLink>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}