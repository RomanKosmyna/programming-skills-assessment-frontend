import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setRemainingDurationTimer, setTotalDurationTimer } from "../slices/testResultSlice";

type TestDurationTimerProps = {
    durationMinutes?: number;
};

export default function TestDurationTimer({ durationMinutes }: TestDurationTimerProps) {
    const totalSeconds = durationMinutes! * 60;
    const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
    const { isTestFinished } = useAppSelector(state => state.testResult);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTotalDurationTimer(durationMinutes!));

        const interval = setInterval(() => {
            setRemainingSeconds((prevState) => {
                if (prevState > 0) {
                    return prevState - 1;
                } else {
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
    }, [isTestFinished]);

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const formattedTimeLeft = `${minutes}:${seconds < 10 ? '0': ''}${seconds}`;
    
    if (isTestFinished) return null;

    return (
        <div className="flex px-3 py-2 bg-[#7AA2E3] text-main font-bold rounded-md">
            <p>Time left:</p>
            <span className="pl-3">{formattedTimeLeft}</span>
            <p className="pl-1">minutes</p>
        </div>
    )
}