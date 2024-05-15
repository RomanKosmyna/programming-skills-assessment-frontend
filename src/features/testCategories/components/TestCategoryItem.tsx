import { Link } from "react-router-dom";
import SeparationLine from "@components/General/SeparationLine";
import { getTestCategoryImage } from "src/util/getTestCategoryImage";

import { TestCategoryProps } from "../types";

export default function TestCategoryItem(
    { testCategory, handleMouseEnter, handleMouseLeave, isItemHovered }: TestCategoryProps
) {
    const { testCategoryID, testCategoryName } = testCategory;

    const categoryImage = getTestCategoryImage(testCategoryID);

    return (
        <li
            className={`w-full h-[250px] tablet:basis-1/2 desktop:w-[350px] 
            bg-mainWhite dark:bg-darkAccent1 shadow-lg border border-[#eaeaea]
            dark:border-darkBorder hover:dark:border-mainWhite
            rounded-lg select-none ${isItemHovered ? "z-50 relative" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                to={`/test-categories/${testCategoryID}`}
                className="flex w-full h-[250px] flex-col flex-grow p-6">
                <h3 className="font-bold text-mainDark dark:text-darkHeading text-[45px] ml-5">{testCategoryName}</h3>
                <SeparationLine />
                <div className="w-full">
                    <img
                        src={categoryImage}
                        alt={`Logo of a programming language ${testCategoryName}`}
                        className="ml-5 h-[110px]"
                    />
                </div>
            </Link>
        </li>
    )
}