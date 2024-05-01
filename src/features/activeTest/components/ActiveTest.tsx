import { useParams } from "react-router-dom";
import GeneralLayout from "../../../components/Layout/GeneralLayout";
import { useActiveTest } from "../api/getActiveTest";
import QuestionsTabs from "./QuestionsTabs";
import TestDurationTimer from "./TestDurationTimer";
import SeparationLine from "../../../components/general/SeparationLine";
import TestNavigationPanel from "./TestNavigationPanel";

export default function ActiveTest() {
    const { activeTestId } = useParams();

    if (activeTestId == undefined) return;

    const { isPending, isError, data, error } = useActiveTest(activeTestId);

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data) return <div><h4>No test was found</h4></div>

    const { testName, questions, durationMinutes } = data;
    const numberOfQuestions = questions.length;

    return (
        <GeneralLayout>
            <div className="flex flex-col mt-3 bg-white">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-[36px]">{testName}</h2>
                    <TestDurationTimer durationMinutes={durationMinutes} />
                </div>
                <SeparationLine />
            </div>
            <QuestionsTabs questions={questions} />
            <TestNavigationPanel numberOfQuestions={numberOfQuestions}/>
        </GeneralLayout>
    )
}