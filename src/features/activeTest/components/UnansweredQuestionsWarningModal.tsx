import { Dispatch, SetStateAction } from "react";
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
    const state = useAppSelector(state => state.activeTestQuestionAnswerOption.questions);
    const dispatch = useAppDispatch();

    const finishTestAndSendData = async () => {
        try {
            const result = await formTestResult(testID, state);
            dispatch(setResult(result));
            dispatch(finishTest(true));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {isActive && (
                <div className="w-full min-h-screen absolute top-0 left-0 bg-black/50 z-10 flex justify-center items-center">
                    <div className="bg-main p-4 rounded-lg">
                        <p className="font-medium">Some of the questions remain unanswered.</p>
                        <p className="font-medium mt-2">Are you sure that you want to finish the test?</p>
                        <div className="flex justify-center gap-4 mt-5">
                            <button
                                onClick={() => finishTestAndSendData()}
                                className="px-6 py-2 bg-red-400 text-main font-medium rounded-md transition-opacity opacity-90 hover:opacity-100"
                            >
                                Finish Test
                            </button>
                            <button
                                className="px-6 py-2 bg-accentBlue text-main font-medium rounded-md transition-opacity opacity-90 hover:opacity-100"
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