import { useParams } from "react-router-dom";
import GeneralLayout from "../../../components/Layout/GeneralLayout";
import { useActiveTest } from "../api/getActiveTest";
import TestDurationTimer from "./TestDurationTimer";
import SeparationLine from "../../../components/general/SeparationLine";
import RenderTestInformation from "./RenderTestInformation";
import { useAppSelector } from "../../../hooks";

export default function ActiveTest() {
    const { activeTestId } = useParams();
    const { isTestFinished } = useAppSelector(state => state.testResult);

    if (activeTestId == undefined) return;

    const { isPending, isError, data, error } = useActiveTest(activeTestId);

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data) return <div><h4>No test was found</h4></div>

    const { testID, testName, questions, durationMinutes } = data;
    const numberOfQuestions = questions.length;

    return (
        <GeneralLayout>
            <div className={`w-full bg-gradient-to-br from-white to-gray-100 p-4 z-30 ${isTestFinished && "rounded-lg"}`}>
                <div className="flex flex-col mt-3">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-[36px]">{testName}</h2>
                        <TestDurationTimer durationMinutes={durationMinutes} />
                    </div>
                    <SeparationLine />
                </div>
                <RenderTestInformation
                    questions={questions}
                    testID={testID}
                    numberOfQuestions={numberOfQuestions}
                />
            </div>
            {isTestFinished && 
            <div className="w-full min-h-screen absolute top-0 left-0 bg-black/50 z-20"></div>
            }
        </GeneralLayout>
    )
}