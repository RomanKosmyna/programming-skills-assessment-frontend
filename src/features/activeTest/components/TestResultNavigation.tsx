import { Link } from "react-router-dom";

export default function TestResultNavigation() {
    return (
        <div className="mt-10 flex justify-center">
            <nav className="bg-accent1 shadow-borderLight flex gap-10 p-6 rounded-lg">
                <Link
                    to={"/test-categories"}
                    className="bg-accentBlue font-bold text-main px-4 py-2 rounded-md transition-colors hover:bg-hoverAccentBlue"
                >
                    Return to Categories
                </Link>
                <button
                    className="bg-accentBlue font-bold text-main px-4 py-2 rounded-md transition-colors hover:bg-hoverAccentBlue"
                >
                    Close Test
                </button>
                <button
                    className="bg-accentBlue font-bold text-main px-4 py-2 rounded-md transition-colors hover:bg-hoverAccentBlue"
                >
                    Save Results
                </button>
                <button
                    className="bg-accentBlue font-bold text-main px-4 py-2 rounded-md transition-colors hover:bg-hoverAccentBlue"
                >
                    Download results in PDF
                </button>
            </nav>
        </div>
    )
}