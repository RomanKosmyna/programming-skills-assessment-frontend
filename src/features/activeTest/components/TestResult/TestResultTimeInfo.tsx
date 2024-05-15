type Props = {
    totalDurationTimer: number;
    remainingTime: number;
};


export default function TestResultTimeInfo({ totalDurationTimer, remainingTime }: Props) {
    const totalDurationTimerInMinutes = totalDurationTimer / 60;
    const remainingDurationTimerMinutes = Math.floor(remainingTime / 60);
    const remainingDurationTimerSeconds = remainingTime % 60;
    const formattedTimeRemaining = `${remainingDurationTimerMinutes}:${remainingDurationTimerSeconds < 10 ? '0' : ''}${remainingDurationTimerSeconds}`;

    return (
        <div className="bg-gradient-to-r from-[#640D6B] to-[#B51B75] p-3 rounded-md">
            <h3 className="font-bold text-mainWhite text-[24px]">Time</h3>
            <p className="font-medium text-mainWhite">Total duration: <span>{totalDurationTimerInMinutes} minutes</span></p>
            <p className="font-medium text-mainWhite">Remaining duration: <span>{formattedTimeRemaining} minutes</span></p>
        </div>
    )
}