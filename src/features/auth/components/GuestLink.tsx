import ThemeChange from "@components/Theme/ThemeChange";
import { Link } from "react-router-dom";

export default function GuestLink() {
    return (
        <div className="w-full flex justify-between mt-6">
            <Link
                to={"/"}
                className="font-medium text-lightBlue hover:text-darkerLightBlue hover:underline
                transition-all"
            >
                Browse as a guest
            </Link>
            <ThemeChange />
        </div>
    )
}