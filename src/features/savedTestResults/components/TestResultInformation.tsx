/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { useGetUserTestResultById } from "../api/getUserTestResultById"
import GeneralLayout from "../../../components/Layout/GeneralLayout";
import RequestError from "../../../components/Error/RequestError";
import Heading from "../../../components/Heading/Heading";
import TestResultQuestionsOverview from "./TestResultQuestionsOverview";
import TestResultTimeInfo from "../../activeTest/components/TestResult/TestResultTimeInfo";
import QuestionGeneralInformation from "../../activeTest/components/TestResult/QuestionGeneralInformation";
import { getTestCategoryImage } from "src/util/getTestCategoryImage";

export default function TestResultInformation() {
    const token = localStorage.getItem("token")!;
    const { userTestResultId } = useParams();

    if (userTestResultId === undefined) return null;

    const { isPending, isError, error, data } = useGetUserTestResultById(token, userTestResultId);

    if (isPending) return <div>Loading...</div>

    if (isError) return <RequestError errorMessage={error?.message} />

    console.log(data);

    const {
        testCategoryID,
        testName,
        questionData,
        completionDate,
        completionHour,
        totalDurationTimer,
        remainingDurationTimer
    } = data;

    const testCategoryName = getTestCategoryImage(testCategoryID);
    const totalDurationMinutes = totalDurationTimer / 60;

    return (
        <GeneralLayout>
            <div className="w-full p-4">
                <Heading text={`Category: ${testCategoryName}`} />
                <Heading text={`Test: ${testName}`} />
                <div className="w-full flex gap-5 mt-5">
                    <QuestionGeneralInformation result={questionData} />
                    <div className="bg-gradient-to-r from-accentBlue to-[#5BBCFF] p-3 rounded-md">
                        <h3 className="font-bold text-[24px] text-main">Completion Date</h3>
                        <p className="font-medium text-main">Hour: {completionHour}</p>
                        <p className="font-medium text-main">Date: {completionDate}</p>
                    </div>
                    <TestResultTimeInfo totalDurationTimer={totalDurationMinutes} remainingTime={remainingDurationTimer} />
                </div>
                <div className="w-full mt-6">
                    <TestResultQuestionsOverview questionData={questionData} />
                </div>
            </div>
        </GeneralLayout>
    )
}