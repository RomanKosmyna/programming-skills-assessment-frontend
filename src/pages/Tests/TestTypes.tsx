import { useEffect, useState } from "react";
import TestTypeItem from "../../components/tests/TestTypeItem";
import SeparationLine from "../../components/general/SeparationLine";

export default function TestTypes() {
    const path = "https://localhost:7186/api/TestType/GetAll";
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
            const res = await fetch(path);
            const data = await res.json();

            setTestTypes(data);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={`fixed left-0 top-0 w-full h-full bg-black opacity-${hoveredItemId ? "20" : "0"} 
            z-40 transition-opacity duration-500 ${hoveredItemId ? "block" : "hidden"}`}></div>
            <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col">
                <div className="w-full pt-3">
                    <h2 className="font-bold text-[36px]">Tests</h2>
                    <SeparationLine />
                </div>
                <div className="w-full mt-10 flex flex-grow justify-between">
                    {testTypes?.map((testType: any) => (
                        <TestTypeItem key={testType.testTypeID} testType={testType}
                            isItemHovered={hoveredItemId == testType.testTypeID}
                            handleMouseEnter={() => handleMouseEnter(testType.testTypeID)} handleMouseLeave={handleMouseLeave} />
                    ))}
                </div>
            </div>
        </>
    )
}