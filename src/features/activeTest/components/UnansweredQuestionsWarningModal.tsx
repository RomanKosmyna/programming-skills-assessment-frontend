import { useAppDispatch, useAppSelector } from "../../../hooks";
import { formTestResult } from "../api/formTestResult";
import { finishTest, setResult } from "../slices/testResultSlice";

type UnansweredQuestionsWarningModalProps = {
    isActive: boolean;
    setIsActive: any;
    testID: string;
};

export default function UnansweredQuestionsWarningModal(
    { isActive, setIsActive, testID }: UnansweredQuestionsWarningModalProps) {
    const state = useAppSelector(state => state.activeTest.questions);
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
                <div className="w-full min-h-screen absolute top-0 left-0 bg-black/50 z-10">
                    <div className="max-w-[350px] mx-auto bg-white mt-[6rem] p-4 rounded-xl text-justify">
                        <p className="font-bold">Some of the questions remain unanswered.</p>
                        <p className="font-medium text-[#2d3748] mt-3">Are you sure that you want to finish the test?</p>
                        <div className="flex gap-5 justify-end mt-5">
                            <button
                            onClick={() => finishTestAndSendData()}
                                className="bg-[#E72929] text-main px-6 py-2 rounded-md transition-opacity opacity-90 hover:opacity-100"
                            >
                                Finish Test
                            </button>
                            <button
                                className="bg-[#6499E9] text-main px-6 py-2 rounded-md transition-opacity opacity-90 hover:opacity-100"
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