import ListLayout from "src/components/Layout/ListLayout";
import { useTestCategories } from "../api/getTestCategories"
import { TestCategoryType } from "../types";
import TestCategory from "./TestCategory";

type Props = {
    handleMouseEnter: (itemId: number) => void;
    handleMouseLeave: () => void;
    hoveredItemId: number | null;
};

export default function TestCategoriesList(
    { handleMouseEnter, handleMouseLeave, hoveredItemId }: Props
) {
    const { isPending, isError, data, error } = useTestCategories();

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data?.length) return <div><h4>No test categories found</h4></div>

    return (
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
    )
}