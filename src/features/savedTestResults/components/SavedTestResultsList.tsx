import { useAllUserTestResults } from "../api/getAllUserTestResults";
import SavedTestResultItem from "./SavedTestResultItem";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";

import { UserTestResultType } from "../types";

type Props = {
    handleMouseEnter: (itemId: string) => void;
    handleMouseLeave: () => void;
    hoveredItemId: string | null;
    token: string;
    username: string | undefined;
};

export default function SavedTestResultsList(
    { handleMouseEnter, handleMouseLeave, hoveredItemId, token, username }: Props
) {
    const { isPending, isError, data, error } = useAllUserTestResults(token, username);

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (!data?.length) return <EmptyRequestData message="No test results have been saved yet." />

    return (
        <ul className={`w-full mt-10 flex flex-wrap gap-5
                ${data.length < 3 ? "justify-start" : "justify-between"}`} >
                {data.map((testResult: UserTestResultType, index: number) => (
                    <SavedTestResultItem
                        key={index}
                        testResult={testResult}
                        isItemHovered={hoveredItemId == testResult.userTestResultID}
                        handleMouseEnter={() => handleMouseEnter(testResult.userTestResultID)}
                        handleMouseLeave={handleMouseLeave}
                    />
                ))}
            </ul>
    )
}