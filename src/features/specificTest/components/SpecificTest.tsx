import { Link, useParams } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";

import { useSpecificTest } from "../api/getSpecificTest";
import TestedSkills from "./TestedSkills";
import TestDuration from "./TestDuration";
import TestDescription from "./TestDescription";
import GeneralLayout from "../../../components/Layout/GeneralLayout";

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
        if (data.testTypeID == "3fa85f64-5717-4562-b3fc-2c963f66afc2") {
            return ".NET/C#"
        }
    };

    const headingName = testByCategory();

    return (
        <GeneralLayout>
            <Heading text={headingName} />
            <div className="mt-8">
                <h3 className="font-bold text-[40px]">{data.testName}</h3>
                <div className="flex mt-8 gap-20">
                    <TestDescription description={data.description} />
                    <TestedSkills testedSkills={data.testedSkills} />
                    <TestDuration durationMinutes={data.durationMinutes} />
                </div>
                <div className="mt-8">
                    <Link
                        to={`/test/active/${data.testID}`}
                        className="mr-auto bg-lime-500 px-7 py-2 font-medium text-white rounded-md"
                    >
                        Start
                    </Link>
                </div>
            </div>
        </GeneralLayout>
    )
}