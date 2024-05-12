type Props = {
    durationMinutes: number | undefined;
};

export default function TestDuration({ durationMinutes }: Props) {
    return (
        <div className="mt-4">
            <span className="font-medium text-[17px]">Duration: </span>
            {durationMinutes == 1 && <span className="font-medium">{durationMinutes} minute</span>}
            {durationMinutes != 1 && <span className="font-medium">{durationMinutes} minutes</span>}
        </div>
    )
}