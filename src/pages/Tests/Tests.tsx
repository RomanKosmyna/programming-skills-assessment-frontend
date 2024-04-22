import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import TestItem from "../../components/tests/TestItem";

export default function Tests() {
    const [tests, setTests] = useState([]);
    const { testTypeId } = useParams();
    const path = `https://localhost:7186/api/TestType/GetTestsByTestTypeId/${testTypeId}`;

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(path);
            const data = await res.json();

            setTests(data);
        };

        fetchData();
    }, []);

    return (
        <>
            {tests?.map((test: any) => (
                <TestItem key={test.testId} test={test} />
            ))}
        </>
    )
}