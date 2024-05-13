import { useEffect } from "react";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";
import { setInitialTimerData } from "../../slices/activeTestTimerSlice";
import TestNavigationPanel from "../TestNavigationPanel";
import TestResult from "../TestResult/TestResult";
import InformationDisplay from "./InformationDisplay";

import { useActiveTest } from "../../api/getActiveTest";

import { useAppDispatch, useAppSelector } from "src/hooks";

type Props = {
    activeTestId: string | undefined;
};

export default function ActiveTestInformation({ activeTestId }: Props) {
    const { isPending, isError, data, error } = useActiveTest(activeTestId);
    const { isTestFinished } = useAppSelector(state => state.testResult);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data !== undefined) {
            dispatch(setInitialTimerData({
                testID: data.testID,
                testName: data.testName,
                durationMinutes: data.durationMinutes
            }));
        }
    }, [data, dispatch]);

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (data === undefined) return <EmptyRequestData message="No test was found" />

    const { testID, questions } = data;
    const numberOfQuestions = questions.length;

    return (
        <div>
            {isTestFinished ? (
                <TestResult />
            ) : (
                <>
                    <InformationDisplay questions={questions} />
                    <TestNavigationPanel
                        testID={testID}
                        numberOfQuestions={numberOfQuestions}
                    />
                </>
            )}
        </div>
    )
}