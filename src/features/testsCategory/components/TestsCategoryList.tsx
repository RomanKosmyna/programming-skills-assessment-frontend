import { useState } from "react";
import { useTestCategories } from "../api/getTestCategories"
import Heading from "../../../components/Heading/Heading";
import { TestCategoryType } from "../types";
import TestCategory from "./TestCategory";

export default function TestCategoriesList() {
    const { isPending, isError, data } = useTestCategories();
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (itemId: any) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };
console.log(data);

    if (isPending) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                Error!
            </div>
        )
    }

    if (!data?.length)
        return (
            <div>
                <h4>No test categories found</h4>
            </div>
        );

    return (
        <>
            <div className={`fixed left-0 top-0 w-full h-full bg-black/[.3]
            z-40 transition-opacity duration-500 ${hoveredItemId ? "block" : "hidden"}`}></div>
            <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col">
                <Heading text="Type of tests" />
                <ul className={`w-full mt-10 flex flex-grow
                ${data.length < 3 ? "justify-start" : "justify-between"}`}>
                    {data.map((testCategory: TestCategoryType) => (
                        <TestCategory key={testCategory.testTypeID} testCategory={testCategory}
                            isItemHovered={hoveredItemId == testCategory.testTypeID}
                            handleMouseEnter={() => handleMouseEnter(testCategory.testTypeID)}
                            handleMouseLeave={handleMouseLeave}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}