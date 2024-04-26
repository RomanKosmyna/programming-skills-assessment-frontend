import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { getTestWithRelatedData } from "../api/getTestWithRelatedData";
import Heading from "../../../components/Heading/Heading";
import { ITest } from "../../../interfaces";
import SkillTag from "../../../components/general/SkillTag";
import { useAppDispatch } from "../../../hooks";
import { setData } from "../../counter/testDataSlice";

export default function Test() {
    const [test, setTest] = useState<ITest | undefined>(undefined);
    const { testId } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            if (testId) {
                const data = await getTestWithRelatedData(testId);

                setTest(data);
                dispatch(setData(data));
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
                    <Link
                        to={`/test/testing/${test.testID}`}
                        className="mr-auto bg-lime-500 px-7 py-2 font-medium text-white rounded-md"
                    >
                        Start
                    </Link>
                </>
            )}
        </div>
    )
}