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
        <div className="flex mr-[4rem] px-3 py-2 bg-[#7AA2E3] text-main font-bold rounded-md">
            <p>Time left:</p>
            <span className="pl-3">{formattedTimeLeft}</span>
            <p className="pl-1">minutes</p>
        </div>
    )
}