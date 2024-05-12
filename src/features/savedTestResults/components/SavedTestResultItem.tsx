import { Link } from "react-router-dom";
import { UserTestResultType } from "../type";
import Heading from "../../../components/Heading/Heading";

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
            className={`w-[350px] max-h-[350px] bg-white shadow-lg border border-[#eaeaea] 
            rounded-lg select-none ${isItemHovered ? "z-50 relative" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/my-test-results/result/${userTestResultID}`} className="flex w-full min-h-full flex-col flex-grow p-6">
                <Heading text={testName} />
                <div className="flex flex-col mt-4">
                    <span className="font-bold">Completion Date</span>
                    <span className="font-medium">Hour: {completionHour}</span>
                    <span className="font-medium">Date: {completionDate}</span>
                </div>
            </Link>
        </li>
    )
}