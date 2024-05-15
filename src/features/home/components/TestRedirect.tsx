import { Link } from "react-router-dom";

export default function TestRedirect() {
    return (
        <div className="w-full flex justify-center mb-10">
            <Link
                className="bg-green-700 px-6 py-2 mt-10 font-bold text-xl 
                    text-mainWhite flex justify-center rounded-lg transition-opacity hover:opacity-90"
                to={"/test-categories"}
            >
                Go to Tests
            </Link>
        </div>
    )
}