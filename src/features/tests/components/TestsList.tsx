import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import TestItem from "./TestItem";
import { getTestsByTestTypeId } from "../api/getTests";
import Heading from "../../../components/Heading/Heading";

export default function TestsList() {
    const [tests, setTests] = useState([]);
    const { testTypeId } = useParams<{ testTypeId: string | undefined }>();

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
        <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col">
            <Heading text="Tests" />
            <ul className={`w-full mt-10 flex flex-grow 
            ${tests.length < 3 ? "justify-start gap-7" : "justify-between"}`}>
                {tests?.map((test: any) => (
                    <TestItem key={test.testId} test={test} />
                ))}
            </ul>
        </div>
    )
}