type Props = {
    durationMinutes: number | undefined;
};

export default function TestDuration({ durationMinutes }: Props) {
    return (
        <div className="mt-4">
            <span className="font-medium text-mainDark dark:text-darkText1 text-[17px]">Duration: </span>
            {durationMinutes == 1 && <span className="font-medium text-mainDark dark:text-darkText1">{durationMinutes} minute</span>}
            {durationMinutes != 1 && <span className="font-medium text-mainDark dark:text-darkText1">{durationMinutes} minutes</span>}
        </div>
    )
}