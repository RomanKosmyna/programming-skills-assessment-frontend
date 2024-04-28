type TestDurationProps = {
    durationMinutes: number | undefined;
};

export default function TestDuration({ durationMinutes }: TestDurationProps) {
    return (
        <div>
            <h4 className="font-bold text-[20px]">Test duration</h4>
            {durationMinutes == 1 && <p>{durationMinutes} minute</p>}
            {durationMinutes != 1 && <p>{durationMinutes} minutes</p>}
        </div>
    )
}