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
    const { testName } = testResult;

    return (
        <li
            className={`w-[350px] max-h-[350px] bg-white shadow-lg border border-[#eaeaea] 
            rounded-lg select-none ${isItemHovered ? "z-50 relative" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/test-result/`} className="flex w-full min-h-full flex-col flex-grow p-6">
                <Heading text={testName} />
                <div className="mt-4">
                    {/* <span className="font-medium text-[17px]">Duration: </span>
                    {durationMinutes == 1 && <span className="font-medium">{durationMinutes} minute</span>}
                    {durationMinutes != 1 && <span className="font-medium">{durationMinutes} minutes</span>} */}
                </div>
            </Link>
        </li>
    )
}