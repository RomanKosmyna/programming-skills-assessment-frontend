import { useState } from "react";
import { useTestCategories } from "../api/getTestCategories"
import Heading from "../../../components/Heading/Heading";
import { TestCategoryType } from "../types";
import TestCategory from "./TestCategory";
import ListLayout from "../../../components/Layout/ListLayout";
import HoverWindow from "../../../components/Elements/Windows/HoverWindow";

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
        <main className="max-w-[1250px] min-h-[calc(100vh-64px)] pt-[64px] flex flex-col">
            <HoverWindow hoveredItemId={hoveredItemId} />
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
        </main>
    )
}