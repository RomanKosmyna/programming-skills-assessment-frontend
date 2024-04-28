import { Link, useParams } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";
import SkillTag from "../../../components/general/SkillTag";

import { useSpecificTest } from "../api/getSpecificTest";

export default function SpecificTest() {
    const { specificTestId } = useParams();

    if (specificTestId == undefined) {
        return;
    }

    const { isPending, isError, data, error } = useSpecificTest(specificTestId);

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data) return <div><h4>No test was found</h4></div>

    const testByCategory = () => {
        if (data.testTypeID == "3fa85f64-5717-4562-b3fc-2c963f66afc2")
            {
                return ".NET/C#"
            }
    };
    
    const headingName = testByCategory();

    return (
        <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col">
            <Heading text={headingName} />
            {data != undefined && (
                <>
                    <h2>{data.testName}</h2>
                    <div className="flex mt-6 gap-20">
                        <div>
                            <h3>Description:</h3>
                            <p>SDFSFS</p>
                        </div>
                        <div>
                            <h3>Tested skills</h3>
                            <ul className="flex gap-2">
                                {data.testedSkills.map(
                                    (skill: string, index: number) => <SkillTag key={index} text={skill} />)
                                }
                            </ul>
                        </div>
                        <div>
                            <p>Test duration</p>
                            {data.durationMinutes == 1 && <p>{data.durationMinutes} minute</p>}
                            {data.durationMinutes != 1 && <p>{data.durationMinutes} minutes</p>}
                        </div>
                    </div>
                    <Link
                        to={`/test/testing/${data.testID}`}
                        className="mr-auto bg-lime-500 px-7 py-2 font-medium text-white rounded-md"
                    >
                        Start
                    </Link>
                </>
            )}
        </div>
    )
}