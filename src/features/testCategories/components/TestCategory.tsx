import { Link } from "react-router-dom";
import SeparationLine from "../../../components/general/SeparationLine";
import { TestCategoryProps } from "../types";

export default function TestCategory(
    { testCategory, handleMouseEnter, handleMouseLeave, isItemHovered }: TestCategoryProps
) {
    const { testCategoryID, testCategoryName } = testCategory;

    return (
        <li
            className={`w-[350px] h-[250px] bg-white shadow-lg border border-[#eaeaea] 
            rounded-lg select-none ${isItemHovered ? "z-50 relative" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/test-categories/${testCategoryID}`} className="block w-full h-[250px] flex-grow p-6">
                <h3 className="font-bold text-black text-[45px] ml-5">{testCategoryName}</h3>
                <SeparationLine />
            </Link>
        </li>
    )
}