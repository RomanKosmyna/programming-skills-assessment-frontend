import ListLayout from "@components/Layout/ListLayout";
import TestCategory from "./TestCategory";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";

import { TestCategoryType } from "../types";

import { useTestCategories } from "../api/getTestCategories"

type Props = {
    handleMouseEnter: (itemId: string) => void;
    handleMouseLeave: () => void;
    hoveredItemId: string | null;
};

export default function TestCategoriesList(
    { handleMouseEnter, handleMouseLeave, hoveredItemId }: Props
) {
    const { isPending, isError, data, error } = useTestCategories();

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (!data?.length) return <EmptyRequestData message="No test categories has been found" />

    return (
        <ListLayout>
            <ul className={`w-full mt-10 grid gap-4 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3
                ${data.length < 3 ? "justify-start" : "justify-between"}`}>
                {data
                    .slice()
                    .sort((a, b) => a.testCategoryName.localeCompare(b.testCategoryName))
                    .map((testCategory: TestCategoryType) => (
                        <TestCategory
                            key={testCategory.testCategoryID}
                            testCategory={testCategory}
                            isItemHovered={hoveredItemId == testCategory.testCategoryID}
                            handleMouseEnter={() => handleMouseEnter(testCategory.testCategoryID)}
                            handleMouseLeave={handleMouseLeave}
                        />
                    ))}
            </ul>
        </ListLayout>
    )
}