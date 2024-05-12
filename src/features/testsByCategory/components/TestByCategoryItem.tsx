import { Link } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";
import SkillTag from "../../../components/general/SkillTag";

import { TestByCategoryProps } from "../types";

export default function TestByCategoryItem(
    { testByCategory, handleMouseEnter, handleMouseLeave, isItemHovered }: TestByCategoryProps
) {
    const { testID, testName, testedSkills, durationMinutes } = testByCategory;

    return (
        <li
            className={`w-full tablet:basis-1/2 desktop:w-[350px] bg-white shadow-lg border border-[#eaeaea] 
            rounded-lg select-none ${isItemHovered ? "z-50 relative" : ""}`}
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
                <div className="mt-5">
                    <p className="font-medium">Tested skills</p>
                    <ul className="flex flex-wrap gap-2 mt-1">
                        {testedSkills.map((skill: string, index: number) => <SkillTag key={index} text={skill} />)}
                    </ul>
                </div>
            </Link>
        </li>
    )
}