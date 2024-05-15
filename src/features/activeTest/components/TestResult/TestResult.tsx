import { useAppSelector } from "src/hooks";
import CompletionDate from "./CompletionDate";
import QuestionGeneralInformation from "./QuestionGeneralInformation";
import QuestionsOverview from "./QuestionsOverview";
import TestResultNavigation from "./TestResultNavigation";
import TestResultTimeInfo from "./TestResultTimeInfo";

export default function TestResult() {
    const { result, totalDurationTimer, remainingDurationTimer } = useAppSelector(state => state.testResult);

    return (
        <div className="w-full mt-10 flex flex-col">
            <div className="w-full flex justify-start">
                <h3 className="font-bold text-mainDark dark:text-darkHeading text-[36px]">Test Result</h3>
            </div>
            <div className="w-full flex justify-center mt-4">
                <div className=" bg-mainWhite dark:bg-darkAccent1 shadow-borderLight 
                dark:shadow-none dark:border dark:border-darkBorder p-3 rounded-lg gap-10 flex">
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