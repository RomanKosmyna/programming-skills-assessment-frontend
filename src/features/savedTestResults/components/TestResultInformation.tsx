import { useParams } from "react-router-dom";
import { useGetUserTestResultById } from "../api/getUserTestResultById"
import TestResultQuestionsOverview from "./TestResultQuestionsOverview";
import RequestError from "@components/Error/RequestError";
import PendingSpinner from "@components/Pending/PendingSpinner";
import GeneralLayout from "@components/Layout/GeneralLayout";
import Heading from "@components/Heading/Heading";
import QuestionGeneralInformation from "@features/activeTest/components/TestResult/QuestionGeneralInformation";
import TestResultTimeInfo from "@features/activeTest/components/TestResult/TestResultTimeInfo";
import HeadingWithImage from "@components/Heading/HeadingWithImage";
import RemoveTestResult from "./RemoveTestResult";

export default function TestResultInformation() {
    const token = localStorage.getItem("token")!;
    const { userTestResultId } = useParams();

    const { isPending, isError, error, data } = useGetUserTestResultById(token, userTestResultId);

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    const {
        testCategoryID,
        testName,
        questionData,
        completionDate,
        completionHour,
        totalDurationTimer,
        remainingDurationTimer
    } = data;

    return (
        <GeneralLayout>
            <div className="w-full p-4">
                <HeadingWithImage
                    testCategoryId={testCategoryID}
                    headingText={`Category`}
                />
                <Heading text={`Test: ${testName}`} />
                <div className="w-full flex gap-5 mt-5">
                    <QuestionGeneralInformation result={questionData} />
                    <div className="bg-gradient-to-r from-[#1C1678] to-[#378CE7] p-3 rounded-md">
                        <h3 className="font-bold text-mainWhite text-[24px]">Completion Date</h3>
                        <p className="font-medium text-mainWhite">Hour: {completionHour}</p>
                        <p className="font-medium text-mainWhite">Date: {completionDate}</p>
                    </div>
                    <TestResultTimeInfo
                        totalDurationTimer={totalDurationTimer}
                        remainingTime={remainingDurationTimer}
                    />
                </div>
                <div className="w-full mt-6">
                    <TestResultQuestionsOverview questionData={questionData} />
                </div>
                <RemoveTestResult
                    token={token}
                    userTestResultId={userTestResultId}
                />
            </div>
        </GeneralLayout>
    )
}