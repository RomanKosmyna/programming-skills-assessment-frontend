import SeparationLine from "@components/General/SeparationLine";
import TestDurationTimer from "../TestDurationTimer";

import { useAppSelector } from "src/hooks";

export default function ActiveTestHeadingWithTimer() {
    const { testID, testName, initialDurationTime } = useAppSelector(state => state.activeTestTimer);
    if (initialDurationTime === undefined) return null;
    
    return (
        <div className="flex flex-col mt-3">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-mainDark dark:text-darkHeading text-[36px]">{testName}</h2>
                <TestDurationTimer
                    testID={testID}
                    initialDurationTime={initialDurationTime}
                />
            </div>
            <SeparationLine marginTop="2" />
        </div>
    )
}