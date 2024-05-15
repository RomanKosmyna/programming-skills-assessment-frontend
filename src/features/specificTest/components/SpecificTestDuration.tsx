import { TimeIcon } from "@chakra-ui/icons";

type TestDurationProps = {
    durationMinutes: number | undefined;
};

export default function SpecificTestDuration({ durationMinutes }: TestDurationProps) {
    return (
        <section>
            <div className="flex items-center gap-2">
                <TimeIcon w={5} h={5} className="text-mainDark dark:text-darkHeading" />
                <h4 className="font-bold text-mainDark dark:text-darkHeading text-[22px]">Test duration</h4>
            </div>
            <div className="w-full mt-2">
                {durationMinutes == 1 && <p className="text-mainDark dark:text-darkText1 text-[17px]">{durationMinutes} minute</p>}
                {durationMinutes != 1 && <p className="text-mainDark dark:text-darkText1 text-[17px]">{durationMinutes} minutes</p>}
            </div>
        </section>
    )
}