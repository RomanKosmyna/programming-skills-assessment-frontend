import TestByCategoryItem from "./TestByCategoryItem";
import ListLayout from "../../../components/Layout/ListLayout";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";

import { TestByCategoryType } from "../types";

import { useTestsByCategory } from "../api/getTestsByCategory";

type Props = {
    handleMouseEnter: (itemId: string) => void;
    handleMouseLeave: () => void;
    hoveredItemId: string | null;
    testCategoryId: string | undefined;
};

export default function TestsByCategoryList(
    { handleMouseEnter, handleMouseLeave, hoveredItemId, testCategoryId }: Props
) {
    const { isPending, isError, data, error } = useTestsByCategory(testCategoryId);

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (!data?.length) return <EmptyRequestData message="No tests with such category has been found" />

    return (
        <ListLayout>
            <ul className={`w-full mt-10 grid gap-4 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3
                ${data.length < 3 ? "justify-start" : "justify-between"}`}>
                {data.map((testByCategory: TestByCategoryType) => (
                    <TestByCategoryItem
                        key={testByCategory.testID}
                        testByCategory={testByCategory}
                        isItemHovered={hoveredItemId == testByCategory.testID}
                        handleMouseEnter={() => handleMouseEnter(testByCategory.testID)}
                        handleMouseLeave={handleMouseLeave}
                    />
                ))}
            </ul>
        </ListLayout>
    )
}