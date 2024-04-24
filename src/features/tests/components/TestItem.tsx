import { Link } from "react-router-dom";
import { TestItemProps } from "../types";
import Heading from "../../../components/Heading/Heading";
import SkillTag from "../../../components/general/SkillTag";

export default function TestItem(
    { test, handleMouseEnter, handleMouseLeave, isItemHovered }: TestItemProps
) {
    const { testID, testName, testedSkills, durationMinutes } = test;

    return (
        <li className={`w-[350px] h-[250px] bg-white shadow-lg border border-[#eaeaea] 
        rounded-lg select-none ${isItemHovered ? "z-50 relative" : ""}`}
            key={testID}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/test/${testID}`} className="flex w-full min-h-full flex-col flex-grow p-6">
                <Heading text={testName} />
                <div className="mt-4">
                    <span className="font-medium text-[17px]">Duration: </span>
                    {durationMinutes == 1 && <span className="font-medium">{durationMinutes} minute</span>}
                    {durationMinutes != 1 && <span className="font-medium">{durationMinutes} minutes</span>}
                </div>
                <div className="mt-auto">
                    <p className="font-medium">Tested skills</p>
                    <ul className="flex gap-2 mt-1">
                        {testedSkills.map((skill: string, index: number) => <SkillTag key={index} text={skill} />)}
                    </ul>
                </div>
            </Link>
        </li>
    )
}