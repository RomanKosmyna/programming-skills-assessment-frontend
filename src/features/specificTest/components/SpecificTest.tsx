import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";
import TestedSkills from "./SpecificTestTestedSkills";
import TestDuration from "./SpecificTestDuration";
import SpecificTestDescription from "./SpecificTestDescription";

import { useSpecificTest } from "../api/getSpecificTest";
import SpecificTestInformationPanel from "./SpecificTestInformationPanel";

type Props = {
    setTestCategoryId: Dispatch<SetStateAction<string>>;
    specificTestId: string | undefined;
};

export default function SpecificTest({ setTestCategoryId, specificTestId }: Props) {
    const { isPending, isError, data, error } = useSpecificTest(specificTestId);

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (data === undefined) return <EmptyRequestData message="Such test was not found" />

    const { testID, testCategoryID, testName, description, testedSkills, durationMinutes } = data;

    setTestCategoryId(testCategoryID);

    return (
        <div className="w-full mt-8 p-5 flex-grow">
            <h3 className="font-bold text-[40px]">{testName}</h3>
            <SpecificTestInformationPanel
                description={description}
                testedSkills={testedSkills}
                durationMinutes={durationMinutes}
            />
            <div className="mt-8">
                <Link
                    to={`/test/active/${testID}`}
                    className="mr-auto bg-[#41B06E] px-7 py-2 font-medium text-white rounded-md"
                >
                    Start
                </Link>
            </div>
        </div>
    )
}