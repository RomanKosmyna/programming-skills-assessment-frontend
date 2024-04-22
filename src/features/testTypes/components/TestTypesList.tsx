import { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";
import TestTypeItem from "../../../components/testTypes/TestTypeItem";

import { getTestTypes } from "../api/getTestTypes";

export default function TestTypeList() {
    const [testTypes, setTestTypes] = useState([]);
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (itemId: any) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTestTypes();

            setTestTypes(data);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={`fixed left-0 top-0 w-full h-full bg-black/[.3]
            z-40 transition-opacity duration-500 ${hoveredItemId ? "block" : "hidden"}`}></div>
            <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col">
                <Heading text="Tests" />
                <ul className="w-full mt-10 flex flex-grow justify-between">
                    {testTypes?.map((testType: any) => (
                        <TestTypeItem key={testType.testTypeID} testType={testType}
                            isItemHovered={hoveredItemId == testType.testTypeID}
                            handleMouseEnter={() => handleMouseEnter(testType.testTypeID)}
                            handleMouseLeave={handleMouseLeave}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}