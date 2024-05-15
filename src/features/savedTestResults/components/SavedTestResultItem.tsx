import { Link } from "react-router-dom";
import Heading from "@components/Heading/Heading";

import { UserTestResultType } from "../types";

type Props = {
    testResult: UserTestResultType;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    isItemHovered: boolean;
};

export default function SavedTestResultItem(
    { testResult, handleMouseEnter, handleMouseLeave, isItemHovered }: Props
) {
    const { userTestResultID, testName, completionHour, completionDate } = testResult;

    return (
        <li
            className={`max-h-[350px] bg-mainWhite dark:bg-darkAccent1 shadow-lg border
            dark:shadow-none dark:border dark:border-darkBorder border-[#eaeaea] 
            rounded-lg select-none ${isItemHovered ? "z-50 relative" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/my-test-results/result/${userTestResultID}`} className="flex w-full min-h-full flex-col flex-grow p-6">
                <Heading text={testName} />
                <div className="flex flex-col mt-4">
                    <span className="font-bold text-mainDark dark:text-darkHeading">Completion Date</span>
                    <span className="font-medium text-mainDark dark:text-darkText1">Hour: {completionHour}</span>
                    <span className="font-medium text-mainDark dark:text-darkText1">Date: {completionDate}</span>
                </div>
            </Link>
        </li>
    )
}