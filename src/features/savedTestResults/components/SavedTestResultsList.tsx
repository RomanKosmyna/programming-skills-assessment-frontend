/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAllUserTestResults } from "../api/getAllUserTestResults";
import SavedTestResultItem from "./SavedTestResultItem";
import { UserTestResultType } from "../type";
import HoverWindow from "../../../components/Elements/Windows/HoverWindow";

export default function SavedTestResultsList() {
    const token = localStorage.getItem("token")!;
    const { username } = useParams();
    const [hoveredItemId, setHoveredItemId] = useState(null);

    if (!username) return null;

    const { isPending, isError, data, error } = useAllUserTestResults(token, username);

    const handleMouseEnter = (itemId: any) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data?.length) return <div><h4>No test results have been saved yet.</h4></div>

    return (
        <>
            <HoverWindow hoveredItemId={hoveredItemId} />
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
        </>
    )
}