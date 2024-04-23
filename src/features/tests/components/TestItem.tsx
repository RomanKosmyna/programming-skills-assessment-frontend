import { Link } from "react-router-dom";
import { TestItemProps } from "../types";
import Heading from "../../../components/Heading/Heading";

export default function TestItem(
    { test, handleMouseEnter, handleMouseLeave, isItemHovered }: TestItemProps
) {
    const { testID, testName, durationMinutes } = test;

    return (
        <li
            className={`w-[350px] h-[250px] bg-white shadow-lg border border-[#eaeaea] 
        rounded-lg select-none ${isItemHovered ? "z-50 relative" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/test/${testID}`} className="flex w-full min-h-full flex-col flex-grow p-6">
                <Heading text={testName} />
                <div className="mt-2">
                    <p className="font-medium">Tested skills:</p>
                </div>
                <div className="mt-auto">
                    <span className="font-medium text-[17px]">Duration: </span>
                    {durationMinutes == 1 && <span className="font-medium">{durationMinutes} minute</span>}
                    {durationMinutes != 1 && <span className="font-medium">{durationMinutes} minutes</span>}
                </div>
            </Link>
        </li>
    )
}