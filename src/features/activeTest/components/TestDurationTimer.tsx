import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { finishTest, setRemainingDurationTimer, setResult, setTotalDurationTimer } from "../slices/testResultSlice";
import { formTestResult } from "../api/formTestResult";

type TestDurationTimerProps = {
    testID: string;
    durationMinutes?: number;
};

export default function TestDurationTimer({ testID, durationMinutes }: TestDurationTimerProps) {
    const totalSeconds = durationMinutes! * 60;
    const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
    const { isTestFinished } = useAppSelector(state => state.testResult);
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.activeTest.questions);
    const [isTimeOut, setIsTimeOut] = useState(false);

    useEffect(() => {
        if (!isTestFinished) {
            dispatch(setTotalDurationTimer(totalSeconds!));

            const interval = setInterval(() => {
                setRemainingSeconds((prevState) => {
                    if (prevState > 0) {
                        return prevState - 1;
                    } else {
                        setIsTimeOut(true);
                        clearInterval(interval);
                        return 0;
                    }
                });
            }, 1000);

            if (isTestFinished) {
                dispatch(setRemainingDurationTimer(remainingSeconds));
                clearInterval(interval);
            }

            return () => clearInterval(interval);
        }
        else {
            dispatch(setRemainingDurationTimer(remainingSeconds));
        }
    }, [isTestFinished]);

    useEffect(() => {
        if (isTimeOut) {
            handleTestCompletion();
            setIsTimeOut(false);
        }
    }, [isTimeOut]);

    const handleTestCompletion = async () => {
        dispatch(setRemainingDurationTimer(remainingSeconds));
        const result = await formTestResult(testID, state);
        dispatch(setResult(result));
        dispatch(finishTest(true));
    };

    if (isTestFinished) return null;

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