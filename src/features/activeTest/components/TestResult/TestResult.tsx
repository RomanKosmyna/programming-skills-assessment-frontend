import { useAppSelector } from "../../../../hooks"
import CompletionDate from "./CompletionDate";
import QuestionGeneralInformation from "./QuestionGeneralInformation";
import QuestionsOverview from "./QuestionsOverview";
import TestResultNavigation from "./TestResultNavigation";
import TestResultTimeInfo from "./TestResultTimeInfo";

export default function TestResult() {
    const { result, totalDurationTimer, remainingDurationTimer } = useAppSelector(state => state.testResult);

    return (
        <div className="w-full mt-10 flex flex-col items-center">
            <div className="w-full flex justify-start">
                <h3 className="font-bold text-[36px]">Test Result</h3>
            </div>
            <div className="w-full flex gap-10 mt-4">
                <QuestionGeneralInformation result={result} />
                <CompletionDate />
                <TestResultTimeInfo
                    totalDurationTimer={totalDurationTimer}
                    remainingTime={remainingDurationTimer}
                />
            </div>
            <QuestionsOverview result={result} />
            <TestResultNavigation />
        </div>
    )
}