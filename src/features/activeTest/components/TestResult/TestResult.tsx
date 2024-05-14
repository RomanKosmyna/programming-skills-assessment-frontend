import { useAppSelector } from "../../../../hooks"
import CompletionDate from "./CompletionDate";
import QuestionGeneralInformation from "./QuestionGeneralInformation";
import QuestionsOverview from "./QuestionsOverview";
import TestResultNavigation from "./TestResultNavigation";
import TestResultTimeInfo from "./TestResultTimeInfo";

export default function TestResult() {
    const { result, totalDurationTimer, remainingDurationTimer } = useAppSelector(state => state.testResult);

    return (
        <div className="w-full bg-main mt-10 flex flex-col z-40">
            <div className="w-full flex justify-start">
                <h3 className="font-bold text-[36px]">Test Result</h3>
            </div>
            <div className="w-full flex justify-center mt-4">
                <div className=" bg-accent1 shadow-borderLight p-3 rounded-lg gap-10 flex">
                    <QuestionGeneralInformation result={result} />
                    <CompletionDate />
                    <TestResultTimeInfo
                        totalDurationTimer={totalDurationTimer}
                        remainingTime={remainingDurationTimer}
                    />
                </div>
            </div>
            <QuestionsOverview result={result} />
            <TestResultNavigation />
        </div>
    )
}