import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getTestById } from "../api/getTest";

export default function Test() {
    const [test, setTest] = useState({});
    const { testId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            if (testId) {
                const data = await getTestById(testId);

                setTest(data);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col">
            {JSON.stringify(test)}
        </div>
    )
}