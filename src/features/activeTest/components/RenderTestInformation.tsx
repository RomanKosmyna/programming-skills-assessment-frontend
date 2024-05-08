import { useAppSelector } from "../../../hooks";
import QuestionsTabs from "./QuestionsTabs";
import TestNavigationPanel from "./TestNavigationPanel";
import TestResult from "./TestResult/TestResult";

type Props = {
    questions: [],
    testID: string,
    numberOfQuestions: number
};

export default function RenderTestInformation({ questions, testID, numberOfQuestions }: Props) {
    const { isTestFinished } = useAppSelector(state => state.testResult);

    return (
        <>
            {!isTestFinished && (
                <>
                    <div className="flex justify-center">
                        <QuestionsTabs questions={questions} />
                    </div>
                    <TestNavigationPanel testID={testID} numberOfQuestions={numberOfQuestions} />
                </>
            )}
            {isTestFinished && (
                <TestResult/>
            )}
        </>
    )
}