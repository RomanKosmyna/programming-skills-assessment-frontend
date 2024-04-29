import { useEffect, useState } from "react";

type TestDurationTimerProps = {
    durationMinutes?: number;
};

export default function TestDurationTimer({ durationMinutes }: TestDurationTimerProps) {
    if (durationMinutes == undefined) return;

    const totalSeconds = durationMinutes * 60;
    const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);

    useEffect(() => {
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

        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const formattedTimeLeft = `${minutes}:${seconds < 10 ? '0': ''}${seconds}`;

    return (
        <div className="flex pr-[4rem]">
            <p>Time left:</p>
            <p className="pl-3">{formattedTimeLeft}</p>
            <p className="pl-1">minutes</p>
        </div>
    )
}