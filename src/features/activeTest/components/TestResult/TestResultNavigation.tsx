import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { resetTest } from "../../slices/testResultSlice";
import { API_URL, URLS } from "../../../../config";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../../../../providers/useAuth";
import { clearQuestionStatus } from "@features/activeTest/slices/activeTestQuestionNavigationSlice";
import { clearQuestions } from "@features/activeTest/slices/activeTestQuestionAnswerOptionSlice";

export default function TestResultNavigation() {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        testCategoryID,
        testID,
        testName,
        result,
        totalDurationTimer,
        remainingDurationTimer,
        completionHour,
        completionDate
    } = useAppSelector(state => state.testResult);
    const toast = useToast();

    const handleTestResultState = (path: string) => {
        dispatch(resetTest());
        dispatch(clearQuestions());
        dispatch(clearQuestionStatus());
        navigate(path);
    };

    const handleSaveTestResults = async () => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        const { userName } = JSON.parse(user!);

        const getUserId = await fetch(API_URL + URLS.account.getUserId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(userName)
        });
        const { userId } = await getUserId.json();

        const testResultData = {
            testCategoryID: testCategoryID,
            testID: testID,
            testName: testName,
            questionData: result,
            totalDurationTimer: totalDurationTimer,
            remainingDurationTimer: remainingDurationTimer,
            userID: userId,
            completionHour: completionHour,
            completionDate: completionDate
        };
        console.log(testResultData);

        const saveTestResult = await fetch(API_URL + URLS.userTestResult.saveUserTestResult, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(testResultData)
        });
        if (saveTestResult.ok) {
            toast({
                title: 'Test results are saved.',
                description: "Test results are successfully saved.",
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            handleTestResultState(`/my-test-results/${userName}`);
        }
        else {
            toast({
                title: 'Something went wrong.',
                description: "Something went wrong. Please try again.",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    };

    return (
        <div className="mt-10 flex justify-center">
            <nav className="bg-accent1 shadow-borderLight flex gap-10 p-3 rounded-lg">
                <button
                    onClick={() => handleTestResultState("/test-categories")}
                    className="bg-accentBlue font-bold text-main px-4 py-2 rounded-md transition-colors hover:bg-hoverAccentBlue"
                >
                    Close Test
                </button>
                {isLoggedIn() && (
                    <button
                        onClick={() => handleSaveTestResults()}
                        className="bg-accentBlue font-bold text-main px-4 py-2 rounded-md transition-colors hover:bg-hoverAccentBlue"
                    >
                        Save Results
                    </button>
                )}
                <button
                    className="bg-accentBlue font-bold text-main px-4 py-2 rounded-md transition-colors hover:bg-hoverAccentBlue"
                >
                    Download results in PDF
                </button>
            </nav>
        </div>
    )
}