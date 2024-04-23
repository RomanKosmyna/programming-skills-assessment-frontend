import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";
import TestItem from "./TestItem";

import { getTestsByTestTypeId } from "../api/getTests";
import { Test } from "../types";

export default function TestsList() {
    const [tests, setTests] = useState([]);

    const { testTypeId } = useParams<{ testTypeId: string | undefined }>();
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (itemId: any) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (testTypeId) {
                const data = await getTestsByTestTypeId(testTypeId);

                setTests(data);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={`fixed left-0 top-0 w-full h-full bg-black/[.3]
            z-40 transition-opacity duration-500 ${hoveredItemId ? "block" : "hidden"}`}></div>
            <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col">
                <Heading text="Tests" />
                <ul className={`w-full mt-10 flex flex-grow
            ${tests.length < 3 ? "justify-start gap-7" : "justify-between"}`}>
                    {tests?.map((test: Test) => (
                        <TestItem key={test.testID} test={test}
                            isItemHovered={hoveredItemId == test.testID}
                            handleMouseEnter={() => handleMouseEnter(test.testID)}
                            handleMouseLeave={handleMouseLeave}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}