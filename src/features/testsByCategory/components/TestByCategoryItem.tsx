import { Link } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";
import SkillTagList from "@components/General/SkillTagList";

import { TestByCategoryProps } from "../types";
import TestDuration from "@components/General/TestDuration";

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
                <TestDuration durationMinutes={durationMinutes} />
                <div className="mt-5">
                    <p className="font-medium">Tested skills</p>
                    <SkillTagList testedSkills={testedSkills} />
                </div>
            </Link>
        </li>
    )
}