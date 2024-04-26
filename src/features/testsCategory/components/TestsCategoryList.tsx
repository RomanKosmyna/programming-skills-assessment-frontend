import { useState } from "react";
import { useTestCategories } from "../api/getTestCategories"
import Heading from "../../../components/Heading/Heading";
import { TestCategoryType } from "../types";
import TestCategory from "./TestCategory";
import ListLayout from "../../../components/Layout/ListLayout";
import HoverWindow from "../../../components/Elements/Windows/HoverWindow";

export default function TestCategoriesList() {
    const { isPending, isError, data } = useTestCategories();
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (itemId: any) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

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
            <HoverWindow hoveredItemId={hoveredItemId} />
            <ListLayout>
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
            </ListLayout>
        </>
    )
}