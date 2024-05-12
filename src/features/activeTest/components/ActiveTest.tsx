/* eslint-disable react-hooks/rules-of-hooks */
import { useBlocker, useParams } from "react-router-dom";
import GeneralLayout from "../../../components/Layout/GeneralLayout";
import { useActiveTest } from "../api/getActiveTest";
import TestDurationTimer from "./TestDurationTimer";
import SeparationLine from "../../../components/General/SeparationLine";
import RenderTestInformation from "./RenderTestInformation";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setGeneralTestInformation } from "../slices/testResultSlice";
import { useState } from "react";

export default function ActiveTest() {
    const { activeTestId } = useParams();
    const { isTestFinished } = useAppSelector(state => state.testResult);
    const dispatch = useAppDispatch();

    if (activeTestId == undefined) return;
    // let [value, setValue] = useState(false);

    // let navBlocker = useBlocker(
    //     ({ currentLocation, nextLocation }) =>
    //         !value &&
    //         currentLocation.pathname !== nextLocation.pathname
    // );

    const { isPending, isError, data, error } = useActiveTest(activeTestId);

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data) return <div><h4>No test was found</h4></div>

    const { testID, testCategoryID, testName, questions, durationMinutes } = data;
    const numberOfQuestions = questions.length;

    if (isTestFinished) {
        dispatch(setGeneralTestInformation({ testCategoryID, testID, testName }));
        setValue(true);
    }

    return (
        <GeneralLayout>
            <div className={`w-full bg-gradient-to-br from-white to-gray-100 p-4 z-30 ${isTestFinished && "rounded-lg"}`}>
                <div className="flex flex-col mt-3">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-[36px]">{testName}</h2>
                        <TestDurationTimer testID={testID} durationMinutes={durationMinutes} />
                    </div>
                    <SeparationLine />
                </div>
                <RenderTestInformation
                    questions={questions}
                    testID={testID}
                    numberOfQuestions={numberOfQuestions}
                />
            </div>
            {isTestFinished &&
                <div className="w-full min-h-screen absolute top-0 left-0 bg-black/50 z-20"></div>
            }
            {/* {
                navBlocker.state === "blocked" ? (
                    <div>
                        <p>If you leave now, you will have to restart a test.</p>
                        <p>Are you sure you want to proceed?</p>
                        <button onClick={() => navBlocker.proceed()}>
                            Proceed
                        </button>
                        <button onClick={() => navBlocker.reset()}>
                            Cancel
                        </button>
                    </div>
                ) : null
            } */}
        </GeneralLayout>
    )
}