import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks";
import { resetTest } from "../../slices/testResultSlice";
import { clearQuestionStatus, clearQuestions } from "../../slices/activeTestSlice";

export default function TestResultNavigation() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleTestResultState = () => {
        dispatch(resetTest());
        dispatch(clearQuestions());
        dispatch(clearQuestionStatus());
        navigate("/test-categories");
    };

    return (
        <div className="mt-10 flex justify-center">
            <nav className="bg-accent1 shadow-borderLight flex gap-10 p-6 rounded-lg">
                <button
                    onClick={handleTestResultState}
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