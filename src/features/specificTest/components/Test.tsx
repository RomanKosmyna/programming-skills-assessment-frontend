import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getTestById } from "../api/getTest";
import Heading from "../../../components/Heading/Heading";
import { ITest } from "../../../interfaces";
import SkillTag from "../../../components/general/SkillTag";

export default function Test() {
    const [test, setTest] = useState<ITest | undefined>(undefined);
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
            <Heading text=".NET/C#" />
            {test != undefined && (
                <>
                    <h2>{test.testName}</h2>
                    <div className="flex mt-6 gap-20">
                        <div>
                            <h3>Description:</h3>
                            <p>SDFSFS</p>
                        </div>
                        <div>
                            <h3>Tested skills</h3>
                            <ul className="flex gap-2">
                                {test.testedSkills.map(
                                    (skill: string, index: number) => <SkillTag key={index} text={skill} />)
                                }
                            </ul>
                        </div>
                        <div>
                            <p>Test duration</p>
                            {test.durationMinutes == 1 && <p>{test.durationMinutes} minute</p>}
                            {test.durationMinutes != 1 && <p>{test.durationMinutes} minutes</p>}
                        </div>
                    </div>
                    <button className="mr-auto bg-lime-500 px-7 py-2 font-medium text-white rounded-md">Start</button>
                </>
            )}
        </div>
    )
}