import { Dispatch, SetStateAction } from "react";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";
import SpecificTestInformationPanel from "./SpecificTestInformationPanel";

import { useSpecificTest } from "../api/getSpecificTest";
import SpecificTestStartButton from "./SpecificTestStartButton";

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
        <div className="w-full mt-4 p-7 flex-grow">
            <h3 className="font-bold text-[40px]">{testName}</h3>
            <SpecificTestInformationPanel
                description={description}
                testedSkills={testedSkills}
                durationMinutes={durationMinutes}
            />
            <SpecificTestStartButton testID={testID} />
        </div>
    )
}