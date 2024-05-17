import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "src/providers/useAuth";
import { API_URL, URLS } from "@config/index";
import { clearQuestionStatus } from "@features/activeTest/slices/activeTestQuestionNavigationSlice";
import { clearQuestions } from "@features/activeTest/slices/activeTestQuestionAnswerOptionSlice";
import { resetTest } from "@features/activeTest/slices/testResultSlice";

import { useAppDispatch, useAppSelector } from "src/hooks";
import { PDFDownloadLink } from "@react-pdf/renderer";
import RenderPDFResult from "./RenderPDFResult";

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
                containerStyle: {
                    backgroundColor: "15803D"
                },
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
                containerStyle: {
                    backgroundColor: "B91C1C"
                },
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
            <nav className="bg-mainWhite dark:bg-darkAccent1 shadow-borderLight dark:shadow-none 
            dark:border dark:border-darkBorder flex gap-10 p-3 rounded-lg">
                <button
                    onClick={() => handleTestResultState("/test-categories")}
                    className="bg-green-700 px-6 py-2 font-bold text-xl 
                    text-mainWhite flex justify-center rounded-lg transition-opacity hover:opacity-90"
                >
                    Close Test
                </button>
                {isLoggedIn() && (
                    <button
                        onClick={() => handleSaveTestResults()}
                        className="bg-green-700 px-6 py-2 font-bold text-xl 
                    text-mainWhite flex justify-center rounded-lg transition-opacity hover:opacity-90"
                    >
                        Save Results
                    </button>
                )}
                <PDFDownloadLink document={
                    <RenderPDFResult
                        testName={testName}
                        totalDurationTimer={totalDurationTimer}
                        remainingDurationTimer={remainingDurationTimer}
                        result={result}
                    />
                } fileName='test result.pdf'>
                    <div className="bg-green-700 px-6 py-2 font-bold text-xl 
                    text-mainWhite flex justify-center rounded-lg transition-opacity hover:opacity-90">
                        Download results in PDF
                    </div>
                </PDFDownloadLink>
            </nav>
        </div>
    )
}