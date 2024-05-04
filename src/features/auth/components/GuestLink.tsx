import { Link } from "react-router-dom";

export default function GuestLink() {
    return (
        <div className="w-[450px] mt-6">
            <Link
                to={"/"}
                className="font-medium text-lightBlue hover:text-darkerLightBlue hover:underline"
            >
                Browse as a guest
            </Link>
        </div>
    )
}