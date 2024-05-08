import { useState } from "react";
import { useTestCategories } from "../api/getTestCategories"
import Heading from "../../../components/Heading/Heading";
import { TestCategoryType } from "../types";
import TestCategory from "./TestCategory";
import ListLayout from "../../../components/Layout/ListLayout";
import HoverWindow from "../../../components/Elements/Windows/HoverWindow";
import GeneralLayout from "../../../components/Layout/GeneralLayout";

export default function TestCategoriesList() {
    const { isPending, isError, data, error } = useTestCategories();
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (itemId: any) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data?.length) return <div><h4>No test categories found</h4></div>

    return (
        <GeneralLayout>
            <HoverWindow hoveredItemId={hoveredItemId} />
            <div className="p-4">
                <Heading text="Test Categories" />
                <ListLayout>
                    <ul className={`w-full mt-10 flex flex-wrap gap-5
                ${data.length < 3 ? "justify-start" : "justify-between"}`}>
                        {data
                            .slice()
                            .sort((a, b) => a.testCategoryName.localeCompare(b.testCategoryName))
                            .map((testCategory: TestCategoryType) => (
                                <TestCategory key={testCategory.testCategoryID} testCategory={testCategory}
                                    isItemHovered={hoveredItemId == testCategory.testCategoryID}
                                    handleMouseEnter={() => handleMouseEnter(testCategory.testCategoryID)}
                                    handleMouseLeave={handleMouseLeave}
                                />
                            ))}
                    </ul>
                </ListLayout>
            </div>
        </GeneralLayout>
    )
}