/* eslint-disable @typescript-eslint/no-explicit-any */
import { finishTest, setResult } from "../slices/testResultSlice";

import { formTestResult } from "../api/formTestResult";

type Props = {
    isTestFinished: boolean;
    dispatch: any;
    setRemainingDurationTimer: any;
    remainingSeconds: any;
    testID: string | undefined;
    questionsAnswered: any;
};

export const handleTestCompletion = async (
    { isTestFinished, dispatch, setRemainingDurationTimer, remainingSeconds, testID, questionsAnswered }: Props
) => {
    if (!isTestFinished) {
        dispatch(setRemainingDurationTimer(remainingSeconds));
        const result = await formTestResult(testID, questionsAnswered);
        dispatch(setResult(result));
        dispatch(finishTest(true));
    }
};