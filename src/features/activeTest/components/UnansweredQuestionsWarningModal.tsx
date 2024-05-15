import { Dispatch, SetStateAction } from "react";
import { useToast } from "@chakra-ui/react";
import { formTestResult } from "../api/formTestResult";
import { finishTest, setResult } from "../slices/testResultSlice";

import { useAppDispatch, useAppSelector } from "src/hooks";

type UnansweredQuestionsWarningModalProps = {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    testID: string;
};

export default function UnansweredQuestionsWarningModal(
    { isActive, setIsActive, testID }: UnansweredQuestionsWarningModalProps) {
    const toast = useToast();
    const state = useAppSelector(state => state.activeTestQuestionAnswerOption.questions);
    const dispatch = useAppDispatch();

    const finishTestAndSendData = async () => {
        try {
            const result = await formTestResult(testID, state);
            dispatch(setResult(result));
            dispatch(finishTest(true));
        } catch (error) {
            toast({
                title: 'Unanswered questions Status',
                description: "Something went wrong",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            {isActive && (
                <div className="w-full min-h-screen absolute top-0 left-0 bg-mainDark/[.5] dark:bg-mainDark/[.8] z-10 flex justify-center items-center">
                    <div className="bg-mainWhite dark:bg-mainDark dark:border dark:border-darkBorder p-4 rounded-lg">
                        <p className="text-mainDark dark:text-darkHeading font-medium">Some of the questions remain unanswered.</p>
                        <p className="text-mainDark dark:text-darkHeading font-medium mt-2">Are you sure that you want to finish the test?</p>
                        <div className="flex justify-center gap-4 mt-5">
                            <button
                                onClick={() => finishTestAndSendData()}
                                className="px-6 py-2 bg-green-700 text-mainWhite font-medium rounded-md 
                                transition-opacity hover:opacity-90"
                            >
                                Finish Test
                            </button>
                            <button
                                className="px-6 py-2 bg-red-700 text-mainWhite font-medium rounded-md
                                transition-opacity hover:opacity-90"
                                onClick={() => setIsActive(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}