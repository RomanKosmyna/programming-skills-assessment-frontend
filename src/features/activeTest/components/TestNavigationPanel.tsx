import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks"
import UnansweredQuestionsWarningModal from "./UnansweredQuestionsWarningModal";
import { formTestResult } from "../api/formTestResult";
import { finishTest, setResult } from "../slices/testResultSlice";

type TestNavigationPanelProps = {
    testID: string;
    numberOfQuestions: number;
};

export default function TestNavigationPanel({ testID, numberOfQuestions }: TestNavigationPanelProps) {
    const state = useAppSelector(state => state.activeTest.questions);
    const dispatch = useAppDispatch();

    const numberOfQuestionsAnswered = state.length;

    const [isActive, setIsActive] = useState(false);
    const finishTestAndSendData = async () => {
        if (numberOfQuestions !== numberOfQuestionsAnswered) {
            setIsActive(true);
        }
        else {
            try {
                const result = await formTestResult(testID, state);
                
                dispatch(setResult(result));
                dispatch(finishTest(true));
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className="w-full flex justify-center mt-10">
                <nav className="w-[55%] bg-[#F5F5F5] shadow-borderLight rounded-md p-4 flex justify-center">
                    <button className="bg-lime-600 px-4 py-2 text-white 
                opacity-70 transition-opacity rounded-md hover:opacity-100"
                        onClick={() => finishTestAndSendData()}
                    >
                        Finish Test
                    </button>
                </nav>
            </div>
            <UnansweredQuestionsWarningModal
                isActive={isActive}
                setIsActive={setIsActive}
                testID={testID}
            />
        </>
    )
}