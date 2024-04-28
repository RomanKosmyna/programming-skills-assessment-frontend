import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";
import TestByCategory from "./TestByCategory";

import { useTestsByCategory } from "../api/getTestsByCategory";
import HoverWindow from "../../../components/Elements/Windows/HoverWindow";
import ListLayout from "../../../components/Layout/ListLayout";
import { TestByCategoryType } from "../types";

export default function TestsByCategoryList() {
    const { testCategoryId } = useParams();
    const [hoveredItemId, setHoveredItemId] = useState(null);

    if (testCategoryId == undefined) {
        return;
    }

    const { isPending, isError, data, error } = useTestsByCategory(testCategoryId);

    const handleMouseEnter = (itemId: any) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data.length) return <div><h4>No tests by category found</h4></div>

    const testByCategory = (testCategoryId: string) => {
        if (testCategoryId == "3fa85f64-5717-4562-b3fc-2c963f66afc2")
            {
                return ".NET/C# Tests"
            }
    };
    
    const headingName = testByCategory(testCategoryId);

    return (
        <>
            <HoverWindow hoveredItemId={hoveredItemId} />
            <ListLayout>
                <Heading text={headingName} />
                <ul className={`w-full mt-10 flex flex-grow
                ${data.length < 3 ? "gap-5 justify-start" : "justify-between"}`}>
                    {data.map((testByCategory: TestByCategoryType) => (
                        <TestByCategory key={testByCategory.testID} testByCategory={testByCategory}
                            isItemHovered={hoveredItemId == testByCategory.testID}
                            handleMouseEnter={() => handleMouseEnter(testByCategory.testID)}
                            handleMouseLeave={handleMouseLeave}
                        />
                    ))}
                </ul>
            </ListLayout>
        </>
    )
}