import { useEffect, useState } from "react";
import { setRemainingDurationTimer, setTotalDurationTimer } from "../slices/testResultSlice";

import { useAppDispatch, useAppSelector } from "src/hooks";
import { handleTestCompletion } from "../util/handleTestCompletionOnTimeOut";

type TestDurationTimerProps = {
    testID: string | undefined;
    initialDurationTime: number | undefined;
};

export default function TestDurationTimer({ testID, initialDurationTime }: TestDurationTimerProps) {
    const totalSeconds = initialDurationTime! * 60;

    const questionsAnswered = useAppSelector(state => state.activeTestQuestionAnswerOption.questions);
    const isTestFinished = useAppSelector(state => state.testResult.isTestFinished);
    const dispatch = useAppDispatch();
    
    const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (isActive) {
            dispatch(setTotalDurationTimer(totalSeconds));

            const interval = setInterval(() => {
                setRemainingSeconds(prevState => {
                    if (prevState > 0) {
                        return prevState - 1;
                    } else {
                        setIsActive(false);
                        clearInterval(interval);
                        handleTestCompletion(
                            {isTestFinished, 
                                dispatch, 
                                setRemainingDurationTimer, 
                                remainingSeconds, 
                                testID, 
                                questionsAnswered}
                        );
                        return 0;
                    }
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [dispatch, remainingSeconds, isActive]);

    useEffect(() => {
        if (isTestFinished) {
            setIsActive(false);
            dispatch(setRemainingDurationTimer(remainingSeconds));
        }
    }, [isTestFinished]);

    if (!isActive || isTestFinished) return null;

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const formattedTimeLeft = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return (
        <div className="flex px-3 py-2 bg-[#7AA2E3] text-main font-bold rounded-md">
            <p>Time left:</p>
            <span className="pl-3">{formattedTimeLeft}</span>
            <p className="pl-1">minutes</p>
        </div>
    )
}