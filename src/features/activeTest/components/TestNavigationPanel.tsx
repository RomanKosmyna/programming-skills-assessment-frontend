import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import UnansweredQuestionsWarningModal from "./UnansweredQuestionsWarningModal";
import { finishTest, setResult } from "../slices/testResultSlice";

import { formTestResult } from "../api/formTestResult";

import { useAppDispatch, useAppSelector } from "src/hooks";

type Props = {
    testID: string;
    numberOfQuestions: number;
};

export default function TestNavigationPanel({ testID, numberOfQuestions }: Props) {
    const toast = useToast();
    const state = useAppSelector(state => state.activeTestQuestionAnswerOption.questions);
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
                toast({
                    title: 'Test Result Status',
                    description: "Something went wrong",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        }
    };

    return (
        <>
            <div className="w-full flex justify-center mt-10">
                <nav className="w-[35%] bg-[#F5F5F5] dark:bg-darkAccent1 shadow-borderLight 
                dark:shadow-none dark:border dark:border-darkBorder rounded-md p-4 flex justify-center items-center">
                    <button className="bg-green-700 px-6 py-2 font-bold text-xl 
                    text-mainWhite flex justify-center rounded-lg transition-opacity hover:opacity-90"
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