import { useBlocker } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { clearQuestionStatus } from "../slices/activeTestQuestionNavigationSlice";
import { clearQuestions } from "../slices/activeTestQuestionAnswerOptionSlice";

export default function NavigationBlocker() {
    const isTestFinished = useAppSelector(state => state.testResult.isTestFinished);
    const dispatch = useAppDispatch();

    const navBlocker = useBlocker(
        ({ currentLocation, nextLocation }) =>
            !isTestFinished &&
            currentLocation.pathname !== nextLocation.pathname
    );

    const proceed = () => {
        dispatch(clearQuestionStatus());
        dispatch(clearQuestions());
        navBlocker.proceed();
    };

    return (
        <>
            {
                navBlocker.state === "blocked" ? (
                    <div className="w-full min-h-screen absolute top-0 left-0 z-40 bg-mainDark/[.5] dark:bg-mainDark/[.8] flex justify-center items-center">
                        <div className="bg-mainWhite dark:bg-mainDark dark:border dark:border-darkBorder p-4 rounded-lg">
                            <p className="text-mainDark dark:text-darkHeading font-medium">If you leave now, you will have to restart a test.</p>
                            <p className="text-mainDark dark:text-darkHeading font-medium mt-2">Are you sure you want to proceed?</p>
                            <div className="mt-5 flex justify-center gap-4">
                                <button
                                onClick={() => proceed()}
                                className="px-6 py-2 bg-red-700 text-mainWhite font-medium rounded-md
                                transition-opacity hover:opacity-90"
                                >
                                    Proceed
                                </button>
                                <button 
                                onClick={() => navBlocker.reset()}
                                className="px-6 py-2 bg-green-700 text-mainWhite font-medium rounded-md 
                                transition-opacity hover:opacity-90"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}